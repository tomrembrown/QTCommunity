'use strict'
/*
 * This is the part of the store that handles the calendar - such as storing
 * the current month
 */

import axios from 'axios'
import moment from 'moment-timezone'
moment.tz.setDefault('UTC')
process.env.TZ = 'UTC'

const state = {
  currentYear: moment().year(),
  currentMonth: moment().month() + 1,
  days: [],
  events: []
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
    state.events = payload
    // Convert date string to moment
    state.events.forEach(event => {
      event.start_time = moment(event.start_time)
      event.end_time = moment(event.end_time)
    })
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
  }
}

const getters = {
  getCurrentYear: state => state.currentYear,
  getCurrentMonth: state => state.currentMonth,
  getDays: state => state.days,
  getEvents: state => state.events
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

      for (let i in response.data) {
        let titleHtml = '<p align="left" style="font-size:12px">' +
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
