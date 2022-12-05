import React,{useState,useEffect,createContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './Navigators/MainNavigation';
import AuthNavigation from './Navigators/AuthNavigator';
import SplashScreen from './Screen/AuthScreen/SplashScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
const Stack=createNativeStackNavigator();
export const GlobalVariable=createContext();
const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  function onAuthStateChanged(userNew) {
    setUser(userNew);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <GlobalVariable.Provider value={{
      userUid:user
    }} >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown:false
          }}
        >
          {
            user==null?
              <Stack.Screen name="AuthNav" component={AuthNavigation} />:
              <Stack.Screen name="MainNav" component={MainNavigation} />
          }
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalVariable.Provider>
    
  );
}
export default App;


