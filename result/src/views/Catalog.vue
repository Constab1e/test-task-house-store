<template>
  <div class="container-fluid">
    <nav class="navbar navbar-light bg-light" style="background: #eee">
      <router-link to="/" class="navbar-brand">Home</router-link>
    </nav>
    <div class="row row-cols-3 row-cols-lg-3 g-3">
      <div v-for="item in items" :key="item.id">
        <SingleItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import SingleItem from "../components/SingleItem";
export default {
  components: { SingleItem },
  data() {
    return {
      items: this.$store.state.items,
    };
  },
};
</script>

<style>
</style>