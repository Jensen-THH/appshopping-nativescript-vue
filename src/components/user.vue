<template>
<Page>
  
<ActionBar title="User" icon="">
  <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="goBack" />
</ActionBar>
<StackLayout>
     <FlexboxLayout alignItems="center" justifyContent="space-between" padding="5">
        <Label horizontalAlignment="left" text="Họ và tên:" color="black"  textWrap="true" />
        <Label horizontalAlignment="right" :text="data.name" textWrap="true" />
    </FlexboxLayout>
     <FlexboxLayout alignItems="center" justifyContent="space-between" padding="5">
        <Label horizontalAlignment="left" text="Số điện thoại:" color="black"  textWrap="true" />
        <Label horizontalAlignment="right" :text="data.phone" textWrap="true" />
    </FlexboxLayout>
    <Label :text="data.id" textWrap="true" />
    <Button text="Logout" @tap="logout" />
    
</StackLayout>
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
                this.$navigateTo(login,{clearHistrory:true})
            },
            goback(){
                console.log('no')
            }
        }
    }
</script>