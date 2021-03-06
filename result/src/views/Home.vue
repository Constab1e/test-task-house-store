<template>
  <div class="wrapper">
    <div class="header">
      <transition name="move" appear> <Center /></transition>
    </div>
  </div>
</template>

<script>
import Center from "../components/Center";
export default {
  components: { Center },
};
</script>

<style>
.move-enter-from {
  opacity: 0;
  transform: translateY(-70px);
  transform: scale(0.6);
}
.move-enter-to {
  opacity: 1;
  transform: translateY(0);
  transform: scale(1);
}
.move-enter-active {
  transition: all 0.6s ease;
}
</style>