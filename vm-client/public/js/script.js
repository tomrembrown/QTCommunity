new Vue({
	el: '#app',
	data: {
		quote: 'to put here',
		person: 'a person',
		header: '',
		isCalendar: false,
		isContact: false,
		isAbout: false,
		isAddEvent: false,
		isLogin: false,
		isEditDeleteEvents: false,
		isRegisterOrganization: false,
		isAddVolunteer: false,
		isEditDeleteVolunteer: false,
		isOrganizations: false,
		isVolunteer: false
	},
	methods: {
		displayCalendar: function() {
			this.getQuote();
			this.header = 'Events';
			this.setAllLinksFalse();
			this.isCalendar = true;
		},
		displayContact: function() {
			this.getQuote();
			this.header = 'Contact Us';
			this.setAllLinksFalse();
			this.isContact = true;
		},
		displayAbout: function() {
			this.getQuote();
			this.header = 'About Queer Toronto';
			this.setAllLinksFalse();
			this.isAbout = true;
		},
		displayAddEvent: function() {
			this.getQuote();
			this.header = 'Add Event';
			this.setAllLinksFalse();
			this.isAddEvent = true;
		},
		displayLogin: function() {
			this.getQuote();
			this.header = 'Login';
			this.setAllLinksFalse();
			this.isLogin = true;
		},
		displayEditDeleteEvents: function() {
			this.getQuote();
			this.header = 'Edit / Delete Events';
			this.setAllLinksFalse();
			this.isEditDeleteEvents = true;
		},
		displayEditOrganization: function() {
			this.getQuote();
			this.header = 'Edit Organization';
			this.setAllLinksFalse();
			this.isEditOrganization = true;
		},
		displayRegisterOrganization: function() {
			this.getQuote();
			this.header = 'Register Organization';
			this.setAllLinksFalse();
			this.isRegisterOrganization = true;
		},
		displayAddVolunteer: function() {
			this.getQuote();
			this.header = 'Add Volunteer Opportunity';
			this.setAllLinksFalse();
			this.isAddVolunteer = true;
		},
		displayEditDeleteVolunteer: function() {
			this.getQuote();
			this.header = 'Edit / Delete Volunteer Opportunity';
			this.setAllLinksFalse();
			this.isEditDeleteVolunteer = true;
		},
		displayOrganizations: function() {
			this.getQuote();
			this.header = 'Organizations';
			this.setAllLinksFalse();
			this.isOrganizations = true;
		},
		displayVolunteer: function() {
			this.getQuote();
			this.header = 'Volunteer Opportunities';
			this.setAllLinksFalse();
			this.isVolunteer = true;
		},
		getQuote: function() {
			this.$http
				.get('/ajaxRoutes/getRandomQuote')
				.then(function(res) {
					this.quote = res.data.quote;
					this.person = res.data.person;
				});
		},
		setAllLinksFalse: function() {
			this.isCalendar = false;
			this.isContact = false;
			this.isAbout = false;
			this.isAddEvent = false;
			this.isLogin = false;
			this.isEditDeleteEvents = false;
			this.isRegisterOrganizations = false;
			this.isAddVolunteer = false;
			this.isEditDeleteVolunteer = false;
			this.isOrganizations = false;
			this.isVolunteer = false;
		}
	},
	beforeMount() {
		this.displayCalendar();
	}
});
