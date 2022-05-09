<template>
  <header class="border-bottom mb-3 bg-light">
    <div class="container">
      <div class="d-flex justify-content-between py-3">
        <ul class="nav nav-pills">
          <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
          <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
        </ul>
        <div class="text-end d-flex" v-if="this.$store.state.user">
          <button class="btn btn-primary me-2">User Details</button>
          <button @click="$store.dispatch('logout')" role="button" class="btn btn-outline-primary me-2">Logout</button>
        </div>
        <div class="text-end" v-else>
          <router-link to="/login" role="button" class="btn btn-outline-primary me-2">Login</router-link>
          <router-link to="/register" role="button" class="btn btn-primary">Sign-up</router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default { name: 'Navigation' }
</script>
<style lang="scss">
  header {
    width: 100%;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
  }
  .nav-link {
    color: var(--bs-dark);
    &.router-link-active {
      &.router-link-exact-active {
        color: var(--bs-primary);
        font-weight: 700;
        box-shadow: inset 0 0 0 1px var(--bs-primary);
        background-color: rgba(var(--bs-primary-rgb), .15);
      }
    }
  }
  
</style>