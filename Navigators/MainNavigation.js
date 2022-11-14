// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screen/HomeScreen/Home";
import Service from "../Screen/HomeScreen/Service";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createBottomTabNavigator();

const MainNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="Service" component={Service} />
        </Stack.Navigator>
    )
}
export default MainNavigation;