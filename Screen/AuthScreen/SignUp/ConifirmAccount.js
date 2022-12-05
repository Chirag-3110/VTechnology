import React,{useEffect} from "react";
import Lottie from 'lottie-react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { View } from "react-native";
const ConifirmAccount=({navigation,route})=>{
    const {userData,password}=route.params
    useEffect(()=>{
        setTimeout(() => {
            setUserData();
        }, 3000);
    },[])
    const setUserData=()=>{
        auth()
            .createUserWithEmailAndPassword(userData.email, password)
            .then((userCredential) => {
                const user=userCredential.user;
                console.log('User account created & signed in!',user.uid);
                firestore().collection("UserCollection")
                .doc(user.uid)
                .set(userData)
                .then(()=>{
                    console.log("User created successfully")
                })
                .catch((error)=>{
                    console.log(error);
                })
            })
            .catch(error => {
                console.error(error);
            });
    }
    return(
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center',backgroundColor:"white"}}>
             <Lottie
                source={require('../../../lottiesAnimations/110817-account-created.json')} autoPlay={true} loop={false} 
            />
        </View> 
    )
}
export default ConifirmAccount;