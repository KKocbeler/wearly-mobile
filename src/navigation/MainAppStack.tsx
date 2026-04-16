import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import BottomTabs from "./BottomTabs";
import MyStack from "./StackNavigator";
import ProfileStack from "./ProfileStack";
import OrderStack from "./OrderStack";

const Stack = createStackNavigator();

const MainAppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name="MyStack" component={MyStack} />
            <Stack.Screen name="ProfileStack" component={ProfileStack} />
            <Stack.Screen name="OrderStack" component={OrderStack} />
        </Stack.Navigator>
    );
};

export default MainAppStack;