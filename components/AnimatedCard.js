import React,{useEffect, useState} from 'react';
import { View,Text,TouchableOpacity, StyleSheet, Dimensions,Animated,Easing } from 'react-native';
const {width,height}=Dimensions.get('window');
const AnimatedQuizCard=()=>{
    const [heightState,setWidthtState]=useState(new Animated.Value(0));
    const [opacity,setOpactity]=useState(new Animated.Value(0));
    const [expanded,setExpanded]=useState(false)
    const manageMaxCard=()=>{
        setExpanded(!expanded)
        Animated.timing(heightState, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: false 
          }).start(()=>{
            Animated.timing(opacity, {
                toValue: 1,
                duration: 100,
                useNativeDriver: false
            }).start()
          });  
    }
    const manageMinCard=()=>{
        Animated.timing(opacity, {
            toValue: 0,
            duration: 100,
            useNativeDriver: false
        }).start(()=>{
            Animated.timing(heightState, {
                toValue: 0,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: false
            }).start(()=>{
                setExpanded(!expanded)
            });  
        })
    }
    const maxHeight = heightState.interpolate({ 
        inputRange: [0,2], 
        outputRange: [height/7,height] 
    });
    const startQuiz=()=>{

    }
    return(
        <View style={styles.container}>
            <Animated.View style={[styles.cardBody,{maxHeight:maxHeight}]}>
                <View>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems:"center"}}>
                    <Text style={[styles.textStyles,{fontSize:20,padding:10}]}>activity name</Text>
                    <TouchableOpacity style={styles.cardButton} onPress={!expanded?manageMaxCard:manageMinCard}>
                        <Text style={[styles.textStyles,{fontSize:15,paddingHorizontal:15,color:"#a000ff"}]}>{!expanded?"Show":"Hide"}</Text>
                    </TouchableOpacity>
                    </View>
                    <Text style={[styles.textStyles,{fontSize:15,paddingHorizontal:15}]}>course name</Text>
                </View>
                <Animated.View style={{opacity:opacity}} >
                    <Text style={[styles.textStyles,{fontSize:15,paddingHorizontal:15,marginVertical:10,}]}>No Of Questions 5</Text>
                    <TouchableOpacity style={styles.startButton} onPress={()=>startQuiz()}>
                        <Text style={[styles.textStyles,{fontSize:15,paddingHorizontal:15,color:"#a000ff"}]}>Start Quiz</Text>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        // alignItems: 'center',
        // flex:1,
        // justifyContent: 'center',
        marginTop:20
    },
    cardBody:{
        width:width-50,
        backgroundColor:"rgba(128,45,255,0.52)",
        borderRadius:10,
        padding:10,
        // height:height/4.3,
        // justifyContent:"space-around"
    },
    textStyles:{
        color:"white",
        fontWeight:"bold"
    },
    cardButton:{
        width:100,
        height:35,
        backgroundColor:"white",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        alignSelf:"flex-end",
        marginHorizontal:10
    },
    startButton:{
        width:'90%',
        height:35,
        backgroundColor:"white",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        alignSelf:"center",
    }
})
export default AnimatedQuizCard;