import React, { useState,useRef, useEffect } from "react";
import {
    View,
    Animated,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Easing,
    Text,
    Image
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const windowWidth=Dimensions.get('window').width;
import styles from "./onBoardingStyles";
const AuthBoaring=({navigation})=>{
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const imagePaths=[
        {
            title:"Create Productive Work,Right Now",
            subTitle:"Collaborate,create,and keep track of your project easily and effictively",
        },
        {
            title:"Digital Marketing",
            subTitle:"Good marketing makes the company look smart. Great marketing makes the customer feel smart",
        },
        {
            title:"Marketing",
            subTitle:"Business has only two functions- marketing and innovation",
        },
    ]
    useEffect(()=>{
        showPic()
    },[])
    const showPic=()=>{
        Animated.timing(fadeAnim,{
            toValue:1,
            duration:1000,
            useNativeDriver:true
        }).start();
    }
    const buttonAnimation=()=>{
        navigation.replace('login')
    }
    return(
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                style={{backgroundColor:"white"}}
            >
                {
                    imagePaths.map((path,index)=>(
                        <Animated.View 
                            key={index}
                            style={{
                                alignItems:"center",
                                opacity:fadeAnim,
                                marginTop:30,
                                opacity:fadeAnim,
                                transform:[
                                    {translateY:fadeAnim.interpolate({
                                        inputRange:[0,1],
                                        outputRange:[-20,0]
                                    })},
                                ]
                            }}
                        >
                            <View style={{
                                width:windowWidth,
                                alignItems: 'center',
                                height:windowWidth,
                                justifyContent: 'center',
                            }}>
                                <Image  
                                        source={require("../../assests/fff.png")}
                                        style={{ height:400,width: windowWidth-20,resizeMode:"cover" }} 
                                />
                            </View>
                            <Text
                                style={{
                                    color:"#010E5F",
                                    fontWeight:"bold",
                                    fontSize:30,
                                    width:300,
                                    textAlign:"center",
                                    marginTop:50
                                }}
                            >
                                {path.title}
                            </Text>
                            <Text
                                style={styles.subTitleText}
                            >
                               {path.subTitle}
                            </Text>
                        </Animated.View>
                    ))
                }
            </ScrollView>
            <View 
                style={styles.animated}
            >
                <Animated.View 
                    style={styles.buttonBoarding}
                >
                    <TouchableOpacity onPress={()=>buttonAnimation()}>
                        <FontAwesome name="chevron-right" size={30} color={"white"}  />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    )
}
export default AuthBoaring;