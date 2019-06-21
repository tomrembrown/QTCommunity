'use strict'

// Import user links
const Home = () =>
  import(/* webpackChunkName: "Home" */ '../view/components/user/home.vue')
const Events = () =>
  import(
    /* webpackChunkName: "Events" */ '../view/components/user/events/events.vue'
  )
const Organizations = () =>
  import(
    /* webpackChunkName: "Organizations" */ '../view/components/user/organizations/organizations.vue'
  )
const AboutUs = () =>
  import(
    /* webpackChunkName: "AboutUs" */ '../view/components/user/aboutUs.vue'
  )
const ContactUs = () =>
  import(
    /* webpackChunkName: "ContactUs" */ '../view/components/user/contactUs.vue'
  )

// Import admin links - logged out status
const RegisterOrganization = () =>
  import(
    /* webpackChunkName: "RegisterOrganization" */ '../view/components/admin/registerOrganization/registerOrganization.vue'
  )
const OrganizationLogin = () =>
  import(
    /* webpackChunkName: "OrganizationLogin" */ '../view/components/admin/organizationLogin/organizationLogin.vue'
  )

// Import admin links - logged in status
const EditOrganization = () =>
  import(
    /* webpackChunkName: "EditOrganization" */ '../view/components/admin/editOrganization/editOrganization.vue'
  )
const EditPlaces = () =>
  import(
    /* webpackChunkName: "EditPlaces" */ '../view/components/admin/editPlaces/editPlaces.vue'
  )
const EditEvents = () =>
  import(
    /* webpackChunkName: "RegisterOrganization" */ '../view/components/admin/editEvents/editEvents.vue'
  )

// Import General LInks
const PageNotFound = () =>
  import(
    /* webpackChunkName: "PageNotFound" */ '../view/components/general/pageNotFound.vue'
  )

export const routes = [
  { path: '', name: 'Home', component: Home },
  { path: '/events', name: 'Events', component: Events },
  { path: '/organizations', name: 'Organizations', component: Organizations },
  { path: '/aboutUs', name: 'AboutUs', component: AboutUs },
  { path: '/contactUs', name: 'ContactUs', component: ContactUs },
  {
    path: '/registerOrganization',
    name: 'RegisterOrganization',
    component: RegisterOrganization
  },
  {
    path: '/organizationLogin',
    name: 'OrganizationLogin',
    component: OrganizationLogin
  },
  {
    path: '/editOrganization',
    name: 'EditOrganization',
    component: EditOrganization
  },
  {
    path: '/editPlaces',
    name: 'EditPlaces',
    component: EditPlaces
  },
  {
    path: '/editEvents',
    name: 'EditEvents',
    component: EditEvents
  },
  { path: '*', name: 'PageNotFound', component: PageNotFound }
]
