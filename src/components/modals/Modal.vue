<template>
  <div class="modal" v-show="modal">
    <component :is="modal"></component>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import AppAddContact from '@/components/modals/AddContact.vue';
import AppAddNewField from '@/components/modals/AddNewField.vue';

export default {
  name: 'AppModal',

  components: {
    AppAddContact,
    AppAddNewField
  },

  computed: {
    ...mapState(['modal'])
  }
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  padding: 10px;
  width: 100%;
  max-width: 300px;
  border-radius: 2px;
  background-color: #fff;
  transform: translate(-50%, -50%);
}
</style>
