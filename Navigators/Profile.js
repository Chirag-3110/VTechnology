import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Userprofile from "../Screen/Userprofile/Userprofile";
import Profile from "../Screen/Userprofile/Profile";


const Stack = createNativeStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Prof"
        >
            <Stack.Screen name='Prof' component={Profile} />
            <Stack.Screen name='Userprofile' component={Userprofile} />
        </Stack.Navigator>
    )
}
export default ProfileStack
