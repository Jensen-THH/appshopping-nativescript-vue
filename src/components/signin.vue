<template>
  <Page>
    <ActionBar title="Login" backgroundColor="white" color="black" class="action-bar" />
    <!-- <Gradient direction="to right" colors="#39B994, #337FC7"> -->
        <!-- <Gradient direction="to right" colors="#FF0077, red, #FF00FF"> -->
      <FlexboxLayout backgroundColor="gray" flexDirection="column" justifyContent="center" class="full-height">
        <Image src="~/assets/images/map.png" class="logo-container "/>

        <StackLayout class="container">
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/assets/images/iconshopingapp/love-it-circle.png" width="16" height="16" class="icon-margin" />
            <TextField v-model="usernameInput" hint="User name"  autocorrect="false" autocapitalizationType="none" class="form-input" />
          </FlexboxLayout>

          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/assets/images/iconshopingapp/love-it-circle.png" width="16" height="16" class="icon-margin" />
            <TextField v-model="passwordInput" hint="Password" secure="true" class="form-input" />
          </FlexboxLayout>

          <Button text="Login" @tap="onButtonTap" class="my-button" />

          <FlexboxLayout alignItems="center" justifyContent="space-between" class="auth-buttons">
            <Label horizontalAlignment="left" @tap="create" text="Create Account" />
            <Label horizontalAlignment="right" text="Forgot Password" />
          </FlexboxLayout>
        </StackLayout>

      </FlexboxLayout>

    <!-- </Gradient> -->
  </Page>
</template>

<script>
import app from './App.vue';
import signup from './signup.vue';
import * as ApplicationSettings from 'tns-core-modules/application-settings';
export default {
  data() {
    return {
      usernameInput: '',
      passwordInput: '',
    }
  },
  methods: {
    create(){
      this.$navigateTo(signup)
    },
    onButtonTap(){
        var users = this.$store.state.users
          var err = 0 
          if (this.usernameInput != '' && this.passwordInput != ''){
          for (var i = 0; i < users.length; ++i){
            if(users[i].username== this.usernameInput && users[i].password == this.passwordInput ){
               ApplicationSettings.getString('is_logged_in') == 'true'
               this.$store.commit('getinfo',this.usernameInput)
              this.$navigateTo(app,{clearHistory:true})
              err = 0
              break;
            }
            else{
              err+=1
            }
          }

          
           if (err != 0){
              alert({
                title: "JSshop",
                message: "Sai user name hoặc password",
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
    margin-bottom: 60;
  }
  .container {
    margin-left: 34;
    margin-right: 34;
  }
</style>