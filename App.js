import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './Navigators/AuthNavigator';
import MainNavigation from './Navigators/MainNavigation';
import SignIn from './Screen/AuthScreen/SignIn/SignIn';
const App=()=>{
  return (
    <NavigationContainer>
      {/* <AuthNavigation/> */}
      {/* <MainNavigation/> */}
    <SignIn/>
    </NavigationContainer>
  );
}
export default App;