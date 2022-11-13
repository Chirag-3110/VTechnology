import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from '../Screen/AuthScreen/SignIn/SignIn';
import SignUp from '../Screen/AuthScreen/SignUp/SignUp';
import ForgotPass from '../Screen/AuthScreen/FogotPass/ForgotPass';
import ConfimSignup from "../Screen/AuthScreen/SignUp/ConfimSignup";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="signup" component={SignUp} />
            <Stack.Screen name="login" component={SignIn} />
            <Stack.Screen name='confimSignup' component={ConfimSignup}/>
            <Stack.Screen name="forgotpass" component={ForgotPass} />
        </Stack.Navigator>
    )
}
export default AuthNavigation;