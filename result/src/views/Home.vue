<template>
  <div class="center">
    <h1>Welcome to the House Store!</h1>
    <router-link class="explore" to="/catalog"
      >Explore the Catalog
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.center {
  text-align: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.explore {
  padding: 20px 70px;
  color: white;
  background: orange;
  font-size: 25px;
  border-radius: 20px;
  text-decoration: none;
}
</style>