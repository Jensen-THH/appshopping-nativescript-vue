<template>
  <Page>
    <ActionBar title="Login" backgroundColor="white" color="black" class="action-bar" />
    <!-- <Gradient direction="to right" colors="#39B994, #337FC7"> -->
        <!-- <Gradient direction="to right" colors="#FF0077, red, #FF00FF"> -->
      <FlexboxLayout  flexDirection="column" justifyContent="center" class="full-height">
        <Image src="~/assets/images/icon/c1d48130-b517-47a9-8b8a-6200c3ffe19e_200x200.png" class="logo-container "/>

        <StackLayout class="container">
          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/assets/images/icon/user.png" width="20" height="20" class="icon-margin" />
            <TextField color="black" v-model="usernameInput" hint="User name"  autocorrect="false" autocapitalizationType="none" class="form-input" />
          </FlexboxLayout>

          <FlexboxLayout alignItems="center" class="border-bottom">
            <Image src="~/assets/images/icon/secure.png" width="20" height="20" class="icon-margin" />
            <TextField color="black" v-model="passwordInput" hint="Password" secure="true" class="form-input" />
          </FlexboxLayout>

          <Button backgroundColor="#4b4b4b" color="white" text="Login" @tap="onButtonTap" class="my-button" />

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
    border-bottom-color: rgb(0, 0, 0);
    margin-bottom: 40;
    padding-bottom: 8;
  }
  .form-input {
    width: 80%;
    color: black;
    placeholder-color: black;
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
  }
  .full-height {
    height: 100%;
    background: #f0f0f0;
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