import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, Image, ScrollView, Animated, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EmailValidate from "../../../Validate/EmailValidation";
import PasswordValidate from '../../../Validate/PasswordValidation';
import styles from "./LoginStyle";
const SignIn = ({navigation}) => {

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
            if (!EmailValidate(email)) {
                throw "Please enter a valid Email"
            }
            if (!PasswordValidate(password)) {
                throw "Please enter a valid Password (Must Contains Capital Letter,Special Character and a Number)"
            }
            setLoading(true)
            auth().signInWithEmailAndPassword(email,password)
            .catch((error)=>{
                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }
                if (error.code === 'auth/wrong-password') {
                    alert('That Password is invalid!');
                }
                setLoading(false);
            })            
        } catch (error) {
            console.log(error)
            setLoading(false)
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
            <View style={{ alignItems: "flex-start",justifyContent: 'center' }}>
                <Animated.Text style={[
                    styles.MainText,
                    {
                        transform: [
                            { translateX: position.x },
                            { translateY: position.y }
                        ]
                    }
                ]}>Sign In</Animated.Text>
                <Image
                    style={{width:windowWidth,height:windowWidth,resizeMode:"contain"}}
                    source={{uri:"https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=338&ext=jpg"}}
                />
            </View>
            <View style={{ alignItems: "center", }}>
                <View>
                    <Text style={{color:"black",fontWeight:"bold"}}>Email</Text>
                    <View style={[
                        { flexDirection: 'row', alignItems: "center" },
                            styles.customInput
                        ]}
                    >
                        <FontAwesome name="user" size={25} color={"grey"} />
                        <TextInput
                            style={{ flex: 1, fontWeight: "bold", fontSize: 15,color:"black",paddingLeft:10 }}
                            placeholder={"Email"}
                            placeholderTextColor={"grey"}
                            onChangeText={value => { setemail(value) }}
                            autoCapitalize={true}
                        />
                    </View>
                </View>
                <View style={{marginTop:10}}>
                    <Text style={{color:"black",fontWeight:"bold"}}>Password</Text>
                    <View style={[
                        { flexDirection: 'row', alignItems: "center" },
                            styles.customInput
                        ]}
                    >
                        <FontAwesome name="lock" size={25} color={"grey"} />
                        <TextInput
                            style={{ flex: 1, fontWeight: "bold", fontSize: 15,color:"black",paddingLeft:10}}
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
                        fontWeight:"bold"
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
                        <Text style={styles.btnText}>
                            Login
                        </Text>
                    }
                </TouchableOpacity>
                <View style={{width:"100%",flexDirection:"row",marginTop:10}}>
                    <Text style={{fontSize:15,fontWeight:"bold",color:"black",}}>Don't Have an Account ? </Text>
                    <Text 
                        style={{fontSize:15,fontWeight:"bold",color:"blue",}}
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