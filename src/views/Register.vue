<template>
  <div class="form_main_container">
    <router-link to="/" class="back-btn btn btn-light shadow">Back to Home</router-link>
    <div class="form_container text-center">
      <form class="d-flex flex-column">
        <h3 class="mb-4">Register</h3>
        <input autocomplete="off" v-model="register_form.userName" class="border" type="text" placeholder="User Name">
        <input autocomplete="off" v-model="register_form.firstName" class="border" type="text" placeholder="First Name">
        <input autocomplete="off" v-model="register_form.lastName" class="border" type="text" placeholder="Last Name">
        <input autocomplete="off" v-model="register_form.email" class="border" type="text" placeholder="Email...">
        <input autocomplete="off" v-model="register_form.password" class="border" type="password" placeholder="Password">
        <button class="btn btn-primary btn-lg" type="submit" @click.prevent="register">Submit</button>
      </form>
      <p class="mt-4">
        Already have an account? <br />
        <router-link to="/login" class="btn btn-sm btn-outline-dark px-3 mt-2">Sign In</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'Register',
  data() {
    return {}
  },
  setup() {
    const register_form = ref({});
    const store = useStore();
    const register = () => {
      const { email, password, userName, firstName, lastName } = register_form.value;
      if(email && password && userName && firstName && lastName) {
        store.dispatch('register', register_form.value);
      } else {
        alert('All fields are required')
      }
    }
    return {
      register_form,
      register
    }
  },
  methods: {
  },
}
</script>