<template>
<Page>
  
<ActionBar title="User" backgroundColor="White">
  <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$navigateBack" />
  <Image col="1" src="~/assets/images/icon/logo.png" class="logo" stretch="aspectFill" />
</ActionBar>
<GridLayout rows="*" columns="*" >
<DockLayout stretchLastChild="true"  backgroundColor="#ededed">
    <Button dock="bottom" text="Logout" width="50%" alignItems ="center" col="1" @tap="logout" />

<StackLayout marginLeft="34" class="info" marginRight="34"  marginTop="50" alignItems="center" height="100%">
     <Image src="~/assets/images/icon/user.png" class="user" alinItems="center" stretch="aspectFill" />
     
     <FlexboxLayout  alignItems="center" justifyContent="space-between" padding="5">
        <Label horizontalAlignment="left" text="Họ và tên:" color="black"  textWrap="true" />
        <Label horizontalAlignment="right" :text="data.name" textWrap="true" />
    </FlexboxLayout>
     <FlexboxLayout alignItems="center" justifyContent="space-between" padding="5">
        <Label horizontalAlignment="left" text="Số điện thoại:" color="black"  textWrap="true" />
        <Label horizontalAlignment="right" :text="data.phone" textWrap="true" />
    </FlexboxLayout>
    <GridLayout rows="auto" columns="auto,*">
      <Label col="0" text="ID: " textWrap="true" />
      
    <Label col="1" class="id" :text="data.id" textWrap="true" />
    </GridLayout>
    
</StackLayout>
</DockLayout>

</GridLayout>

</Page>
</template>

<script>
import login from './signin.vue';
import * as ApplicationSettings from 'tns-core-modules/application-settings';
export default {
        data(){
            return{
                data : this.$store.state.infouser
            }
        },
        methods:{
            logout(){
                ApplicationSettings.getString('is_logged_in') == 'false'
                this.$navigateTo(login,{clearHistory:true})
            },
            goback(){
                console.log('no')
            }
        }
    }
</script>
<style scoped>
.logo{
  height: 50;
  width: 100;
 
}
.user{
    height: 200;
    width: 200;
    margin: auto;
    margin-bottom:10 ;
}
.info{
    font-size: 15;
}
.id{
    padding: 5;
    align-items: center;
    justify-content: space-between;
    font-size: 12;
}
</style>