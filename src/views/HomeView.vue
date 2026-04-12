<template>
  <div class="background">
    <Navbar />
    <div class="hero">
      <div class="hero-content">
        <h1>Laurynas Daukša</h1>
      </div>
    </div>
    <Socials />
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.hero-content {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;
  width: 75%;
}

.hero h1 {
  font-size: 5rem;
  text-align: center;
}
</style>

<script>
import Socials from '@/components/Socials.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    Socials,
    Navbar,
  },
}
</script>
