<template>
  <Page>
    <ActionBar :title="title">
      <NavigationButton
        text="Back"
        android.systemIcon="ic_menu_back"
        @tap="onNavigationButtonTap"
      ></NavigationButton>
    </ActionBar>
    <StackLayout>
      <Label class="big header" :text="scrollText"></Label>
      <RadListView
        ref="listView"
        for="item in itemList"
        @itemTap="onItemTap"
        @loaded="onLoaded"
        @scrolled="onScrolled"
        orientation="horizontal"
      >
        <v-template>
          <StackLayout class="item" orientation="vertical">
            <Label :text="item.name" class="nameLabel"></Label>
            <Label :text="item.description" class="descriptionLabel"></Label>
          </StackLayout>
        </v-template>
      </RadListView>
    </StackLayout>
  </Page>
</template>
<script>
const words = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];

const getRandomString = () => {
  const length = Math.round(Math.random() * 15);
  let result = words[0];
  for (let i = 0; i < length; i++) {
    result += words[i % words.length] + " ";
  }
  return result;
};

const getRandomItems = (size) => {
  let items = [];

  for (let i = 0; i < size; i++) {
    items.push({
      name: `Item ${i}`,
      description: getRandomString(),
    });
  }
  return items;
};
export default {
  data() {
    return {
      name: "ScrollTo",
      description: "description",
      title: "description",
      scrollOffset: 0,
      itemList: getRandomItems(100),
    };
  },
  computed: {
    scrollText() {
      return `Scrolled to ${this.scrollOffset} offset`;
    },
  },
  methods: {
    onItemTap({ item }) {
      console.log(`Tapped on ${item.name}`);
    },
    onLoaded() {
      // in order to avoid race conditions (only on iOS),
      // in which the UI may not be completely updated here
      // we use this.$nextTick call
      this.$nextTick(() => {
        const indexToScroll = 49;
        console.log(
          "Programmatic scrolling to " +
            this.itemList[indexToScroll].name +
            "... "
        );
        this.$refs.listView.scrollToIndex(
          indexToScroll,
          false,
          ListViewItemSnapMode.Start
        );
      });
    },
    onScrolled({ scrollOffset }) {
      this.scrollOffset = scrollOffset;
    },
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
  },
};
</script>