import React, { useEffect, useRef } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated, Image } from 'react-native'
import Svg, { G, Circle } from 'react-native-svg'
function NextScreen({ percentage, scrollTo }) {
    const progressAnimation = new Animated.Value(0)
    const progressRef = useRef(null);
    const animation = (toValue) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true
        }).start();
    }
    const Size = 128;
    const strokeWidth = 3;
    const center = Size / 2;
    const radius = Size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
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
                <Circle stroke="#E6E7E8" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
                <Circle ref={progressRef} stroke="#F4338F"
                    cx={center} cy={center} r={radius} strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                />
            </Svg>
            <TouchableOpacity onPress={scrollTo} activeOpacity={0.6} style={styles.button}>
                <Image style={{ width: 30, height: 30 }} source={{
                    uri: "https://images.assetsdelivery.com/compings_v2/ahasoft2000/ahasoft20001805/ahasoft2000180512967.jpg"

                }} />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        position: "absolute",
        // backgroundColor: "#f4338f",
        backgroundColor: "black",
        borderRadius: 100,
        padding: 40
    }
})
export default NextScreen;