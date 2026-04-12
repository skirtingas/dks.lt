<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>
import Socials from '@/components/Socials.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Socials,
    Navbar,
  },
}
</script>
