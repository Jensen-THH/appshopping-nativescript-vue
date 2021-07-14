<template>
  <Page>
    <ActionBar title="Sign up" backgroundColor="white" color="black" class="action-bar" />
    <!-- <Gradient direction="to right" colors="#39B994, #337FC7"> -->
        <!-- <Gradient direction="to right" colors="#FF0077, red, #FF00FF"> -->

          <GridLayout rows="*" columns="*">
        
        <ScrollView>
        <StackLayout>

      <FlexboxLayout backgroundColor="gray" flexDirection="column" justifyContent="center" class="full-height">
           <Image src="~/assets/images/map.png" class="logo-container "/>
        <StackLayout class="container">
            <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/assets/images/iconshopingapp/love-it-circle.png" width="16" height="16" class="icon-margin" />
            <TextField v-model="nameInput" hint="Your name"  class="form-input" />
          </FlexboxLayout>
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/assets/images/iconshopingapp/love-it-circle.png" width="16" height="16" class="icon-margin" />
            <TextField v-model="usernameInput" hint="User name"  autocorrect="false" autocapitalizationType="none" class="form-input" />
          </FlexboxLayout>

          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/assets/images/iconshopingapp/love-it-circle.png" width="16" height="16" class="icon-margin" />
            <TextField v-model="passwordInput" hint="Password" secure="true" class="form-input" />
          </FlexboxLayout>
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/assets/images/iconshopingapp/love-it-circle.png" width="16" height="16" class="icon-margin" />
            <TextField v-model="repasswordInput" hint="Re-Password" secure="true" class="form-input" />
          </FlexboxLayout>
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/assets/images/iconshopingapp/love-it-circle.png" width="16" height="16" class="icon-margin" />
            <TextField v-model="phoneInput" hint="Number phone" class="form-input" />
          </FlexboxLayout>
        

          <Button text="Sign up" @tap="onButtonTap" class="my-button" />

          <FlexboxLayout alignItems="center" justifyContent="space-between" class="auth-buttons">
            <Label horizontalAlignment="left" @tap= "gotologin" text="Create Account" />
            <Label horizontalAlignment="right" text="Forgot Password" />
          </FlexboxLayout>
        </StackLayout>

      </FlexboxLayout>
        </StackLayout>

        </ScrollView>
  
    
          </GridLayout>
    <!-- </Gradient> -->
  </Page>
</template>

<script>
import signin from './signin.vue';
import * as ApplicationSettings from 'tns-core-modules/application-settings';
export default {
  data() {
    return {
      usernameInput: '',
      passwordInput: '',
      repasswordInput: '',
      nameInput: '',
      phoneInput: '',
    }
  },
  methods: {
    gotologin(){
      this.$navigateTo(signin)
    },
    onButtonTap(){
          let err = 0
          var data = {}
          data.username = this.usernameInput
          data.password = this.passwordInput
          data.id = ''
          data.name = this.nameInput
          data.phone = this.phoneInput
          var users = this.$store.state.users
          if (this.usernameInput != '' && this.nameInput != '' && this.phoneInput != '' && this.passwordInput != '' && this.repasswordInput != ''){
            if(this.passwordInput=== this.repasswordInput){
              for (var i = 0; i < users.length; ++i){
                  if(users[i].username == this.usernameInput ){
                    err+=1
                    alert({
                    title: "JSshop",
                    message: "Tên tài khoản đã được sử dụng",
                    okButtonText: "Ok"
                  })
                  break;
                  }                         
                  }
                if (err == 0){
                    
                    this.$store.commit('adduser',data)
                    alert({
                    title: "JSshop",
                    message: "Tạo tài khoản thành công",
                    okButtonText: "Ok"
                  })

                      this.$navigateTo(signin,{clearHistory:true})
                }
            }
            else{
              alert({
              title: "JSshop",
              message: "Hai mật khẩu không trùng khớp",
              okButtonText: "Ok"
            })
            }
            }
      else {
          alert({
              title: "JSshop",
              message: "Vui lòng nhập đầy đủ thông tin",
              okButtonText: "Ok"
            })
      }
      }

  }
}
</script>

<style lang="scss">
  .border-bottom {
    border-bottom-width: 1;
    border-bottom-color: white;
    margin-bottom: 40;
    padding-bottom: 8;
  }
  .form-input {
    color: white;
    placeholder-color: white;
  }
  .icon-margin {
    margin-right: 10;
  }
  .my-button {
    background-color: #4BD5DC;
    color: white;
    font-weight: bold;
    border-radius: 25;
    padding-top: 14;
    padding-bottom: 14;
    text-transform: uppercase;
    letter-spacing: 0.1;
    margin-bottom: 20;
    margin-top: 10;
  }
  .auth-buttons {
    color: white;
    font-size: 14;
  }
  .full-height {
    height: 100%;
  }
  .logo-container {
    width: 150;
  margin-top: 20;
  }
  .container {
    margin-left: 34;
    margin-right: 34;
  }
</style>