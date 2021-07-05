<template>

  <ActionBar>
    <GridLayout width="100%" columns="auto, *">
      <Label text="MENU" @tap="$refs.drawer.nativeView.showDrawer()" col="0" />
    <ActionItem icon="" text="Right" ios.position="right" col="1" />
    </GridLayout>
  </ActionBar>
</template>

<script >
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
