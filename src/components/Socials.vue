<template>
  <div class="socials">
    <a href="https://www.facebook.com/dauksalaurynas/" target="_blank"
      ><font-awesome-icon icon="fa-brands fa-facebook" class="icon"
    /></a>
    <a href="mailto:laurynas@dks.lt"><font-awesome-icon icon="fa-solid fa-envelope" class="icon" /></a>
    <a href="https://www.instagram.com/dauksalaurynas/" target="_blank"
      ><font-awesome-icon icon="fa-brands fa-instagram" class="icon"
    /></a>
    <a href="https://www.youtube.com/@laurynasdauksa" target="_blank"
      ><font-awesome-icon icon="fa-brands fa-youtube" class="icon"
    /></a>
    <a href="https://mintys.dks.lt/explore" target="_blank"
      ><font-awesome-icon icon="fa-solid fa-brain" class="icon"
    /></a>
  </div>
</template>

<style scoped>
.socials {
  margin-bottom: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh;
}
.icon {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.7rem;
  margin: 0 15px;
  transition:
    color,
    font-size 0.1s ease;
}
.icon:hover {
  color: #fff;
  font-size: 1.8rem;
}
</style>

<script>
export default {
  name: 'Socials',
}
</script>
