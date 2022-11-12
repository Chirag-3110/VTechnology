import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screen/HomeScreen/Home";
const Stack=createNativeStackNavigator();

const MainNavigation=()=>{
    
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home}/>
        </Stack.Navigator>
    )
}  
export default MainNavigation;