<template>
  <GridLayout
    dock="bottom"
    backgroundColor="#ffffff"
    rows="60"
    columns="*,*, *, *, *"
    class="gridLay"
  >
    <Image
      class="img"
      src="~/assets/images/iconshopingapp/shop-sale-1.png"
      stretch="none"
      col="0"
    />
 


    <Image
      class="img"
      src="~/assets/images/iconshopingapp/shopping-bag-search.png"
      stretch="none"
      col="1"
    />

    <Image
      class="img"
      src="~/assets/images/iconshopingapp/shop-1.png"
      stretch="none"
      col="2"
    />

    <Image
      class="img"
      src="~/assets/images/iconshopingapp/love-it-bubble.png"
      stretch="none"
      col="3"
    />

    <Image
      class="img"
      src="~/assets/images/iconshopingapp/shopping-cart-heart.png"
      stretch="none"
      col="4"
      @tap="test"
    />
  </GridLayout>
</template>
<script >
import Cart from "../cart.vue";

export default {
  data() {
    return {};
  },
  methods: {
    test() {
      this.$navigateTo(Cart, {
        transition: {
          name: "slideLeft",
          duration: 300,
          curve: "easeIn",
        },
      });
    },
    haha() {
      console.log("xxx");
    },
  },
};
</script>

<style scoped>
.img {
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
}
GridLayout {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
