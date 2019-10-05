'use strict'

import siteLogin from './store/modules/siteLogin'

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
const ManagePlaces = () =>
  import(
    /* webpackChunkName: "ManagePlaces" */ '../view/components/admin/managePlaces/managePlaces.vue'
  )
const ManageEvents = () =>
  import(
    /* webpackChunkName: "ManageOrganization" */ '../view/components/admin/manageEvents/manageEvents.vue'
  )

// Import General LInks
const PageNotFound = () =>
  import(
    /* webpackChunkName: "PageNotFound" */ '../view/components/general/pageNotFound.vue'
  )

const checkRoute = (to, from, next) => {
  if (to.name === 'Home') {
    next()
  } else {
    if (siteLogin.state.agreedToTerms) {
      next()
    } else {
      next('/')
    }
  }
}

export const routes = [
  { path: '', name: 'Home', component: Home, beforeEnter: checkRoute },
  {
    path: '/events',
    name: 'Events',
    component: Events,
    beforeEnter: checkRoute
  },
  {
    path: '/organizations',
    name: 'Organizations',
    component: Organizations,
    beforeEnter: checkRoute
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    component: AboutUs,
    beforeEnter: checkRoute
  },
  {
    path: '/contactUs',
    name: 'ContactUs',
    component: ContactUs,
    beforeEnter: checkRoute
  },
  {
    path: '/registerOrganization',
    name: 'RegisterOrganization',
    component: RegisterOrganization,
    beforeEnter: checkRoute
  },
  {
    path: '/organizationLogin',
    name: 'OrganizationLogin',
    component: OrganizationLogin,
    beforeEnter: checkRoute
  },
  {
    path: '/editOrganization',
    name: 'EditOrganization',
    component: EditOrganization,
    beforeEnter: checkRoute
  },
  {
    path: '/managePlaces',
    name: 'ManagePlaces',
    component: ManagePlaces,
    beforeEnter: checkRoute
  },
  {
    path: '/manageEvents',
    name: 'ManageEvents',
    component: ManageEvents,
    beforeEnter: checkRoute
  },
  { path: '*', name: 'PageNotFound', component: PageNotFound }
]
