import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../Screen/HomeScreen/Home';
import Coursedetails from '../Screen/HomeScreen/CourseDetail';

const Stack=createNativeStackNavigator();

const HomeStack=()=>{
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home"
        >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Course' component={Coursedetails} />
        </Stack.Navigator>
    )
}
export default HomeStack
