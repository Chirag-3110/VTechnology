// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screen/HomeScreen/Home";
import Service from "../Screen/HomeScreen/Service";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createBottomTabNavigator();

const MainNavigation = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
                tabBarActiveTintColor: 'white',
                tabBarShowLabel: false,
                tabBarStyle: {
                    // position: 'absolute',
                    backgroundColor: 'pink',
                    elevation: 15,
                    height:60,
                    // borderTopLeftRadius:100
                    // bottom: 10,
                    // left: 20,
                    // right: 20,
                    // height: 70,
                },
            }}
        >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="Service" component={Service} />
        </Stack.Navigator>
    )
}
export default MainNavigation;