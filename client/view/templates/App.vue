<template>
<div id="app">
    <nav class="navbar navbar-expand-xl navbar-dark bg-dark p-0">
      <div class="container">
        <span class="navbar-brand">Queer Toronto</span>           
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav">

            <li class="nav-item px-2">
                    <a  href="/" 
                        @click.prevent="displayCalendar" 
                        class="nav-link"
                        :class="{ active: isCalendar}">
                    Events
                    </a>
                </li>
                <li class="nav-item px-2">
                    <a  href="/" 
                        @click.prevent="displayOrganizations" 
                        class="nav-link"
                        :class="{ active: isOrganizations}">
                    Organizations
                    </a>
                </li>
                <li class="nav-item px-2">
                    <a 
                        href="/"
                        @click.prevent="displayVolunteer" 
                        class="nav-link"
                        :class="{ active: isVolunteer}">
                    Volunteer
                    </a>
                </li>
                <li class="nav-item px-2">
                    <a  href="/" 
                        @click.prevent="displayAbout"
                        class="nav-link"
                        :class="{ active: isAbout}">
                    About Us
                    </a>
                </li>
                <li class="nav-item px-2">
                    <a  href="/" 
                        @click.prevent="displayContact"
                        class="nav-link"
                        :class="{ active: isContact}">
                    Contact Us
                    </a>
                </li>
            </ul>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item px-2">
                    <a  href="/"
                        @click.prevent="displayRegisterOrganization"
                        class="nav-link"
                        :class="{ active: isRegisterOrganization}">
                    <i class="fas fa-user"></i> Register
                    </a>
                </li>
                <li class="nav-item">
                    <a  href="/" 
                        @click.prevent="displayLogin"
                        class="nav-link"
                        :class = "{ active: isLogin}">
                    <i class="fas fa-user"></i> Login
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </nav>

    <header id="main-header">
      <div class="header-wrapper container">
        <div class="quote-wrapper">
          <div class="quote"><i class="fas fa-quote-left"></i> {{quotation}} <i class="fas fa-quote-right"></i></div>
          <div class="attribute">{{person}}</div>
        </div>
        <div class="headliner-wrapper">
          <div class="headliner">
            Queer Toronto x {{header}}
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
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

export default {
  name: 'app',
  data () {
    return {
      quotation: 'to put here',
      person: 'a person',
      page: PageEnum.calendar
    }
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
        .then(function(response) {
              this.quotation = response.data.quotation;
              this.person = response.data.person;
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
}
</script>

<style lang="scss">
@import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css';

#main-header{
	background-size:cover;
	background-image:url('/img/queer-toronto-header-1.jpg');
	background-position:50% 50%;
	width:100%;
	height:500px;
	position:relative;
}

#main-header:after{
	position:absolute;
	content:' ';
	background-color:rgba(0, 0, 0, 0.05);
	width:100%;
	height:100%;
	left:0;
	top:0;
	z-index:5;
}

#main-header .header-wrapper{
	position:relative;
	height:100%;
}

#main-header .quote-wrapper{
	position:absolute;
	width:30%;
	top:25px;
	right:25px;
	z-index:6;
	color:#FFF;
	text-align:right;
}

#main-header .quote-wrapper .quote{
	font-size:1.2em;
	margin-bottom:10px;
}

#main-header .quote-wrapper .attribute{
	font-weight:bold;
}

#main-header .quote-wrapper .attribute:before{
	content:'- ';
}

#main-header .headliner-wrapper{
	position:relative;
	height:100%;
	z-index:6;
}

#main-header .headliner-wrapper .headliner{
	position:absolute;
	bottom:25px;
	font-size:3em;
	color:#FFF;
}
</style>
