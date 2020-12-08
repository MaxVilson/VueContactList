<template>
  <form class="form" @submit.prevent="setNewField(), closeModal()">
    <div class="form-group">
      <label for="key">Key</label>
      <input id="key" class="form-control" type="text" v-model="key" />
    </div>
    <div class="form-group">
      <label for="value">Value</label>
      <input id="value" class="form-control" type="text" v-model="value" />
    </div>
    <button class="btn" type="submit">Add new contact</button>
  </form>
</template>

<script>
export default {
  name: 'AppAddNewField',

  data() {
    return {
      key: null,
      value: null
    };
  },

  methods: {
    closeModal() {
      this.$store.commit('closeModal');
    },

    setNewField() {
      this.$store.commit('contacts/setNewField', {
        key: this.key,
        data: {
          value: this.value,
          actionsHistory: [
            {
              [this.key]: this.value
            }
          ]
        },
        id: +this.$route.params.id
      });
    }
  }
};
</script>
