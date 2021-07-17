<template>
   <Page>
      <ActionBar title="Order" backgroundColor="white">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$modal.close"></NavigationButton>
    </ActionBar>
    <GridLayout  rows="*" columns="*">
      <DockLayout stretchLastChild="true">
        <Label  dock="top" fontWeight="bold"   text="Xác nhận và thanh toán :" fontSize="15" padding="10" />
           <FlexboxLayout dock="bottom" alignItems="center" justifyContent="space-between" padding="5">
                <Button backgroundColor="#4d4d4d" class="btn"  color="white"  margin="10"  horizontalAlignment="left" width="auto"  text="Trở về" @tap="$modal.close" />
                <Button backgroundColor="#4d4d4d" class="btn"  color="white" margin="10" horizontalAlignment="right" width="auto"  text="Đặt hàng" @tap="dathang" />
            </FlexboxLayout>
        <ScrollView>
          <StackLayout height="auto">
              <GridLayout rows="auto,auto,auto" columns="*" v-if="payment == 'Online'">
                
            <RadListView
                        row="0"
                        ref="listView"
                        for="item in pay"
                        @itemTap="onItemTap"
                        orientation="horizontal"
                      >
                        <v-template>
                          <StackLayout backgroundColor="#f2f2f2" height="70"  margin="10" class="item"  orientation="vertical" width="100">
                                <Image :src="item.images"  height="70" stretch="aspectFit" />
                          </StackLayout>
                        </v-template>
                      </RadListView>
               <FlexboxLayout row="1" alignItems="center" justifyContent="space-between" marginLeft="20" marginRight="20" padding="5">
                    <Label fontWeight="bold" horizontalAlignment="left" class="price-sale" text="Thanh toán bằng: " width="auto" textWrap="true" />
                    <Label fontWeight="bold" horizontalAlignment="right" class="pay" :text="choosepay" textWrap="true" />
                </FlexboxLayout>
                <GridLayout marginLeft="10" marginRight="10" marginBottom="20" v-if="choosecard" row="2" rows="auto" columns="auto,*">
                  <Label paddingTop="20" fontWeight="bold" text="Số tài khoản" col="0" textWrap="true" />
                  <TextField col="1" v-model="stk" keyboardType="number" />
                  
                </GridLayout>
              </GridLayout>
             <FlexboxLayout v-else alignItems="center" justifyContent="space-between" marginLeft="20" marginRight="20" padding="5">
                    <Label fontWeight="bold" horizontalAlignment="left" class="price-sale" text="Thanh toán: " width="auto" textWrap="true" />
                    <Label fontWeight="bold" horizontalAlignment="right" class="pay" :text="payment" textWrap="true" />
                </FlexboxLayout>
                <Label  fontWeight="bold"   text="Đơn hàng gồm có:" fontSize="15" padding="10" />
               
                   <StackLayout height="155">
               <ListView for="item in this.$store.state.cart">
                 <v-template>
                     <StackLayout>
                      <FlexboxLayout alignItems="center" justifyContent="space-between" marginLeft="20" marginRight="20" padding="5">
                    <Label fontWeight="bold" color="gray" horizontalAlignment="right" class="pay" :text="item.name" textWrap="true" />
                    <Label fontWeight="bold" color="gray" horizontalAlignment="left" class="price-sale" :text="'Số lượng: '+item.quantity " width="auto" textWrap="true" />
                </FlexboxLayout>
                     </StackLayout>
                 </v-template>
               </ListView>
                   </StackLayout>
                <FlexboxLayout alignItems="center" justifyContent="space-between" marginLeft="10" marginRight="15" >
                    <Label  fontSize="13" fontWeight="bold" horizontalAlignment="left" class="price-sale" :text="'Tổng số: '+this.info.count " width="auto" textWrap="true" />
                    <Label  fontSize="13" fontWeight="bold" horizontalAlignment="right" class="pay" :text="'Total: '+this.info.total" textWrap="true" />
                </FlexboxLayout>
                <FlexboxLayout alignItems="center" justifyContent="space-between" marginLeft="10" marginRight="15" marginTop="10">
                    <Label  fontSize="13" fontWeight="bold" horizontalAlignment="left" class="price-sale" text="Người nhận hàng: " width="auto" textWrap="true" />
                    <Label  fontSize="13" fontWeight="bold" horizontalAlignment="right" class="pay" :text="this.info.name" textWrap="true" />
                </FlexboxLayout>
                <FlexboxLayout alignItems="center" justifyContent="space-between" marginLeft="10" marginRight="15" marginTop="10">
                    <Label  fontSize="13" fontWeight="bold" horizontalAlignment="left" class="price-sale" text="Số điện thoại: " width="auto" textWrap="true" />
                    <Label  fontSize="13" fontWeight="bold" horizontalAlignment="right" class="pay" :text="this.info.phone" textWrap="true" />
                </FlexboxLayout>
                    <GridLayout rows="auto" columns="auto,*" marginLeft="10" marginRight="5">
                      
                    <Label fontWeight="bold"  fontSize="13" col="0" paddingTop="13" alignItems="center" horizontalAlignment="left" class="price-sale" text="Nhận hàng tại:" width="auto" textWrap="true" />
                    <Label fontWeight="bold"  col="1" fontSize="13" padding="10" paddingRight="10" horizontalAlignment="right" class="pay" :text="this.info.street" textWrap="true" />
                    </GridLayout>
                <FlexboxLayout alignItems="center" justifyContent="space-between" marginLeft="10" marginRight="15" marginTop="5">
                    <Label  fontSize="13" fontWeight="bold" horizontalAlignment="left" class="price-sale" text="Giao hàng:" width="auto" textWrap="true" />
                    <Label  fontSize="13" fontWeight="bold" horizontalAlignment="right" class="pay" :text="this.info.ship" textWrap="true" />
                </FlexboxLayout>
                <FlexboxLayout alignItems="center" justifyContent="space-between" marginLeft="10" marginRight="15" marginTop="10">
                    <Label  fontSize="13" fontWeight="bold" horizontalAlignment="left" class="price-sale" text="Thời gian giao hàng:" width="auto" textWrap="true" />
                    <Label  fontSize="13" v-if="this.info.ship =='Bưu điện'" fontWeight="bold" horizontalAlignment="right" class="pay" text="~ 7 ngày" textWrap="true" />
                    <Label  fontSize="13" v-else fontWeight="bold" horizontalAlignment="right" class="pay" text="~ 3 ngày" textWrap="true" />
                </FlexboxLayout>
          </StackLayout>
        </ScrollView>
        
      </DockLayout>
    </GridLayout>
  
   </Page>
   
