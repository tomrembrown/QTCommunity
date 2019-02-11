new Vue({
	el: '#app',
	data: {
		quotation: 'to put here',
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
			this.getRandomQuotation();
			this.header = 'Events';
			this.setAllLinksFalse();
			this.isCalendar = true;
		},
		displayContact: function() {
			this.getRandomQuotation();
			this.header = 'Contact Us';
			this.setAllLinksFalse();
			this.isContact = true;
		},
		displayAbout: function() {
			this.getRandomQuotation();
			this.header = 'About Queer Toronto';
			this.setAllLinksFalse();
			this.isAbout = true;
		},
		displayAddEvent: function() {
			this.getRandomQuotation();
			this.header = 'Add Event';
			this.setAllLinksFalse();
			this.isAddEvent = true;
		},
		displayLogin: function() {
			this.getRandomQuotation();
			this.header = 'Login';
			this.setAllLinksFalse();
			this.isLogin = true;
		},
		displayEditDeleteEvents: function() {
			this.getRandomQuotation();
			this.header = 'Edit / Delete Events';
			this.setAllLinksFalse();
			this.isEditDeleteEvents = true;
		},
		displayEditOrganization: function() {
			this.getRandomQuotation();
			this.header = 'Edit Organization';
			this.setAllLinksFalse();
			this.isEditOrganization = true;
		},
		displayRegisterOrganization: function() {
			this.getRandomQuotation();
			this.header = 'Register Organization';
			this.setAllLinksFalse();
			this.isRegisterOrganization = true;
		},
		displayAddVolunteer: function() {
			this.getRandomQuotation();
			this.header = 'Add Volunteer Opportunity';
			this.setAllLinksFalse();
			this.isAddVolunteer = true;
		},
		displayEditDeleteVolunteer: function() {
			this.getRandomQuotation();
			this.header = 'Edit / Delete Volunteer Opportunity';
			this.setAllLinksFalse();
			this.isEditDeleteVolunteer = true;
		},
		displayOrganizations: function() {
			this.getRandomQuotation();
			this.header = 'Organizations';
			this.setAllLinksFalse();
			this.isOrganizations = true;
		},
		displayVolunteer: function() {
			this.getRandomQuotation();
			this.header = 'Volunteer Opportunities';
			this.setAllLinksFalse();
			this.isVolunteer = true;
		},
		getRandomQuotation: function() {
			this.$http
				.get('/ajaxRoutes/getRandomQuotation')
				.then(function(res) {
					this.quotation = res.data.quotation;
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
