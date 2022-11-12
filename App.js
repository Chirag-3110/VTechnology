import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './Navigators/AuthNavigator';
import MainNavigation from './Navigators/MainNavigation';
const App=()=>{
  return (
    <NavigationContainer>
      <AuthNavigation/>
      {/* <MainNavigation/> */}
    </NavigationContainer>
  );
}
export default App;