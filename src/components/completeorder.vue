<template>
    <Page>
         <ActionBar title="Complete"  backgroundColor="white">
     <NavigationButton text="Back" android.systemIcon="ic_menu_back"  @tap="done" />
     <!-- <ActionItem icon="" text="Left" ios.position="left" @tap="" /> -->
     <Image  src="~/assets/images/icon/logo.png" class="logo" stretch="aspectFill" />
   </ActionBar>
      <GridLayout rows="*" columns="*"  backgroundColor="white">
        <DockLayout stretchLastChild="true">
          <Button dock="bottom" backgroundColor="black" color="white" text="Done" @tap="done" />
          <Label fontSize="17" color="black" textAlign="center" class="note" text="Đặt hàng thành công ! theo dõi đơn hàng trong tài khoản của bạn !" textWrap="true" />
        </DockLayout>
      </GridLayout>
    </Page>
</template>

<script>
import user from './user.vue'
    export default {
        methods:{
            done(){
                this.$navigateTo(user,{
                     clearHistory:true,
                    transition: {
                    name: "slideLeft",
                    duration: 300,
                    curve: "easeIn",
                    },
                })
            }
        }
    }
</script>
<style scoped>
.note{
  color:black;
  padding-right:34 ;
  padding-left:34 ;
  padding-top:300;
}
.logo{
  height: 50;
  width: 100;
  
}
</style>