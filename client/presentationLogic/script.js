'use strict';
/*
 * script
 *
 * This contains the client-side view-model for the main page, using Vue.js
 * 
 * Modification History
 * 
 * Date             Name                Description
 * February, 2019   Thomas Brown        Initial Creation
 * 
 */

// Close as can get to enumerated type in JS: https://stackoverflow.com/questions/287903/what-is-the-preferred-syntax-for-defining-enums-in-javascript
const PageEnum = Object.freeze(
  {"calendar":0, "contact":1,"about":2,"addEvent":3,
  "login":4,"editDeleteEvents":5, "registerOrganization":6,"addVolunteer":7,
  "editDeleteVolunteer":8,"organizations":9,"volunteer":10});

// What to display as header in each page - order corresponds to order in PageEnum
const HEADERS = [
  'Events','Contact Us', 'About Queer Toronto','Add Event', 
  'Login', 'Edit / Delete Events', 'Register Organization','Add Volunteer Opportunity',
  'Edit / Delete Volunteer Opportunity', 'Organizations', 'Volunteer Opportunities'
];

new Vue({
	el: '#app',
	data: {
		quotation: 'to put here',
    person: 'a person',
    page: PageEnum.calendar
	},
	methods: {
		displayCalendar: function() { this.page = PageEnum.calendar; },
    displayContact: function() { this.page = PageEnum.contact; },
		displayAbout: function() { this.page = PageEnum.about; },
		displayAddEvent: function() { this.page = PageEnum.addEvent; },
		displayLogin: function() { this.page = PageEnum.login; },
		displayEditDeleteEvents: function() { this.page = PageEnum.editDeleteEvents; },
    displayRegisterOrganization: function() { this.page = PageEnum.registerOrganization; },
    displayAddVolunteer: function() { this.page = PageEnum.addVolunteer; },
    displayEditDeleteVolunteer: function() { this.page = PageEnum.editDeleteVolunteer; },
    displayOrganizations: function() { this.page = PageEnum.organizations; },
    displayVolunteer: function() { this.page = PageEnum.volunteer; },
    getRandomQuotation: function() {
      this.$http
        .get('readRoutesServer/readRandomQuotation')
        .then(function(res) {
              this.quotation = res.data.quotation;
              this.person = res.data.person;
        });
    }
  },
  computed: {
    header: function() { return HEADERS[this.page]; },
		isCalendar: function() { return this.page === PageEnum.calendar; },
		isContact: function() { return this.page === PageEnum.contact; },
		isAbout: function() { return this.page === PageEnum.about; },
		isAddEvent: function() { return this.page === PageEnum.addEvent; },
		isLogin: function() { return this.page === PageEnum.login; },
		isEditDeleteEvents: function() { return this.page === PageEnum.editDeleteEvents; },
		isRegisterOrganization: function() { return this.page === PageEnum.registerOrganization; },
		isAddVolunteer: function() { return this.page === PageEnum.addVolunteer; },
		isEditDeleteVolunteer: function() { return this.page === PageEnum.editDeleteVolunteer; },
		isOrganizations: function() { return this.page === PageEnum.organizations; },
		isVolunteer: function() { return this.page === PageEnum.volunteer; }
  },
  watch: {
    page: function(newPage, oldPage) {
      this.getRandomQuotation();
		}
  },
  beforeMount() {
    this.getRandomQuotation()
  }
});
