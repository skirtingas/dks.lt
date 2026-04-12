<template>
  <div class="scroll">
    <p>Slink žemyn...</p>
    <font-awesome-icon icon="arrow-down" class="icon" />
  </div>
</template>

<style scoped>
.scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -5vh;
  animation: jump 2s infinite;
}
p {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}
.icon {
  color: rgba(255, 255, 255, 0.5);
  font-size: 2rem;
  margin-top: 0.5rem;
}

@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
