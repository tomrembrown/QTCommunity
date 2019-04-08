<template>
  <div>
    <div class="row align-items-center">
      <div class="form-group col-md-4">
        <ash-checkbox
          :heading="'Is ' + type + ' family friendly?'"
          idName="family_friendly">
        </ash-checkbox>
      </div>
      <div class="form-group col-md-4">
        <ash-textbox
          :heading="'Minimum Age for ' + typeCapitalized "
          idName="min_age"
          :helpText="'Enter minimum age to ' + verb + ' ' + type + '. Leave blank if none.'"
        ></ash-textbox>
      </div>
      <div class="form-group col-md-4">
        <ash-textbox
          :heading="'Maximum Age for ' + typeCapitalized "
          idName="max_age"
          :helpText="'Enter maximum age to ' + verb + ' ' + type + '. Leave blank if none.'"
        ></ash-textbox>
      </div>
    </div>
  
    <div class="row">
      <div class="col-md-6">
        <h3>Gender Identities Welcome at {{ typeCapitalized }}</h3>
      </div>
      <div class="col-md-6">
        <ash-checkbox
          heading="All are welcome"
          idName="gender_all"
          v-model="allGendersWelcome">
        </ash-checkbox>
      </div>
    </div>

    <transition name="fade">
      <div v-if="!allGendersWelcome">
        <div class="row align-items-center">
          <div class="col-md-4">
            <ash-checkbox heading="Female" idName="gender_female"></ash-checkbox>
          </div>
          <div class="col-md-4">
            <ash-checkbox heading="Male" idName="gender_male"></ash-checkbox>
          </div>
          <div class="col-md-4">
            <ash-checkbox heading="Transgendered" idName="gender_transgendered"></ash-checkbox>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-4">
            <ash-checkbox heading="Two-spirit" idName="gender_two_spirit"></ash-checkbox>
          </div>
          <div class="col-md-4">
            <ash-checkbox heading="Male to Female Transexual" idName="gender_m2f_transexual"></ash-checkbox>
          </div>
          <div class="col-md-4">
            <ash-checkbox heading="Female to Male Transexual" idName="gender_f2m_transexual"></ash-checkbox>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-4">
            <ash-checkbox heading="Intersex" idName="gender_intersex"></ash-checkbox>
          </div>
        </div>
      </div>
    </transition>

    <div class="row">
      <div class="col-md-6">
        <h3>Sexual Orientations Welcome at {{ typeCapitalized }}</h3>
      </div>
      <div class="col-md-6">
        <ash-checkbox
          heading="All are welcome"
          idName="orientation_all"
          v-model="allOrientationsWelcome">
        </ash-checkbox>
       </div>
    </div>

    <transition name="fade">
      <div v-if="!allOrientationsWelcome">
        <div class="row align-items-center">
          <div class="col-md-4">
            <ash-checkbox heading="Lesbian" idName="orientation_lesbian"></ash-checkbox>
          </div>
          <div class="col-md-4">
            <ash-checkbox heading="Gay" idName="orientation_gay"></ash-checkbox>
          </div>
          <div class="col-md-4">
            <ash-checkbox heading="Bisexual" idName="orientation_bisexual"></ash-checkbox>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-4">
            <ash-checkbox heading="Queer" idName="orientation_queer"></ash-checkbox>
          </div>
          <div class="col-md-4">
            <ash-checkbox heading="Questioning" idName="orientation_questioning"></ash-checkbox>
          </div>
          <div class="col-md-4">
            <ash-checkbox heading="Asexual" idName="orientation_asexual"></ash-checkbox>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-4">
            <ash-checkbox heading="Pansexual" idName="orientation_pansexual"></ash-checkbox>
          </div>
          <div class="col-md-4">
            <ash-checkbox heading="Heterosexual" idName="orientation_heterosexual"></ash-checkbox>
          </div>
        </div>
      </div>
    </transition>

    <div class="row">
      <div class="col-md-6">
        <h3>Race or Religion</h3>
      </div>
      <div class="col-md-6">
        <ash-checkbox 
          :heading="'Is '+ type +' aimed at a particular race or religion?'" 
          idName="race_religion_targetted"
          v-model="aimedAtRaceReligion">
        </ash-checkbox>
      </div>
    </div>

    <transition name="fade">
      <div v-if="aimedAtRaceReligion" class="row align-items-center">
        <div class="col-md-4">
          <section>
            <label class="radio" for="only">
              <input 
                type="radio" 
                value="only" 
                id="only"
                v-model="only_race_religion"
                @click="switchRadio('only')">
              <i></i>Only for this race or religion
            </label>
          </section>
        </div>
        <div class="col-md-4">
          <section>
            <label class="radio" for="others">
              <input 
                type="radio" 
                value="others"
                id="others"
                v-model="only_race_religion"
                @click="switchRadio('other')">
              <i></i>Admirers and allies welcome too
            </label>
          </section>
        </div>
        <div class="col-md-4">
          <ash-textbox
            :heading="'Race or Religion ' + typeCapitalized + ' is aimed at'"
            idName="race_religion"
            helpText="Enter name of race or religion. Leave blank if not applicable."
          ></ash-textbox>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Textbox from './textbox.vue'
import Checkbox from './checkbox.vue'

export default { 
  data() {
    return {
      allGendersWelcome: true,
      allOrientationsWelcome: true,
      aimedAtRaceReligion: false,
      only_race_religion: 'others'
    }
  },
  props: {
    type: {
      type: String,
      required: true
    },
    verb: {
      type: String,
      required: true
    }
  }, 
  methods: {
    switchRadio: function(inValue) {
      this.$store.commit({
        type: 'setElement',
        element: 'only_race_religion',
        value: inValue
      })
    }
  },
  computed: {
    typeCapitalized: function() {
      return  this.type.trim().charAt(0).toUpperCase() + 
              this.type.trim().slice(1)
    }
  },
  components: {
    'ash-textbox': Textbox,
    'ash-checkbox': Checkbox
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/forms/fade';
  @import '../../scss/forms/section';
  @import '../../scss/forms/checkbox';
  @import '../../scss/forms/h3';
  @import '../../scss/forms/radio';
  @import '../../scss/forms/section';
</style>
