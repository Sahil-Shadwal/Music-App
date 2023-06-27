<template>
  <app-header />
  <router-view/>
  <!-- <router-view v-slot="{ Component }"> -->
    <!-- <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition> -->
  <!-- </router-view> -->

  <app-player />

  <auth-modal />

</template>

<script>
import AppPlayer from '@/components/Player.vue';
import AppHeader from './components/Header-View.vue';
import AuthModal from './components/Auth-View.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AuthModal,
    AppPlayer,
  },
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.18s linear;
}

.fade-leave-to {
  transition: all 0.18s linear;
  opacity: 0;
}
</style>
