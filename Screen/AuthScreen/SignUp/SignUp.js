import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import CustomButton from "../../../components/AnimatedButton";
const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height
import EmailValidate from "../../../Validate/EmailValidation"
import PasswordValidate from '../../../Validate/PasswordValidation';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase";
const SignUp = ({ navigation }) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('');
    const [Cpassword, setCpassword] = useState('');

    const validateUser = () => {
        // console.log("hii")
        // console.log(email)
        try {
            if (userName === "")
                throw "Please enter UserName";
            if (email === "")
                throw "Please enter Email";
            if (password === "")
                throw "Please enter Password";
            if (Cpassword === "")
                throw "Please enter confirm password"
            if (!EmailValidate(email)) {
                throw "Please enter a valid Email"
            }
            if (!PasswordValidate(password)) {
                throw "Please enter a valid Password (Must Contains Capital Letter,Special Character and a Number)"
            }
            createNewUser();
        } catch (error) {
            console.log(error)
        }
    }
    const createNewUser = async () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                switch (error.code) {
                    case "auth/email-already-in-use":
                        console.log("Email Already Exists")
                        break;
                    default:
                        break;
                }
            });
    }
    return (
        <ImageBackground style={styles.container}
            source={require('../../../assests/nwe.png')}
        >
            <View>
                <View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.MainText}>Sign Up</Text>
                        <Text style={styles.subText}>Create an account,it's free</Text>
                    </View>
                    <View>
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor='black'
                            style={styles.customInput}
                            onChangeText={value => { setemail(value) }}
                        />
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor='black'
                            style={styles.customInput}
                            onChangeText={value => { setpassword(value) }}
                        />
                        <TextInput
                            placeholder="Confirm Password"
                            placeholderTextColor='black'
                            style={styles.customInput}
                            onChangeText={value => { setCpassword(value) }}
                        />
                    </View>
                    {/* <TouchableOpacity style={styles.btnContainer}
                    onPress={()=>navigation.navigate("confimSignup")}
                >
                    <Text style={styles.btnText}>
                        Sign Up
                    </Text>
                </TouchableOpacity> */}
                    <CustomButton
                        title="Sign Up"
                        onpress={() => { validateUser }}
                    />
                </View>
            </View>
            <View style={styles.bottomText}>
                <Text style={styles.subText}>Already have an account?</Text>
                <Text style={styles.subText} onPress={() => navigation.navigate("login")}>Log In</Text>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    MainText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 30,
    },
    subText: {
        color: "#5B5B5B",
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 10
    },
    customInput: {
        width: windowWidth - 60,
        backgroundColor: "white",
        marginTop: 20,
        borderRadius: 5,
        paddingHorizontal: 20,
        borderWidth: 1.5,
        borderColor: "#A8A8A8",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.00,
        elevation: 24,
        fontWeight: "bold",
        color: "black"
    },
    btnContainer: {
        width: windowWidth - 60,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#10FFE5",
        borderRadius: 200,
        borderWidth: 2,
        borderColor: "#66EECD",
        marginTop: windowheight / 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 25,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 50,
    },
    btnText: {
        fontWeight: "bold",
        color: "#535353",
        fontSize: 18,
    },
    bottomText: {
        flexDirection: "row",
        position: 'absolute',
        bottom: windowheight / 40,
        borderColor: "#BDFAFA",
    }
})
export default SignUp;