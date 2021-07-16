
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
      {
        "_id": {
          "$oid": "6064365720bd941a081ab8b3"
        },
        "images": [
          "https://product.hstatic.net/200000000131/product/vang-1_cecf6f10097c40af993a9c064e72fc24_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-2_7a9f16cf52314cf9896d7ca3a4c4d404_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-4_c1c8b938e1dc429fa005f04da5d60615_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-3_b77e7c5637ad4d2babf610b58ec3d7ad_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-1_59e2af5c61604ac0b97e840f728c2358_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-2_040706104f1748dfbcb4cde7ed648b34_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-3_48d32ebe47c44cdfa5226b1eb9167376_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-4_fd3679e78f7c48fea1f9d5535783b9c8_master.jpg",
          "",
          "https://product.hstatic.net/200000000131/product/vang-1_cecf6f10097c40af993a9c064e72fc24_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-2_7a9f16cf52314cf9896d7ca3a4c4d404_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-4_c1c8b938e1dc429fa005f04da5d60615_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-3_b77e7c5637ad4d2babf610b58ec3d7ad_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-1_59e2af5c61604ac0b97e840f728c2358_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-2_040706104f1748dfbcb4cde7ed648b34_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-3_48d32ebe47c44cdfa5226b1eb9167376_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-4_fd3679e78f7c48fea1f9d5535783b9c8_master.jpg"
        ],
        "name": "Đầm tay liền vạt đáp",
        "sku": " BPS12004035G",
        "price": {
          "sale": "274,000₫",
          "old": "549,000₫"
        },
        "description": "Miêu tả: Đầm tay liền vạt đáp. Size: S/M/L. Đặc tính: Thanh lịch –hiện đại. Thể loại: Trang phục công sở. Màu sắc: Đen - vàng. Chất liệu: Phi gân.Số đo mẫu nữ: Chiều cao: 168 cm. Số đo 3 vòng: 83 - 59 - 86 (Mặc size S). - Giặt tay bằng nước lạnh - Không ngâm, không tẩy - Giặt riêng các sản phẩm khác màu - Không vắt.  - Là ủi ở nhiệt độ thấp. Khuyến khích giặt khô.",
        "category": "Đầm",
        "quantity": 3,
        "__v": 0
      },
      {
        "_id": {
          "$oid": "6064365a20bd941a081ab8b4"
        },
        "images": [
          "https://product.hstatic.net/200000000131/product/den-1_8d78492a3df1434987aed1fc1f67e19f_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-2_9644e2bffbc44475b761c5def49e471c_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-4_f52c3bcff2164d278420207b67b7b267_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-3_09c058587657490ba217638ae46a1310_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-1_309cc07405e548ef9b61958f7289b1fb_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-2_2621b162f6074812b22a3b38a198de54_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-3_73a0f5dd339d4e769e4f1a55f608e277_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-4_817e54fb3aff4a22a2c2bd176b9f9c7e_master.jpg",
          "",
          "https://product.hstatic.net/200000000131/product/den-1_8d78492a3df1434987aed1fc1f67e19f_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-2_9644e2bffbc44475b761c5def49e471c_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-4_f52c3bcff2164d278420207b67b7b267_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-3_09c058587657490ba217638ae46a1310_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-1_309cc07405e548ef9b61958f7289b1fb_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-2_2621b162f6074812b22a3b38a198de54_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-3_73a0f5dd339d4e769e4f1a55f608e277_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-4_817e54fb3aff4a22a2c2bd176b9f9c7e_master.jpg"
        ],
        "name": "Đầm tay cánh dơi phối nút",
        "sku": " CMC12002014G",
        "price": {
          "sale": "199,000₫",
          "old": "599,000₫"
        },
        "description": "Miêu tả: Đầm tay cánh dơi phối nút. Size: S/M/L/XL. Đặc tính: Thanh lịch – trẻ trung. Thể loại: Trang phục dạo phố – công sở. Màu sắc: Vàng - đen. Chất liệu: Cotton xô gân mỏng. Số đo mẫu nữ: Chiều cao: 173 cm. Số đo 3 vòng: 80 - 61 - 88 (Mặc size M). - Giặt tay bằng nước lạnh - Không ngâm, không tẩy - Giặt riêng các sản phẩm khác màu - Không vắt.  - Là ủi ở nhiệt độ thấp. Khuyến khích giặt khô.",
        "category": "Đầm",
        "quantity": 3,
        "__v": 0
      },
    ],
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
      {
        "_id": {
          "$oid": "6064365720bd941a081ab8b3"
        },
        "images": [
          "https://product.hstatic.net/200000000131/product/vang-1_cecf6f10097c40af993a9c064e72fc24_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-2_7a9f16cf52314cf9896d7ca3a4c4d404_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-4_c1c8b938e1dc429fa005f04da5d60615_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-3_b77e7c5637ad4d2babf610b58ec3d7ad_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-1_59e2af5c61604ac0b97e840f728c2358_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-2_040706104f1748dfbcb4cde7ed648b34_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-3_48d32ebe47c44cdfa5226b1eb9167376_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-4_fd3679e78f7c48fea1f9d5535783b9c8_master.jpg",
          "",
          "https://product.hstatic.net/200000000131/product/vang-1_cecf6f10097c40af993a9c064e72fc24_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-2_7a9f16cf52314cf9896d7ca3a4c4d404_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-4_c1c8b938e1dc429fa005f04da5d60615_master.jpg",
          "https://product.hstatic.net/200000000131/product/vang-3_b77e7c5637ad4d2babf610b58ec3d7ad_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-1_59e2af5c61604ac0b97e840f728c2358_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-2_040706104f1748dfbcb4cde7ed648b34_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-3_48d32ebe47c44cdfa5226b1eb9167376_master.jpg",
          "https://product.hstatic.net/200000000131/product/den-4_fd3679e78f7c48fea1f9d5535783b9c8_master.jpg"
        ],
        "name": "Đầm tay liền vạt đáp",
        "sku": " BPS12004035G",
        "price": {
          "sale": "274,000₫",
          "old": "549,000₫"
        },
        "description": "Miêu tả: Đầm tay liền vạt đáp. Size: S/M/L. Đặc tính: Thanh lịch –hiện đại. Thể loại: Trang phục công sở. Màu sắc: Đen - vàng. Chất liệu: Phi gân.Số đo mẫu nữ: Chiều cao: 168 cm. Số đo 3 vòng: 83 - 59 - 86 (Mặc size S). - Giặt tay bằng nước lạnh - Không ngâm, không tẩy - Giặt riêng các sản phẩm khác màu - Không vắt.  - Là ủi ở nhiệt độ thấp. Khuyến khích giặt khô.",
        "category": "Đầm",
        "quantity": 3,
        "__v": 0
      },
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
      data.chat =[]
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
