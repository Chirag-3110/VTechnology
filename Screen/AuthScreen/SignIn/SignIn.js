import React, { useEffect, useRef } from 'react';
import { Modal, Animated, TouchableOpacity, Text, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SignUpLogo = require("../../../assests/SignUpLogo.png");

import { TextInput, Button } from 'react-native-paper';
const SignIn = () => {
    useEffect(() => {
        showPopUp()
    }, [])
    const position = new Animated.ValueXY({ x: 0, y: windowHeight });
    const showPopUp = () => {
        Animated.timing(position, {
            toValue: { x: 0, y: 0 },
            duration: 1000,
            useNativeDriver: true
        }).start();
    }
    return (
        <>
            <View style={styles.UserProfileImgView}>
                <Image
                    style={styles.UserProfileImg}
                    source={SignUpLogo}
                />

            </View>
            <Animated.View style={[styles.animtedView,
            {
                transform: [
                    { translateX: position.x },
                    { translateY: position.y }
                ]
            }
            ]}>
                <Text style={styles.modalText}>SIGN UP</Text>
                <ScrollView style={{ padding: 20 }}>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor="purple"
                        textColor="black"
                        outlineColor="purple"
                        selectionColor='red'
                        activeOutlineColor="purple"
                        mode='outlined'
                        style={styles.TextInput}
                    // right={<TextInput.Icon icon={{ uri: 'https://cdn-icons-png.flaticon.com/128/732/732200.png' }} color="white" />}
                    />
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor="purple"
                        textColor="black"
                        outlineColor="purple"
                        selectionColor='red'
                        activeOutlineColor="purple"
                        mode='outlined'
                        style={styles.TextInput}
                        secureTextEntry
                    // right={<TextInput.Icon icon="eye" />}
                    />
                    <TextInput
                        placeholder='Confirm-Password'
                        placeholderTextColor="purple"
                        textColor="black"
                        outlineColor="purple"
                        selectionColor='red'
                        activeOutlineColor="purple"
                        mode='outlined'
                        style={styles.TextInput}
                        secureTextEntry
                    // right={<TextInput.Icon icon="eye" />}
                    />
                    <TouchableOpacity style={styles.SignUpBtn}>
                        <Text style={styles.SignUpBtnText}>SignUp</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Animated.View>
        </>
    )
}
const styles = StyleSheet.create({
    UserProfileImgView: {
        // borderWidth: 1,
        justifyContent: "center"
    },
    UserProfileImg: {
        width: windowWidth,
        height: windowHeight / 1.5,
        alignSelf: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#3063A0"
    },
    iconImage: {
        width: 40,
        height: 40
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 40,
        padding: 30
    },
    animtedView: {
        backgroundColor: "white",
        width: windowWidth,
        height: 2 * (windowHeight / 4),
        position: "absolute",
        bottom: 0,
        borderTopRightRadius: 55,
        borderTopLeftRadius: 55,
        padding: 10,
        paddingTop: 30
    },
    modalText: {
        fontWeight: "bold",
        color: "#9c0b9c",
        fontSize: 30,
        textAlign: "center"
    },
    TextInput: {
        marginHorizontal: 1,
        marginVertical: 5,
    },
    SignUpBtn: {
        borderWidth: 1,
        marginHorizontal: 0,
        borderRadius: 4,
        borderColor: "white",
        borderWidth: 0.4,
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#9c0b9c",
        marginVertical: 10,
        paddingVertical: 4,

    },
    SignUpBtnText: {
        fontSize: 22,
        color: "white",
        textAlign: "center",
        paddingVertical: 5
    },
})
export default SignIn