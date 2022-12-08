import React, { useState,useRef, useEffect } from "react";
import {
    View,
    Animated,
    Dimensions,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Easing,
    Text
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
import Lottie from 'lottie-react-native';
const AuthBoaring=({navigation})=>{
    const [active,setActive]=useState(0);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const [width,setWidtht]=useState(new Animated.Value(60));
    const [Name,setName]=useState(new Animated.Value(0));
    const [ifName,setIfName]=useState(false)
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
            }).start(()=>navigation.replace('login'))
        });
    }
    return(
        <View style={[styles.continer,active===0?{backgroundColor:"rgba(136,0,255,0.85)"}:active===1?{backgroundColor:"#05BF2C"}:{backgroundColor:"#008BFF"}]}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={(e) => {
                    let value=Math.ceil(e.nativeEvent.contentOffset.x/windowWidth)
                    if(value!==active){
                        setActive(value);
                        console.log(value)
                    }
                }}
                style={
                    active===0?{backgroundColor:"rgba(136,0,255,0.85)"}:active===1?{backgroundColor:"#05BF2C"}:{backgroundColor:"#008BFF"}
                }
            >
                <Animated.View 
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
                    <Lottie
                        source={require("../../lottiesAnimations/89806-digital-marketing.json")} autoPlay loop style={{ height: 350,width: windowWidth }} 
                    />
                    <Text
                        style={{
                            color:"white",
                            fontWeight:"bold",
                            fontSize:30
                        }}
                    >
                        Email Marketing
                    </Text>
                    <Text
                        style={{
                            color:"white",
                            fontWeight:"bold",
                            fontSize:15,
                            width:'80%',
                            textAlign:"center",
                            marginTop:10
                        }}
                    >
                        Make the customer the hero of your story
                    </Text>
                </Animated.View>
                <Animated.View 
                    style={{
                        marginLeft:10,
                        alignItems:"center",
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
                    <Lottie
                        source={require("../../lottiesAnimations/90837-digital-marketing.json")} autoPlay loop style={{ height: 350,width: windowWidth }} 
                    />
                     <Text
                        style={{
                            color:"white",
                            fontWeight:"bold",
                            fontSize:30
                        }}
                    >
                        Digital Marketing'
                    </Text>
                    <Text
                        style={{
                            color:"white",
                            fontWeight:"bold",
                            fontSize:15,
                            width:300,
                            textAlign:"center",
                            marginTop:10
                        }}
                    >
                        Good marketing makes the company look smart. Great marketing makes the customer feel smart
                    </Text>
                </Animated.View>
                <Animated.View 
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
                    <Lottie
                        source={require("../../lottiesAnimations/99954-digital-marketing-services.json")} autoPlay loop style={{ height: 350,width: windowWidth }} 
                    />
                     <Text
                        style={{
                            color:"white",
                            fontWeight:"bold",
                            fontSize:30
                        }}
                    >
                        Marketing
                    </Text>
                    <Text
                        style={{
                            color:"white",
                            fontWeight:"bold",
                            fontSize:15,
                            width:'80%',
                            textAlign:"center",
                            marginTop:10
                        }}
                    >
                        Business has only two functions- marketing and innovation
                    </Text>
                </Animated.View>
            </ScrollView>
            <View 
                style={{
                    flexDirection:"row",
                    alignSelf:"center",
                    position:"absolute",
                    bottom:8,
                    alignItems:"center",
                    justifyContent:"space-between",
                    width:windowWidth,
                    bottom:windowHeight/10,
                    paddingHorizontal:15
                }}
            >
                <View
                     style={{
                        flexDirection:"row",
                        alignSelf:"center",
                    }}
                >
                    {
                        [1,2,3].map((i,k)=>(
                            <View key={k} style={k===active?styles.seletedImage:styles.notSeletedImage} />
                        ))
                    }
                </View>
                <Animated.View 
                    style={[styles.buttonBoarding,
                        active===0?{backgroundColor:"rgba(136,0,255,0.85)", maxWidth:width,}:active===1?{backgroundColor:"#05BF2C", maxWidth:width,}:{backgroundColor:"#008BFF", maxWidth:width,}
                    ]}
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
const styles=StyleSheet.create({
    continer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    imageStyle:{
        width:windowWidth,
        height:windowHeight,
        resizeMode:"cover",
    },
    seletedImage:{
        backgroundColor:"white",
        width:30,
        height:10,
        borderRadius:10,
        marginHorizontal:3
    },
    notSeletedImage:{
        backgroundColor:"white",
        width:10,
        height:10,
        borderRadius:10,
        marginHorizontal:3
    },
    dotsContainer:{
        flexDirection:"row",
        alignSelf:"center",
        position:"absolute",
        bottom:8,
        alignItems:"center"
    },
    buttonBoarding:{
        width:windowWidth-100,
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:30,
        elevation:20,
        shadowColor: 'white',
        borderWidth:2,
        borderColor:"white"
    },
})
export default AuthBoaring;