<template>
  <Page>
   <ActionBar title="Cart"  backgroundColor="white">
     <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="gotoapp" />
     <!-- <ActionItem icon="" text="Left" ios.position="left" @tap="" /> -->
     <Image  src="~/assets/images/icon/logo.png" class="logo" stretch="aspectFill" />
     <ActionItem icon="" text="Checkout" ios.position="right" />
   </ActionBar>
     
   
    

    <GridLayout rows="*" columns="*">
      <DockLayout stretchLastChild="true" backgroundColor="#ffffff">
      <Footer dock="bottom"></Footer>
        <GridLayout
      dock="top"
      color="black"
    backgroundColor="#ffffff"
        columns="*,auto"
        rows="auto"
        verticalAlignment="top"
      >
        <Label :text="'Tổng: '+itemCount" col="0" margin="10" />
        <Label class="total" :text="total" col="1" margin="10" />
      </GridLayout>

      <ScrollView>
       

    <!-- ========================================= -->
            <GridLayout orientation="vertical" rows="auto, *">
      <RadListView
        ref="listView"
        for="item in getCart"
        swipeActions="true"
        @itemSwipeProgressStarted="onSwipeStarted"
      >
      
        <v-template>
          <GridLayout  backgroundColor="white" color="black" columns="auto,auto" rows="auto" verticalAlignment="top">
              <Image @tap="gotoproduct(item)" :src="item.images[0]"  width="180" col="0"  horizontalAlignment="left" verticalAlignment="bottom"
                  margin="3" />
              <StackLayout col="1">
                 <Label @tap="gotoproduct(item)" :text="item.name" fontSize="17" width="150" textWrap="true" margin="10" />
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
           
              <Image  verticalAlignment="center"
                horizontalAlignment="center" src="~/assets/images/iconshopingapp/love-it-circle.png" stretch="none" />
              
            </StackLayout>
            <StackLayout
              id="delete-view"
              col="2"
              class="swipe-item right"
              orientation="horizontal"
              @tap="onRightSwipeClick"
            >
           
               <Image  verticalAlignment="center"
                horizontalAlignment="center" src="~/assets/images/icon/bin-paper-1.png" stretch="none" />
              
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
// import Footer from './include/footer.vue'
import cart from './cart.vue'
import app from './App.vue'
import product  from './allproduct/products.vue'
export default {
 name: 'ParentComponent',
  components: {
   Footer: () => import('./include/footer.vue'),
  },
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
    
     gotoproduct(item){
       console.log(item.price)
      this.$navigateTo(product, {props :{product:item},
      transition: {
          name: "slideLeft",
          duration: 300,
          curve: "easeIn",
        }
      })
    },
     gotocart() {
      this.$navigateTo(cart, {
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
    gotoapp(){
      this.$navigateTo(app, {
        transition: {
          name: "slideLeft",
          duration: 300,
          curve: "easeIn",
        },
      });
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
      var position =this.$store.state.cart.indexOf(object.bindingContext)
      var product = this.$store.state.cart[position]
      this.$store.commit('addlove',product)
      console.log(this.$store.state.love)
      alert({
         title: "JSshop",
          message: 'Đã thêm vào danh sách yêu thích!',
          okButtonText: "Ok"
      })

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
  background-color: rgb(248, 129, 129);
  text-align: center;
  justify-content: space-between;
}
.right Label{
  text-align: center;
}
.left {
  width: 80;
  padding: 5 10 5 10;
  background-color: pink;
}
.right Image{
  margin-left:17 ;
}
.left Image{
  margin-left:13 ;
  align-items: center;

}
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
.logo{
  height: 50;
  width: 100;
  
}
</style>