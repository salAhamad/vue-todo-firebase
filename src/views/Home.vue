<template>
  <section class="top_hero_section text-center">
    <h6>This is a</h6>
    <h2 class="fw-bold text-danger">Home page</h2>
  </section>
</template>

<script>

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {}
  },
}
</script>
<style lang="scss">
  .top_hero_section {
    width: 100%;
    height: 100vh;
    background-color: var(--bs-gray-300);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-transform: uppercase;
    background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  }
</style>
