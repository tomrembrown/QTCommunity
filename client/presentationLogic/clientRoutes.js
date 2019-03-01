const AboutUs = () => import(/* webpackChunkName: "AboutUs" */'../view/templates/aboutUs/aboutUs.vue');
const ContactUs = () => import(/* webpackChunkName: "ContactUs" */'../view/templates/contactUs/contactUs.vue');
const CreateEvent = () => import(/* webpackChunkName: "CreateEvent" */'../view/templates/createEvent/createEvent.vue');
const Events = () => import(/* webpackChunkName: "Events" */'../view/templates/events/events.vue');
const Home = () => import(/* webpackChunkName: "Home" */'../view/templates/home/home.vue');
const Organizations = () => import(/* webpackChunkName: "Organizations" */'../view/templates/organizations/organizations.vue');

export const routes = [
  { path: '', name: 'Home', component: Home },
  { path: '/events', name: 'Events', component: Events },
  { path: '/organizations', name: 'Organizations', component: Organizations },
  { path: '/aboutUs', name: 'AboutUs', component: AboutUs },
  { path: '/contactUs', name: 'ContactUs', component: ContactUs },
  { path: '/createEvent', name: 'CreateEvent', component: CreateEvent }
];