<template>
  <div>
    <div class="row align-items-center">
      <div class="form-group col-md-4">
        <section>
          <label for="familyFriendly" class="checkbox">
            <input type="checkbox" id="familyFriendly" name="familyFriendly" checked>
            <i></i>Is {{ type }} family friendly?
          </label>
        </section>
      </div>
      <div class="form-group col-md-4">
        <ash-textbox
          :heading="'Minimum Age for ' + typeCapitalized "
          :idName="'minimumAge'+typeCapitalized"
          :helpText="'Enter minimum age to ' + verb + ' ' + type + '. Leave blank if none.'"
        ></ash-textbox>
      </div>
      <div class="form-group col-md-4">
        <ash-textbox
          :heading="'Maximum Age for ' + typeCapitalized "
          :idName="'maximumAge'+typeCapitalized"
          :helpText="'Enter maximum age to ' + verb + ' ' + type + '. Leave blank if none.'"
        ></ash-textbox>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <h3>Gender Identities Welcome at {{ typeCapitalized }}</h3>
      </div>
      <div class="col-md-6">
        <section>
          <label for="gender_all" class="checkbox">
            <input 
              type="checkbox" 
              name="gender_all" 
              id="gender_all" 
              v-model="allGendersWelcome">
            <i></i>All are welcome
          </label>
        </section>
      </div>
    </div>

    <transition name="fade">
      <div v-if="!allGendersWelcome">
        <div class="row align-items-center">
          <div class="col-md-4">
            <section>
              <label for="gender_female" class="checkbox">
                <input type="checkbox" name="gender_female" id="gender_female" checked>
                <i></i>Female
              </label>
            </section>
          </div>
          <div class="col-md-4">
            <section>
              <label for="gender_male" class="checkbox">
                <input type="checkbox" name="gender_male" id="gender_male" checked>
                <i></i>Male
              </label>
            </section>
          </div>
          <div class="col-md-4">
            <section>
              <label for="gender_transgendered" class="checkbox">
                <input type="checkbox" name="gender_transgendered" id="gender_transgendered" checked>
                <i></i>Transgendered
              </label>
            </section>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-4">
            <section>
              <label for="gender_two_spirit" class="checkbox">
                <input type="checkbox" name="gender_two_spirit" id="gender_two_spirit" checked>
                <i></i>Two-spirit
              </label>
            </section>
          </div>
          <div class="col-md-4">
            <section>
              <label for="gender_m2f_transexual" class="checkbox">
                <input type="checkbox" name="gender_m2f_transexual" id="gender_m2f_transexual" checked>
                <i></i>Male to Female Transexual
              </label>
            </section>
          </div>
          <div class="col-md-4">
            <section>
              <label for="gender_f2m_transexual" class="checkbox">
                <input type="checkbox" name="gender_f2m_transexual" id="gender_f2m_transexual" checked>
                <i></i>Female to Male Transexual
              </label>
            </section>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-4">
            <section>
              <label for="gender_intersex" class="checkbox">
                <input type="checkbox" name="gender_intersex" id="gender_intersex" checked>
                <i></i>Intersex
              </label>
            </section>
          </div>
        </div>
      </div>
    </transition>

    <div class="row">
      <div class="col-md-6">
        <h3>Sexual Orientations Welcome at {{ typeCapitalized }}</h3>
      </div>
      <div class="col-md-6">
        <section>
          <label for="orientation_all" class="checkbox">
            <input 
              type="checkbox" 
              name="orientation_all" 
              id="orientation_all" 
              v-model="allOrientationsWelcome">
            <i></i>All are welcome
          </label>
        </section>
       </div>
    </div>

    <transition name="fade">
      <div v-if="!allOrientationsWelcome">
        <div class="row align-items-center">
          <div class="col-md-4">
            <section>
              <label for="orientation_lesbian" class="checkbox">
                <input type="checkbox" name="orentiation_lesbian" id="orientation_lesbian" checked>
                <i></i>Lesbian
              </label>
            </section>
          </div>
          <div class="col-md-4">
            <section>
              <label for="orientation_gay" class="checkbox">
                <input type="checkbox" namee="orientation_gay" id="orientation_gay" checked>
                <i></i>Gay
              </label>
            </section>
          </div>
          <div class="col-md-4">
            <section>
              <label for="orientation_bisexual" class="checkbox">
                <input type="checkbox" name="orientation_bisexual" id="orientation_bisexual" checked>
                <i></i>Bisexual
              </label>
            </section>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-4">
            <section>
              <label for="orientation_queer" class="checkbox">
                <input type="checkbox" name="orientation_queer" id="orientation_queer" checked>
                <i></i>Queer
              </label>
            </section>
          </div>
          <div class="col-md-4">
            <section>
              <label for="orientation_questioning" class="checkbox">
                <input
                  type="checkbox"
                  name="orientation_questioning"
                  id="orientation_questioning"
                  checked
                >
                <i></i>Questioning
              </label>
            </section>
          </div>
          <div class="col-md-4">
            <section>
              <label for="orientation_asexual" class="checkbox">
                <input type="checkbox" name="orientation_questioning" id="orientation_asexual" checked>
                <i></i>Asexual
              </label>
            </section>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-4">
            <section>
              <label for="orientation_pansexual" class="checkbox">
                <input type="checkbox" name="orientation_pansexual" id="orientation_pansexual" checked>
                <i></i>Pansexual
              </label>
            </section>
          </div>
          <div class="col-md-4">
            <section>
              <label for="orientation_heterosexual" class="checkbox">
                <input
                  type="checkbox"
                  name="orientation_heterosexual"
                  id="orientation_heterosexual"
                  checked
                >
                <i></i>Heterosexual
              </label>
            </section>
          </div>
        </div>
      </div>
    </transition>

    <div class="row">
      <div class="col-md-6">
        <h3>Race or Religion</h3>
      </div>
      <div class="col-md-6">
        <section>
          <label for="race_religion_targetted" class="checkbox">
            <input 
              type="checkbox" 
              name="race_religion_targetted" 
              id="race_religion_targetted"
              v-model="aimedAtRaceReligion">
            <i></i>Aimed at a race or religion?
          </label>
        </section>
      </div>
    </div>

    <transition name="fade">
      <div v-if="aimedAtRaceReligion" class="row align-items-center">
        <div class="col-md-6">
          <section>
            <label class="radio">
              <input type="radio" name="race_religion">
              <i></i>Only for this race or religion
            </label>
            <label class="radio">
              <input type="radio" name="race_religion">
              <i></i>Admirers and allies welcome too
            </label>
          </section>
        </div>
        <div class="col-md-6">
          <ash-textbox
            :heading="'Race or Religion ' + typeCapitalized + ' is aimed at'"
            :idName="'raceReligion'+typeCapitalized"
            helpText="Enter name of race or religion. Leave blank if not applicable."
          ></ash-textbox>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Textbox from './textbox.vue';

export default { 
  data() {
    return {
      allGendersWelcome: true,
      allOrientationsWelcome: true,
      aimedAtRaceReligion: false
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
  computed: {
    typeCapitalized: function() {
      return  this.type.trim().charAt(0).toUpperCase() + 
              this.type.trim().slice(1);
    }
  },
  components: {
    'ash-textbox': Textbox
  }
};
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
