import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainQuesionSceen from "../Screen/Questions/AddQuestion";
import QuestionsCards from "../Screen/Questions/SetQuestions";


const Stack=createNativeStackNavigator();
const QuestionNavigation=()=>{

    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown:false
            }}
        >
            <Stack.Screen name="MainQuiz" component={MainQuesionSceen} />
            <Stack.Screen name="QuestionsSet" component={QuestionsCards} />
        </Stack.Navigator>
    )
}
export default QuestionNavigation;