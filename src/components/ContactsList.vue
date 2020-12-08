<template>
  <section class="contacts-list">
    <article class="contacts-list__item" v-for="contact in contacts" :key="contact.id">
      <ul class="contacts-list__item-list">
        <li><b>Name:</b> {{ contact.name.value }}</li>
        <li><b>Email:</b> {{ contact.email.value }}</li>
        <li><b>Phone:</b> {{ contact.phone.value }}</li>
      </ul>
      <div class="contacts-list__item-btns">
        <router-link
          class="btn contacts-list__item-btn"
          :to="{name: 'contact', params: {id: contact.id}}"
          >More details</router-link
        >
        <button class="btn contacts-list__item-btn" @click="deleteContact(contact.id)">
          Delete contact
        </button>
      </div>
    </article>
  </section>
</template>

<script>
import {mapMutations, mapState} from 'vuex';

export default {
  name: 'AppContactsList',

  methods: {
    ...mapMutations('contacts', ['deleteContact'])
  },

  computed: {
    ...mapState('contacts', ['contacts'])
  }
};
</script>

<style lang="scss">
.contacts-list__item {
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  border: 1px solid #b9b9b9;
  border-radius: 5px;
}

.contacts-list__item-list {
  li {
    margin-bottom: 16px;

    b {
      margin-right: 10px;
    }
  }
}

.contacts-list__item-btns {
  margin-left: auto;
}

.contacts-list__item-btn {
  margin-left: 10px;
}
</style>
