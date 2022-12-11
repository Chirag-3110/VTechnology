import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Userprofile from "../Screen/Userprofile/Userprofile";
import Profile from "../Screen/Userprofile/Profile";
import DashBoardStack from "./DashboardStack";
import QuestionNavigation from "./QuizNavigation";
import Feedback from "../Screen/HomeScreen/Feedback";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Prof"
        >
            <Stack.Screen name='Prof' component={Profile} />
            <Stack.Screen name='Userprofile' component={Userprofile} />
            <Stack.Screen name='Dashboard' component={DashBoardStack} />
            <Stack.Screen name='QuizNavigation' component={QuestionNavigation} />
            <Stack.Screen name='Feedback' component={Feedback} />
        </Stack.Navigator>
    )
}
export default ProfileStack
