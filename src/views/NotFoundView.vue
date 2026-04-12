<template>
  <div class="background">
    <Navbar />
    <div class="hero">
      <div class="hero-content">
        <h1>404</h1>
        <p>Puslapis nerastas</p>
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
  flex-direction: column;
  height: 75%;
  width: 75%;
}

.hero h1 {
  font-size: 7rem;
  text-align: center;
  margin: 0;
}

.hero p {
  font-size: 2rem;
  margin: 0;
}
</style>

<script>
import Socials from '@/components/Socials.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'NotFoundView',
  components: {
    Socials,
    Navbar,
  },
}
</script>
