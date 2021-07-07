import Vue from 'nativescript-vue'
import App from './components/App'

import Products from './store/index'
import Vuex from 'vuex'



import RadListView from 'nativescript-ui-listview/vue';
Vue.use(RadListView);
Vue.registerElement('AutoFocusView', () => require('./searchbarfocus').AutoFocusView)

Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);

Vue.use(Vuex)
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)

new Vue({
  store:Products,
  render: h => h('frame', [h(App)])
}).$start()
