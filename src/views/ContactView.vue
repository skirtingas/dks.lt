<template>
  <div class="background">
    <Navbar />
    <div class="hero">
      <div class="hero-content">
        <h1>Susisiekti</h1>
        <p>El. paštas: <a href="mailto:laurynas@dks.lt">laurynas@dks.lt</a></p>
        <Socials />
      </div>
    </div>
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
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;
  width: 75%;
}

.hero h1 {
  font-size: 5rem;
  margin: 0;
  text-align: center;
}

.hero a {
  text-decoration: underline;
}

.hero p {
  font-size: 1.5rem;
  margin: 0;
  margin-bottom: 1rem;
}
</style>

<script>
import Navbar from '@/components/Navbar.vue'
import Scroll from '@/components/Scroll.vue'
import Socials from '@/components/Socials.vue'

export default {
  name: 'ContactView',
  components: {
    Navbar,
    Scroll,
    Socials,
  },
}
</script>
