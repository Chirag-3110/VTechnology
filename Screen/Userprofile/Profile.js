import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Profile() {
    return (
        <View style={styles.Header} >
         
          <View style={styles.Heading} >
          <Image
                source={require('../../assests/arrow.png')}
                style={styles.next}
              />
                <Text style={{color:"black",marginLeft:110,fontSize:20,fontWeight:'bold'}} >MyProfile</Text>
                <Image
                source={require('../../assests/dots.png')}
                style={styles.next1}
              />
                </View>

                <View style={styles.container1}>

                    <Image
                        style={[styles.BackImg, { height: 120, width: 120,marginLeft:40,borderRadius:80,borderColor:"black",borderWidth:1 }]}
                        source={{ uri: "https://thumbs.dreamstime.com/b/add-account-glyph-color-flat-vector-icon-add-account-vector-icon-elements-mobile-concept-web-apps-thin-line-icons-142246431.jpg" }}
                    />
                    <Text style={{color:"black",marginTop:25,fontSize:20,fontWeight:'bold'}}>Edward</Text>
                    <Image
                source={require('../../assests/pencil.png')}
                style={styles.next2}
              />
                </View>
               
               <View style={{marginTop:80}}>
                <Text style={{color:"grey",marginLeft:50}}>Dashboard</Text>
                <View style={{marginTop:25}} >

                    <View style={{flexDirection:"row"}}>
                    <Image
                source={require('../../assests/payments.png')}
                style={{height:50,width:50,marginLeft:40}}
              />
                    <Text style={{color:"black",marginLeft:20,marginTop:8,fontWeight:'bold'}}>Payments</Text>
                    
                    </View>
                    
                    <View style={{flexDirection:"row",marginTop:25}}>
                    <Image
                source={require('../../assests/achievements.png')}
                style={{height:50,width:50,marginLeft:40}}
              />
                    <Text style={{color:"black",marginLeft:20,marginTop:8,fontWeight:'bold'}}>Achievements</Text>
                    </View>

                    <View style={{flexDirection:"row",marginTop:25}}>
                    <Image
                source={require('../../assests/privacy.png')}
                style={{height:50,width:50,marginLeft:40}}
              />
                    <Text style={{color:"black",marginLeft:20,marginTop:8,fontWeight:'bold'}}>Privacy</Text>
                    </View>
                </View>
               </View>

               <View style={{marginTop:65,marginLeft:45}}>
                <Text style={{color:"orange",fontSize:18,fontWeight:'bold'}}>Log Out</Text>
               </View>
          
        </View>

       
    )
}
const styles = StyleSheet.create({
    Header: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: "white",
        // justifyContent: "center",
        color:"blue"
    },
    Heading:{
        marginTop:50,
        flexDirection:"row"
    },
    next:{
        height:25,
        width:25,
        marginLeft:30
    },
    next1:{
        height:25,
        width:25,
        marginLeft:100,
    },
    next2:{
        height:20,
        width:20,
        marginLeft:100,
        marginTop:25
    },
    container1:{
        flexDirection:"row",
        marginTop:70
    },
    next3:{
        height:100,
        marginRight:500
    },
    LogInBox: {
        backgroundColor: "#FFFFFF",
        height: windowHeight / 1.7,
        borderRadius: 30,
        marginHorizontal: 20,
        alignContent: "center",
        textAlign: "center",
    },
    ProfileText: {
        fontSize: 27,
        color: "black",
        textAlign: "center",
        marginVertical: 20
    },
    Input: {
        // borderWidth: 1,
        borderRadius: 30,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 45,
        padding: 3,
        paddingLeft: 15,
        backgroundColor: "lightgrey"
    },
    BackImg: {
        width: 20,
        height: 20,
        justifyContent: "center",
        alignSelf: "center",
        marginHorizontal: 10,
        // borderWidth: 1
    },
});
export default Profile