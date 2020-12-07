import Vue from 'vue';
import {
  setItem,
  getItem,
  editItem,
  editInnerItem,
  deleteInnerItem,
  deleteItem
} from '@/helpers/localStorage.js';

// eslint-disable-next-line no-unused-vars
let id = 0;

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
      id++;
      payload.id = id;
      state.contacts.push(payload);
      setItem('contacts', state.contacts);
    },

    setContacts(state, payload) {
      state.contacts = payload;
    },

    setNewField(state, payload) {
      const index = state.contacts.findIndex(contact => contact.id === payload.id);
      Vue.set(state.contacts[index], payload.key, payload.value);
      editInnerItem('contacts', index, {key: payload.key, value: payload.value});
    },

    deleteLastAction(state, payload) {
      const index = state.contacts.findIndex(contact => contact.id === payload.id);
      const newState = Object.entries(state.contacts[index]).splice(-1, 1);
      // Vue.set(state.contacts[index], payload.key, payload.value);
      console.log(newState);
    },

    deleteField(state, payload) {
      if (confirm('Are you sure you want to delete the field?')) {
        const index = state.contacts.findIndex(contact => contact.id === payload.id);
        Vue.delete(state.contacts[index], payload.key);
        deleteInnerItem('contacts', index, {key: payload.key});
      }
    },

    editContact(state, payload) {
      const index = state.contacts.findIndex(contact => contact.id === payload.id);
      state.contacts[index] = payload;
      editItem('contacts', index, payload);
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
