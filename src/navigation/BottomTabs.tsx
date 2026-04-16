import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import { APP_COLORS } from "../themes/appColors";
import { s, vs } from "react-native-size-matters";
import { Feather, FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator screenOptions={
            {
                headerShown: false,
                tabBarActiveTintColor: APP_COLORS.accent,
                tabBarLabelStyle: {
                    fontSize: s(12),
                    marginTop: vs(2)
                },
            }
        }>
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
                tabBarIcon: ({size, color}) => {
                    return <Feather name="home" size={24} color="black" />
                },
                title: "Home"
            }}/>
            <Tab.Screen name="ProductScreen" component={HomeScreen} options={{
                tabBarIcon: ({size, color}) => {
                    return <Feather name="box" size={24} color="black" />
                },
                title: "Products"
            }}/>
            <Tab.Screen name="CartScreen" component={CartScreen} options={{
                tabBarIcon: ({size, color}) => {
                    return <Feather name="shopping-cart" size={24} color="black" />
                },
                title: "Cart",
                headerTitleAlign: "center",
                headerShown: true,
                headerShadowVisible: false,
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{paddingLeft: s(12)}}>
                        <Ionicons name="chevron-back-outline" size={24} color="black" />
                    </TouchableOpacity>
                ),
                headerStyle: {
                    elevation: 0,       // Android
                    shadowOpacity: 0,   // iOS
                    borderBottomWidth: 0, // çizgi varsa
                },
            }}/>
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} 
                options={{
                    tabBarIcon: ({size, color}) => {
                        return <Feather name="user" size={24} color="black" />
                    },
                    title: "Profile"
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;