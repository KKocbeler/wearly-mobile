import { createStackNavigator } from "@react-navigation/stack";
import OrderScreen from "../screens/ProfileScreen/OrderScreen";
import AddressesScreen from "../screens/ProfileScreen/AddressesScreen";
import CreditCardsScreen from "../screens/ProfileScreen/CreditCardsScreen";
import NotificationsScreen from "../screens/ProfileScreen/NotificationsScreen";
import WishlistScreen from "../screens/ProfileScreen/WishlistScreen";
import { APP_COLORS } from "../themes/appColors";
import { View } from "react-native";
import EditProfile from "../screens/ProfileScreen/EditProfile";

const Stack = createStackNavigator();

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Edit Profile" component={EditProfile} />
            <Stack.Screen name="Addresses" component={AddressesScreen} />
            <Stack.Screen name="Orders" component={OrderScreen} />
            <Stack.Screen name="Wishlist" component={WishlistScreen} />
            <Stack.Screen name="Notifications" component={NotificationsScreen} />
            <Stack.Screen name="Cards" component={CreditCardsScreen} />
        </Stack.Navigator>
    );
}

export default ProfileStack;