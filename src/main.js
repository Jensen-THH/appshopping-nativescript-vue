import Vue from 'nativescript-vue'
import App from './components/App'
import Signin from './components/signin'

import Products from './store/index'
import Vuex from 'vuex'
import RadDataForm from 'nativescript-ui-dataform/vue';
Vue.use(RadDataForm);



import RadListView from 'nativescript-ui-listview/vue';
Vue.use(RadListView);
Vue.registerElement('AutoFocusView', () => require('./searchbarfocus').AutoFocusView)
// Vue.registerElement("Gradient", () => require("nativescript-gradient").Gradient);

Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);

Vue.use(Vuex)
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)


import * as ApplicationSettings from 'tns-core-modules/application-settings';
function isLoaddedIn() {
  return ApplicationSettings.getString('is_logged_in') == 'false';
}
new Vue({
  store:Products,
  render: h => h('frame', [h(App)])
  // render: h => h('frame', [h(isLoaddedIn() ? App : Signin)])
}).$start()
