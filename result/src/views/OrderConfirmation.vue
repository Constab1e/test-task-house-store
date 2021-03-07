<template>
  <div class="container">
    <nav class="navbar navbar-light bg-transparent">
      <span @click="back" class="material-icons navbar-brand">
        keyboard_backspace
      </span>
    </nav>
    <h1 class="text-center">Order Confirmation</h1>
    <div class="container">
      <form @submit.prevent="handleSubmit">
        <div class="col">
          <div class="d-flex align-items-center">
            <div class="col-md">
              <p class="h2">{{ item.title }}</p>
              <p class="h4">{{ item.price }}$</p>
            </div>
            <div class="col-md-4"><p class="h2 text-center">X</p></div>
            <div class="col-md">
              <input
                type="number"
                min="1"
                v-model="count"
                class="form-control-lg"
              />
            </div>
          </div>
          <div class="row justify-content-end">
            <div class="col-md-4">
              <input
                v-model="currentPromocode"
                placeholder="Enter Promocode"
                type="text"
                class="form-control"
              />
            </div>
            <div class="col-md-4">
              <p v-if="discount" class="h1">Total: {{ discountedTotal }}$</p>
              <p v-else class="h1" style="">Total: {{ total }}$</p>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <input
                placeholder="Enter your name"
                type="text"
                class="form-control"
              />
            </div>
            <div class="col">
              <input
                placeholder="Enter your phone number"
                type="text"
                class="form-control"
              />
            </div>
            <div class="col"><button class="btn btn-primary">BUY</button></div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      currentPromocode: "",
      item: [],
      count: 1,
      name: "",
      phone: "",
      total: 0,
      price: 1,
      discount: false,
      discountedTotal: 0,
      promocode: 1010,
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  computed: {
    getId() {
      return parseInt(this.$route.params.id);
    },
  },
  mounted() {
    this.item = this.$store.getters.getItem(this.getId);
    this.price = this.item.price;
  },
  updated() {
    // logic for price
    this.total = this.price * this.count;
    // logic for promocode discount
    if (parseInt(this.currentPromocode) === this.promocode) {
      this.discount = true;
      this.discountedTotal = this.total * 0.9;
    } else {
      this.discount = false;
    }
  },
};
</script>

<style scoped>
.material-icons {
  cursor: pointer;
}
</style>