<template>
  <Page>
   <ActionBar title="Cart" icon="">
     <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="gotoapp" />
     <!-- <ActionItem icon="" text="Left" ios.position="left" @tap="" /> -->
     <ActionItem icon="" text="Checkout" ios.position="right" />
   </ActionBar>
     
   
    

    <GridLayout rows="*" columns="*">
      <DockLayout stretchLastChild="true" backgroundColor="#ffffff">
        <GridLayout
      dock="bottom"
      color="black"
    backgroundColor="#ffffff"
        columns="auto,*,auto,auto"
        rows="auto"
        verticalAlignment="top"
      >
        <Label text="Tổng" col="0" colSpan="2" />
        <Label :text="itemCount" col="2" margin="10" />
        <Label class="total" :text="total" col="3" margin="10" />
      </GridLayout>
      
      <ScrollView>
        <!-- <StackLayout height="auto">
        <GridLayout
            :key="item.index"
            v-for="item in getCart"
            columns="auto,*,auto,auto"
            rows="auto,50"
            verticalAlignment="top"
        >
            <Image
            :src="item.images[0]"
            height="30"
            width="30"
            col="0"
            horizontalAlignment="left"
            verticalAlignment="bottom"
            margin="3"
            />
            <Label
            :text="item.name"
            col="1"
            horizontalAlignment="left"
            verticalAlignment="bottom"
            margin="10"
            />
            <Label
            :text="item.quantity"
            col="2"
            horizontalAlignment="left"
            verticalAlignment="bottom"
            margin="10"
            />
            <Label
            :text="item.price.sale"
            col="3"
            horizontalAlignment="left"
            verticalAlignment="bottom"
            margin="10"
            />
        </GridLayout>
    </StackLayout> -->

    <!-- ========================================= -->
            <GridLayout orientation="vertical" rows="auto, *">
      <RadListView
        ref="listView"
        for="item in getCart"
        swipeActions="true"
        @itemSwipeProgressStarted="onSwipeStarted"
      >
      
        <v-template>
          <GridLayout backgroundColor="white" color="black" columns="auto,auto" rows="auto" verticalAlignment="top">
              <Image :src="item.images[0]"  width="180" col="0"  horizontalAlignment="left" verticalAlignment="bottom"
                  margin="3" />
              <StackLayout col="1">
                 <Label :text="item.name" fontSize="17" width="150" textWrap="true" margin="10" />
                  <GridLayout   rows="*" columns="50,50,50" margin="5">
                    <Button text="-" col="0" @tap="tru(item)" width="50" />
                    <Label :text="item.quantity" col="1" horizontalAlignment="left" verticalAlignment="bottom" margin="10" />
                    <Button text="+"  width="50"  col="2" @tap="cong(item)" />
                  </GridLayout>
                  <FlexboxLayout col="1" alignItems="center" justifyContent="space-between"  orientation="vertical" itemWidth="150" itemHeight="auto">
                    
                  <Label fontSize="10" text="Đơn giá:"  horizontalAlignment="left"  margin="10" />
                  <Label fontSize="15" :text="item.price.sale"  horizontalAlignment="right" margin="10" />
                  </FlexboxLayout>
              </StackLayout>
             
          </GridLayout>
        </v-template>
     
        <v-template name="itemswipe">
          <GridLayout columns="auto, *, auto">
            <StackLayout
              id="mark-view"
              col="0"
              class="swipe-item left"
              orientation="horizontal"
              @tap="onLeftSwipeClick"
            >
              <Label
                text="mark"
                verticalAlignment="center"
                horizontalAlignment="center"
              />
            </StackLayout>
            <StackLayout
              id="delete-view"
              col="2"
              class="swipe-item right"
              orientation="horizontal"
              @tap="onRightSwipeClick"
            >
              <Label
                text="delete"
                verticalAlignment="center"
                horizontalAlignment="center"
              />
            </StackLayout>
          </GridLayout>
        </v-template>
        
      </RadListView>

 
        <!-- <Button text="Add Province" @tap="showModel" /> -->
      <!-- <Button text="Add" @tap="add" width="100%" /> -->
     
    </GridLayout>
    <!-- ========================================= -->

        </ScrollView>


      </DockLayout>
    </GridLayout>
  </Page>
</template>
      
<script>
// var frameModule = require("ui/frame");
import cart from './cart.vue'
import app from './App.vue'
export default {

  data() {
    return {
      cart2:[]
    };
  },
  
  computed: {
    getCart:function(){
      return this.cart2 = this.$store.state.cart
    },
    itemCount() {
      var tongsl = 0;
      for (var i = 0; i < this.cart2.length; i++) {
        tongsl += this.cart2[i].quantity;
      }
      return tongsl;
    },
    total() {
      var t = 0;
      for (var i = 0; i < this.cart2.length; i++) {
          let price =this.cart2[i].price.sale
          let newString = price.replace(/,/g, "");
            let String2 = newString.replace(/₫/g, "");
             newString = parseInt(String2)
        t += this.cart2[i].quantity * newString;
        console.log(t);
      }
        t = (t + "đ").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      return t;
    },
  },
  methods:{
    gotoapp(){
      this.$navigateTo(app)
    },
      cong(item){
        this.$store.commit("cong", item);
        // this.$forceUpdate();
        this.$navigateTo(cart, { clearHistory: true })
      },
      tru(item){
        this.$store.commit("tru", item); 
        this.$navigateTo(cart, { clearHistory: true })
        // this.$forceUpdate();
      },
        onSwipeStarted({ data, object }) {
      console.log(`Swipe started`);
      const swipeLimits = data.swipeLimits;
      const swipeView = object;
      const leftItem = swipeView.getViewById("mark-view");
      const rightItem = swipeView.getViewById("delete-view");
      swipeLimits.left = leftItem.getMeasuredWidth();
      swipeLimits.right = rightItem.getMeasuredWidth();
      swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    },
    onLeftSwipeClick({ object }) {
      var item = {};
      var position = this.$store.state.cart.indexOf(object.bindingContext);
      item = this.$store.state.cart.slice(position, parseInt(position) + 1);

      console.log(typeof item);
      this.$showModal(edititem, { props: { item: item } }).then((data) => {
        // editItem(data);
        console.log(data);
        // this.itemList.splice(position, 1, data);
        this.$refs.listView.notifySwipeToExecuteFinished();
      });
    },
 

    onRightSwipeClick({ object }) {
      console.log("right action tapped");
      // remove item
      confirm({
        title: "Xoá",
        message: "Xác nhận xoá sản phẩm",
        cancelButtonText: "Cancer",
        okButtonText: "OK",
      }).then((result) => {
        if (result == true) {
          this.$store.state.cart.splice(this.$store.state.cart.indexOf(object.bindingContext), 1);
        }
        this.$refs.listView.notifySwipeToExecuteFinished();
      });
    },
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
  }
};
</script>
      
<style>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.right {
  width: 80;
  padding: 5 10 5 10;
  background-color: red;
}
.left {
  width: 80;
  padding: 5 10 5 10;
  background-color: yellow;
}
</style>