import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainQuesionSceen from "../Screen/Questions/TakeQuestion";
import QuestionsCards from "../Screen/Questions/AllQuestions";
import ReviewQuestions from "../Screen/Questions/ReviewQuesions";

const Stack = createNativeStackNavigator();
const QuestionNavigation = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="ReviewQuestionsSet" component={ReviewQuestions} />
            <Stack.Screen name="MainQuiz" component={MainQuesionSceen} />
            <Stack.Screen name="QuestionsSet" component={QuestionsCards} />
        </Stack.Navigator>
    )
}
export default QuestionNavigation;