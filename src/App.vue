<template>
  <div
    id="app"
    class="content"
    @click.self="closeModal"
    :class="{overlay: isShowModal}"
  >
    <app-header />
    <router-view />
    <app-modal />
  </div>
</template>

<script>
import 'normalize.css';
import '@/assets/global.scss';
import {mapState} from 'vuex';
import AppModal from '@/components/modals/Modal.vue';
import AppHeader from '@/components/Header.vue';

export default {
  components: {
    AppHeader,
    AppModal
  },

  methods: {
    closeModal() {
      if (this.isShowModal) {
        this.$store.commit('closeModal');
      }
    }
  },

  computed: {
    ...mapState(['isShowModal'])
  }
};
</script>

.<style lang="scss">
.content {
  position: relative;
  flex: 1 0 auto;
}

.overlay {
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
