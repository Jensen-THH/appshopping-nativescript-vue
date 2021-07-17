<template>
  <Page>
   <ActionBar title="Cart"  backgroundColor="white">
     <NavigationButton text="Back" android.systemIcon="ic_menu_back"  @tap="$navigateBack" />
     <!-- <ActionItem icon="" text="Left" ios.position="left" @tap="" /> -->
     <Image  src="~/assets/images/icon/logo.png" class="logo" stretch="aspectFill" />
     <ActionItem icon="" text="Farvourite" ios.position="right" />
   </ActionBar>
     


    <GridLayout rows="*" columns="*"  v-if="this.$store.state.infouser.name != undefined" >
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
      <Label v-if="this.$store.state.love.length == 0" class="love empty"  text="Danh sách yêu thích của bạn đang trống !" textWrap="true" />

        <Label v-else class="love" text="DANH SÁCH YÊU THÍCH" col="0" margin="10" />
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
          <GridLayout class="item" marginBottom="10" backgroundColor="#f2f2f2" color="black" columns="auto,auto" rows="auto" verticalAlignment="top">
              <Image @tap="gotoproduct(item)" :src="item.images[0]"  width="180" col="0"  horizontalAlignment="left" verticalAlignment="bottom"
                  margin="3" />
              <StackLayout col="1">
                 <Label @tap="gotoproduct(item)" :text="item.name" fontSize="15" width="150" textWrap="true" marginRight="15" />
                 
                  <FlexboxLayout col="1" alignItems="center" justifyContent="space-between"  orientation="vertical" itemWidth="150" itemHeight="auto">
                  <Label fontSize="10" text="Giá sale:"  horizontalAlignment="left"  margin="10" />
                  <Label fontSize="15" :text="item.price.sale"  horizontalAlignment="right" margin="8" />
                  </FlexboxLayout>
                  <FlexboxLayout col="1" alignItems="center" justifyContent="space-between"  orientation="vertical" itemWidth="150" itemHeight="auto">
                  <Label fontSize="10"  text="Giá gốc:"  horizontalAlignment="left"  margin="10" />
                  <Label fontSize="15" :text="item.price.old" class="old" horizontalAlignment="right" margin="8" />
                  </FlexboxLayout>
                  <GridLayout  justifyContent="space-betweent" alignItems="center" rows="auto" columns="*,auto">
                      <Label margin="10" fontSize="10" text="Add to cart: " col="0" textWrap="true" />
                      
                        <Image class="cart" col="1" justifyContent="space-betweent" alignItems="center" @tap="addtocart(item)" src="~/assets/images/iconshopingapp/shopping-cart-heart.png" stretch="none" />
                  </GridLayout>
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
        <GridLayout v-else rows="*" columns="*">
  <DockLayout stretchLastChild="true">
      <FlexboxLayout dock="bottom" alignItems="center" justifyContent="space-between" padding="5">
                <Button backgroundColor="#4d4d4d" class="btn"  color="white"  margin="10"  horizontalAlignment="left" width="auto"  text="Sign in" @tap="gotosignin" />
                <Button backgroundColor="#4d4d4d" class="btn"  color="white" margin="10" horizontalAlignment="right" width="auto"  text="Sign up" @tap="gotosignup" />
            </FlexboxLayout>
    <Label fontSize="20" textWrap="true" textAlign="center" class="text" text="Bạn chưa đăng nhập hãy đăng nhập nào!"/>
  </DockLayout>
    </GridLayout>
  </Page>
</template>
      
<script>
// var frameModule = require("ui/frame");
// import Footer from './include/footer.vue'
import login from './signin.vue';
import signup from './signup.vue'
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
      return this.cart2 = this.$store.state.love
    }
  },
  methods:{
    gotosignin(){
                this.$navigateTo(login,{clearHistory:true,
                   transition: {
                    name: "slideLeft",
                    duration: 300,
                    curve: "easeIn",
                },})
            },
            gotosignup(){
                this.$navigateTo(signup,{clearHistory:true,
                   transition: {
                    name: "slideLeft",
                    duration: 300,
                    curve: "easeIn",
                },})
            },
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
    addtocart(product) {
      this.$store.commit("add", product);
           alert({
                    title: "JSshop",
                    message: 'Đã thêm thành công!',
                    okButtonText: "Ok"
                  })
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
        return;
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
          this.$store.state.love.splice(this.$store.state.love.indexOf(object.bindingContext), 1);
        }
        this.$refs.listView.notifySwipeToExecuteFinished();
      });
    },
  
  }
};
</script>
      
<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}
.item{
     android-elevation:5;
   padding-bottom: 5;
}
.right {
  width: 80;
  height: 95%;
  padding: 5 10 5 10;
  margin-bottom: 10;
  background-color: rgb(248, 129, 129);
  text-align: center;
  justify-content: space-between;
}
.right Label{
  text-align: center;
}
.left {
  width: 1;
  padding: 5 10 5 10;
  background-color: #ffffff;
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
.old{
    text-decoration: line-through ;
}
.love{
    font-size: 18;
    padding: 10;
}
.cart{
    align-items: center;
    background: #c0c0c0;
    padding: 10;
    border-radius: 10;
}
.empty{
    padding-top: 300;
    text-align: center;
}
.text{
  padding-top: 250;
  text-align: center;
  margin: 20;
}
</style>
