<template>
<Page>
  
<ActionBar title="User" backgroundColor="White">
  <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="gotoapp" />
  <Image col="1" src="~/assets/images/icon/logo.png" class="logo" stretch="aspectFill" />
</ActionBar>
<GridLayout rows="*" columns="*" v-if="this.$store.state.infouser.name != undefined" >
<DockLayout stretchLastChild="true"  backgroundColor="#ededed">
    <Button dock="bottom"  backgroundColor="black" color="white" text="Logout" width="50%" alignItems ="center" col="1" @tap="logout" />

<StackLayout marginLeft="34" class="info" marginRight="34"  marginTop="50" alignItems="center" height="100%">
     <Image src="~/assets/images/icon/user.png" class="user" alinItems="center" stretch="aspectFill" />
     
     <FlexboxLayout  alignItems="center" justifyContent="space-between" padding="5">
        <Label horizontalAlignment="left" text="Họ và tên:" color="black"  textWrap="true" />
        <Label horizontalAlignment="right" color="black" :text="data.name" textWrap="true" />
    </FlexboxLayout>
     <FlexboxLayout alignItems="center" justifyContent="space-between" padding="5">
        <Label horizontalAlignment="left" text="Số điện thoại:" color="black"  textWrap="true" />
        <Label horizontalAlignment="right" color="black" :text="data.phone" textWrap="true" />
    </FlexboxLayout>

        <FlexboxLayout alignItems="center" justifyContent="space-between" padding="5">
    <Label color="black" horizontalAlignment="left" text="ĐƠN HÀNG" paddingTop="20" fontWeight="bold" fontSize="15"  textWrap="true" />
        <Label horizontalAlignment="right" color="black" :text="order.length" fontWeight="bold" fontSize="15"  textWrap="true" />
    </FlexboxLayout>
      <StackLayout height="210" class="order" v-if="order.length!=0">
               <!-- <ListView for="item in order">
                 <v-template>
                     <StackLayout marginBottom="10">
                      <FlexboxLayout alignItems="center" justifyContent="space-between" marginLeft="10" marginRight="10" padding="5">
                    <Label fontWeight="bold" fontSize="12" color="gray" horizontalAlignment="right" class="pay" text="Người nhận hàng:" textWrap="true" />
                    <Label fontWeight="bold" fontSize="12" color="gray" horizontalAlignment="left" class="price-sale" :text="item.name" width="auto" textWrap="true" />
                </FlexboxLayout>
                      <FlexboxLayout alignItems="center" justifyContent="space-between" marginLeft="10" marginRight="10" padding="5">
                    <Label fontSize="12" fontWeight="bold" color="gray" horizontalAlignment="right" class="pay" text="Thời gian nhận:" textWrap="true" />
                    <Label fontSize="12" fontWeight="bold" color="gray" horizontalAlignment="left" class="price-sale" :text="item.timeship" width="auto" textWrap="true" />
                </FlexboxLayout>
                <GridLayout rows="auto" columns="auto,*" alignItems="center" justifyContent="space-between" marginLeft="10" marginRight="10" padding="5">
                    <Label col="0" text="Mã đơn hàng: " fontWeight="bold" color="gray" fontSize="12" textWrap="true" />
                    <Label col="1" class="id" fontWeight="bold" color="gray" :text="item.idorder" textWrap="true" />
                    </GridLayout>
                     </StackLayout>
                 </v-template>
               </ListView> -->
                 <RadListView
        ref="listView"
       for="item in order"
        swipeActions="true"
        @itemSwipeProgressStarted="onSwipeStarted"
      >
      
        <v-template>
           <StackLayout marginBottom="10" borderRadius="10"  backgroundColor="#f2f2f2" color="black">
                <FlexboxLayout alignItems="center" justifyContent="space-between" marginLeft="10" marginRight="10" padding="5">
                    <Label fontWeight="bold" fontSize="12" color="gray" horizontalAlignment="right" class="pay" text="Người nhận hàng:" textWrap="true" />
                    <Label fontWeight="bold" fontSize="12" color="gray" horizontalAlignment="left" class="price-sale" :text="item.name" width="auto" textWrap="true" />
                </FlexboxLayout>
                <FlexboxLayout alignItems="center" justifyContent="space-between" marginLeft="10" marginRight="10" padding="5">
                    <Label fontSize="12" fontWeight="bold" color="gray" horizontalAlignment="right" class="pay" text="Thời gian giao:" textWrap="true" />
                    <Label fontSize="12" fontWeight="bold" color="gray" horizontalAlignment="left" class="price-sale" :text="item.timeship" width="auto" textWrap="true" />
                </FlexboxLayout>
                <FlexboxLayout alignItems="center" justifyContent="space-between" marginLeft="10" marginRight="10" padding="5">
                    <Label fontSize="12" fontWeight="bold" color="gray" horizontalAlignment="right" class="pay" text="Nơi nhận:" textWrap="true" />
                    <Label fontSize="12" fontWeight="bold" color="gray" horizontalAlignment="left" class="price-sale" :text="item.street" width="auto" textWrap="true" />
                </FlexboxLayout>
                <FlexboxLayout alignItems="center" justifyContent="space-between" marginLeft="10" marginRight="10" padding="5">
                    <Label fontSize="12" fontWeight="bold" color="gray" horizontalAlignment="left" class="pay" text="Thanh toán:" textWrap="true" />
                    <Label fontSize="12" v-if="item.payment =='Khi nhận hàng'" fontWeight="bold" color="gray" horizontalAlignment="right" class="price-sale" :text="item.total" width="auto" textWrap="true" />
                    <Label fontSize="12" v-else fontWeight="bold" color="gray" horizontalAlignment="right" class="price-sale" text="Đã thanh toán online" width="auto" textWrap="true" />
                </FlexboxLayout>
                <GridLayout rows="auto" columns="auto,*" alignItems="center" justifyContent="space-between" marginLeft="10" marginRight="10" padding="5">
                    <Label col="0" text="Mã đơn hàng: " fontWeight="bold" color="gray" fontSize="12" textWrap="true" />
                    <Label col="1" class="id" fontWeight="bold" color="gray" :text="item.idorder" textWrap="true" />
                </GridLayout>
            </StackLayout>
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
                   </StackLayout>
