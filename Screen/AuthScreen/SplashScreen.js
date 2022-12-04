import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Animated, Easing } from 'react-native';
const { width, height } = Dimensions.get('window');
import Lottie from 'lottie-react-native';
const SplashScreen = ({ navigation }) => {
    let rotateHolder = new Animated.Value(0);
    useEffect(() => {
        rotateBox();
        // setInterval(() => {
        //     navigation.navigate("AuthNav")
        // }, 2000);
    }, [])
    const rotateBox = () => {
        Animated.loop(
            Animated.timing(rotateHolder, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: false
            })
        ).start();
    }
    const rotate = rotateHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', alignItems: 'center', }}>
                <Text style={{ color: "rgba(136,0,255,0.85)", fontWeight: "bold", fontSize: 15 }}>Student App</Text>
                <Text style={{
                    color: "#1b1b1b",
                    fontWeight: "bold",
                    fontSize: 20,
                    width: '80%',
                    textAlign: "center",
                    marginTop: 10
                }}
                >
                    Have Some Fun With Studies
                </Text>
            </View>
            {/* <Lottie
                source={require('../../lottiesAnimations/96372-loader-5.json')} autoPlay loop style={{ height: 250, width: windoWidth, justifyContent: "center", alignItems: "center" }} /> */}
            <Lottie
                style={{
                    // width: width,
                    height: height / 3,
                    // resizeMode: "contain",
                    // marginTop: 20
                }}
                source={require('../../lottiesAnimations/28909-v-icon-for-ideoo-academy.json')}
                autoPlay loop
            />
            <Animated.View
                style={[
                    styles.animatedBox,
                    { transform: [{ rotate: rotate }] }
                ]}
            >
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>Loading</Text>
            </Animated.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-evenly",
        // backgroundColor: "rgba(193,123,255,0.25)",
        backgroundColor: "skyblue"
    },
    animatedBox: {
        width: width / 3,
        height: width / 3,
        backgroundColor: "skyblue",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop:60,
        elevation: 15,
    }
})
export default SplashScreen