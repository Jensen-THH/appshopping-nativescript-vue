
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import * as ApplicationSettings from "application-settings";
import shirt from './shirt.json';
import dress from './dress.json';
import dress1 from './dress1.json';
import pant from './pant.json';
Vue.use(Vuex);


const Products = new Store({
  state: {
    shirt : shirt,
    dress : dress,
    dress1 : dress1,
    pant : pant,
  },
  mutations: {
    load(state) {
      if (ApplicationSettings.getString("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(ApplicationSettings.getString("store")))
        );
      }
    },
  },
  actions: {

  }
});
export default Products
