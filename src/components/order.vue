<template>
   <Page>
      <ActionBar title="Order" backgroundColor="white">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$modal.close"></NavigationButton>
    </ActionBar>
    <GridLayout rows="*" columns="*">
      <DockLayout stretchLastChild="true">
        <Label  dock="top" fontWeight="bold"  color="black" text="Xác nhận và thanh toán :" fontSize="15" padding="10" />
           <FlexboxLayout dock="bottom" alignItems="center" justifyContent="space-between" padding="5">
                <Button backgroundColor="#4d4d4d"  color="white"  margin="10"  horizontalAlignment="left" width="auto"  text="Trở về" @tap="$modal.close" />
                <Button backgroundColor="#4d4d4d"  color="white" margin="10" horizontalAlignment="right" width="auto"  text="Đặt hàng" @tap="dathang" />
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
                          <StackLayout backgroundColor="#f2f2f2" height="110" margin="10" class="item"  orientation="vertical" width="160">
                                <Image :src="item.images"  height="100" stretch="aspectFit" />
                          </StackLayout>
                        </v-template>
                      </RadListView>
               <FlexboxLayout row="1" alignItems="center" justifyContent="space-between" marginLeft="20" marginRight="20" padding="5">
                    <Label fontWeight="bold" horizontalAlignment="left" class="price-sale" text="Thanh toán bằng: " width="auto" textWrap="true" />
                    <Label fontWeight="bold" horizontalAlignment="right" class="pay" :text="choosepay" textWrap="true" />
                </FlexboxLayout>
                <GridLayout marginLeft="10" marginRight="10" marginBottom="20" v-if="choosecard" row="2" rows="auto" columns="auto,*">
                  <Label paddingTop="20" fontWeight="bold" color="black" text="Số tài khoản" col="0" textWrap="true" />
                  <TextField col="1" v-model="stk" keyboardType="number" />
                  
                </GridLayout>
              </GridLayout>
             <FlexboxLayout v-else alignItems="center" justifyContent="space-between" marginLeft="20" marginRight="20" padding="5">
                    <Label fontWeight="bold" horizontalAlignment="left" class="price-sale" text="Thanh toán: " width="auto" textWrap="true" />
                    <Label fontWeight="bold" horizontalAlignment="right" class="pay" :text="payment" textWrap="true" />
                </FlexboxLayout>
                <Label  fontWeight="bold"  color="black" text="Đơn hàng gồm có:" fontSize="15" padding="10" />
               
                   <StackLayout height="155">
               <ListView for="item in this.$store.state.cart">
                 <v-template>
                     <StackLayout>
                      <FlexboxLayout alignItems="center" justifyContent="space-between" marginLeft="20" marginRight="20" padding="5">
                    <Label fontWeight="bold" horizontalAlignment="right" class="pay" :text="item.name" textWrap="true" />
                    <Label fontWeight="bold" horizontalAlignment="left" class="price-sale" :text="'Số lượng: '+item.quantity " width="auto" textWrap="true" />
                </FlexboxLayout>
                     </StackLayout>
                 </v-template>
               </ListView>
                   </StackLayout>
                <FlexboxLayout alignItems="center" justifyContent="space-between" marginLeft="20" marginRight="20" padding="5">
                    <Label fontWeight="bold" horizontalAlignment="left" class="price-sale" :text="'Tổng số: '+this.info.count " width="auto" textWrap="true" />
                    <Label fontWeight="bold" horizontalAlignment="right" class="pay" :text="'Total: '+this.info.total" textWrap="true" />
                </FlexboxLayout>
                    <GridLayout rows="auto" columns="auto,*" marginLeft="10" marginRight="10">
                      
                    <Label fontWeight="bold" col="0" paddingTop="13" alignItems="center" horizontalAlignment="left" class="price-sale" text="Nhận hàng tại:" width="auto" textWrap="true" />
                    <Label fontWeight="bold"  col="1" fontSize="13" padding="10" horizontalAlignment="right" class="pay" :text="this.info.street" textWrap="true" />
                    </GridLayout>
          </StackLayout>
        </ScrollView>
        
      </DockLayout>
    </GridLayout>
   </Page>
   
</template>

<script>
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
                choosecard:false
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
</style>