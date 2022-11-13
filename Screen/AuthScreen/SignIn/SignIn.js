import React from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height
const SignIn = () => {
    return (
        <ImageBackground style={styles.container}
            source={require('../../../assests/nwe.png')}
        >
            <View>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.MainText}>Sign In</Text>
                    
                </View>
                <View>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor='black'
                        style={styles.customInput}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor='black'
                        style={styles.customInput}
                    />
                    
                </View>
                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btnText}>
                        Sign In
                    </Text>
                </TouchableOpacity>
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
        marginTop: windowheight / 15,
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
        bottom: 20,
        backgroundColor: 'rgba(161,255,255,0.7)',
        width: windowWidth - 60,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#BDFAFA",
        marginTop: windowheight / 15,
        shadowColor: "#0DB0FA",
        shadowOffset: {
            width: 0,
            height: 25,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 50,
    }
})
export default SignIn;