<template>
  <div class="container">
    <form action class="sky-form">
      <header>Create New Event</header>
      <fieldset>
        <div class="row align-items-center">
          <div class="col-md-12">
            <h2>Main Information</h2>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-12">
            <section>
              <label class="label" for="longTitle">Long Title</label>
              <label class="input">
                <input
                  type="text"
                  id="longTitle"
                  name="longTitle"
                  aria-describedby="longTitleHelp"
                  placeholder="Enter long title"
                >
              </label>
              <div
                class="note"
                id="longTitleHelp"
              >The title to display when showing the whole event.</div>
            </section>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-6">
            <section>
              <label class="label" for="shortTitle">Short Title</label>
              <label class="input">
                <input
                  type="text"
                  id="shortTitle"
                  name="shortTitle"
                  aria-describedby="shortTitleHelp"
                  placeholder="Enter short title"
                >
              </label>
              <div
                class="note"
                id="shortTitleHelp"
              >The title to display in the calendar on desktops and laptops.</div>
            </section>
          </div>
          <div class="col-md-6">
            <section>
              <label class="label" for="mobileTitle">Mobile Title</label>
              <label class="input">
                <input
                  type="text"
                  id="mobileTitle"
                  name="mobileTitle"
                  aria-describedby="mobileTitleHelp"
                  placeholder="Enter mobile title"
                >
              </label>
              <div class="note" id="mobileTitleHelp">The title to display on cell phones.</div>
            </section>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-12">
            <section>
              <label class="label" for="decription">Description</label>
              <label class="textarea textarea-expandable">
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter description of event"
                  rows="5"
                ></textarea>
              </label>
            </section>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-6">
            <section>
              <label class="label" for="imageLink">Image Link</label>
              <label class="input">
                <input
                  type="url"
                  id="imageLink"
                  name="imageLink"
                  aria-describedby="imageLinkHelp"
                  placeholder="Enter link to image for event"
                >
              </label>
              <div
                class="note"
                id="imageLinkHelp"
              >A link to an image to display next to event in detailed description screen.</div>
            </section>
          </div>
          <div class="form-group col-md-6">
            <section>
              <label class="label" for="website">Website</label>
              <label class="input">
                <input
                  type="url"
                  id="website"
                  name="website"
                  aria-describedby="websiteHelp"
                  placeholder="Enter primary website for event"
                >
              </label>
              <div
                class="note"
                id="websiteHelp"
              >Enter the primary website or facebook page describing the event. Leave blank if none.</div>
            </section>
          </div>
        </div>
      </fieldset>

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
                <select id="organization" name="organization">
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
      </fieldset>

      <fieldset>
        <div class="row align-items-center">
          <div class="col-md-12">
            <h2>Registration</h2>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-6">
            <section>
              <label for="requireRegistration" class="checkbox">
                <input type="checkbox" name="requireRegistration" id="requireRegistration">
                <i></i>Event Requires Registration
              </label>
            </section>
          </div>
          <div class="col-md-6">
            <section>
              <label class="label" for="price">Price</label>
              <label class="input">
                <input type="text" id="price" name="price" aria-describedby="priceHelp">
              </label>
              <div class="note" id="priceHelp">Enter price of event. Leave blank if unknown</div>
            </section>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-md-12">
            <section>
              <label class="label" for="mobileTitle">Registration Website</label>
              <label class="input">
                <input
                  type="text"
                  id="registrationWebsite"
                  name="registrationWebsite"
                  aria-describedby="registrationWebsiteHelp"
                  placeholder="Enter registration website"
                >
              </label>
              <div
                class="note"
                id="registrationWebsiteHelp"
              >Enter website for users to register for event. Leave blank if no registration needed or website not known.</div>
            </section>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div class="row align-items-center">
          <div class="col-md-12">
            <h2>Target Audience</h2>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="form-group col-md-4">
            <section>
              <label for="familyFriendly" class="checkbox">
                <input type="checkbox" id="familyFriendly" name="familyFriendly" checked>
                <i></i>Is event family friendly?
              </label>
            </section>
          </div>
          <div class="form-group col-md-4">
            <section>
              <label class="label" for="minimumAge">Minimum Age</label>
              <label class="input">
                <input
                  type="text"
                  id="minimumAge"
                  name="minimumAge"
                  aria-describedby="minimumAgeHelp"
                >
              </label>
              <div
                class="note"
                id="minimumAgeHelp"
              >Enter minimum age to attend event. Leave blank if none.</div>
            </section>
          </div>
          <div class="form-group col-md-4">
            <section>
              <label class="label" for="maximumAge">Maximum Age</label>
              <label class="input">
                <input
                  type="text"
                  id="maximumAge"
                  name="maximumAge"
                  aria-describedby="maximumAgeHelp"
                >
              </label>
              <div
                class="note"
                id="maximumAgeHelp"
              >Enter maximum age that can attend event. Leave blank if none.</div>
            </section>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-12">
            <h3>Gender Identities Welcome</h3>
          </div>
        </div>

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
                <input
                  type="checkbox"
                  name="gender_transgendered"
                  id="gender_transgendered"
                  checked
                >
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
                <input
                  type="checkbox"
                  name="gender_m2f_transexual"
                  id="gender_m2f_transexual"
                  checked
                >
                <i></i>Male to Female Transexual
              </label>
            </section>
          </div>
          <div class="col-md-4">
            <section>
              <label for="gender_f2m_transexual" class="checkbox">
                <input
                  type="checkbox"
                  name="gender_f2m_transexual"
                  id="gender_f2m_transexual"
                  checked
                >
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

        <div class="row align-items-center">
          <div class="col-md-12">
            <h3>Sexual Orientations Welcome</h3>
          </div>
        </div>

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
                <input
                  type="checkbox"
                  name="orientation_bisexual"
                  id="orientation_bisexual"
                  checked
                >
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
                <input
                  type="checkbox"
                  name="orientation_questioning"
                  id="orientation_asexual"
                  checked
                >
                <i></i>Asexual
              </label>
            </section>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-4">
            <section>
              <label for="orientation_pansexual" class="checkbox">
                <input
                  type="checkbox"
                  name="orientation_pansexual"
                  id="orientation_pansexual"
                  checked
                >
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

        <div class="row align-items-center">
          <div class="col-md-12">
            <h3>Race or Religion</h3>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-md-4">
            <section>
              <label for="race_religion_targetted" class="checkbox">
                <input type="checkbox" name="race_religion_targetted" id="race_religion_targetted">
                <i></i>Aimed at a race or religion?
              </label>
            </section>
          </div>
          <div class="col-md-4">
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
          <div class="col-md-4">
            <section>
              <label class="label" for="raceReligion">Race or Religion</label>
              <label class="input">
                <input
                  type="text"
                  id="raceReligion"
                  name="raceReligion"
                  aria-describedby="raceReligionHelp"
                >
              </label>
              <div
                class="note"
                id="raceReligionHelp"
              >Enter name of race or religion. Leave blank if not applicable.</div>
            </section>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <div class="row align-items-center">
          <div class="col-md-12">
            <h2>Place</h2>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <section>
              <label class="label" for="place">Location Where Event is Held</label>
              <label class="select">
                <select id="place" name="place">
                  <option value="1">The 519</option>
                  <option value="2">Buddies in Bad Times Theatre</option>
                  <option value="3">Spa Excess</option>
                  <option value="4">Steam Works</option>
                  <option value="5">The Black Eagle</option>
                  <option value="New">Enter New Place</option>
                </select>
                <i></i>
              </label>
            </section>
          </div>
          <div class="col-md-6">
            <section>
              <label class="label" for="placeRoom">Room in place</label>
              <label class="input">
                <input type="text" id="placeRoom" name="placeRoom" aria-describedby="placeRoomHelp">
              </label>
              <div
                class="note"
                id="placeRoomHelp"
              >Enter specific room in location where event is held. Leave blank if unknown or not applicable.</div>
            </section>
          </div>
        </div>
      </fieldset>

      <footer>
        <button type="submit" class="button">Submit</button>
        <button type="reset" class="button button-secondary">Reset</button>
      </footer>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/*  
Name:  forms.css
Comes largely from sky form at https://codepen.io/stephanrusu/pen/EVORRx by Stefan Rusu
Modified by Tom Brown for use in this application
Creation Date: February, 2019
*/

