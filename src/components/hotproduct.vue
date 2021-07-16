<template>
  <Page>
   <ActionBar title="Cart"  backgroundColor="white">
     <NavigationButton text="Back" android.systemIcon="ic_menu_back"  @tap="$navigateBack" />
     <!-- <ActionItem icon="" text="Left" ios.position="left" @tap="" /> -->
     <Image  src="~/assets/images/icon/logo.png" class="logo" stretch="aspectFill" />
     <ActionItem text="Hot" ios.position="right" />
   </ActionBar>
     


    <GridLayout rows="*" columns="*" >
      <DockLayout stretchLastChild="true" backgroundColor="#ffffff">
      <Footer dock="bottom"></Footer>
        <GridLayout
      dock="top"
      color="black"
    backgroundColor="#ffffff"
        columns="auto"
        rows="auto"
        verticalAlignment="top"
      >

        <Label  class="love" text="DANH SÁCH HOT" col="0" margin="10" />
      </GridLayout>

      <ScrollView>
       

    <!-- ========================================= -->
            <GridLayout orientation="vertical" rows="auto, *">
     
 
     
    </GridLayout>
    <!-- ========================================= -->

        </ScrollView>


      </DockLayout>
    </GridLayout>
  </Page>
</template>
      
<script>

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
 
    };
  },
  
  computed: {
   
 
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
  }
};
</script>
      
<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}


.logo{
  height: 50;
  width: 100;
  
}
.love{
    font-size: 18;
    padding: 10;
}

</style>
