<template>
  <section class="contact">
    <div class="container">
      <router-link class="contact__link" :to="{name: 'home'}">Back to home page</router-link>
      <div class="contact__wrapper" v-if="contact">
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
              v-model.lazy="contact[key].value"
              @change="editContact(key, contact[key].value)"
            />
            <i class="contact__clear" @click="clearField(key)">x</i>
          </div>
          <button class="btn" @click="showModal('AppAddNewField')">Add new field</button>
          <!-- <button
            class="btn btn_blue"
            style="margin-left: 10px"
            @click="deleteLastAction({id: $route.params.id})"
          >
            Undo the last step
          </button> -->
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
      showModal: 'showModal',
      deleteField: 'contacts/deleteField',
      deleteLastAction: 'contacts/deleteLastAction'
    }),

    clearField(key) {
      if (confirm('Are you sure you want to clear field?')) {
        this.contact[key] = '';
      }
    },

    editContact(key, value) {
      this.$store.commit('contacts/editContact', {
        key: key,
        data: {
          value: value,
          actionsHistory: [{value: value}]
        },
        id: this.$route.params.id
      });
    }
  },

  computed: {
    ...mapGetters('contacts', ['getContact']),

    contact() {
      let contact = this.getContact(this.$route.params.id);
      return contact;
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
