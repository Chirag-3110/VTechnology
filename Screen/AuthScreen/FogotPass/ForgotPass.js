import React, { useEffect, useState,useRef } from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, Image, Animated, TouchableOpacity } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height
import auth from '@react-native-firebase/auth';
import EmailValidate from '../../../Validate/EmailValidation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Lottie from 'lottie-react-native';
import styles from './ForgorStyle';
import CustomToast from '../../../components/CustomToast';

const ForgotPass = ({navigation}) => {
//toast states
    const childRef = useRef(null);
    const [toastColorState,setToastColorState]=useState('rgba(41,250,25,1)');
    const [toastTextColorState,setToastTextColorState]=useState('#575757');
    const [toastMessage,setToastMessage]=useState('');

    const [email, setemail] = useState("")
    const ResetLink = () => {
        try {
            if(email===""){
                throw "Please Enter Email";
            }   
            if (!EmailValidate(email)) {
                throw "Please enter a valid Email"
            }
            auth().sendPasswordResetEmail(email)
            .then(()=>{
                setToastMessage("Email Send Successfully to your Email (Check Spam Too)");
                setToastTextColorState("#575757")
                setToastColorState("rgba(41,250,25,1)")
                childRef.current.showToast();
                setTimeout(() => {
                    navigation.navigate("login")
                }, 2000);
            })
        } catch (error) {
            setToastMessage(error);
            setToastTextColorState("white")
            setToastColorState("red")
            childRef.current.showToast();
        }        
    }
    useEffect(()=>{
        showPopUp();
    },[])
    const position = new Animated.ValueXY({ x: 0, y: -windowheight });
    const subTextposition = new Animated.ValueXY({ x: 0, y: -windowheight });
    const showPopUp = () => {
        Animated.timing(subTextposition, {
            toValue: { x: 0, y: -windowheight/300 },
            duration: 1000,
            useNativeDriver: true
        }).start(()=>{
            Animated.timing(position, {
                toValue: { x: 0, y: -windowheight/300},
                duration:500,
                useNativeDriver: true
            }).start();
        });
    }
    return (
        <>
            <View style={styles.container}>
                <CustomToast
                    toastColor={toastColorState}
                    toastTextColor={toastTextColorState}
                    toastMessage={toastMessage}
                    ref={childRef} 
                />
                <View >
                    <View style={{ alignItems: "center" }}>
                    <Animated.Text style={[
                        styles.MainText,
                        {
                            fontFamily:"SourceSansPro-Bold",
                            transform: [
                                { translateX: position.x },
                                { translateY: position.y }
                            ]
                        }
                    ]}>Forgot Password</Animated.Text>
                    <Animated.Text style={[
                        styles.subText,
                        {
                            fontFamily:"SourceSansPro-Bold",
                            transform: [
                                { translateX: subTextposition.x },
                                { translateY: subTextposition.y }
                            ]
                        }
                    ]}>Send password reset link to your email</Animated.Text>
                    </View>
                    <View style={{alignItems: 'center',}}>
                        <Lottie
                            source={require('../../../lottiesAnimations/94132-forgot-password.json')}  autoPlay={true} loop={true}
                            style={{width:windowWidth,height:windowWidth-50,resizeMode:"contain"}}
                        />
                        <View style={[
                            { flexDirection: 'row', alignItems: "center" },
                                styles.customInput
                            ]}
                        >
                            <FontAwesome name="user" size={25} color={"grey"} />
                            <TextInput
                                style={{ fontFamily:"SourceSansPro-Bold",flex: 1, fontWeight: "bold", fontSize: 15,color:"black",paddingLeft:10 }}
                                placeholder="Email"
                                placeholderTextColor={"grey"}
                                onChangeText={value => { setemail(value) }}
                            />
                        </View>
                        <TouchableOpacity style={styles.btnContainer} onPress={ResetLink}>
                            <Text style={[styles.btnText,{fontFamily:"SourceSansPro-Bold"}]}>
                                Send link
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomText}>
                        <Text style={[styles.subText,{fontFamily:"SourceSansPro-Bold",fontWeight:"bold",color:"black"}]}>Back to </Text>
                        <Text style={[styles.subText1,{color:"blue",fontWeight:"bold",fontFamily:"SourceSansPro-Bold"}]} onPress={()=>navigation.navigate("login")}> Log In</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default ForgotPass