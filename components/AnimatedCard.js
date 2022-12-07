import React,{useEffect, useState,useRef} from 'react';
import { View,Text,TouchableOpacity, StyleSheet, Dimensions,Animated,Easing } from 'react-native';
const {width,height}=Dimensions.get('window');
const AnimatedQuizCard=(props)=>{
    const [expanded,setExpanded]=useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const manageMaxCard=()=>{
        setExpanded(!expanded)
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            easing: Easing.circle,
            useNativeDriver: false 
          }).start();  
    }
    const manageMinCard=()=>{
        setExpanded(!expanded)
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start()
    }
    const maxHeight = fadeAnim.interpolate({ 
        inputRange: [0,2], 
        outputRange: [height/7,height] 
    });
    return(
        <View style={styles.container}>
            <Animated.View style={[styles.cardBody,{maxHeight:maxHeight}]}>
                <View>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems:"center"}}>
                    <Text style={[styles.textStyles,{fontSize:20,padding:10}]}>{props.dataProps.item.ActivityName}</Text>
                    <TouchableOpacity style={styles.cardButton} onPress={!expanded?manageMaxCard:manageMinCard}>
                        <Text style={[styles.textStyles,{fontSize:15,paddingHorizontal:15,color:"#a000ff"}]}>{!expanded?"Show":"Hide"}</Text>
                    </TouchableOpacity>
                    </View>
                    <Text style={[styles.textStyles,{fontSize:15,paddingHorizontal:10}]}>{props.dataProps.item.courseName}</Text>
                </View>
                <Animated.View style={{opacity:fadeAnim}} >
                    <Text style={[styles.textStyles,{fontSize:15,paddingHorizontal:15,marginVertical:10,}]}>No Of Questions {props.dataProps.item.NOQues}</Text>
                    <TouchableOpacity style={styles.startButton} onPress={()=>props.getQuestionData(props.dataProps.item)}>
                        <Text style={[styles.textStyles,{fontSize:15,paddingHorizontal:15,color:"#a000ff"}]}>Start Quiz</Text>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        marginTop:20
    },
    cardBody:{
        width:width-50,
        backgroundColor:"rgba(128,45,255,0.52)",
        borderRadius:10,
        padding:10,
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