import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feedback from "../Screen/HomeScreen/Feedback";
import MainQuizHome from "../Screen/HomeScreen/MainQuizHome";
import Service from "../Screen/HomeScreen/Service";
const Stack = createNativeStackNavigator();
const QuestionNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="MainQuiz"
        >
            <Stack.Screen name="MainQuiz" component={MainQuizHome} />
            <Stack.Screen name="serviceQuiz" component={Service} />
            <Stack.Screen name="Feedback" component={Feedback} />
        </Stack.Navigator>
    )
}
export default QuestionNavigation;