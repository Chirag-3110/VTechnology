import React, { useEffect, useState } from 'react';
import { Animated, Button, Easing, View, Text, StyleSheet ,Dimensions,TouchableOpacity } from 'react-native';
const windowWidth=Dimensions.get('window').width;
const windowheight=Dimensions.get('window').height
const CustomButton=(props)=>{
    const [width,setWidtht]=useState(new Animated.Value(1));
    const [opacity,setOpactity]=useState(new Animated.Value(1));
    const [btnOpacity,setBtnOpactity]=useState(new Animated.Value(1));
  const handleButton = () => {
    Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false
    }).start(()=>{
        Animated.timing(width, {
            toValue: 0,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: false
        }).start(()=>{
            Animated.timing(btnOpacity, {
                toValue: 0,
                duration: 100,
                useNativeDriver: false
            }).start((()=>{
              props.onpress()
            }));
        })
    })
  };
    const maxWidth = width.interpolate({ 
      inputRange: [0,1], 
      outputRange: [0,windowWidth-60]
    });

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={handleButton}>
            <Animated.View style={[styles.btnContainer,{ opacity:btnOpacity,maxWidth: maxWidth }]}>
                <Animated.Text style={[styles.btnText,{opacity:opacity}]}>
                    {props.title}
                </Animated.Text>
            </Animated.View>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems:"center",
    justifyContent:"center"
  },
  spacing: {
    paddingVertical: 10
  },
  content: {
    fontSize: 16,
    lineHeight: 30,
    color: '#555'
  },
  btnContainer: {
    width: windowWidth - 60,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#10FFE5",
    borderRadius:200,
    borderWidth:2,
    borderColor:"#66EECD",
    marginTop:windowheight/20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 25,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 50,
},
btnText: {
    fontWeight: "bold",
    color: "#535353",
    fontSize: 18,
},
});


export default CustomButton;