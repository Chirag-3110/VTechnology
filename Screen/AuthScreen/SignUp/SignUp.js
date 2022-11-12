import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { TextInput, Button } from 'react-native-paper';
const SignUp = () => {
    const image = { uri: "https://as1.ftcdn.net/v2/jpg/02/25/34/58/1000_F_225345802_ywq5EHefXnYL8EEfo9Ec84By1neP4bws.jpg" };
    const [text, settext] = useState("")
    return (
        <View style={styles.MainView}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.SignUp}>
                    <Text style={styles.SignUpText}>SIGN UP</Text>
                </View>
                <View style={styles.InputView}>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor="white"
                        textColor="white"
                        outlineColor="white"
                        selectionColor='red'
                        activeOutlineColor="white"
                        mode='outlined'
                        style={styles.TextInput}
                    // right={<TextInput.Icon icon={{ uri: 'https://cdn-icons-png.flaticon.com/128/732/732200.png' }} color="white" />}
                    />
                    <TextInput
                        placeholder='Password'
                        placeholderTextColor="white"
                        textColor="white"
                        outlineColor="white"
                        selectionColor='red'
                        activeOutlineColor="white"
                        mode='outlined'
                        style={styles.TextInput}
                        secureTextEntry
                    // right={<TextInput.Icon icon="eye" />}
                    />
                    <TextInput
                        placeholder='Confirm-Password'
                        placeholderTextColor="white"
                        textColor="white"
                        outlineColor="white"
                        selectionColor='red'
                        activeOutlineColor="white"
                        mode='outlined'
                        style={styles.TextInput}
                        secureTextEntry
                    // right={<TextInput.Icon icon="eye" color="white" />}
                    />
                    <TouchableOpacity style={styles.SignUpBtn}>
                        <Text style={styles.SignUpBtnText}>SignUp</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    MainView: {
        // borderWidth: 3,
        width: windowWidth,
        height: windowHeight,
        backgroundColor: "white"
    },
    InputView: {
        height: windowHeight / 3,
        // borderWidth: 1
    },
    SignUp: {
        height: windowHeight / 3,
        // borderWidth: 1,
        justifyContent: "center",

    },
    SignUpText: {
        fontSize: 50,
        color: "white",
        fontWeight: "700",
        marginHorizontal: 25,
        marginTop: 70
    },
    TextInput: {
        marginHorizontal: 20,
        marginVertical: 5,
        backgroundColor: 'transparent',
    },
    SignUpBtn: {
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 4,
        borderColor: "white",
        borderWidth: 0.4,
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "#6b1be3",
        marginVertical: 10,
        paddingVertical: 4,

    },
    SignUpBtnText: {
        fontSize: 22,
        color: "white",
        textAlign: "center",
        paddingVertical: 5


    },
    image: {
        height: windowHeight

    }
})
export default SignUp