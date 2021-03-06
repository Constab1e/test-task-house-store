<template>
  <div class="card">
    <img class="card-img-top" :src="item.img" alt="" />
    <div class="card-body">
      <h4 class="card-title">{{ item.title }}</h4>
      <p class="card-text">Price: {{ item.price }}$</p>
    </div>
    <button class="btn btn-primary">Buy</button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    showImg(item) {
      return item.img;
    },
  },
};
</script>

<style>
/* fix image height */
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
</style>