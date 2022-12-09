import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainDashboard from "../Screen/DashBoard/MainDashboard";
import InnerDashboard from "../Screen/DashBoard/InnerDashboard";
const Stack = createNativeStackNavigator();

const DashBoardStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="MainDashboard"
        >
            <Stack.Screen name='MainDashboard' component={MainDashboard} />
            <Stack.Screen name='InnerDashboard' component={InnerDashboard} />


        </Stack.Navigator>
    )
}
export default DashBoardStack
