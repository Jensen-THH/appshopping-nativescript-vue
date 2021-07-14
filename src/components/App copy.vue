<template>
  <Page>
    <!-- <Header></Header> -->
    <ActionBar backgroundColor="White">
      <GridLayout width="100%" columns="auto, *" >
        <!-- <Label
          class="open-drawer-btn"
          text="▤"
          -->
        />
        <Image  @tap="$refs.drawer.nativeView.showDrawer()"
          col="0" class="open-drawer-btn" src="~/assets/images/iconshopingapp/navigation-menu-2.png" stretch="none" />
        
        <Label class="title" text="JS" col="1" />
      </GridLayout>
    </ActionBar>
    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent backgroundColor="#ffffff">
        <Label class="drawer-header" text="JS Shop" />

        <Label class="drawer-item" text="About us" />
        <Label class="drawer-item" text="Contact" />
        <Label class="drawer-item" text="Support" />
      </StackLayout>
      <GridLayout ~mainContent columns="*" rows="*">
        <DockLayout stretchLastChild="true" backgroundColor="#ffffff">
          <Footer></Footer>
            <StackLayout height="auto" backgroundColor="#ffffff">
              <TabView backgroundColor="white" color="black" height="auto">
                
                    
                <TabViewItem title="Tất cả" backgroundColor="White">
                  <ScrollView>
         
                    <StackLayout>
                      <GridLayout height="150">
                        <Carousel
                          ref="myCarousel"
                          debug="true"
                          height="100%"
                          width="100%"
                          :items="myData"
                          colow="white"
                          @pageChanged="myChangePageEvent"
                          indicatorColor="#9b5504"
                          indicatorColorUnselected="#609b5504"
                          ios:autoPagingInterval="3"
                          android:indicatorAnimation="swap"
                        >
                          <CarouselItem
                            v-for="(item, i) in myData"
                            :key="i"
                            verticalAlignment="middle"
                            @tap="myTapPageEvent"
                          >
                            <!-- class="image-baner" -->
                            <!-- :backgroundImage="item.image" -->
                            <GridLayout>
                              <Image :src="item.image" stretch="aspectFill"></Image>
                              <!-- <Label :text="item.title" horizontalAlignment="center" backgroundColor="#50000000" height="30"></Label> -->
                            </GridLayout>
                          </CarouselItem>
                        </Carousel>
                      </GridLayout>
                    <Label class="drawer-title" text="Áo"></Label>
                    <ScrollView>
                      <RadListView
                        ref="listView"
                        for="item in shirt"
                        @itemTap="onItemTap"
                        @loaded="onLoaded"
                        @scrolled="onScrolled"
                        orientation="horizontal"
                      >
                        <v-template>
                          <StackLayout class="item"  orientation="vertical" height="220" width="160">
                                <Image :src="item.images[0]"  stretch="aspectFit" />
                                <Label :text="item.name" class="name"  textWrap="true" />
                          </StackLayout>
                        </v-template>
                      </RadListView>
                    </ScrollView>

                    <Label class="drawer-title" text="Váy"></Label>
                    <ScrollView>
                      <RadListView
                        ref="listView"
                        for="item in dress"
                        @itemTap="onItemTap"
                        @loaded="onLoaded"
                        @scrolled="onScrolled"
                        orientation="horizontal"
                      >
                        <v-template>
                          <StackLayout class="item"  orientation="vertical" height="220" width="160">
                                <Image :src="item.images[0]"  stretch="aspectFit" />
                                <Label :text="item.name" class="name" textWrap="true" />
                          </StackLayout>
                        </v-template>
                      </RadListView>
                    </ScrollView>

                    <Label class="drawer-title" text="Đầm"></Label>
                    <ScrollView>
                      <RadListView
                        ref="listView"
                        for="item in dress1"
                        @itemTap="onItemTap"
                        @loaded="onLoaded"
                        @scrolled="onScrolled"
                        orientation="horizontal"
                      >
                        <v-template>
                          <StackLayout class="item"  orientation="vertical" height="220" width="160">
                                <Image :src="item.images[0]"  stretch="aspectFit" />
                                <Label :text="item.name" class="name" textWrap="true" />
                          </StackLayout>
                        </v-template>
                      </RadListView>
                    </ScrollView>

                    <Label class="drawer-title" text="Quần"></Label>
                    <ScrollView>
                      <RadListView
                        ref="listView"
                        for="item in pant"
                        @itemTap="onItemTap"
                        @loaded="onLoaded"
                        @scrolled="onScrolled"
                        orientation="horizontal"
                      >
                        <v-template>
                          <StackLayout class="item"  orientation="vertical" height="220" width="160">
                                <Image :src="item.images[0]"  stretch="aspectFit" />
                                <Label :text="item.name" class="name" textWrap="true" />
                          </StackLayout>
                        </v-template>
                      </RadListView>
                    </ScrollView>
                    </StackLayout>       
                      
                  </ScrollView>         
                </TabViewItem>
                  
                  <!--Áo -->         
                <TabViewItem title="Áo" >
                  <ScrollView>
                    <StackLayout class="products" height="auto">
                        <GridLayout rows="auto">
                            <Image src="~/assets/images/banner/banner2 .jpg" stretch="aspectFit" />
                        </GridLayout>
                             <AutoFocusView></AutoFocusView>
                           <SearchBar
                            hint="Nhập vào đây"
                            color="#2c3e50"
                            backgroundColor="white"
                            width="90%"
                            v-model="searchQueryShirt"
                          />
                          <WrapLayout class="product" orientation="horizontal" itemHeight="auto" itemWidth="177" >
                             <StackLayout class="item" v-for="(item,index) in filterproductShirt" :key="index" @tap="itemTap(item)">
                            <Image :src="item.images[0]" height="220" width="160" stretch="aspectFit" />
                         <Label class="price" :text="item.price.old" color="black" />

                            <Label :text="item.name" class="name2" color="black" textWrap="true" />
                            
                          </StackLayout>
                       
                          </WrapLayout>
                    </StackLayout>
                  </ScrollView>
                </TabViewItem>

                  <!--váy -->         
                <TabViewItem title="Váy">
                  <ScrollView>
                    <StackLayout class="products" height="auto">
                        <GridLayout rows="auto">
                            <Image src="~/assets/images/banner/banner2 .jpg" stretch="aspectFit" />
                        </GridLayout>
                               <AutoFocusView></AutoFocusView>
                           <SearchBar
                            hint="Nhập vào đây"
                            color="#2c3e50"
                            backgroundColor="white"
                          
                            width="90%"
                            v-model="searchQueryDress"
                          />
                        
                          <WrapLayout class="product" orientation="horizontal" itemHeight="auto" itemWidth="177" >
                             <StackLayout class="item" v-for="(item,index) in filterproductDress" :key="index" @tap="itemTap(item)">
                            <Image :src="item.images[0]" height="220" width="160" stretch="aspectFit" />
                         <Label class="price" :text="item.price.old" color="black" />

                            <Label :text="item.name" class="name2" color="black" textWrap="true" />
                            
                          </StackLayout>
                       
                          </WrapLayout>
                    </StackLayout>
                  </ScrollView>
                </TabViewItem>

                   <!--Đầm -->         
                <TabViewItem title="Đầm">
                  <ScrollView>
                    <StackLayout class="products" height="auto">
                        <GridLayout rows="auto">
                            <Image src="~/assets/images/banner/banner2 .jpg" stretch="aspectFit" />
                        </GridLayout>
                           <AutoFocusView></AutoFocusView>
                           <SearchBar
                            hint="Nhập vào đây"
                            color="#2c3e50"
                            backgroundColor="white"
                            width="90%"
                            v-model="searchQueryDress1"
                          />
                          <WrapLayout class="product" orientation="horizontal" itemHeight="auto" itemWidth="177" >
                             <StackLayout class="item" v-for="(item,index) in filterproductDress1" :key="index" @tap="itemTap(item)">
                            <Image :src="item.images[0]" height="220" width="160" stretch="aspectFit" />
                         <Label class="price" :text="item.price.old" color="black" />

                            <Label :text="item.name" class="name2" color="black" textWrap="true" />
                            
                          </StackLayout>
                       
                          </WrapLayout>
                    </StackLayout>
                  </ScrollView>
                </TabViewItem>
                
                   <!--Quần -->         
                <TabViewItem title="Quần">
                  <ScrollView>
                    <StackLayout class="products" height="auto">
                        <GridLayout rows="auto">
                            <Image src="~/assets/images/banner/banner2 .jpg" stretch="aspectFit" />
                        </GridLayout>
                           <AutoFocusView></AutoFocusView>
                           <SearchBar
                            hint="Nhập vào đây"
                            color="#2c3e50"
                            backgroundColor="white"
                            width="90%"
                            v-model="searchQueryPant"
                          />
                          <WrapLayout class="product" orientation="horizontal" itemHeight="auto" itemWidth="177" >
                             <StackLayout class="item" v-for="(item,index) in filterproductPant" :key="index" @tap="itemTap(item)">
                            <Image :src="item.images[0]" height="220" width="160" stretch="aspectFit" />
                         <Label class="price" :text="item.price.old" color="black" />

                            <Label :text="item.name" class="name2" color="black" textWrap="true" />
                            
                          </StackLayout>
                       
                          </WrapLayout>
                    </StackLayout>
                  </ScrollView>
                </TabViewItem>
              
              </TabView>
            </StackLayout>
        </DockLayout>
      </GridLayout>
    </RadSideDrawer>
  </Page>
