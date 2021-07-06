<template>
  <Page>
    <!-- <Header></Header> -->
    <ActionBar>
      <GridLayout width="100%" columns="auto, *">
        <Label
          class="open-drawer-btn"
          text="▤"
          @tap="$refs.drawer.nativeView.showDrawer()"
          col="0"
        />
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
          <ScrollView>
            <StackLayout height="*" backgroundColor="#ffffff">
              <TabView height="1230">
                <TabViewItem title="Tất cả">
                    <ScrollView>
                      
                <StackLayout>
                  
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
                             <!-- <AutoFocusView></AutoFocusView> -->
                           <!-- <SearchBar
                            hint="Nhập vào đây"
                            color="#2c3e50"
                            width="100%"
                            v-model="searchQueryShirt"
                          /> -->
                          <WrapLayout class="product" orientation="horizontal" itemHeight="auto" itemWidth="177" >
                             <StackLayout class="item" v-for="(item,index) in shirt" :key="index">
                            <Image :src="item.images[0]" height="220" width="160" stretch="aspectFit" />
                         <Label class="price" :text="item.price.old" />

                            <Label :text="item.name" textWrap="true" />
                            
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
                             <!-- <AutoFocusView></AutoFocusView> -->
                        
                          <WrapLayout class="product" orientation="horizontal" itemHeight="auto" itemWidth="177" >
                             <StackLayout class="item" v-for="(item,index) in dress" :key="index">
                            <Image :src="item.images[0]" height="220" width="160" stretch="aspectFit" />
                         <Label class="price" :text="item.price.old" />

                            <Label :text="item.name" textWrap="true" />
                            
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
                          <WrapLayout class="product" orientation="horizontal" itemHeight="auto" itemWidth="177" >
                             <StackLayout class="item" v-for="(item,index) in dress1" :key="index">
                            <Image :src="item.images[0]" height="220" width="160" stretch="aspectFit" />
                         <Label class="price" :text="item.price.old" />

                            <Label :text="item.name" textWrap="true" />
                            
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
                        
                          <WrapLayout class="product" orientation="horizontal" itemHeight="auto" itemWidth="177" >
                             <StackLayout class="item" v-for="(item,index) in pant" :key="index">
                            <Image :src="item.images[0]" height="220" width="160" stretch="aspectFit" />
                         <Label class="price" :text="item.price.old" />

                            <Label :text="item.name" textWrap="true" />
                            
                          </StackLayout>
                       
                          </WrapLayout>
                    </StackLayout>
                  </ScrollView>
                </TabViewItem>
              
              </TabView>
            </StackLayout>
          </ScrollView>
        </DockLayout>
      </GridLayout>
    </RadSideDrawer>
  </Page>
</template>

<script >
import Footer from "./include/footer.vue";
export default {
  components: {
    Footer,
  },
  data() {
    return {
      shirt: this.$store.state.shirt,
      dress:  this.$store.state.dress,
      dress1:  this.$store.state.dress1,
      pant: this.$store.state.pant,
    };
  },

computed: {
 
  // filterproduct : function(){
  // var list = [];
  // var ten = this.searchQuery
  //   if (ten === "" || !ten) {
  //     return this.dress;
  //   }
   
  //   ten = ten.trim().toLowerCase();
  //   var items = this.dress.filter(function (item) {
  //     if (item.name.toLowerCase().indexOf(ten) != -1) {
  //         return item;
  //         }
  //       });
  //   if (items.length > 0) {
  //       list = items;
  //     }
    
  //   return list
  // },
  // filterproductShirt : function(){
  // var list2 = [];
  // var ten = this.searchQueryShirt
  //   if (ten === "" || !ten) {
  //     return this.dress1;
  //   }
   
  //   ten = ten.trim().toLowerCase();
  //   var items = this.dress1.filter(function (item) {
  //     if (item.name.toLowerCase().indexOf(ten) != -1) {
  //         return item;
  //         }
  //       });
  //   if (items.length > 0) {
  //       list2 = items;
  //     }
    
  //   return list2
  // } 
  },
  methods:{ 
 onItemTap({ item }) {
      console.log(`Tapped on ${item.name}`);
    },
   
},

};
</script>

<style scoped>
.socialbtn {
  font-size: 10px;
  background: none;
}
ActionBar {
  background-color: #ffffff;
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
  background-color: #53ba82;
  color: #ffffff;
  font-size: 24;
}
.drawer-title{
  padding: 16 16 16 16;
  background-color: #ffffff;
  color: #0000;
  font-size: 20;
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
  align-items: center;
  justify-content: center;
  height: 100;
  font-size:10px;
  padding: 5px;
  background-color: #ffffff;
}
.price{
    margin-top: -40px;
    background: #ffffff;
}
</style>
