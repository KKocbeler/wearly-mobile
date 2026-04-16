import { Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import AppSafeView from '../../components/AppSafeView'
import AppText from '../../components/AppText'
import { s, vs } from 'react-native-size-matters'
import AppButton from '../../components/AppButton'
import ProfileMenuItem from './ProfileMenuItem'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

const menuItems: { icon: React.ComponentProps<typeof Feather>['name']; label: string; screen: string; danger?: boolean }[] = [
  { icon: "edit", label: "Edit Profile", screen: "EditProfile" },
  { icon: "map-pin", label: "Shopping Address", screen: "Addresses" },
  { icon: "heart", label: "Wishlist", screen: "Wishlist" },
  { icon: "table", label: "Order History", screen: "Orders" },
  { icon: "bell", label: "Notification", screen: "Notifications" },
  { icon: "credit-card", label: "Cards", screen: "Cards" },
  { icon: "log-out", label: "Logout", screen: "Addresses", danger: true },
];

const ProfileScreen = () => {
    const navigation = useNavigation<any>();

    const goToAddresses = (screen: string) => {
        navigation.navigate("ProfileStack", {
            screen: screen
        })
    }
  return (
    <AppSafeView fullScreen>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flex: 1}}>
            <View style={styles.header}>
                <Image
                    style={{width: s(100), height: s(100), borderRadius: 99, marginBottom: vs(10)}} 
                    source={require("../../../assets/img/avatar.avif")}
                />
                <AppText weight='bold'>Kemal Koçbeler</AppText>
                <AppText variant="small" color="textGray">kemal@gmail.com</AppText>
            </View>
            <View style={{marginTop: "auto"}}>
                {
                    menuItems.map((item, index) => (
                        <ProfileMenuItem 
                            icon={item.icon}
                            label={item.label}
                            onPress={() => goToAddresses(item.screen)}
                            key={index}
                            style= {
                                index === menuItems.length - 1 
                                    ? {borderBottomWidth: 0}
                                    : undefined
                            }
                            danger={item.danger}
                        />
                    ))
                }
            </View>
        </ScrollView>
    </AppSafeView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
})