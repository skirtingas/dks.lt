<template>
  <div class="background">
    <Navbar />
    <div class="hero">
      <div class="hero-content">
        <h1>Kūryba</h1>
      </div>
    </div>
    <Scroll />
  </div>
  <div class="creations">
    <h2>Mano kūriniai:</h2>
    <div class="items">
      <div class="item">
        <h3>Audringas Lietus</h3>
        <p>Kūrinys fortepijonui. Mano pirmas natomis užrašytas kūrinys.</p>
        <a href="/AudringasLietus.pdf" target="_blank">Natos(PDF)</a>
      </div>
      <div class="item">
        <h3>Galvos Triukšmas (I - Triukšmas)</h3>
        <p>
          Kūrinys fortepijonui. Mano antras natomis užrašytas kūrinys. Pirma dalis dviejų kūrinių ciklo. (Jau greitai)
        </p>
      </div>
      <div class="item">
        <h3>Galvos Triukšmas (II - Ramybė)</h3>
        <p>Kūrinys fortepijonui ir vokalui. Antra dalis dviejų kūrinių ciklo. (Jau greitai)</p>
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

.creations {
  min-height: 100vh;
  background: #e2dad0;
  color: #333;
}

.creations h2 {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem 0;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.item {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.025));
  border: 1px solid rgba(0, 0, 0, 0.2);
  corner-shape: bevel scoop;
  border-radius: 15px;
  width: 90%;
  margin: 0 auto;
}

.item h3 {
  font-size: 1.25rem;
  margin: 0.75rem;
}

.item p {
  font-size: 1rem;
  margin: 0.75rem;
}

.item a {
  display: inline-block;
  margin: 0.75rem;
  margin-top: 0;
  padding: 1rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.025));
  border: 1px solid rgba(0, 0, 0, 0.2);
  corner-shape: bevel scoop;
  color: inherit;
  border-radius: 10px;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.item a:hover {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05));
  border-color: rgba(0, 0, 0, 0.3);
  transform: translateY(-1px);
}
</style>

<script>
import Navbar from '@/components/Navbar.vue'
import Scroll from '@/components/Scroll.vue'

export default {
  name: 'CreationsView',
  components: {
    Navbar,
    Scroll,
  },
}
</script>
