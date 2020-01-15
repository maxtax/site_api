import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    site_id: 0, //used to show a sites devices
    user_id: "" //used to show the sites that one user has access to
  },
  mutations: {
    //retrive the state
    add_new_site_id(state, payload) {
      state.site_id = payload
    },
    add_new_user_id(state, new_id) {
      state.user_id = new_id
    },
  },
  getters: {
    //modify the state
    get_site_id: state => {
      return state.site_id
    },
    get_user_id: state => {
      return state.user_id
    }
  }
});