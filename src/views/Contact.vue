<template>
  <section class="contact" v-if="hasContact">
    <div class="container">
      <router-link class="contact__link" :to="{name: 'home'}">Back to home page</router-link>
      <div class="contact__wrapper">
        <div class="form contact__form">
          <div
            class="form-group contact__group"
            v-for="(value, key, i) in contact"
            :key="key + i"
            v-show="key !== 'id'"
          >
            <div class="d-flex">
              <label :for="key">{{ key }}</label>
              <span class="contact__delete" @click="deleteField({key: key, id: +$route.params.id})"
                >Delete field</span
              >
            </div>
            <input
              :id="key"
              class="form-control"
              type="text"
              :placeholder="value"
              v-model="contact[key]"
            />
            <i class="contact__clear" @click="clearField(key)">X</i>
          </div>
          <button class="btn" @click="showModal('AppAddNewField')">Add new field</button>
          <button
            class="btn btn_blue"
            style="margin-left: 10px"
            @click="deleteLastAction({id: +$route.params.id})"
          >
            Undo the last step
          </button>
          <button class="btn btn_red" style="margin-left: 10px" @click="editContact(contact)">
            Save
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  methods: {
    ...mapMutations({
      editContact: 'contacts/editContact',
      showModal: 'showModal',
      deleteField: 'contacts/deleteField',
      deleteLastAction: 'contacts/deleteLastAction'
    }),

    clearField(key) {
      if (confirm('Are you sure you want to clear field?')) {
        this.contact[key] = '';
      }
    }
  },

  computed: {
    ...mapGetters('contacts', ['getContact']),

    contact() {
      return this.getContact(+this.$route.params.id);
    },

    hasContact() {
      return typeof this.contact !== 'undefined';
    }
  },

  mounted() {
    this.$store.dispatch('contacts/getContacts');
  }
};
</script>

<style lang="scss">
.contact__wrapper {
  display: flex;
  justify-content: center;
}

.contact__form {
  width: 100%;

  @media (min-width: 768px) {
    width: 80%;
  }
}

.contact__group {
  position: relative;
}

.contact__clear {
  position: absolute;
  top: 50%;
  right: 10px;
  font-style: normal;
  cursor: pointer;
}

.contact__delete {
  margin-left: auto;
  font-size: 12px;
  color: red;
  cursor: pointer;
}

.contact__link {
  display: inline-flex;
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 20px;
  color: #363636;
}
</style>
