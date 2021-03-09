<template>
  <div class="container">
    <Navbar />
    <transition-group
      appear
      name="itemlist"
      tag="div"
      class="row row-cols-md-2 row-cols-lg-4 g-3"
    >
      <div v-for="item in items" :key="item.id">
        <SingleItem :item="item" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import SingleItem from "../components/SingleItem";
import Navbar from "../components/Navbar";
export default {
  components: { SingleItem, Navbar },
  data() {
    return {
      items: this.$store.state.items,
    };
  },
};
</script>

<style>
.itemlist-enter-from {
  opacity: 0;
  transform: scale(0.6);
  transform: translateX(-100px);
}
.itemlist-enter-to {
  opacity: 1;
  transform: scale(1);
  transform: translateX(0);
}
.itemlist-enter-active {
  transition: all 0.3s ease;
}
</style>