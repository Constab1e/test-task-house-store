<template>
  <div class="container">
    <Navbar />
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
                v-model="name"
                placeholder="Enter your name"
                type="text"
                class="form-control"
              />
            </div>
            <div class="col">
              <input
                v-model="phone"
                placeholder="Enter your phone number"
                type="tel"
                class="form-control"
              />
            </div>
            <div class="col">
              <button class="btn btn-primary" :disabled="buttonEnabled">
                BUY
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  components: { Navbar },
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
      buttonEnabled: false,
      checkout: {},
      checkoutId: "",
    };
  },
  methods: {
    // checks if the fields are filled in
    checkButton() {
      if (this.name !== "" && this.phone !== "") {
        this.buttonEnabled = false;
      } else {
        this.buttonEnabled = true;
      }
    },
    // logic for promocode discount
    checkDiscount() {
      if (parseInt(this.currentPromocode) === this.promocode) {
        this.discount = true;
        this.discountedTotal = this.total * 0.9;
      } else {
        this.discount = false;
      }
    },
    addCheckout() {
      this.$store.commit("addCheckout", this.checkout);
    },
    // handles the Buy button
    handleSubmit() {
      this.checkout = {
        title: this.item.title,
        count: this.count,
        checkoutId: this.checkoutId,
        name: this.name,
        phone: this.phone,
        total: this.total,
      };
      console.log(this.checkout);
      this.addCheckout();
      this.$router.push({
        name: "Checkout",
        params: { checkoutId: this.checkoutId },
      });
      console.log(this.$store.state.checkouts);
    },
  },
  computed: {
    getId() {
      return parseInt(this.$route.params.id);
    },
    getCheckoutId() {
      return (
        Math.floor(Math.random() * (9999 - 1000 + 1) + 1000) +
        "-" +
        Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
      );
    },
  },
  mounted() {
    this.item = this.$store.getters.getItem(this.getId);
    this.price = this.item.price;
    this.checkButton();
    this.checkoutId = this.getCheckoutId;
  },
  updated() {
    // logic for price
    this.total = this.price * this.count;
    this.checkDiscount();
    this.checkButton();
  },
};
</script>

<style>
.material-icons {
  cursor: pointer;
}
</style>