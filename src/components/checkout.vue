<template>
  <Page>
    <ActionBar :title="title" backgroundColor="white">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="this.$navigateBack"></NavigationButton>
    </ActionBar>
    <GridLayout rows="*" columns="*" backgroundColor="white" color="black">
      
        <DockLayout stretchLastChild="true">
      <Label dock="top" fontWeight="bold"  color="black" text="Thông tin người nhận :" fontSize="15" padding="10" textWrap="true" />
    <Button dock="bottom" class="btn" backgroundColor="#4d4d4d"  color="white" text="Next" @tap="send" />

    <ScrollView>
        <StackLayout height="auto">
            <RadDataForm marginLeft="24" borderRadius="25" color="black"  class="bg" marginRight="24" :source="person">
            </RadDataForm>

                <FlexboxLayout alignItems="center" justifyContent="space-between" padding="5">
                    <Button backgroundColor="gray" class="btn"  color="white" @tap="giaohang"  horizontalAlignment="left" fontWeight="bold" text="Giao hàng" width="auto"  />
                    <Label  horizontalAlignment="right" class="price-sale" :text="ship" fontSize="15" paddingRight="20" textWrap="true" />
                </FlexboxLayout>
                <FlexboxLayout alignItems="center" justifyContent="space-between" padding="5">
                    <Button backgroundColor="gray" class="btn"  color="white" @tap="thanhtoan"  horizontalAlignment="left" fontWeight="bold" text="Thanh toán" width="auto" />
                    <Label  horizontalAlignment="right" class="price-sale" :text="payment" fontSize="15" paddingRight="20" textWrap="true" />
                </FlexboxLayout>
        </StackLayout>
    </ScrollView>

        </DockLayout>
    </GridLayout>
    
  </Page>
</template>

<script>
import order from './order.vue'
    export default {
        props:{
            all:{
                type:Object,
                default:{},
            }
        },
        data () {
    return {
        ship:'',
        payment:'',
      title: 'Checkout',
      person: {
        name: this.$store.state.infouser.name,
        age: 20,
        email: 'email@gmail.com',
        phone: this.$store.state.infouser.phone, 
        city: 'City',
        street: 'Street',
      }
    };
  },
  methods: {
      giaohang(){
          action("Phương thức giao hàng", "Cancel", ["Bưu điện", "Giao hàng nhanh"])
        .then(result => {
            if(result != "Cancel")
            this.ship = result
        });
      },
      thanhtoan(){
          action("Phương thức thanh toán", "Cancel", ["Khi nhận hàng", "Online"])
        .then(result => {
            if(result != "Cancel")
            this.payment = result
        });
      },
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    send(){
        var p =this.person
        if (p.name != undefined && p.age != '' &&  p.email != '' && p.phone!= 0 &&  p.city!= '' &&  p.street!= '' && this.ship != '' && this.payment != ''){
                // if(p.name == undefined){
                p.ship = this.ship
                p.payment = this.payment
                p.total = this.all.total
                p.count = this.all.count
                this.$showModal(order,
                    {   
                        fullscreen: true,
                        props:{ info : p, } ,
                        transition: {name: "slideLeft",duration: 300,curve: "easeIn"},
                    }
            )}
        else{
            alert({
                title:'JSShop',
                message:'Vui lòng nhập đầy đủ thông tin!',
                okButtonText: "Ok"
            })
        }
    }
  }
    }
</script>
<style scoped>
.btn{
    border-radius: 15;
       android-elevation:5;
       background: #4d4d4d;
       color: white;
}
.bg{
    background: #f2f2f2;
    border-radius: 25;
}
</style>