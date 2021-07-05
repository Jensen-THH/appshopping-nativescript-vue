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
      src="~/assets/images/icon/sharp_trending_up_black_24dp.png"
      stretch="none"
      col="0"
    />

    <Image
      class="img"
      src="~/assets/images/icon/baseline_search_black_24dp.png"
      stretch="none"
      col="1"
    />

    <Image
      class="img"
      src="~/assets/images/icon/outline_home_black_24dp.png"
      stretch="none"
      col="2"
    />

    <Image
      class="img"
      src="~/assets/images/icon/baseline_favorite_border_black_24dp.png"
      stretch="none"
      col="3"
    />

    <Image
      class="img"
      src="~/assets/images/icon/outline_shopping_bag_black_24dp.png"
      stretch="none"
      col="4"
      @tap="test"
    />
  </GridLayout>
</template>
<script >
import scrollx from "../test.vue";

export default {
  data() {
    return {};
  },
  methods: {
    test() {
      this.$navigateTo(scrollx, {
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
