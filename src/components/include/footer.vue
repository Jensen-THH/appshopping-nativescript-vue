<template>
   <GridLayout
   
    backgroundColor="#ffffff"
    rows="60"
    columns="*,*, *, *"
    class="gridLay"
  >
    <Image
      class="img"
      src="~/assets/images/iconshopingapp/shop-sale-1.png"
      stretch="none"
      col="0"
      @tap="gotohot"
    />
 


   

    <Image
      class="img"
      src="~/assets/images/iconshopingapp/shop-1.png"
      stretch="none"
      col="1"
      @tap="gotoapp"
    />

    <Image
      class="img"
      src="~/assets/images/iconshopingapp/love-it-bubble.png"
      stretch="none"
      col="2"
      @tap= "gotofavourite"
    />

    <Image
      class="img"
      src="~/assets/images/iconshopingapp/shopping-cart-heart.png"
      stretch="none"
      col="3"
      @tap="gotocart"
    />
  </GridLayout>
</template>
<script >
import Hot from "../hotproduct.vue"
import Cart from "../cart.vue";
import App from "../App.vue";
import Favourite from "../favourite.vue"
export default {
  data() {
    return {};
  },
  methods: {
    gotohot() {
      this.$navigateTo(Hot, {
        transition: {
          name: "slideLeft",
          duration: 300,
          curve: "easeIn",
        },
      });
    },
    gotocart() {
      this.$navigateTo(Cart, {
        transition: {
          name: "slideLeft",
          duration: 300,
          curve: "easeIn",
        },
      });
    },
    gotoapp() {
      this.$navigateTo(App, {
        transition: {
          name: "slideLeft",
          duration: 300,
          curve: "easeIn",
        },
      });
    },
    gotofavourite(){
      this.$navigateTo(Favourite, {
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
