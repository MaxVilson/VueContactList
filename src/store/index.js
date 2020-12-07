import Vue from 'vue';
import Vuex from 'vuex';
import contacts from '@/store/modules/contacts.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modal: null,
    isShowModal: false
  },

  mutations: {
    showModal(state, payload) {
      state.isShowModal = true;
      state.modal = payload;
    },

    closeModal(state) {
      state.isShowModal = false;
      state.modal = null;
    }
  },

  actions: {},

  modules: {
    contacts
  }
});
