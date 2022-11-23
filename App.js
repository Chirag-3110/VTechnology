import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './Navigators/AuthNavigator';
import MainNavigation from './Navigators/MainNavigation';
import MainQuesionSceen from './Screen/Questions/AddQuestion';
import QuestionsCards from './Screen/Questions/SetQuestions';
import BottomTabs from './Navigators/MainNavigation';
import SignIn from './Screen/AuthScreen/SignIn/SignIn';
import SignUp from './Screen/AuthScreen/SignUp/SignUp';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack=createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {/* <AuthNavigation /> */}
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
      >
        {/* <Stack.Screen name="Main" component={MainNavigation} /> */}
        <Stack.Screen name="MainQuestions" component={MainQuesionSceen} />
        <Stack.Screen name="Questions" component={QuestionsCards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


