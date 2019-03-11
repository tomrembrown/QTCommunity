<template>
  <fieldset>
    <div class="row align-items-center">
      <div class="col-md-12">
        <h2>Organization</h2>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-md-12">
        <section>
          <label class="label" for="organization">Organization Hosting the Event</label>
          <label class="select">
            <select id="organization" name="organization" @change="onChangeOrganization($event)">
              <option value="1">The 519</option>
              <option value="2">Buddies in Bad Times Theatre</option>
              <option value="3">Spa Excess</option>
              <option value="4">TNT Men</option>
              <option value="5">Venture Out</option>
              <option value="New">Enter New Organization</option>
            </select>
            <i></i>
          </label>
        </section>
      </div>
    </div>

    <transition name="fade">
      <div v-if="newOrganization">

        <div class="row">
          <div class="col-md-6">
            <ash-textbox
              heading="Organization Name"
              placeholder="Enter name"
              helpText="Enter a short, unique, name to refer to the organization">
            </ash-textbox>
          </div>
          <div class="col-md-6">
            <section>
              <label class="label" for="organizationType">Type of Organization</label>
              <label class="select">
                <select id="organizationType" name="organizationType">
                  <option value="1">Community Organization</option>
                  <option value="2">Health and Social Services</option>
                  <option value="3">Bar or Dance Club</option>
                  <option value="4">Art, Theatre, Culture</option>
                  <option value="5">Adult Entertainment</option>
                </select>
                <i></i>
              </label>
            </section>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-12">
            <section>
              <label class="label" for="organizaton_description">Description of Organization</label>
              <label class="textarea textarea-expandable">
                <textarea
                  id="organization_description"
                  name="organization_description"
                  placeholder="Enter description of organization"
                  rows="5"
                ></textarea>
              </label>
            </section>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-3">
            <ash-textbox
              heading="Phone"
              placeholder="(416) 123-4567"
              helpText="Enter organization's phone number">
            </ash-textbox>
          </div>
          <div class="col-md-2">
            <ash-textbox
              heading="Extension"
              helpText="Phone extension. Blank if none">
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <section>
              <label for="show_phone" class="checkbox">
                <input type="checkbox" name="show_phone" id="show_phone" checked>
                <i></i>Show
              </label>
            </section>
          </div>
          <div class="col-md-6">
            <ash-textbox
              heading="Image"
              helpText="Enter web address for logo for organization.  Leave blank if none">
            </ash-textbox>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-5">
            <ash-textbox
              heading="Email"
              helpText="Enter email address for organization.  Leave blank if none">
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <section>
              <label for="show_email" class="checkbox">
                <input type="checkbox" name="show_email" id="show_email" checked>
                <i></i>Show
              </label>
            </section>
          </div>
          <div class="col-md-5">
            <ash-textbox
              heading="Website"
              helpText="Enter website for organization. Leave blank if none">
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <section>
              <label for="show_website" class="checkbox">
                <input type="checkbox" name="show_website" id="show_website" checked>
                <i></i>Show
              </label>
            </section>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-5">
            <ash-textbox
              heading="Email"
              helpText="Enter email address for organization. Leave blank if none">
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <section>
              <label for="show_email" class="checkbox">
                <input type="checkbox" name="show_email" id="show_email" checked>
                <i></i>Show
              </label>
            </section>
          </div>
          <div class="col-md-5">
            <ash-textbox
              heading="Website"
              helpText="Enter website for organization. Leave blank if none">
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <section>
              <label for="show_website" class="checkbox">
                <input type="checkbox" name="show_website" id="show_website" checked>
                <i></i>Show
              </label>
            </section>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-5">
            <ash-textbox
              heading="Facebook"
              helpText="Enter facebook page for organization. Leave blank if none">
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <section>
              <label for="show_facebook" class="checkbox">
                <input type="checkbox" name="show_facebook" id="show_facebook" checked>
                <i></i>Show
              </label>
            </section>
          </div>
          <div class="col-md-5">
            <ash-textbox
              heading="Twitter"
              helpText="Enter twitter handle for organization. Leave blank if none">
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <section>
              <label for="show_twitter" class="checkbox">
                <input type="checkbox" name="show_twitter" id="show_twitter" checked>
                <i></i>Show
              </label>
            </section>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-5">
            <ash-textbox
              heading="LinkedIn"
              helpText="Enter LinkedIn address for organization. Leave blank if none">
            </ash-textbox>
          </div>
          <div class="col-md-1">
            <section>
              <label for="show_linkedin" class="checkbox">
                <input type="checkbox" name="show_linkedin" id="show_linkedin" checked>
                <i></i>Show
              </label>
            </section>
          </div>
        </div>

        <qt-target-audience type="organization" verb="participate in"></qt-target-audience>

      </div>  
    </transition>    

  </fieldset>
</template>

<script>
import Textbox from './textbox.vue';
import TargetAudience from './targetAudience.vue';

export default {
  data() {
    return {
      newOrganization: false
    }
  },
  methods: {
    onChangeOrganization(event) {
      if (event.target.value === 'New')
        this.newOrganization = true;
      else
        this.newOrganization = false;
    }
  },
  components: {
    'ash-textbox': Textbox,
    'qt-target-audience': TargetAudience
  }
};
</script>

<style lang="scss" scoped>
  @import '../../scss/forms/fade';
  @import '../../scss/forms/fieldset';
  @import '../../scss/forms/h2';
  @import '../../scss/forms/section';
  @import '../../scss/forms/label';
  @import '../../scss/forms/select';
  @import '../../scss/forms/textarea';
  @import '../../scss/forms/section';
  @import '../../scss/forms/checkbox';
</style>
