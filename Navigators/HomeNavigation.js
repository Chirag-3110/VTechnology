import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../Screen/HomeScreen/Home';
import Coursedetails from '../Screen/HomeScreen/CourseDetail';
import SearchPage from "../Screen/HomeScreen/SearchPage";
import QuestionNavigation from "./QuizNavigation";
import Feedback from "../Screen/HomeScreen/Feedback";

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
            <Stack.Screen name='Quiz' component={QuestionNavigation} />
            <Stack.Screen name='Feedback' component={Feedback} />
        </Stack.Navigator>
    )
}
export default HomeStack
