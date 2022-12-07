import React, {forwardRef, useRef,useImperativeHandle } from 'react';
import {View,Text, StyleSheet, Dimensions,TouchableOpacity,Animated} from 'react-native';
const {width,height}=Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomToast=forwardRef((props,ref)=>{
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useImperativeHandle(ref, () => ({
        showToast(){
            Animated.sequence([
                Animated.timing(fadeAnim,{
                    toValue:1,
                    duration:200,
                    useNativeDriver:true
                }),
                Animated.delay(2000),
                Animated.timing(fadeAnim,{
                    toValue:0,
                    duration:200,
                    useNativeDriver:true
                })
            ]).start()
        }
      }));
    
    const closetoast=()=>{
        Animated.timing(fadeAnim,{
            toValue:0,
            duration:200,
            useNativeDriver:true
        }).start();
    }
    return(
        <View style={styles.container}>
            <Animated.View style={[styles.toastContainer,{
                backgroundColor:props.toastColor,
                opacity:fadeAnim,
                transform:[
                    {translateY:fadeAnim.interpolate({
                        inputRange:[0,1],
                        outputRange:[-20,0]
                    })},
                ]
            }]}>
                <Text style={{color:props.toastTextColor,fontWeight:"bold",width:'90%',marginRight:5}}>
                    {props.toastMessage}
                </Text>
                <TouchableOpacity onPress={()=>closetoast()}>
                    <FontAwesome name="close" size={30} color={"white"} style={{marginLeft:-15}} />
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
})
const styles=StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent:"center",
    },
    toastContainer:{
        width:width/1.4,
        borderRadius:10,
        alignItems: 'center',
        justifyContent:"space-between",
        flexDirection: 'row',
        padding:15,
        alignSelf:"center",
        marginTop:5
    }
})
export default CustomToast;
