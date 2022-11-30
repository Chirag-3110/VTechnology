import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screen/HomeScreen/Home";
import CourseDetail from "../Screen/HomeScreen/CourseDetail";
const Homes = createNativeStackNavigator();
const HomeNavigator = () => {

    return (
        <Homes.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home"
        >
            <Homes.Screen name="Home" component={Home} />
            <Homes.Screen name="Course" component={CourseDetail} />
        </Homes.Navigator>
    )
}
export default HomeNavigator;