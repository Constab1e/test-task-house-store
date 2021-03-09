<template>
  <nav class="navbar navbar-light bg-transparent">
    <div class="container-fluid">
      <span @click="back" class="material-icons navbar-brand">
        keyboard_backspace
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
</style>