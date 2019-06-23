<template>
  <fieldset>
    <div class="row">
      <div class="col-md-3">
        <img :src="organization.image_link" :alt="organization.name" width="90%">
      </div>
      <div class="col-md-9">
        <h2>{{ organization.name }}</h2>
        <p class="description-text">{{ organization.description_english }}</p>
        <hr>
        <section v-if="displayContactSection">
          <div class="row" v-if="displayWebsite">
            <div class="col-md-3 contact-heading">Website</div>
            <div class="col-md-9 contact-text">
              <a :href="website" target="_blank">{{ website }}</a>
            </div>
          </div>
          <div class="row" v-if="displayEmail">
            <div class="col-md-3 contact-heading">Email</div>
            <div class="col-md-9 contact-text">
              <a :href="'mailto:' + email" target="_blank">{{ email }}</a>
            </div>
          </div>
          <div class="row" v-if="displayPhone">
            <div class="col-md-3 contact-heading">Phone</div>
            <div class="col-md-9 contact-text">{{ phone }}</div>
          </div>
        </section>
        <hr>
        <section>
          <div class="row">
            <div class="col-md-3 contact-heading">Type</div>
            <div class="col-md-3 contact-text">{{ organization.organization_type }}</div>
            <div class="col-md-6 contact-heading" v-if="isFamilyFriendly">Family Friendly</div>
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
            <div class="col-md-3 contact-text">{{ raceReligionText }}</div>
            <div class="col-md-6 contact-text" v-if="alliesWelcome">Admirers and Allies Welcome</div>
          </div>
        </section>
      </div>
    </div>
  </fieldset>
</template>
 
<script>
export default {
  props: {
    organization: {
      type: Object,
      required: true
    }
  },
  computed: {
    displayWebsite() {
      return (
        this.organization.website_english && this.organization.display_website
      )
    },
    displayEmail() {
      return this.organization.email && this.organization.display_email
    },
    displayPhone() {
      return this.organization.phone && this.organization.display_phone
    },
    displayContactSection() {
      return this.displayWebsite || this.displayEmail || this.displayPhone
    },
    website() {
      return this.displayWebsite ? this.organization.website_english : ''
    },
    email() {
      return this.displayEmail ? this.organization.email : ''
    },
    phone() {
      if (this.displayPhone) {
        const phoneAsString = this.organization.phone.toString()
        let returnString =
          '(' +
          phoneAsString.substring(0, 3) +
          ') ' +
          phoneAsString.substring(3, 6) +
          '-' +
          phoneAsString.substring(6, 10)
        if (this.organization.phone_extension)
          returnString += ' Ext ' + this.organization.phone_extension.toString()
        return returnString
      } else {
        return ''
      }
    },
    isFamilyFriendly() {
      return (this.organization.family_friendly) ? true : false
    },
    isMinAge() {
      return !(this.organization.min_age == undefined)
    },
    isMaxAge() {
      return !(this.organization.max_age == undefined)
    },
    minimumAge() {
      return this.isMinAge ? this.organization.min_age.toString() : ''
    },
    maximumAge() {      
      return this.isMaxAge ? this.organization.max_age.toString() : ''
    },
    isAgeLimits() {
      return (this.isMinAge || this.isMaxAge)
    },
    genderIdentitiesWelcome() {
      const female = (this.organization.gender_female == true)
      const male = (this.organization.gender_male == true)
      const trans = (this.organization.gender_transgendered == true)
      const twoSpirit = (this.organization.gender_two_spirit == true)
      const m2f = (this.organization.gender_m2f_transexual == true)
      const f2m = (this.organization.gender_f2m_transexual == true)
      const intersex = (this.organization.gender_intersex == true)

      if (female && male && trans && twoSpirit && m2f && f2m && intersex) {
        return 'ALL'
      }
      else {
        let returnString = ''
        let firstTime = true
        const booleanArray = [female, male, trans, twoSpirit, m2f, f2m, intersex]
        const textArray = ['female', 'male', 'transgendered', 'two-spirit', 'male to female transexual', 'female to male transexual', 'intersex']
        booleanArray.forEach((element, index) => {
          if (element) {
            if (firstTime) {
              returnString += textArray[index].charAt(0).toUpperCase() + textArray[index].slice(1)
              firstTime = false
            }
            else {
              returnString += ', ' + textArray[index]
            }
          }
        })
        return returnString
      }
    },
    sexualOrientationsWelcome() {
      const lesbian = (this.organization.orientation_lesbian == true)
      const gay = (this.organization.orientation_gay == true)
      const bisexual = (this.organization.orientation_bisexual == true)
      const queer = (this.organization.orientation_queer == true)
      const questioning = (this.organization.orientation_questioning == true)
      const asexual = (this.organization.orientation_asexual == true)
      const pansexual = (this.organization.orientation_pansexual == true)
      const heterosexual = (this.organization.orientation_heterosexual == true)

      if (lesbian && gay && bisexual && queer && questioning && asexual && pansexual && heterosexual) {
        return 'ALL'
      }
      else {
        let returnString = ''
        let firstTime = true
        const booleanArray = [lesbian, gay, bisexual, queer, questioning, asexual, pansexual, heterosexual]
        const textArray = ['lesbian', 'gay', 'bisexual', 'queer', 'questioning', 'asexual', 'pansexual', 'heterosexual']
        booleanArray.forEach((element, index) => {
          if (element) {
            if (firstTime) {
              returnString += textArray[index].charAt(0).toUpperCase() + textArray[index].slice(1)
              firstTime = false
            }
            else {
              returnString += ', ' + textArray[index]
            }
          }
        })
        return returnString
      }
    },
    aimedAtRaceOrReligion() {
      return !(this.organization.race_religion == undefined)
    },
    raceReligionText() {
      return this.organization.race_religion
    },
    alliesWelcome() {
      return (this.organization.only_race_religion == true)
    }
  }
}
</script>
 
<style lang="scss" scoped>
@import '../../../scss/lists/organizationList';
@import '../../../scss/forms/fieldset';
</style>