</StackLayout>
</DockLayout>

</GridLayout>
<GridLayout v-else rows="*" columns="*">
  <DockLayout stretchLastChild="true">
      <FlexboxLayout dock="bottom" alignItems="center" justifyContent="space-between" padding="5">
                <Button backgroundColor="#4d4d4d" class="btn"  color="white"  margin="10"  horizontalAlignment="left" width="auto"  text="Sign in" @tap="gotosignin" />
                <Button backgroundColor="#4d4d4d" class="btn"  color="white" margin="10" horizontalAlignment="right" width="auto"  text="Sign up" @tap="gotosignup" />
            </FlexboxLayout>
    <Label class="text" textWrap="true" text="Bạn chưa đăng nhập hãy đăng nhập nào!"/>
  </DockLayout>
</GridLayout>
</Page>
</template>

<script>
import login from './signin.vue';
import signup from './signup.vue'
import app from './App.vue'
import * as ApplicationSettings from 'tns-core-modules/application-settings';
export default {
        data(){
            return{
                data : this.$store.state.infouser,
            }
        },
        computed:{
            order:function(){
                var lst=[]
                var odr=this.$store.state.order
                var id = this.$store.state.infouser.id
                for(var i = 0; i< odr.length ; ++i ){
                    if(id == odr[i].id){
                        lst.push(odr[i])
                    }
                }
                return lst
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
            logout(){
                // ApplicationSettings.getString('is_logged_in') == 'false'
                // this.$navigateTo(login,{clearHistory:true,
                //    transition: {
                //     name: "slideLeft",
                //     duration: 300,
                //     curve: "easeIn",
                // },
                // })
                this.$store.state.infouser ={}
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
                        title: "Huỷ đơn hàng",
                        message: "Boom hàng ?",
                        cancelButtonText: "Cancer",
                        okButtonText: "OK",
                    }).then((result) => {
                        if (result == true) {
                        this.$store.state.order.splice(this.$store.state.order.indexOf(object.bindingContext), 1);
                        }
                        this.$refs.listView.notifySwipeToExecuteFinished();
                    });
                    },
        }
    }
</script>
<style scoped>
.logo{
  height: 50;
  width: 100;
 
}
.user{
    height: 200;
    width: 200;
    margin: auto;
    margin-bottom:10 ;
}
.info{
    font-size: 15;
}
.id{
    padding: 5;
    align-items: center;
    justify-content: space-between;
    font-size: 12;
}
.btn{
  border-radius: 15 ;
}
.order{
    background: #ffffff;
    padding:10 ;
    border-radius: 10;
    android-elevation:5;
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
.right Image{
    margin-left:17 ;
}
.text{
    text-align: center;
    padding-top:250 ;
    font-size: 20;
      margin: 20;
}
</style>