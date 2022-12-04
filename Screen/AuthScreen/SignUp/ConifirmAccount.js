import React,{useEffect} from "react";
import Lottie from 'lottie-react-native';
import { View } from "react-native";
const ConifirmAccount=({navigation})=>{
    useEffect(()=>{
        setInterval(() => {
            navigation.replace("login")
        }, 3000);
    },[])
    return(
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor:"white"}}>
             <Lottie
                source={require('../../../lottiesAnimations/110817-account-created.json')} autoPlay={true} loop={false} 
            />
        </View> 
    )
}
export default ConifirmAccount;