import React, { useEffect,useRef,useState } from "react";
import Lottie from 'lottie-react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { View } from "react-native";
const ConifirmAccount = ({ navigation, route }) => {
    const { userData, password } = route.params
    useEffect(() => {
        setTimeout(() => {
            setUserData();
        }, 3000);
    }, [])
    const setUserData = () => {
        auth()
            .createUserWithEmailAndPassword(userData.email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                firestore().collection("UserCollection")
                    .doc(user.uid)
                    .set(userData)
                    .then(() => {
                    })
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
            <Lottie
                source={require('../../../lottiesAnimations/110817-account-created.json')} autoPlay={true} loop={false}
            />
        </View>
    )
}
export default ConifirmAccount;