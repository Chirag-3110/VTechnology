import React, { useEffect } from 'react';
import { View,Text,StyleSheet, Image, Dimensions,Animated, Easing } from 'react-native';
const {width,height}=Dimensions.get('window');
const SplashScreen=({navigation})=>{
    let rotateHolder=new Animated.Value(0);
    useEffect(()=>{
        rotateBox();
        // setInterval(() => {
        //     navigation.navigate("AuthNav")
        // }, 2000);
    },[])
    const rotateBox=()=>{
        Animated.loop(
            Animated.timing(rotateHolder,{
                toValue:1,
                duration:2000,
                easing:Easing.linear,
                useNativeDriver:false
            })
        ).start();
    }
    const rotate = rotateHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
    return(
        <View style={styles.container}>
            <View style={{width:'100%',alignItems: 'center',}}>
                <Text style={{color:"rgba(136,0,255,0.85)",fontWeight:"bold",fontSize:15}}>Student App</Text>
                <Text style={{
                        color:"#1b1b1b",
                        fontWeight:"bold",
                        fontSize:20,
                        width:'80%',
                        textAlign:"center",
                        marginTop:10
                    }}
                >
                    Have Some Fun With Studies
                </Text>
            </View>
            <Image
                style={{
                    width:width,
                    height:height/3,
                    resizeMode:"contain",
                    marginTop:20
                }}
                source={{uri:"https://img.freepik.com/premium-psd/3d-illustration-character-cute-boy-reading-book-rendering_1150-53577.jpg?size=626&ext=jpg"}}
            />
            <Animated.View 
                style={[
                    styles.animatedBox,
                    {transform:[{rotate:rotate}]}
                ]}
            >
                <Text style={{fontWeight:"bold",fontSize:15}}>Loading</Text>
            </Animated.View>
        </View>
    )
}   
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:"space-evenly",
        backgroundColor:"rgba(193,123,255,0.25)",
    },
    animatedBox:{
        width:width/3,
        height:width/3,
        backgroundColor:"rgba(205,154,249,1)",
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop:60,
        elevation:15,
    }
})
export default SplashScreen