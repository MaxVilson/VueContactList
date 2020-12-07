<template>
  <div class="page-home">
    <app-contacts-list />
  </div>
</template>

<script>
import AppContactsList from '@/components/ContactsList';

export default {
  components: {
    AppContactsList
  },

  mounted() {
    this.$store.dispatch('contacts/getContacts');
  }
};
</script>
