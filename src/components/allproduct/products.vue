<template>

<Page>
  <ActionBar :title="product.category"  backgroundColor="white">
    <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
    <Image col="1" src="~/assets/images/icon/logo.png" class="logo" stretch="aspectFill" />
  </ActionBar>

     
 
         <GridLayout rows="*" columns="*" backgroundColor="#d3d3d3">
            <DockLayout  stretchLastChild="true" >
            <Footer dock="bottom"></Footer>
                
                    <StackLayout height="auto">
                    
                <ScrollView>
                        <StackLayout height='auto'>
                          
                    <FlexboxLayout backgroundColor="white" flexDirection="column-reverse" justifyContent="space-between">
                            <StackLayout  alignSelf="center" width="auto" height="auto">
                                <!-- <GridLayout rows="250" columns="*">
                                <Image :src="product.images[0]" alt="" />
                                </GridLayout> -->
                                    <GridLayout marginTop="-37" height="500" width="auto">
                                        <Carousel
                                            ref="myCarousel"
                                            debug="true"
                                        
                                            :items="product.images"
                                            colow="white"
                                            @pageChanged="myChangePageEvent"
                                            indicatorColor="#d1cbc5"
                                            indicatorColorUnselected="#f0ece9"
                                            ios:autoPagingInterval="3"
                                            android:indicatorAnimation="swap"
                                        >
                                            <CarouselItem
                                            v-for="(item, i) in product.images"
                                            :key="i"
                                            verticalAlignment="middle"
                                            @tap="myTapPageEvent"
                                            >
                                        
                                            <GridLayout>
                                                <Image :src="item"></Image>
                                                <!-- <Label :text="item.title" horizontalAlignment="center" backgroundColor="#50000000" height="30"></Label> -->
                                            </GridLayout>
                                            </CarouselItem> 
                                        </Carousel>
                                    </GridLayout>
                                    <StackLayout width ="300">
                                                
                                        <Label class="name" :text="product.name" textWrap="true" />
                            
                                        <FlexboxLayout alignItems="center" justifyContent="space-between" padding="5">
                                        <Label  horizontalAlignment="left" class="price-sale" text="Giá gốc: " width="auto" textWrap="true" />
                                        <Label  horizontalAlignment="right" class="price" width="auto" :text="product.price.old" textWrap="true" />
                                    </FlexboxLayout>
                                    <FlexboxLayout alignItems="center" justifyContent="space-between" padding="5">
                                        <Label  horizontalAlignment="left" class="price-sale" text="Giá sale: " width="auto" textWrap="true" />
                                        <Label horizontalAlignment="right" class="price-sale" :text="product.price.sale" textWrap="true" />
                                    </FlexboxLayout>
                                    <FlexboxLayout alignItems="center" justifyContent="space-between" padding="5">
                                        <Label horizontalAlignment="left" color="black" :text="'SKU: '+product.sku" textWrap="true" />
                                        <Image v-if="setlove" horizontalAlignment="right"  class="loveit" src="~/assets/images/iconshopingapp/love-it-circle.png" @tap="rmloveit(product)" stretch="none" />
                                        <Image v-else horizontalAlignment="right" src="~/assets/images/iconshopingapp/love-it-circle.png"  @tap="loveit(product)" stretch="none" />
                                        
                                    </FlexboxLayout>
                                        <Button text="add" @tap="addCart(product)" />
                                        <Label  class="description comment" :text="product.description | newline" textWrap="true" />
                                        <GridLayout class="comment" rows="auto" columns="*,auto">
                                        <TextField hint="Nhập bình luận..." col="0" v-model="binhluan" />
                                        <Button text="Send" col="1" @tap="send" />
                                        </GridLayout>
                                <StackLayout>
                                <Label text="Comment:" textWrap="true" />
                                    <RadListView ref="listView"
                                        for="item in comment"
                                        @itemTap="onItemTap">
                                        <v-template>
                                        <StackLayout alignSelf="left" class="cmt" >
                                            <Label  :text="item.name+': '+item.cmt" textWrap="true"  color="black"></Label>
                                        </StackLayout>
                                        </v-template>
                                    </RadListView>
                                
                                </StackLayout>
                                    </StackLayout>
                            </StackLayout>

                    </FlexboxLayout>
                        </StackLayout>

                </ScrollView>
                    </StackLayout> 

                
            </DockLayout>
         </GridLayout>
   
   
