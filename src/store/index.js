
import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import * as ApplicationSettings from "application-settings";
import shirt from './shirt.json';
import dress from './dress.json';
import dress1 from './dress1.json';
import pant from './pant.json';
Vue.use(Vuex);
let guid = () => {
  let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
  }
  //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const Products = new Store({
  state: {
    shirt : shirt,
    dress : dress,
    dress1 : dress1,
    pant : pant,
    cart:[
    ],
    order:[],
    infouser:{},
    users:[
      {id:'c2181edf-041b-0a61-3651-79d671fa3db7',username:'admin',password:'admin',name:'Tran Gia Bao',phone:'0123456789'
    },
      {id:'c2181edf-041b-0a68-3658-79d671fa3db8',username:'jensen',password:'123456',name:'Tran Jensen',phone:'0123456710'
    },
    ],
    chat:[{productID:'6064365720bd941a081ab8b3',comment:[
      {id:'c2181edf-041b-0a61-3651-79d671fa3db7',name:'Tran Gia Bao',cmt:'Bình luận sản phẩm'},
      {id:'c2181edf-041b-0a68-3658-79d671fa3db8',name:'Tran Jensen',cmt:'Bình luận sản phẩm2'},
    ]
    }],
    love:[
    ]

  },
  mutations: {
    load(state) {
      if (ApplicationSettings.getString("store")) {
        this.replaceState(
          Object.assign(state.cart, JSON.parse(ApplicationSettings.getString("store")))
        );
      }
    },
    addlove(state,data){
      var err = true
      for(var i= 0; i < state.love.length ; ++i){
        if(state.love[i].name == data.name ){
          err = false
          break;
        }
      }
      if (err == true){
        state.love.push(data)
      }

    },
    rmlove(state,data){
      for(var i= 0; i < state.love.length ; ++i){
        if(state.love[i].name == data.name ){
          state.love.splice(i,1)
          break;
        }
      }
      return state.love
    },
    addorder(state,data){
      data.idorder = guid()
      state.order.push(data)
    },
    addchat(state,data){
        var comment={}
        comment = data.comment
        var err = 0
        for(var i = 0 ; i < state.chat.length; ++i ){
          if ( state.chat[i].productID  == data.productID){
            state.chat[i].comment.push(comment)
            err +=1
            break;
          }
        }
        if (err == 0){
          var dataconvert = {}
          dataconvert.productID =data.productID
          dataconvert.comment =[]
          dataconvert.comment.push(data.comment)
          state.chat.push(dataconvert)
        }
    },
    getinfo(state,info){
      for(var i = 0;i < state.users.length ;++i){
        if(state.users[i].username == info){
          state.infouser = state.users[i]
          break;
        }
      }
    }
    ,
    adduser(state, data){
      data.id = guid()
      console.log(data)
      state.users.push(data)

    },
    add(state, data) {
      var numberr = 0
      if (state.cart.length != 0) {
        state.cart.forEach(element => {
          if (element.name == data.name) {
            element.quantity += 1
            numberr += 1
            console.log('The product already exists in the cart!')
          }
        });
        if (numberr == 0){
          data.quantity = 1
          state.cart.push(data)
          console.log('Product added to cart successfully!')
        }
      }
      else {
        data.quantity = 1
        state.cart.push(data)
        console.log('First product added to cart successfully!')
      }
    },
    cong(state,item){
      return state.cart.forEach(element => {
        if (element.quantity <= 20){
          if(element.name==item.name){
            element.quantity += 1
        }
        }
      });
    },
    tru(state,item){
     return state.cart.forEach(element => {
        if (element.quantity > 1){
          if(element.name==item.name){
          return element.quantity -= 1
        }
        }
      });
    },
  },
  actions: {

  }
});
export default Products
