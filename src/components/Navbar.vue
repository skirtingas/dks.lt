<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li v-for="link in navLinks" :key="link.path">
        <router-link :to="link.path">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  setup() {
    const navLinks = [
      { path: '/', name: 'Pradžia' },
      { path: '/apie', name: 'Apie' },
      { path: '/kuryba', name: 'Kūryba' },
      { path: '/susisiekti', name: 'Susisiekti' },
    ]

    return { navLinks }
  },
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh;
  padding-top: 1vh;
}

.nav-links {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav-links li a {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.2rem;
  text-decoration: none;
  transition:
    color,
    font-size 0.1s ease;
}

.nav-links li a:hover {
  color: #fff;
  font-size: 1.25rem;
}

.nav-links li a.router-link-exact-active {
  color: #fff;
  font-weight: bold;
}
</style>