</Page>

</template>

<script>
// import Footer from "../include/footer.vue";
import * as utils from "tns-core-modules/utils/utils";
import login from '../signin'
export default ({
 components: {
   Footer: () => import('../include/footer.vue'),
  },
   props:{
       product:{
           type:Object,
           default:{}
       }
   },
   data(){
       return{
           cmm : this.$store.state.chat,
           user : this.$store.state.infouser,
           binhluan: '',
           love : this.$store.state.love,
          
       }
   },
   computed:{
       setlove: function(){
           var get = false
           for(var i=0;i<this.love.length ;++i){
               if(this.love[i].name == this.product.name){
                   get = true;
                   break;
               }
               else{
                   get = false
               }
           }
           return get
       },
       comment:function () { 
        
               var comment =[]
               this.cmm.forEach(element => {
                   if (element.productID == this.product._id.$oid){
                        comment = element.comment
                   }
                  
               });
               return comment

        }
   },
   methods:{

       send(){
          var data ={}
          data.productID = this.product._id.$oid
          data.comment = {}
          data.comment.id = this.user.id
          data.comment.name = this.user.name
          data.comment.cmt = this.binhluan
            if (this.binhluan != ''){
                this.$store.commit('addchat',data)
                this.binhluan = ''
                utils.ad.dismissSoftInput();

            }
       },
       addCart(product){
if (this.$store.state.infouser.name == undefined){
        alert({
          title:'JSShop',
          message:'Vui lòng đăng nhập tài khoản để mua hàng!',
          okButtonText: "Ok"
        })
        this.$navigateTo(login,
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
           else{
           this.$store.commit("add", product);
           alert({
                    title: "JSshop",
                    message: 'Đã thêm thành công!',
                    okButtonText: "Ok"
                  })
           }
       },
       loveit(product){

           if (this.$store.state.infouser.name == undefined){
        alert({
          title:'JSShop',
          message:'Vui lòng đăng nhập tài khoản để mua hàng!',
          okButtonText: "Ok"
        })
        this.$navigateTo(login,
           {
             clearHistory:true,
        transition: {
          name: "slideLeft",
          duration: 300,
          curve: "easeIn",
        },
      }
        )
      }else{
           this.$store.commit('addlove',product)
             alert({
               title:'JSshop',
               message:'Đã thêm vào danh sách yêu thích của bạn!',
               okButtonText: "Ok"
           })
         }
       },
       rmloveit(product){
           this.$store.commit('rmlove',product)
           alert({
               title:'JSshop',
               message:'Đã xoá khỏi danh sách yêu thích',
               okButtonText: "Ok"
           })
       }
   },
     watch: {
      async product(to) {
          await this.$nextTick()
          this.$refs.myCarousel.nativeView.refresh();
      },
  },
  filters: {
  newline: function (value) {
    if (!value) return ''
    value = value.toString()
    let re = /\./gi;
    let re1 = /\-/gi;
    var value1= value.replace(re,'.\n + \t')
    let endstring = value1.length
    let value2 =  value1.replace(re1,'')
    return value2.slice(0,endstring-12)
    // return value.split('.').join('\n +');
  }
},
})
</script>

<style scoped>
.comment{
    border: 1 solid black;
    background: #f8f8f8;
    border-radius:25 ;
    
}
.description{
    font-size: 15;
    text-align: left;
    color: black;
    padding: 20;
    margin-bottom:20 ;
}
.products{
    display: block;
   align-items: center;
    justify-content: center;
}
.product{
    display: flex;
     align-items: center;
    justify-content: center;
}
.item{
    align-items: center;
    justify-content: center;
    margin: 15px;
    margin-left: 25px;
    border: 1px black solid;
    border-radius:15px ;
    text-align: center;
    background-color: #f2f2f2;
}
.price{
   font-size: 18;
    text-decoration: line-through;
    color: black;

}
.price-sale{
font-size: 18;
    color: black;

}
.name{
    text-align: center;
    font-size: 20;
    text-transform:uppercase;
    color: black;

}
.logo{
  height: 50;
  width: 100;
  
}
.cmt{
    padding: 10;
    background: #f6f6f6;
    border-radius: 15;
    margin-bottom: 5;
}
.loveit{
    background: rgb(255, 32, 32);
    border-radius: 25;
}
</style>