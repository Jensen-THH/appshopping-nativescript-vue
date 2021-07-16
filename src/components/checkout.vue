<template>
  <Page>
    <ActionBar :title="title" backgroundColor="white">
      <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="this.$navigateBack"></NavigationButton>
    </ActionBar>
    <GridLayout rows="*" columns="*">
      
        <DockLayout stretchLastChild="true">
      <Label dock="top" fontWeight="bold" text="Thông tin người nhận :" fontSize="15" padding="10" textWrap="true" />
    <Button dock="bottom" text="send" @tap="send" />

    <ScrollView>
        <StackLayout height="auto">
            <RadDataForm marginLeft="24"  marginRight="24" :source="person">
            </RadDataForm>

                <FlexboxLayout alignItems="center" justifyContent="space-between" padding="5">
                    <Button @tap="giaohang"  horizontalAlignment="left" fontWeight="bold" text="Phương thức" width="auto" textWrap="true" />
                    <Label  horizontalAlignment="right" class="price-sale" :text="ship" fontSize="15" paddingRight="20" textWrap="true" />
                </FlexboxLayout>
        </StackLayout>
    </ScrollView>

        </DockLayout>
    </GridLayout>
    
  </Page>
</template>

<script>
    export default {
        data () {
    return {
        ship:'',
      title: 'Checkout',
      person: {
        Tên: this.$store.state.infouser.name,
        Tuổi: 20,
        email: 'email@gmail.com',
        phone: 0, 
        city: '',
        street: '',
      }
    };
  },
  methods: {
      giaohang(){
          action("Phương thức giao hàng", "Cancel", ["Bưu điện", "Giao hàng nhanh"])
        .then(result => {
            console.log(result);
            if(result != "Cancel")
            this.ship = result
        });
      },
    onNavigationButtonTap() {
      Frame.topmost().goBack();
    },
    send(){
        console.log(this.person)
    }
  }
    }
</script>