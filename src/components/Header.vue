<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <h1 class="header__logo">My contact list</h1>
        <button
          class="btn header__btn"
          @click="showModal('AppAddContact')"
          v-if="$route.name === 'home'"
        >
          Add new contact
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  name: 'AppHeader',

  methods: {
    ...mapMutations(['showModal'])
  }
};
</script>

<style lang="scss">
.header__wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.header__logo {
  font-size: 2rem;
  font-weight: 500;
  color: #363636;
}

.header__btn {
  margin-left: auto;
}
</style>