/**/
/* Overall form */
/**/


.sky-form {
  margin: 40px 0;
  outline: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  font: 13px/1.55 "Open Sans", Helvetica, Arial, sans-serif;
  color: #666;
}

.sky-form * {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

.sky-form header {
  display: block;
  padding: 20px 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(248, 248, 248, 0.9);
  font-size: 25px;
  font-weight: 300;
  color: #232323;
}

.sky-form h2 {
  font-size: 27px;
  margin: 0 0 20px;
}

.sky-form h3 {
  font-size: 21px;
  font-weight: 350;
  font-style: italic;
  margin: 15px 0 5px;
  color: #2da5da;
}

.sky-form fieldset {
  display: block;
  padding: 25px 30px 5px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
}

.sky-form fieldset + fieldset {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.sky-form section {
  margin-bottom: 20px;
}

.sky-form footer {
  display: block;
  padding: 15px 30px 25px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(248, 248, 248, 0.9);
}

.sky-form footer:after {
  content: "";
  display: table;
  clear: both;
}

.sky-form .label {
  display: block;
  margin-bottom: 6px;
  line-height: 19px;
}

.sky-form .note {
  margin-top: 6px;
  padding: 0 1px;
  font-size: 11px;
  line-height: 15px;
  color: #999;
}

@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);

.sky-form [class^="fa-"],
.ui-datepicker [class^="fa-"] {
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
}

/**/
/* all elements - normal state */
/**/
.sky-form .input,
.sky-form .select,
.sky-form .textarea,
.sky-form .radio,
.sky-form .checkbox,
.sky-form .toggle,
.sky-form .button {
  position: relative;
  display: block;
}

.sky-form .input input,
.sky-form .select select,
.sky-form .textarea textarea {
  display: block;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  height: 39px;
  padding: 8px 10px;
  outline: none;
  border-width: 2px;
  border-style: solid;
  border-radius: 0;
  background: #fff;
  font: 15px/19px "Open Sans", Helvetica, Arial, sans-serif;
  color: #404040;
  appearance: normal;
  -moz-appearance: none;
  -webkit-appearance: none;
}

.sky-form .input input,
.sky-form .select select,
.sky-form .textarea textarea,
.sky-form .radio i,
.sky-form .checkbox i,
.sky-form .toggle i,
.sky-form .icon-append,
.sky-form .icon-prepend {
  border-color: #e5e5e5;
  transition: border-color 0.3s;
  -o-transition: border-color 0.3s;
  -ms-transition: border-color 0.3s;
  -moz-transition: border-color 0.3s;
  -webkit-transition: border-color 0.3s;
}

/**/
/* all elements - hover state */
/**/
.sky-form .input:hover input,
.sky-form .select:hover select,
.sky-form .textarea:hover textarea,
.sky-form .radio:hover i,
.sky-form .checkbox:hover i,
.sky-form .toggle:hover i {
  border-color: #8dc9e5;
}
.sky-form .rating input + label:hover, 
.sky-form .rating input + label:hover ~ label {
  color: #2da5da;
}

.sky-form .button:hover {
  opacity: 1;
}

/**/
/* all elements - focus state */
/**/
.sky-form .input input:focus,
.sky-form .select select:focus,
.sky-form .textarea textarea:focus,
.sky-form .radio input:focus + i,
.sky-form .checkbox input:focus + i,
.sky-form .toggle input:focus + i {
  border-color: #2da5da;
}

/**/
/* error state */
/**/
.sky-form .state-error input,
.sky-form .state-error select,
.sky-form .state-error textarea,
.sky-form .radio.state-error i,
.sky-form .checkbox.state-error i,
.sky-form .toggle.state-error i {
  background: #fff0f0;
}

.sky-form .state-error select + i {
  background: #fff0f0;
  box-shadow: 0 0 0 12px #fff0f0;
}

.sky-form .toggle.state-error input:checked + i {
  background: #fff0f0;
}

.sky-form .state-error + em {
  display: block;
  margin-top: 6px;
  padding: 0 1px;
  font-style: normal;
  font-size: 11px;
  line-height: 15px;
  color: #ee9393;
}

.sky-form .rating.state-error + em {
  margin-top: -4px;
  margin-bottom: 4px;
}

/**/
/* all elements - success state */
/**/
.sky-form .state-success input,
.sky-form .state-success select,
.sky-form .state-success textarea,
.sky-form .radio.state-success i,
.sky-form .checkbox.state-success i,
.sky-form .toggle.state-success i {
  background: #f0fff0;
}

.sky-form .state-success select + i {
  background: #f0fff0;
  box-shadow: 0 0 0 12px #f0fff0;
}

.sky-form .toggle.state-success input:checked + i {
  background: #f0fff0;
}

.sky-form .note-success {
  color: #6fb679;
}

/**/
/* all elements - disabled state */
/**/
.sky-form .input.state-disabled input,
.sky-form .select.state-disabled,
.sky-form .textarea.state-disabled,
.sky-form .radio.state-disabled,
.sky-form .checkbox.state-disabled,
.sky-form .toggle.state-disabled,
.sky-form .button.state-disabled {
  cursor: default;
  opacity: 0.5;
}

.sky-form .input.state-disabled:hover input,
.sky-form .select.state-disabled:hover select,
.sky-form .textarea.state-disabled:hover textarea,
.sky-form .radio.state-disabled:hover i,
.sky-form .checkbox.state-disabled:hover i,
.sky-form .toggle.state-disabled:hover i {
  border-color: #e5e5e5;
}

/**/
/* all elements - submited state */
/**/
.sky-form .message {
  display: none;
  color: #6fb679;
}

.sky-form .message i {
  display: block;
  margin: 0 auto 20px;
  width: 81px;
  height: 81px;
  border: 1px solid #6fb679;
  border-radius: 50%;
  font-size: 30px;
  line-height: 81px;
}

.sky-form.submited fieldset,
.sky-form.submited footer {
  display: none;
}

.sky-form.submited .message {
  display: block;
  padding: 25px 30px;
  background: rgba(255, 255, 255, 0.9);
  font: 300 18px/27px "Open Sans", Helvetica, Arial, sans-serif;
  text-align: center;
}

/**/
/* inputs */
/**/
.sky-form .input,
.sky-form .textarea,
.sky-form .select {
  margin-right: 15px;
}

/**/
/* file inputs */
/**/
.sky-form .input-file .button {
  position: absolute;
  top: 4px;
  right: 4px;
  float: none;
  height: 31px;
  margin: 0;
  padding: 0 20px;
  font-size: 13px;
  line-height: 31px;
}

.sky-form .input-file .button:hover {
  box-shadow: none;
}

.sky-form .input-file .button input {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  font-size: 30px;
  cursor: pointer;
  opacity: 0;
}

/**/
/* selects */
/**/
.sky-form .select i {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 1px;
  height: 11px;
  background: #fff;
  box-shadow: 0 0 0 12px #fff;
}

.sky-form .select i:after,
.sky-form .select i:before {
  content: "";
  position: absolute;
  right: 0;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}

.sky-form .select i:after {
  bottom: 0;
  border-top: 4px solid #404040;
}

.sky-form .select i:before {
  top: 0;
  border-bottom: 4px solid #404040;
}

.sky-form .select-multiple select {
  height: auto;
}

/**/
/* textareas */
/**/
.sky-form .textarea textarea {
  height: auto;
  resize: none;
}

.sky-form .textarea-resizable textarea {
  resize: vertical;
}

.sky-form .textarea-expandable textarea {
  height: 39px;
}

.sky-form .textarea-expandable textarea:focus {
  height: auto;
}

/**/
/* radios and checkboxes */
/**/
.sky-form .radio,
.sky-form .checkbox {
  margin-bottom: 4px;
  padding-left: 27px;
  font-size: 15px;
  line-height: 27px;
  color: #404040;
  cursor: pointer;
}

.sky-form .radio:last-child,
.sky-form .checkbox:last-child {
  margin-bottom: 0;
}

.sky-form .radio input,
.sky-form .checkbox input {
  position: absolute;
  left: -9999px;
}

.sky-form .radio i,
.sky-form .checkbox i {
  position: absolute;
  top: 5px;
  left: 0;
  display: block;
  width: 13px;
  height: 13px;
  outline: none;
  border-width: 2px;
  border-style: solid;
  background: #fff;
}

.sky-form .radio i {
  border-radius: 50%;
}

.sky-form .radio input + i:after,
.sky-form .checkbox input + i:after {
  position: absolute;
  opacity: 0;
  transition: opacity 0.1s;
  -o-transition: opacity 0.1s;
  -ms-transition: opacity 0.1s;
  -moz-transition: opacity 0.1s;
  -webkit-transition: opacity 0.1s;
}

.sky-form .radio input + i:after {
  content: "";
  top: 4px;
  left: 4px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #2da5da;
}

.sky-form .checkbox input + i:after {
  content: "\f00c";
  top: -1px;
  left: -1px;
  width: 15px;
  height: 15px;
  font: normal 12px/16px FontAwesome;
  text-align: center;
  color: #2da5da;
}

.sky-form .inline-group {
  margin: 0 -30px -4px 0;
}

.sky-form .inline-group:after {
  content: "";
  display: table;
  clear: both;
}

.sky-form .inline-group .radio,
.sky-form .inline-group .checkbox {
  float: left;
  margin-right: 30px;
}

.sky-form .inline-group .radio:last-child,
.sky-form .inline-group .checkbox:last-child {
  margin-bottom: 4px;
}

/**/
/* toggles */
/**/
.sky-form .toggle {
  margin-bottom: 4px;
  padding-right: 61px;
  font-size: 15px;
  line-height: 27px;
  color: #404040;
  cursor: pointer;
}

.sky-form .toggle:last-child {
  margin-bottom: 0;
}

.sky-form .toggle input {
  position: absolute;
  left: -9999px;
}

.sky-form .toggle i {
  content: "";
  position: absolute;
  top: 4px;
  right: 0;
  display: block;
  width: 49px;
  height: 17px;
  border-width: 2px;
  border-style: solid;
  border-radius: 12px;
  background: #fff;
}

.sky-form .toggle i:after {
  content: "OFF";
  position: absolute;
  top: 2px;
  right: 8px;
  left: 8px;
  font-style: normal;
  font-size: 9px;
  line-height: 13px;
  font-weight: 700;
  text-align: left;
  color: #5f5f5f;
}

.sky-form .toggle i:before {
  background-color: #2da5da;
  content: "";
  position: absolute;
  z-index: 1;
  top: 4px;
  right: 4px;
  display: block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  opacity: 1;
  transition: right 0.2s;
  -o-transition: right 0.2s;
  -ms-transition: right 0.2s;
  -moz-transition: right 0.2s;
  -webkit-transition: right 0.2s;
}

/**/
/* ratings */
/**/
.sky-form .rating {
  margin-bottom: 4px;
  font-size: 15px;
  line-height: 27px;
  color: #404040;
}

.sky-form .rating:last-child {
  margin-bottom: 0;
}

.sky-form .rating input {
  position: absolute;
  left: -9999px;
}

.sky-form .rating label {
  display: block;
  float: right;
  height: 17px;
  margin-top: 5px;
  padding: 0 2px;
  font-size: 17px;
  line-height: 17px;
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
  -o-transition: color 0.3s;
  -ms-transition: color 0.3s;
  -moz-transition: color 0.3s;
  -webkit-transition: color 0.3s;
}

/**/
/* checked state - radio, checkbox, toggle & rating */
/**/

.sky-form .radio input:checked + i:after,
.sky-form .checkbox input:checked + i:after {
  opacity: 1;
}

.sky-form .radio input:checked + i,
.sky-form .checkbox input:checked + i,
.sky-form .toggle input:checked + i {
  border-color: #2da5da;
}

.sky-form .rating input:checked ~ label {
  color: #2da5da;
}

.sky-form .toggle input:checked + i:after {
  content: "ON";
  text-align: right;
}

.sky-form .toggle input:checked + i:before {
  right: 36px;
}

/**/
/* buttons */
/**/
.sky-form .button {
  float: right;
  height: 39px;
  overflow: hidden;
  margin: 10px 0 0 20px;
  padding: 0 25px;
  outline: none;
  border: 0;
  font: 300 15px/39px "Open Sans", Helvetica, Arial, sans-serif;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  background-color: #2da5da;
  opacity: 0.8;
  transition: opacity 0.2s;
  -o-transition: opacity 0.2s;
  -ms-transition: opacity 0.2s;
  -moz-transition: opacity 0.2s;
  -webkit-transition: opacity 0.2s;
}

.sky-form .button.button-secondary {
  background-color: #b3b3b3;
}

/**/
/* datepicker */
/**/
.ui-datepicker {
  display: none;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  font: 13px/1.55 "Open Sans", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #666;
}

.ui-datepicker a {
  color: #404040;
}

.ui-datepicker-header {
  position: relative;
  margin: -10px -12px 10px;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 15px;
  line-height: 27px;
}

.ui-datepicker-prev,
.ui-datepicker-next {
  position: absolute;
  top: 0;
  display: block;
  width: 47px;
  height: 47px;
  font-size: 15px;
  line-height: 47px;
  text-decoration: none;
  cursor: pointer;
}

.ui-datepicker-prev {
  left: 0;
}

.ui-datepicker-next {
  right: 0;
}

.ui-datepicker-calendar {
  border-collapse: collapse;
  font-size: 13px;
  line-height: 27px;
}

.ui-datepicker-calendar th {
  color: #999;
}

.ui-datepicker-calendar a,
.ui-datepicker-calendar span {
  display: block;
  width: 31px;
  margin: auto;
  text-decoration: none;
  color: #404040;
}

.ui-datepicker-calendar a:hover {
  background: rgba(0, 0, 0, 0.05);
}

.ui-datepicker-calendar span {
  color: #bfbfbf;
}

.ui-datepicker-today a {
  font-weight: 700;
}

.ui-datepicker-calendar .ui-state-active {
  background: rgba(0, 0, 0, 0.05);
  cursor: default;
}

.ui-datepicker-inline {
  border: 2px solid #e5e5e5;
  background: #fff;
  box-shadow: none;
}

.ui-datepicker-inline .ui-datepicker-calendar {
  width: 100%;
}


</style>