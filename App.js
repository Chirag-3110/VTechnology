import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './Navigators/MainNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Userfile from './Screen/Userprofile/Userprofile';
const Stack=createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
        initialRouteName="MainNav"
      >
        <Stack.Screen name="MainNav" component={MainNavigation} />
      </Stack.Navigator> */}
      <Userfile/>
    </NavigationContainer>
  );
}
export default App;


