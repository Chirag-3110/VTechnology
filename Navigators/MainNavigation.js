import Home from "../Screen/HomeScreen/Home";
import Service from "../Screen/HomeScreen/Service";
import { createStackNavigator } from '@react-navigation/stack';
import Bottomtab from "./Bottomtab";
import { useState } from "react";

const Stack = createStackNavigator();

const MainNavigation = () => {
    const [route,setRoute]=useState('Home');
    const setNewRoute=(routeString)=>{
        setRoute(routeString);
    }
    return (
        <>
            {
                route==="Home"?
                <Home/>:
                <Service/>
            }
            <Bottomtab
                setRoute={setNewRoute}
            />
        </>
    )
}
export default MainNavigation;