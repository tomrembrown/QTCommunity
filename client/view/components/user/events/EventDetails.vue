<template>
  <div class="container">
    <div class="sky-form form-sizing-reset">
      <header>
        <div class="row">
          <div class="col-md-12">{{ event.long_title_english }}</div>
        </div>
      </header>
      <fieldset>
        <div class="row">
          <div class="col-md-12">
            <pre class="description-text">{{ event.description_english }}</pre>
          </div>
        </div>
        <hr />
        <section>
          <div class="row">
            <div class="col-md-3 contact-heading">Hosted At</div>
            <div class="col-md-9 contact-address">{{ event.place_name }}</div>
          </div>
          <div class="row">
            <div class="col-md-3 contact-heading">Address</div>
            <div class="col-md-5 contact-address">{{ event.place_address }}</div>
            <div class="col-md-4">{{ event.wheelchair_accessible }}</div>
          </div>
          <div class="row">
            <div class="col-md-3 contact-heading">Room</div>
            <div class="col-md-9 contact-address">{{ event.place_room }}</div>
          </div>
        </section>
        <hr />
        <section>
          <div class="row">
            <div class="col-md-3 contact-heading">Type</div>
            <div class="col-md-5 contact-text">{{ event.category_name }}</div>
            <div class="col-md-4 contact-heading" v-if="isFamilyFriendly">Family Friendly</div>
          </div>
          <div class="row" v-if="isAgeLimits">
            <div class="col-md-3 contact-heading" v-if="isMinAge">Minimum Age</div>
            <div class="col-md-3 contact-text" v-if="isMinAge">{{minimumAge}}</div>
            <div class="col-md-3 contact-heading" v-if="isMaxAge">Maximum Age</div>
            <div class="col-md-3 contact-text" v-if="isMaxAge">{{maximumAge}}</div>
          </div>
          <div class="row">
            <div class="col-md-3 contact-heading">Gender Identities Welcome</div>
            <div class="col-md-9 contact-text">{{ genderIdentitiesWelcome }}</div>
          </div>
          <div class="row">
            <div class="col-md-3 contact-heading">Sexual Orientations Welcome</div>
            <div class="col-md-9 contact-text">{{ sexualOrientationsWelcome }}</div>
          </div>
          <div class="row" v-if="aimedAtRaceOrReligion">
            <div class="col-md-3 contact-heading">Aimed At</div>
            <div class="col-md-5 contact-text">{{ raceReligionText }}</div>
            <div class="col-md-4 contact-text" v-if="!onlyRaceReligion">Admirers and Allies Welcome</div>
          </div>
        </section>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    event() {
      return this.$store.getters.getEvents.find(
        event => event.id === this.$route.params.id
      )
    },
    isFamilyFriendly() {
      return this.event.family_friendly ? true : false
    },
    isMinAge() {
      return !(this.event.min_age == undefined)
    },
    isMaxAge() {
      return !(this.event.max_age == undefined)
    },
    minimumAge() {
      return this.isMinAge ? this.event.min_age.toString() : ''
    },
    maximumAge() {
      return this.isMaxAge ? this.event.max_age.toString() : ''
    },
    isAgeLimits() {
      return this.isMinAge || this.isMaxAge
    },
    genderIdentitiesWelcome() {
      const female = this.event.gender_female == true
      const male = this.event.gender_male == true
      const trans = this.event.gender_transgendered == true
      const twoSpirit = this.event.gender_two_spirit == true
      const m2f = this.event.gender_m2f_transexual == true
      const f2m = this.event.gender_f2m_transexual == true
      const intersex = this.event.gender_intersex == true

      if (female && male && trans && twoSpirit && m2f && f2m && intersex) {
        return 'ALL'
      } else {
        let returnString = ''
        let firstTime = true
        const booleanArray = [
          female,
          male,
          trans,
          twoSpirit,
          m2f,
          f2m,
          intersex
        ]
        const textArray = [
          'female',
          'male',
          'transgendered',
          'two-spirit',
          'male to female transexual',
          'female to male transexual',
          'intersex'
        ]
        booleanArray.forEach((element, index) => {
          if (element) {
            if (firstTime) {
              returnString +=
                textArray[index].charAt(0).toUpperCase() +
                textArray[index].slice(1)
              firstTime = false
            } else {
              returnString += ', ' + textArray[index]
            }
          }
        })
        return returnString
      }
    },
    sexualOrientationsWelcome() {
      const lesbian = this.event.orientation_lesbian == true
      const gay = this.event.orientation_gay == true
      const bisexual = this.event.orientation_bisexual == true
      const queer = this.event.orientation_queer == true
      const questioning = this.event.orientation_questioning == true
      const asexual = this.event.orientation_asexual == true
      const pansexual = this.event.orientation_pansexual == true
      const heterosexual = this.event.orientation_heterosexual == true

      if (
        lesbian &&
        gay &&
        bisexual &&
        queer &&
        questioning &&
        asexual &&
        pansexual &&
        heterosexual
      ) {
        return 'ALL'
      } else {
        let returnString = ''
        let firstTime = true
        const booleanArray = [
          lesbian,
          gay,
          bisexual,
          queer,
          questioning,
          asexual,
          pansexual,
          heterosexual
        ]
        const textArray = [
          'lesbian',
          'gay',
          'bisexual',
          'queer',
          'questioning',
          'asexual',
          'pansexual',
          'heterosexual'
        ]
        booleanArray.forEach((element, index) => {
          if (element) {
            if (firstTime) {
              returnString +=
                textArray[index].charAt(0).toUpperCase() +
                textArray[index].slice(1)
              firstTime = false
            } else {
              returnString += ', ' + textArray[index]
            }
          }
        })
        return returnString
      }
    },
    aimedAtRaceOrReligion() {
      return !(this.event.race_religion == undefined)
    },
    raceReligionText() {
      return this.event.race_religion
    },
    onlyRaceReligion() {
      return this.event.only_race_religion == true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/forms/form';
@import '../../../scss/forms/header';
@import '../../../scss/lists/organizationList';
</style>