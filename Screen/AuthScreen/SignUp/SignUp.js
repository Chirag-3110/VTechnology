import React, { useState,useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, Animated,Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height
import EmailValidate from "../../../Validate/EmailValidation"
import PasswordValidate from '../../../Validate/PasswordValidation';
import styles from "../SignIn/LoginStyle";
const SignUp = ({ navigation }) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('');
    const [Cpassword, setCpassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    useEffect(() => {
        showPopUp();
    }, [])
    const validateUser = () => {
        try {
            if (email === "")
                throw "Please enter Email";
            if (password === "")
                throw "Please enter Password";
            if (Cpassword === "")
                throw "Please enter confirm password";
            if (!EmailValidate(email)) {
                throw "Please enter a valid Email"
            }
            if (!PasswordValidate(password)) {
                throw "Please enter a valid Password (Must Contains Capital Letter,Special Character and a Number)"
            }
            if(password!=Cpassword)
                throw "Both Password Must Be Same";
            navigation.navigate("confimSignup",{email:email,password:password});
        } catch (error) {
            alert(error)
        }
    }
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
                <Animated.Text style={[
                    styles.MainText,
                    {
                        fontSize:25,
                        marginLeft:30,
                        transform: [
                            { translateX: subTextposition.x },
                            { translateY: subTextposition.y }
                        ]
                    }
                ]}>Connect With Us</Animated.Text>
                <Image
                    style={{width:windowWidth,height:windowWidth-50,resizeMode:"contain"}}
                    source={{uri:"https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?size=338&ext=jpg"}}
                />
            </View>
            <View style={{ alignItems: "center",width:"100%" }}>
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
                            placeholder="Email"
                            placeholderTextColor={"grey"}
                            onChangeText={value => { setemail(value) }}
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
                            placeholder={"Confirm Password"}
                            placeholderTextColor={"grey"}
                            secureTextEntry={showPassword}
                            onChangeText={value => { setCpassword(value) }}
                            autoCapitalize={true}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.btnContainer} 
                    onPress={validateUser}
                >
                <Text style={styles.btnText}>
                    Create Account
                </Text>
                </TouchableOpacity>
                <View style={styles.bottomText}>
                    <Text style={[styles.subText,{color:"black",fontWeight:"bold",marginRight:10}]}>Already have an account?</Text>
                    <Text style={[styles.subText,{color:"blue",fontWeight:"bold"}]} onPress={() => navigation.navigate("login")}>Log In</Text>
                </View>
            </View>
        </View>
    )
}
export default SignUp;