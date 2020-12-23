import Vue from 'vue';
import {v4 as uuidv4} from 'uuid';
import {
  setItem,
  getItem,
  editItem,
  editInnerItem,
  deleteInnerItem,
  deleteItem
} from '@/helpers/localStorage.js';

export default {
  namespaced: true,

  state: {
    contacts: []
  },

  getters: {
    getAllContacts: state => state.contacts,
    getContact: state => id => state.contacts.find(contact => contact.id == id)
  },

  mutations: {
    setContact(state, payload) {
      payload.id = uuidv4();
      state.contacts.push(payload);
      setItem('contacts', state.contacts);
    },

    setContacts(state, payload) {
      state.contacts = payload;
    },

    setNewField(state, payload) {
      const index = state.contacts.findIndex(contact => contact.id === payload.id);
      Vue.set(state.contacts[index], payload.key, payload.data);
      editInnerItem('contacts', index, {key: payload.key, value: payload.data});
    },

    editContact(state, payload) {
      const index = state.contacts.findIndex(contact => contact.id === payload.id);
      // eslint-disable-next-line no-prototype-builtins
      if (state.contacts[index][payload.key].hasOwnProperty('actionsHistory')) {
        state.contacts[index][payload.key].actionsHistory.push(payload.data.actionsHistory[0]);
      } else {
        state.contacts[index][payload.key].actionsHistory = [];
        state.contacts[index][payload.key].actionsHistory.push(payload.data.actionsHistory[0]);
      }
      Vue.set(state.contacts[index], payload.key.val, payload.data.value);
      console.log(state.contacts[index]);
      console.log(payload.key.value);
      editItem('contacts', index, {key: payload.key, value: payload.data.value});
    },

    // deleteLastAction(state, payload) {
    //   // const index = state.contacts.findIndex(contact => contact.id === payload.id);
    //   // const newState = Object.entries(state.contacts[index]).splice(-1, 1);
    //   // Vue.set(state.contacts[index], payload.key, payload.value);
    // },

    deleteField(state, payload) {
      if (confirm('Are you sure you want to delete the field?')) {
        const index = state.contacts.findIndex(contact => contact.id === payload.id);
        Vue.delete(state.contacts[index], payload.key);
        deleteInnerItem('contacts', index, {key: payload.key});
      }
    },

    deleteContact(state, id) {
      if (confirm('Are you sure you want to delete the contact?')) {
        const index = state.contacts.findIndex(contact => contact.id === id);
        state.contacts.splice(index, 1);
        deleteItem('contacts', index);
      }
    }
  },

  actions: {
    getContacts({commit}) {
      getItem('contacts').then(res => {
        if (res) {
          commit('setContacts', res);
        }
      });
    }
  }
};
