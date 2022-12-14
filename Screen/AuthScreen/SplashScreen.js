import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Animated, Easing, Modal, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');
import Lottie from 'lottie-react-native';
import NetInfo from "@react-native-community/netinfo";
const SplashScreen = ({ navigation }) => {
    let rotateHolder = new Animated.Value(0);
    const [isNetOn, setIsnetOn] = useState();
    const [showModel, setShowModel] = useState(false);
    useEffect(() => {
        setShowModel(false);
        checkforNet();
    }, [isNetOn])
    const checkforNet = () => {
        setShowModel(false)
        NetInfo.addEventListener(state => {
            setIsnetOn(state.isConnected);
            setShowModel(!state.isConnected)
            rotateBox()
        });
        if (isNetOn) {
            navigation.replace("App");
        }
    }
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
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "column", alignContent: "center", width: width, height: (height / 1.7), justifyContent: 'center', paddingTop: height / 3 }}>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text style={{ color: "#0E31A3", fontWeight: "800", fontSize: 40, fontFamily: "SourceSansPro-Bold" }}>We Arcade</Text>
                    <Text style={{
                        color: "#1b1b1b",
                        fontWeight: "bold",
                        fontSize: 16,
                        width: '70%',
                        textAlign: "center",
                        marginTop: 10,
                        fontFamily: "SourceSansPro-Bold"
                    }}
                    >
                        Built For Students By Students
                    </Text>
                </View>
                <Image
                    source={require("../../assests/icon.jpg")}
                    style={{ width: width, height: height / 3 }}
                />
            </View>
            <Lottie
                source={require('../../lottiesAnimations/97071-infinite-scroll-loader.json')}
                autoPlay={true}
                loop={true}
                style={{ width: width, height: width / 2, resizeMode: "contain" }}
            />
            <Modal visible={showModel} animationType='slide' transparent={true}>
                <View style={styles.modeOuter}>
                    <View style={styles.innnerModel}>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, textAlign: "center", fontFamily: "SourceSansPro-Bold" }}>
                            Oops! Internet not Connected
                        </Text>
                        <TouchableOpacity style={styles.button} onPress={() => checkforNet()}>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15, fontFamily: "SourceSansPro-Bold" }}>
                                Try Again !
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-evenly",
        backgroundColor: "white"
    },
    animatedBox: {
        width: width / 3,
        height: width / 3,
        backgroundColor: "skyblue",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15,
    },
    modeOuter: {
        backgroundColor: '#000000aa',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innnerModel: {
        backgroundColor: 'white',
        height: height / 4,
        borderRadius: 30,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: width - 20,
    },
    button: {
        backgroundColor: '#70BBFF',
        width: '70%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    }
})
export default SplashScreen