import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailScreen from "../screens/ProductDetailScreen";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} 
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
};

export default MyStack;