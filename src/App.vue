<template>
  <Navigation v-show="!navEnabling" />
  <router-view />
</template>
<script>
import Navigation from '@/components/Navigation.vue'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    Navigation
  },
  data() {
    return {
      navEnabling: true,
    }
  }, 
  setup() {
    const store = useStore()
    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  },
  created() {
    this.checkRoutes();
  },
  methods: {
    checkRoutes() {
      if(
        this.$route.name === 'login' ||
        this.$route.name === 'register' ||
        this.$route.name === 'reset-password'
      ) {
        return this.navEnabling = true;
      }
      this.navEnabling = false;
    }
  },
  mounted() {},
  watch: {
    $route() {
      this.checkRoutes();
    }
  }
}
</script>
<style lang="scss"></style>
