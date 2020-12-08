<template>
  <form class="form" @submit.prevent="setContact(), closeModal()">
    <div class="form-group">
      <label for="name">Name</label>
      <input id="name" class="form-control" type="text" v-model="name" />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input id="email" class="form-control" type="email" v-model="email" />
    </div>
    <div class="form-group">
      <label for="phone">Phone</label>
      <input id="phone" class="form-control" type="number" v-model="phone" />
    </div>
    <button class="btn" type="submit">Add new contact</button>
  </form>
</template>

<script>
export default {
  name: 'AppAddContact',

  data() {
    return {
      name: null,
      email: null,
      phone: null
    };
  },

  methods: {
    closeModal() {
      this.$store.commit('closeModal');
    },

    setContact() {
      this.$store.commit('contacts/setContact', {
        name: {
          value: this.name
        },
        email: {
          value: this.email
        },
        phone: {
          value: this.phone
        }
      });
    }
  }
};
</script>
