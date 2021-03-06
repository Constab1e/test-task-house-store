<template>
  <div>
    <h1>Welcome to the House Store!</h1>
    <router-link class="btn btn-outline-light bg-transparent" to="/catalog"
      >Explore the Catalog
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper {
  position: absolute;
  width: 100%;
  top: 50%;
  text-align: center;
}
.wrapper h1 {
  color: white;
}
</style>