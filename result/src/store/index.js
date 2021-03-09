import { createStore } from 'vuex'

export default createStore({
  state: {
    items: [
      { id: 1, title: "House 1", price: 400, img: 'https://q4g9y5a8.rocketcdn.me/wp-content/uploads/2020/02/home-banner-2020-02-min.jpg' },
      { id: 2, title: "House 2", price: 500, img: require("@/assets/2.jpg") },
      { id: 3, title: "House 3", price: 600, img: 'https://i.pinimg.com/originals/de/99/a4/de99a4cf0664b2bd813aa5d34c0492b9.png' },
      { id: 4, title: "House 4", price: 1000, img: 'https://ownwoodenhouse.com/img/news/2016020401.jpg?ver=153844246214?w=850' },
      { id: 5, title: "House 5", price: 800, img: 'https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/newsletter/AM1506.jpg?1583892706' },

    ],
    checkouts: [
      { checkoutId: '1233-1234', title: 'House 2', count: 1, name: "Armen", phone: "+79996384293", total: 400 },
    ],
  },
  mutations: {
    addCheckout(state, checkout) {
      state.checkouts.push(checkout)
    }
  },
  actions: {


  },
  getters: {
    getItem: (state) => id =>
      state.items.find(item => item.id === id),
    getCheckout: (state) => id =>
      state.checkouts.find(checkout => checkout.checkoutId === id)
  },

  modules: {
  },
})