</template>

<script >
const filterproduct = (product,name)=>{
  var list = [];
  var ten = name
    if (ten === "" || !ten) {
      return product;
    }
   
    ten = ten.trim().toLowerCase();
    var items = product.filter(function (item) {
      if (item.name.toLowerCase().indexOf(ten) != -1) {
          return item;
          }
        });
    if (items.length > 0) {
        list = items;
      }
    
    return list
  };
import Footer from "./include/footer.vue";
import Product from "./allproduct/products.vue"
export default {
  components: {
    Footer,
  },
  data() {
    return {
      myData:[
        {image:'~/assets/images/banner/banner2 .jpg'},
        {image:'~/assets/images/banner/banner2.jpg'},
        {image:'~/assets/images/banner/banner3.jpg'},
      ],
      searchQueryShirt: null,
      searchQueryDress:null,
      searchQueryDress1:null,
      searchQueryPant:null,
      shirt: this.$store.state.shirt,
      dress:  this.$store.state.dress,
      dress1:  this.$store.state.dress1,
      pant: this.$store.state.pant,
    };
  },
  watch: {
      async myData(to) {
          await this.$nextTick()
          this.$refs.myCarousel.nativeView.refresh();
      },
  },
computed: {
  filterproductShirt : function(){
    return filterproduct(this.shirt,this.searchQueryShirt)
  },
    filterproductDress : function(){
   return filterproduct(this.dress,this.searchQueryDress)
  },
    filterproductDress1 : function(){
   return filterproduct(this.dress1,this.searchQueryDress1)
  },
    filterproductPant : function(){
   return filterproduct(this.pant,this.searchQueryPant)
  },
  },
  methods:{ 
 onItemTap({ item }) {
      console.log(`Tapped on ${item.name}`);
      this.$showModal(Product, { fullscreen: true, props: { product: item }});
    },
    itemTap(item){
      console.log(item.name)
      this.$showModal(Product, { fullscreen: true, props: { product: item }});
    },
   myTapPageEvent(args) {
    console.log('Tapped page index: ' + this.$refs.myCarousel.nativeView.selectedPage);
    },
    myChangePageEvent(args) {
        console.log('Page changed to index: ' + args.index);
    }
},  

};
</script>

<style scoped>
.image-baner{
  
    background-repeat: no-repeat;

  background-size: cover;

  background-position: center;

}
.socialbtn {
  font-size: 10px;
  background: none;
}
ActionBar {
  background-color: #f7f3f3;
  color: #000000;
}

.title {
  text-align: left;
  padding-left: 16;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}

.drawer-header {
  padding: 50 16 16 16;
  margin-bottom: 16;
  background-color: #f2f2f2;
  color: #000000;
  font-size: 24;
}
.drawer-title{
  padding: 16 16 16 16;
  /* background-color:red; */
  color: #000000;
  font-weight: 500;
  text-transform:uppercase;

  font-size: 16;
}
.drawer-item {
  padding: 8 16;
  color: #333333;
  font-size: 16;
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
.name{
   text-transform:uppercase;
  align-items: center;
  justify-content: center;
  height: 100;
  font-size:11;
  padding: 5px;
  color: #000000;
  background-color: #ffffff;
}
.name2{
  text-transform:uppercase;
}
.price{
  width: 80%;
    margin-top: -40px;
    background: #ffffff;
}
.open-drawer-btn{
  align-items: center;
  margin-top:12;
}
</style>
