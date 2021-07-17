<template>
  <Page>
    <ActionBar title="Sign up" backgroundColor="white" color="black" class="action-bar" />
    <!-- <Gradient direction="to right" colors="#39B994, #337FC7"> -->
        <!-- <Gradient direction="to right" colors="#FF0077, red, #FF00FF"> -->

          <GridLayout rows="*" columns="*">
        
        <ScrollView>
        <StackLayout height="100%">

      <FlexboxLayout flexDirection="column" justifyContent="center" class="full-height">
           <Image src="~/assets/images/icon/c1d48130-b517-47a9-8b8a-6200c3ffe19e_200x200.png" class="logo-container "/>
        <StackLayout class="container">
            <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/assets/images/icon/id-card.png" width="20" height="20" class="icon-margin" />
            <TextField  color="black"  v-model="nameInput" hint="Your name"  class="form-input" />
          </FlexboxLayout>
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/assets/images/icon/user.png" width="20" height="20" class="icon-margin" />
            <TextField color="black"  v-model="usernameInput" hint="User name"  autocorrect="false" autocapitalizationType="none" class="form-input" />
          </FlexboxLayout>

          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/assets/images/icon/secure.png" width="20" height="20" class="icon-margin" />
            <TextField color="black" v-model="passwordInput" hint="Password" secure="true" class="form-input" />
          </FlexboxLayout>
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/assets/images/icon/secure.png" width="20" height="20" class="icon-margin" />
            <TextField color="black" v-model="repasswordInput" hint="Re-Password" secure="true" class="form-input" />
          </FlexboxLayout>
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/assets/images/icon/mobile-phone-popular-model-nexus-5.png" width="20" height="20" class="icon-margin" />
            <TextField color="black" v-model="phoneInput" hint="Number phone" class="form-input" />
          </FlexboxLayout>
        

          <Button backgroundColor="#4b4b4b" color="white" text="Sign up" @tap="onButtonTap" class="my-button" />

          <FlexboxLayout alignItems="center" justifyContent="space-between" class="auth-buttons">
            <Label horizontalAlignment="left" @tap= "gotologin" text="Back to login" />
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
    border-bottom-color: rgb(0, 0, 0);
    margin-bottom: 40;
    padding-bottom: 8;
  }
  .form-input {
    color: rgb(0, 0, 0);
    placeholder-color: rgb(0, 0, 0);
  }
  .icon-margin {
    margin-right: 10;
  }
  .my-button {
    
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
    color: rgb(0, 0, 0);
    font-size: 14;
    // padding-bottom:50 ;
  }
  .full-height {
    height: 100%;
    color:black
    // background: #ffff;
  }
  .logo-container {
    width: 170;
  margin-top: -30;

  }
  .container {
    margin-top: -100;
    margin-left: 34;
    margin-right: 34;
  }
</style>