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
    const [width,setWidtht]=useState(new Animated.Value(60));
    const [Name,setName]=useState(new Animated.Value(0));
    const [ifName,setIfName]=useState(false)
    const imagePaths=[
        {
            title:"Email Marketing",
            subTitle:"Make the customer the hero of your story",
            path:"https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg?size=626&ext=jpg"
        },
        {
            title:"Digital Marketing",
            subTitle:"Good marketing makes the company look smart. Great marketing makes the customer feel smart",
            path:"https://img.freepik.com/free-vector/abstract-illustration-social-media-apps_52683-62412.jpg?size=338&ext=jpg"
        },
        {
            title:"Marketing",
            subTitle:"Business has only two functions- marketing and innovation",
            path:"https://img.freepik.com/free-vector/mobile-marketing-concept-illustration_114360-1497.jpg?size=338&ext=jpg"
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
        Animated.timing(width, {
            toValue: windowWidth,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start(()=>{
            setIfName(true);
            Animated.timing(Name, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false
            }).start(()=>navigation.replace('login')); 
        });
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
                            <Image
                                source={{uri:path.path}}style={{ height: 350,width: windowWidth,resizeMode:"contain" }} 
                            />
                            <Text
                                style={{
                                    color:"#070286",
                                    fontWeight:"bold",
                                    fontSize:30
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
                    style={[styles.buttonBoarding,{maxWidth:width}]}
                >
                    <TouchableOpacity onPress={()=>buttonAnimation()}>
                        {
                            ifName?
                            <Animated.Text style={{
                                opacity:Name,
                                color:"white",
                                fontWeight:"bold",
                                fontSize:15
                            }}>Welcome to VTech App</Animated.Text>:
                            <FontAwesome name="chevron-right" size={30} color={"white"}  />
                        }
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    )
}
export default AuthBoaring;