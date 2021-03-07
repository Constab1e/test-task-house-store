<template>
  <div class="container-fluid">
    <nav class="navbar navbar-light bg-transparent">
      <div class="container-fluid">
        <span @click="back" class="material-icons navbar-brand">
          keyboard_backspace
        </span>
      </div>
    </nav>
    <div class="col-3 row-cols align-items-center">
      <form @submit.prevent="">
        <h1>Order Confirmation</h1>
        <h2 ref="p">{{ items.title }}, {{ items.price }}</h2>
        X
        <input type="number" class="form-control form-control-md" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      items: [],
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
    this.items = this.$store.getters.getItem(this.getId);
    console.log("and this" + this.id);
  },
};
</script>

<style>
.material-icons {
  cursor: pointer;
}
</style>