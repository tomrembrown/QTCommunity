import AboutUs from '../view/templates/aboutUs/aboutUs.vue';
import ContactUs from '../view/templates/contactUs/contactUs.vue';
import CreateEvent from '../view/templates/createEvent/createEvent.vue';
import Events from '../view/templates/events/events.vue';
import Home from '../view/templates/home/home.vue';
import Organizations from '../view/templates/organizations/organizations.vue';

export const routes = [
  { path: '', name: 'Home', component: Home },
  { path: '/events', name: 'Events', component: Events },
  { path: '/organizations', name: 'Organizations', component: Organizations },
  { path: '/aboutUs', name: 'AboutUs', component: AboutUs },
  { path: '/contactUs', name: 'ContactUs', component: ContactUs },
  { path: '/createEvent', name: 'CreateEvent', component: CreateEvent }
];