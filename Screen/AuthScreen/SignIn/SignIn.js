import React, { useState,useEffect,useRef } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, Image, ScrollView, Animated, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Lottie from 'lottie-react-native';
import styles from "./LoginStyle";
import CustomToast from "../../../components/CustomToast";

const SignIn = ({navigation}) => {
//toast states
    const childRef = useRef(null);

    const [toastColorState,setToastColorState]=useState('rgba(41,250,25,1)');
    const [toastTextColorState,setToastTextColorState]=useState('black');
    const [toastMessage,setToastMessage]=useState('');

    useEffect(() => {
        showPopUp();
    }, [])
    const [loading,setLoading]=useState(false);
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    const validateUser = () => {
        try {
            if (email === "")
                throw "Please enter Email";
            if (password === "")
                throw "Please enter Password";
            setLoading(true)
            auth().signInWithEmailAndPassword(email,password)
            .catch((error)=>{
                if (error.code === 'auth/invalid-email') {
                    setToastMessage("Email Address is Wrong");
                    setToastTextColorState("white")
                    setToastColorState("red")
                    childRef.current.showToast();
                }
                if (error.code === 'auth/wrong-password') {
                    setToastMessage('Incorrect Password');
                    setToastTextColorState("white")
                    setToastColorState("red")
                    childRef.current.showToast();
                }
                if (error.code === 'auth/user-not-found') {
                    setToastMessage('User not Found');
                    setToastTextColorState("white")
                    setToastColorState("red")
                    childRef.current.showToast();
                }
                console.log(error);
                setLoading(false);
            })            
        } catch (error) {
            setToastMessage(error);
            setToastTextColorState("white")
            setToastColorState("red")
            setLoading(false)
            childRef.current.showToast();
        }
    }
    const position = new Animated.ValueXY({ x: 0, y: -windowheight });
    const showPopUp = () => {
        Animated.timing(position, {
            toValue: { x: 0, y: -windowheight/200 },
            duration: 1000,
            useNativeDriver: true
        }).start(()=>{
            Animated.timing(position, {
                toValue: { x: windowWidth/4, y: 0},
                duration: 1000,
                useNativeDriver: true
            }).start();
        });
    }

    return (
        <View style={styles.container}>
            <CustomToast
                toastColor={toastColorState}
                toastTextColor={toastTextColorState}
                toastMessage={toastMessage}
                ref={childRef} 
            />
            <View style={{ alignItems: "flex-start",justifyContent: 'center' }}>
                <Animated.Text style={[
                    styles.MainText,
                    {
                        fontFamily:"SourceSansPro-Bold",
                        transform: [
                            { translateX: position.x },
                            { translateY: position.y }
                        ]
                    }
                ]}>Sign In</Animated.Text>
                <Lottie
                    source={require('../../../lottiesAnimations/124956-login.json')}  autoPlay={true} loop={false} 
                    style={{width:windowWidth,resizeMode:"contain"}}
                />
            </View>
            <View style={{ alignItems: "center", }}>
                <View>
                    <View style={[
                        { flexDirection: 'row', alignItems: "center" },
                            styles.customInput
                        ]}
                    >
                        <FontAwesome name="user" size={25} color={"grey"} />
                        <TextInput
                            style={{ flex: 1, fontWeight: "bold", fontSize: 15,color:"black",paddingLeft:10,fontFamily:"SourceSansPro-Bold" }}
                            placeholder={"Email"}
                            placeholderTextColor={"grey"}
                            onChangeText={value => { setemail(value) }}
                            autoCapitalize={true}
                        />
                    </View>
                </View>
                <View style={{marginTop:10}}>
                    <View style={[
                        { flexDirection: 'row', alignItems: "center" },
                            styles.customInput
                        ]}
                    >
                        <FontAwesome name="lock" size={25} color={"grey"} />
                        <TextInput
                            style={{ flex: 1, fontWeight: "bold", fontSize: 15,color:"black",paddingLeft:10,fontFamily:"SourceSansPro-Bold"}}
                            placeholder={"Password"}
                            placeholderTextColor={"grey"}
                            secureTextEntry={showPassword}
                            onChangeText={value => { setpassword(value) }}
                            autoCapitalize={true}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} >
                            {
                                showPassword?
                                <FontAwesome name="eye" size={25} color={"grey"} />:
                                <FontAwesome name="eye-slash" size={25} color={"grey"} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    style={{width:"100%",alignItems:"center",marginTop:10}}
                    onPress={()=>navigation.navigate("forgotpass")}
                >
                    <Text style={{
                        color:"black",
                        fontWeight:"bold",
                        fontFamily:"SourceSansPro-Bold"
                    }}>
                        Forgot Password ?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer} 
                    onPress={validateUser}
                >
                    {
                        loading?
                        <ActivityIndicator color={'white'} size={30}/>:
                        <Text style={[styles.btnText,{fontFamily:"SourceSansPro-Bold"}]}>
                            Login
                        </Text>
                    }
                </TouchableOpacity>
                <View style={{width:"100%",flexDirection:"row",marginTop:10}}>
                    <Text style={{fontSize:15,fontWeight:"bold",color:"black",fontFamily:"SourceSansPro-Bold"}}>Don't Have an Account ? </Text>
                    <Text 
                        style={{fontSize:15,fontWeight:"bold",color:"blue",fontFamily:"SourceSansPro-Bold"}}
                        onPress={()=>navigation.navigate("signup")}
                    >
                        Create Account
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default SignIn;