</template>

<script>
import complete from './completeorder.vue';
    export default {
        data(){
            return{
                pay:[
                    {images:'~/assets/images/payment/visa.png',name:'visa'},
                    {images:'~/assets/images/payment/mastercard.png',name:'master Card'},
                    {images:'~/assets/images/payment/banktransfer.png',name:'bank transfer'},
                ],
                choosepay:'',
                ship:this.info.ship,
                payment:this.info.payment,
                cart: this.$store.state.cart,
                choosecard:false,
                stk:'',
                display:false
            }
        },
        props:{
            info:{
                type:Object,
                default:{}
            }
        },
        methods:{
             onItemTap({ item }) {
                 this.choosepay= item.name
                 this.choosecard=true
        },
        dathang(){

          if( this.info.payment=="Khi nhận hàng"){
            this.stk = "khi nhận hàng"
          }
          if (this.stk != ''){
            confirm({
                title: "JSShop",
                message: "Xác nhận đặt hàng",
                okButtonText: "Đồng ý",
                cancelButtonText: "Huỷ"
              }).then(result => {
                if(result == true){
                    this.display = true
                if(this.info.ship =="Bưu điện")
                {
                  this.info.timeship= "~7 ngày"
                }
                else{
                  this.info.timeship = "~3 ngày"
                }
                this.info.id = this.$store.state.infouser.id
                this.info.stk = this.stk
                this.$store.commit('addorder',this.info)
                console.log(this.info)
                this.$modal.close()
                this.$store.state.cart = []
                this.$navigateTo(complete,
                {
                  clearHistory:true,
                  transition: {
                    name: "slideLeft",
                    duration: 300,
                    curve: "easeIn",
                  },
                }
                )
                }
              });
                
          }
          else{
            alert({
              title:'JSShop',
              message:'Làm ơn nhập chọn thẻ và nhập số tài khoản của bạn!',
              okButtonText: 'Ok'
            })
          }


        }

        }
    }
</script>
<style scoped>
.pay{
    text-transform: uppercase;
}
.item{
     border-radius: 25;
       android-elevation:5;
}
.btn{
  border-radius: 15 ;
}

</style>