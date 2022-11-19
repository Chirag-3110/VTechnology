import React, { useEffect, useRef ,useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated, Image } from 'react-native'
import Svg, { G, Circle } from 'react-native-svg'
function CustomCircleBar() {
    const progressAnimation = new Animated.Value(0)
    const progressRef = useRef(null);
    const animation = (toValue) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 2000,
            useNativeDriver: true
        }).start();
    }
    const Size = 200;
    const strokeWidth = 20;
    const center = Size / 2;
    const radius = Size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const [percentage,setPercentange]=useState(75);
    useEffect(() => {
        animation(percentage)
    }, [percentage]);
    useEffect(() => {
        progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - (circumference * value.value) / 100;
            if (progressRef?.current) {
                progressRef.current.setNativeProps({
                    strokeDashoffset
                })
            }
        }, [percentage])
        return () => {
            progressAnimation.removeAllListeners();
        }
    }, [percentage])
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Svg width={Size} height={Size}>
                <Circle stroke="rgba(238,213,250,0.62)" cx={center} cy={center} r={radius} strokeWidth={strokeWidth}  />
                <Circle ref={progressRef} stroke="rgba(255,178,247,1)"
                    cx={center} cy={center} r={radius} strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                />
            </Svg>
            <View style={styles.button}>
                <Text style={{fontWeight:"bold",fontSize:25,color:"black"}}>{percentage}%</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        position: "absolute",
        backgroundColor: "transparent",
        borderRadius: 100,
        padding: 40,
    }
})
export default CustomCircleBar;