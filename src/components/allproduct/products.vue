<template>
     <StackLayout class="products" height="auto">
                        <GridLayout rows="auto">
                            <Image src="~/assets/images/banner/banner2 .jpg" stretch="aspectFit" />
                        </GridLayout>
                        
                          <WrapLayout class="product" orientation="horizontal" itemHeight="auto" itemWidth="177" >
                             <StackLayout class="item" v-for="item in dress" :key="item">
                            <Image :src="item.images[0]" height="220" width="160" stretch="aspectFit" />
                         <Label class="price" :text="item.price.old" />

                            <Label :text="item.name" textWrap="true" />
                            
                          </StackLayout>
                       
                          </WrapLayout>
                    </StackLayout>
</template>

<script>

export default ({
   props:{
       dress:{
           type:Object,
           default:[]
       }
   },
   methods:{

   }
})
</script>

<style scoped>
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
    margin-top: -40px;
    background: #d6b627;
}
</style>