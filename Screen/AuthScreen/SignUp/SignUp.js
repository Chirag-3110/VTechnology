import React from "react";
import {View,Text, StyleSheet,TextInput, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
const windowWidth=Dimensions.get('window').width;
const windowheight=Dimensions.get('window').height
const SignUp=()=>{
   return(
    <ImageBackground style={styles.container}
        source={require('../../../assests/nwe.png')}
    >
            <View style={{alignItems:"center"}}>
                <Text style={styles.MainText}>Sign Up</Text>
                <Text style={styles.subText}>Create an account,it's free</Text>
            </View>
            <View>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={"#686B69"}
                    style={styles.customInput}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={"#686B69"}
                    style={styles.customInput}
                />
                <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor={"#686B69"}
                    style={styles.customInput}
                />
            </View>
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnText}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        <View style={{flexDirection:"row",position:'absolute',bottom:20}}>
            <Text style={styles.subText}>Already have an account?</Text>
            <Text style={styles.subText}>Log In</Text>
        </View>
    </ImageBackground>
   ) 
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems: 'center',
    },
    MainText:{
        color:"black",
        fontWeight:"bold",
        fontSize:30
    },
    subText:{
        color:"#5B5B5B",
        fontWeight:"bold",
        marginTop:10
    },
    customInput:{
        width:windowWidth-60,
        backgroundColor:"rgba(203,203,203,0.1)",
        marginTop:20,
        borderBottomWidth:1.5,
        borderBottomColor:"#A8A8A8"
    },
    btnContainer:{
        width:windowWidth-60,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#10FFE5",
        borderRadius:200,
        borderWidth:1.5,
        borderColor:"#7e7e7e",
        marginTop:windowheight/15
    },
    btnText:{
        fontWeight:"bold",
        color:"black",
        fontSize:18,
    }
})
export default SignUp;