'use strict'

const AboutUs = () =>
  import(
    /* webpackChunkName: "AboutUs" */ '../view/components/aboutUs/aboutUs.vue'
  )
const ContactUs = () =>
  import(
    /* webpackChunkName: "ContactUs" */ '../view/components/contactUs/contactUs.vue'
  )
const CreateEvent = () =>
  import(
    /* webpackChunkName: "CreateEvent" */ '../view/components/createEvent/createEvent.vue'
  )
const Events = () =>
  import(
    /* webpackChunkName: "Events" */ '../view/components/events/events.vue'
  )
const Home = () =>
  import(/* webpackChunkName: "Home" */ '../view/components/home/home.vue')
const Organizations = () =>
  import(
    /* webpackChunkName: "Organizations" */ '../view/components/organizations/organizations.vue'
  )
const RegisterOrganization = () =>
  import(
    /* webpackChunkName: "RegisterOrganization" */ '../view/components/registerOrganization/registerOrganization.vue'
  )
const PageNotFound = () =>
  import(
    /* webpackChunkName: "PageNotFound" */ '../view/components/pageNotFound/pageNotFound.vue'
  )

export const routes = [
  { path: '', name: 'Home', component: Home },
  { path: '/events', name: 'Events', component: Events },
  { path: '/organizations', name: 'Organizations', component: Organizations },
  { path: '/aboutUs', name: 'AboutUs', component: AboutUs },
  { path: '/contactUs', name: 'ContactUs', component: ContactUs },
  { path: '/createEvent', name: 'CreateEvent', component: CreateEvent },
  {
    path: '/registerOrganization',
    name: 'RegisterOrganization',
    component: RegisterOrganization
  },
  { path: '*', name: 'PageNotFound', component: PageNotFound }
]
