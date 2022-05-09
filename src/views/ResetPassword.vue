<template>
  <div class="form_main_container">
    <router-link to="/" class="back-btn btn btn-light shadow">Back to Home</router-link>
    <div class="form_container text-center">
      <form class="d-flex flex-column">
        <h3 class="mb-4">Login</h3>
        <input class="border" type="text" placeholder="Enter Email...">
        <button class="btn btn-primary btn-lg" type="submit" @click.prevent="login">Submit</button>
        <router-link to="/login" class="form-link mt-4 text-dark fst-italic">Back to Login</router-link>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ResetPassword',
  data() {
    return {
      
    }
  },
}
</script>