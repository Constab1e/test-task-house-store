<template>
  <div class="container">
    <Navbar />
    <p class="h1 text-center">Congratulations, {{ this.checkout.name }}</p>
    <div class="col">
      <p class="h2 text-center">
        You have ordered {{ this.checkout.count }} of {{ this.checkout.title }}
      </p>
      <p class="h2 text-center" v-if="this.checkout.discount">
        Total amount: {{ this.checkout.discountedTotal }}$
      </p>
      <p class="h2 text-center" v-else>
        Total amount: {{ this.checkout.total }}$
      </p>

      <p class="h2 text-center">Your order ID:{{ this.checkout.checkoutId }}</p>
      <div class="d-flex justify-content-center">
        <router-link to="/catalog" class="btn btn-primary"
          >Buy More</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  props: ["checkoutId"],
  components: { Navbar },
  data() {
    return {
      checkout: {},
    };
  },
  computed: {
    getCheckout() {
      return this.$store.getters.getCheckout(this.checkoutId);
    },
  },
  created() {
    this.checkout = this.getCheckout;
  },
};
</script>

<style>
</style>