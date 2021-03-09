<template>
  <div class="card">
    <img class="card-img-top" :src="item.img" alt="" />
    <div class="card-body">
      <h4 class="card-title">{{ item.title }}</h4>
      <p class="card-text">Price: {{ item.price }}$</p>
    </div>
    <router-link
      class="btn btn-primary"
      :to="{ name: 'OrderConfirmation', params: { id: item.id } }"
    >
      Buy
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["item"],
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