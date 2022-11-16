import Home from "../Screen/HomeScreen/Home";
import Service from "../Screen/HomeScreen/Service";
import Bottomtab from "./Bottomtab";
import DashBoard from "../Screen/HomeScreen/DashBoard";
import { useState } from "react";


const MainNavigation = () => {
    const [route,setRoute]=useState('Home');
    const setNewRoute=(routeString)=>{
        setRoute(routeString);
    }
    return (
        <>
            {
                route==="Home"?<Home/>:
                route==="Service"?<Service/>:
                <DashBoard/>
            }
            <Bottomtab
                setRoute={setNewRoute}
            />
        </>
    )
}
export default MainNavigation;