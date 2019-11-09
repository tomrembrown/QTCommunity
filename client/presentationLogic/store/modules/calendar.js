'use strict'
/*
 * This is the part of the store that handles the calendar - such as storing
 * the current month
 */

import axios from 'axios'
import moment from 'moment-timezone'
import { statement } from '@babel/template'
moment.tz.setDefault('UTC')
process.env.TZ = 'UTC'

const state = {
  currentYear: moment().year(),
  currentMonth: moment().month() + 1,
  days: [],
  allEvents: [],
  fiteredEvents: [],
  organizationTypeChosen: 'all',
  isWheelchairAccessible: 'not',
  genderIdentityChosen: 'any',
  sexualOrientationChosen: 'any',
  isFamilyFriendly: false,
  ageAllowed: '',
  raceReligionTargetted: '',
  searchTerm: ''
}

const mutations = {
  setCurrentMonth(state, payload) {
    state.currentMonth = payload
  },
  setCurrentYear(state, payload) {
    state.currentYear = payload
  },
  setCalendarStartDate(state, payload) {
    state.calendarStartDate = payload
  },
  setCalendarEndDate(state, payload) {
    state.calendarEndDate = payload
  },
  setEvents(state, payload) {
    state.allEvents = payload
    // Convert date string to moment
    state.allEvents.forEach(event => {
      event.start_time = moment(event.start_time)
      event.end_time = moment(event.end_time)
    })
    state.filteredEvents = state.allEvents
  },
  calculateDays(state) {
    // Generating all days in current month
    let days = []
    let currentDay = moment(
      `${state.currentYear}-${state.currentMonth}-1`,
      'YYYY-M-D'
    )

    do {
      days.push(currentDay)
      currentDay = moment(currentDay).add(1, 'days')
    } while (currentDay.month() + 1 === state.currentMonth)

    // Add previous days to start
    currentDay = moment(days[0])

    const SUNDAY = 0
    const MONDAY = 1

    if (currentDay.day() !== MONDAY) {
      do {
        currentDay = moment(currentDay).subtract(1, 'days')
        days.unshift(currentDay)
      } while (currentDay.day() !== MONDAY)
    }

    // Add following days to end
    currentDay = moment(days[days.length - 1])

    if (currentDay.day() !== SUNDAY) {
      do {
        currentDay = moment(currentDay).add(1, 'days')
        days.push(currentDay)
      } while (currentDay.day() !== SUNDAY)
    }

    state.days = days
  },
  changeEventFilter(state, $event) {
    state[$event.element] = $event.value
    if (state.allEvents == null) state.filteredEvents = null
    else
      state.filteredEvents = state.allEvents
      .filter(event => {
        if (state.organizationTypeChosen === 'all') return true
        else
          return (
            event.organization_type_id == state.organizationTypeChosen
          )
      })
      .filter(event => {
        if (state.isWheelchairAccessible === 'not') return true
        else if (
          event.wheelchair_accessible === 'Fully Wheelchair Accessible'
        )
          return true
        else if (
          event.wheelchair_accessible ===
            'Partially Wheelchair Accessible' &&
          state.isWheelchairAccessible === 'some'
        )
          return true
        else return false
      })
      .filter(event => {
        if (state.genderIdentityChosen === 'any') return true
        else if (event['gender_' + state.genderIdentityChosen] == true)
          return true
        else return false
      })
      .filter(event => {
        if (state.sexualOrientationChosen === 'any') return true
        else if (
          event['orientation_' + state.sexualOrientationChosen] == true
        )
          return true
        else return false
      })
      .filter(event => {
        if (!state.isFamilyFriendly) return true
        else if (event.family_friendly == true) return true
        else return false
      })
      .filter(event => {
        if (state.ageAllowed == '') return true
        else if (
          event.min_age != null &&
          state.ageAllowed < event.min_age
        )
          return false
        else if (
          event.max_age != null &&
          state.ageAllowed > event.max_age
        )
          return false
        else return true
      })
      .filter(event => {
        if (state.raceReligionTargetted == '') return true
        else if (
          event.race_religion != null &&
          event.race_religion.toLowerCase() ==
            state.raceReligionTargetted.toLowerCase()
        )
          return true
        else return false
      })
      .filter(event => {
        if (state.searchTerm == '') return true
        else if (
          event.long_title_english.toLowerCase().includes(state.searchTerm) ||
          event.short_title_english.toLowerCase().includes(state.searchTerm) ||
          event.mobile_title_english.toLowerCase().includes(state.searchTerm) ||
          event.description_english.toLowerCase().includes(state.searchTerm) ||
          event.organization_name.toLowerCase().includes(state.searchTerm)
        )
          return true
        else 
          return false
      })
  }
}

const getters = {
  getCurrentYear: state => state.currentYear,
  getCurrentMonth: state => state.currentMonth,
  getDays: state => state.days,
  getFilteredEvents: state => state.filteredEvents
}

const actions = {
  readEventsForCalendar: async ({ state, commit }) => {
    try {
      const calendarStartDate = state.days[0].format('YYYY-MM-DD')
      const calendarEndDate = state.days[state.days.length - 1].format(
        'YYYY-MM-DD'
      )
      const response = await axios.get(
        '/readRoutesServer/readEventsForCalendar/' +
          calendarStartDate +
          '/' +
          calendarEndDate
      )

      if (response.data.isError) throw new Error(response.data.message)

      // Set the tool tip
      for (let i in response.data) {
        let titleHtml =
          '<p align="left" style="font-size:12px">' +
          moment(response.data[i].start_time).format('h:mm a') +
          ' to ' +
          moment(response.data[i].end_time).format('h:mm a') +
          ' <br/> at ' +
          response.data[i].place_name
        if (response.data[i].need_registration) {
          titleHtml += '<br/><em><strong>Requires Registration</strong></em>'
        }
        titleHtml += '</p>'
        response.data[i].tool_tip_title = titleHtml
      }
      commit('setEvents', response.data)
    } catch (error) {
      console.log(
        `Error attempting to get events for calendar: ${error.message}`
      )
      alert(`Error attempting to get events for calendar: ${error.message}`)
    }
  },
  incrementMonth: ({ state, commit, dispatch }) => {
    if (state.currentMonth === 12) {
      commit('setCurrentMonth', 1)
      commit('setCurrentYear', state.currentYear + 1)
    } else {
      commit('setCurrentMonth', state.currentMonth + 1)
    }
    commit('calculateDays')
    dispatch('readEventsForCalendar')
  },
  decrementMonth: ({ state, commit, dispatch }) => {
    if (state.currentMonth === 1) {
      commit('setCurrentMonth', 12)
      commit('setCurrentYear', state.currentYear - 1)
    } else {
      commit('setCurrentMonth', state.currentMonth - 1)
    }
    commit('calculateDays')
    dispatch('readEventsForCalendar')
  },
  initialMonth: ({ commit, dispatch }) => {
    commit('calculateDays')
    dispatch('readEventsForCalendar')
  },
  setTimeZone: ({ state }) => {
    // Set time zone on the server - set in client at top of this page
    axios.patch('updateRoutesServer/setTimeZone')
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
