<template>

<Page>
  

  <StackLayout>
     <FlexboxLayout backgroundColor="white" alignItems="center"  justifyContent="space-between" >
           <Image margin="10" @tap="$modal.close" horizontalAlignment="left" alignSelf="center" src="~/assets/images/iconshopingapp/login.png" stretch="none" />
            <Label  alignSelf="center" horizontalAlignment="right" class="price-sale" padding="10" :text="product.category" textWrap="true" />
    </FlexboxLayout>
    <ScrollView>
     <FlexboxLayout backgroundColor="white" flexDirection="column-reverse" justifyContent="space-between">
            <StackLayout  alignSelf="center" width="auto" height="auto">
                <!-- <GridLayout rows="250" columns="*">
                  <Image :src="product.images[0]" alt="" />
                </GridLayout> -->
                    <GridLayout height="500" width="auto">
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
                        <Image horizontalAlignment="right" src="~/assets/images/iconshopingapp/love-it-circle.png" @tap="loveit(product)" stretch="none" />
                        
                    </FlexboxLayout>
                        <Button text="add" @tap="addCart(product)" />
                        <Label class="description" :text="product.description | newline" textWrap="true" />
                    </StackLayout>
                    
                
            </StackLayout>

    </FlexboxLayout>
    </ScrollView>
  </StackLayout>
</Page>

</template>

<script>

export default ({
   props:{
       product:{
           type:Object,
           default:{}
       }
   },
   methods:{
       addCart(product){
           this.$store.commit("add", product);
           alert('Đã thêm thành công!')
       },
       loveit(product){
           alert('Đã thêm vào danh sách yêu thích của bạn!')
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
    return value2.slice(0,endstring-13)
    // return value.split('.').join('\n +');
  }
},
})
</script>

<style scoped>
.description{
    font-size: 15;
    text-align: left;
    color: black;
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
</style>