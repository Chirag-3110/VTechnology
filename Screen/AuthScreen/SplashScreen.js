import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Animated, Easing ,Modal, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');
import Lottie from 'lottie-react-native';
import NetInfo from "@react-native-community/netinfo";
const SplashScreen = ({ navigation }) => {
    let rotateHolder = new Animated.Value(0);
    const [isNetOn,setIsnetOn]=useState();
    const [showModel,setShowModel]=useState(false);
    useEffect(() => {
        setShowModel(false);
        checkforNet();

    }, [isNetOn])
    const checkforNet=()=>{
        setShowModel(false)
        NetInfo.addEventListener(state => {
            setIsnetOn(state.isConnected);
            setShowModel(!state.isConnected)
            rotateBox()
        });
        if(isNetOn){
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
            <Lottie
                style={{
                    height: height / 3,
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
            <Modal visible={showModel} animationType='slide' transparent={true}>
                <View style={styles.modeOuter}>
                    <View style={styles.innnerModel}>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 20,textAlign:"center" }}>
                            Oops! Internet not Connected
                        </Text>
                        <TouchableOpacity style={styles.button} onPress={()=>checkforNet()}>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
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
        backgroundColor: "skyblue"
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
    modeOuter:{
        backgroundColor:'#000000aa',
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
      },
    innnerModel:{
        backgroundColor:'white',
        height:height/4,
        borderRadius:30,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width:width-20,
    },
    button:{
        backgroundColor:'#70BBFF',
        width:'70%',
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5
    }
})
export default SplashScreen