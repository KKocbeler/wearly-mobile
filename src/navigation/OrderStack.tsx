import { createStackNavigator } from "@react-navigation/stack";
import OrderDetail from "../screens/ProfileScreen/OrderScreen/OrderDetail";

const Stack = createStackNavigator();

function OrderStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="OrderDetailScreen" component={OrderDetail}/>
        </Stack.Navigator>
    )
}

export default OrderStack