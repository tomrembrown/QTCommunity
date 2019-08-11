<template>
  <fieldset>
    <div class="row align-items-center">
      <div class="col-md-3">
        <ash-textbox
          heading="Phone"
          :idName="formName + '__phone'"
          placeholder="(416) 123-4567"
          helpText="Organization's phone number"
        ></ash-textbox>
      </div>
      <div class="col-md-2">
        <ash-textbox
          heading="Phone Extension"
          :idName="formName + '__phone_extension'"
          helpText="Blank if none"
        ></ash-textbox>
      </div>
      <div class="col-md-1">
        <ash-checkbox heading="Show" :idName="formName + '__display_phone'" :value="false"></ash-checkbox>
      </div>
      <div class="col-md-6">
        <ash-textbox
          heading="Image Link"
          :idName="formName + '__image_link'"
          helpText="Web address for logo for organization.  Mandatory field"
        ></ash-textbox>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-md-5">
        <ash-textbox
          heading="Email"
          :idName="formName + '__email'"
          helpText="Email address for organization.  Leave blank if none"
        ></ash-textbox>
      </div>
      <div class="col-md-1">
        <ash-checkbox heading="Show" :idName="formName + '__display_email'" :value="false"></ash-checkbox>
      </div>
      <div class="col-md-5">
        <ash-textbox
          heading="Website"
          :idName="formName + '__website_english'"
          helpText="Website for organization. Leave blank if none"
        ></ash-textbox>
      </div>
      <div class="col-md-1">
        <ash-checkbox heading="Show" :idName="formName + '__display_website'" :value="false"></ash-checkbox>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-md-5">
        <ash-textbox
          heading="Facebook"
          :idName="formName + '__facebook'"
          helpText="Facebook page for organization. Leave blank if none"
        ></ash-textbox>
      </div>
      <div class="col-md-1">
        <ash-checkbox heading="Show" :idName="formName + '__display_facebook'" :value="false"></ash-checkbox>
      </div>
      <div class="col-md-5">
        <ash-textbox
          heading="Twitter"
          :idName="formName + '__twitter'"
          helpText="Twitter webpage for organization. Leave blank if none"
        ></ash-textbox>
      </div>
      <div class="col-md-1">
        <ash-checkbox heading="Show" :idName="formName + '__display_twitter'" :value="false"></ash-checkbox>
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-md-5">
        <ash-textbox
          heading="YouTube"
          :idName="formName + '__youtube'"
          helpText="YouTube address for organization. Leave blank if none"
        ></ash-textbox>
      </div>
      <div class="col-md-1">
        <ash-checkbox heading="Show" :idName="formName + '__display_youtube'" :value="false"></ash-checkbox>
      </div>
      <div class="col-md-5">
        <ash-textbox
          heading="Instagram"
          :idName="formName + '__instagram'"
          helpText="Instagram address for organization. Leave blank if none"
        ></ash-textbox>
      </div>
      <div class="col-md-1">
        <ash-checkbox heading="Show" :idName="formName + '__display_instagram'" :value="false"></ash-checkbox>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-5">
        <ash-textbox
          heading="LinkedIn"
          :idName="formName + '__linkedin'"
          helpText="LinkedIn address for organization. Leave blank if none"
        ></ash-textbox>
      </div>
      <div class="col-md-1">
        <ash-checkbox heading="Show" :idName="formName + '__display_linkedin'" :value="false"></ash-checkbox>
      </div>
      <div class="col-md-5">
        <ash-textbox
          heading="Pinterest"
          :idName="formName + '__pinterest'"
          helpText="Pinterest address for organization. Leave blank if none"
        ></ash-textbox>
      </div>
      <div class="col-md-1">
        <ash-checkbox heading="Show" :idName="formName + '__display_pinterest'" :value="false"></ash-checkbox>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-5">
        <ash-textbox
          heading="Google Plus"
          :idName="formName + '__google_plus'"
          helpText="Google+ address for organization. Leave blank if none"
        ></ash-textbox>
      </div>
      <div class="col-md-1">
        <ash-checkbox heading="Show" :idName="formName + '__display_google_plus'" :value="false"></ash-checkbox>
      </div>
      <div class="col-md-5">
        <ash-textbox
          heading="RSS"
          :idName="formName + '__rss'"
          helpText="RSS Feed for organization. Leave blank if none"
        ></ash-textbox>
      </div>
      <div class="col-md-1">
        <ash-checkbox heading="Show" :idName="formName + '__display_rss'" :value="false"></ash-checkbox>
      </div>
    </div>
  </fieldset>
</template>

<script>
import Textbox from '../../formElements/textbox.vue'
import Checkbox from '../../formElements/checkbox.vue'

export default {
  props: {
    formName: {
      type: String,
      required: true
    }
  },
  components: {
    'ash-textbox': Textbox,
    'ash-checkbox': Checkbox
  }
}
</script>


<style lang="scss" scoped>
@import '../../../scss/forms/section';
@import '../../../scss/forms/fieldset';
</style>