import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../Screen/HomeScreen/Home';
import Coursedetails from '../Screen/HomeScreen/CourseDetail';
import SearchPage from "../Screen/HomeScreen/SearchPage";
import DashBoard from "../Screen/HomeScreen/DashBoard";
import MainQuizHome from "../Screen/HomeScreen/MainQuizHome";
import Profile from "../Screen/Userprofile/Profile";


const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home"
        >
            <Stack.Screen name='HomeStack' component={Home} />
            <Stack.Screen name='Course' component={Coursedetails} />
            <Stack.Screen name='SearchPage' component={SearchPage} />
            <Stack.Screen name='Dashboard' component={DashBoard} />
            <Stack.Screen name='MainQuiz' component={MainQuizHome} />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    )
}
export default HomeStack
