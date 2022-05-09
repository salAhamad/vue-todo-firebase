<template>
  <div class="form_main_container">
    <router-link to="/" class="back-btn btn btn-light shadow">Back to Home</router-link>
    <div class="form_container text-center">
      <form class="d-flex flex-column">
        <h3 class="mb-4">Login</h3>
        <input autocomplete="off" class="border" :class="{'is-invalid': this.$store.state.validationError}" type="text" v-model="login_form.email" placeholder="Enter Email...">
        <input autocomplete="off" class="border" type="password" v-model="login_form.password" placeholder="Enter Password...">
        <!-- <p class="text-danger" v-show="this.$store.state.validationError">{{this.$store.errorMessage}} sadsdf</p> -->
        <button class="btn btn-primary btn-lg" type="submit" @click.prevent="login">Submit</button>
        <router-link to="/reset-password" class="form-link mt-4 text-dark fst-italic">Lost your password?</router-link>
      </form>
      
      <p class="mt-4">
        Don't have an account? <br />
        <router-link to="/register" class="btn btn-sm btn-outline-dark px-3 mt-2">Register Now</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useStore } from 'vuex';

export default {
  name: 'LogIn',
  setup() {
    const login_form = ref({})
    const store = useStore()
    const login = () => {
      store.dispatch('login', login_form.value)
    }
    return { login_form, login }
  },
  computed: {
    FORM_VALIDATION() {
      return this.$store.validationError  
    }
  }
}
</script>
<style lang="scss">
  .form_main_container {
    background-color: #ccc;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    .back-btn {
      position: absolute;
      top: 2.5vw;
      left: 2.5vw;
    }

    form {
      position: relative;
      background-color: var(--bs-white);
      padding: 2.5rem;
      border-radius: .5rem;
      box-shadow: 0 5px 10px rgba(var(--bs-dark-rgb), 0.1);
      text-align: center;
      input {
        width: 100%;
        max-width: 350px;
        min-width: 350px;
        height: 48px;
        border-radius: .25rem;
        margin-bottom: 1rem;
        border: 0;
        padding: 0 1rem;
        background-color: var(--bs-gray-100);
        &:focus {outline: none;}
      }
      .form-link {
        display: inline-block;
      }
    }
  }
</style>