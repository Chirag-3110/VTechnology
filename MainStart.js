import React,{useState,useEffect,createContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './Screen/AuthScreen/SplashScreen';
import App from './App';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack=createNativeStackNavigator();
export const GlobalVariable=createContext();
const MainStart = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
            headerShown:false
            }}
        >
                <Stack.Screen name="splash" component={SplashScreen} />
                <Stack.Screen name="App" component={App} />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}
export default MainStart;


