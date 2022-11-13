import React, { useEffect, useRef, useState } from 'react';
import { Modal, Animated, TouchableOpacity, Text, View, StyleSheet, TextInput, Dimensions,ScrollView } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let selectIntesertGlobal=[];
const ConfimSignup=()=>{
    useEffect(() => {
        showPopUp();
        selectIntesertGlobal=[];
        console.log(selectIntesertGlobal)
    }, [])
    const position = new Animated.ValueXY({ x: 0, y: windowHeight });
    const showPopUp = () => {
        Animated.timing(position, {
            // toValue: { x: 0, y: -windowHeight/80 },
            duration: 1000,
            useNativeDriver: true
        }).start();
    }
    const [interestArray,setSelectedInterest]=useState([
        {id:1,value:"Science",isSelect:false},
        {id:2,value:"Tech",isSelect:false},
        {id:3,value:"Teaching",isSelect:false},
        {id:4,value:"Physics",isSelect:false},
        {id:5,value:"C++",isSelect:false},
        {id:6,value:"Java",isSelect:false},
        {id:7,value:"React",isSelect:false},
    ])
    const removeselectedTag=(element,elementIndex)=>{
        selectIntesertGlobal.splice(elementIndex, 1);
        setSelectedInterest((options) =>
            options.map((item) => {
                if (item.value === element.value) {
                    item.isSelect = false
                }
                return item;
            })
        );
    }

    const selectInterest=(imterest,index)=>{
        let isExist=selectIntesertGlobal.find((val)=>{
            return val.value===imterest.value;
        })
        // console.log(isExist)
        if(isExist!==undefined){
            console.log("Already Exitst");
            removeselectedTag(imterest,index)
            console.log(selectIntesertGlobal)
            return ;
        }
        else{
            setSelectedInterest((options) =>
            options.map((item) => {
                if (item.value === imterest.value) {
                    imterest.isSelect = true;
                }
                return item;
            })
            );
            selectIntesertGlobal.push(imterest);
        }
        
        

    }
   
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>
                Complete Your Profile
            </Text>
            <Animated.View style={[styles.animtedView,
            {
                transform: [
                    { translateX: position.x },
                    { translateY: position.y }
                ]
            }
            ]}>
                <View style={{alignItems:"center"}} >
                    <TextInput
                        placeholder="Age"
                        placeholderTextColor='black'
                        style={styles.customInput}
                    />
                    <TextInput
                        placeholder="Phone"
                        placeholderTextColor='black'
                        style={styles.customInput}
                    />
                    <TextInput
                        placeholder="Qualification"
                        placeholderTextColor='black'
                        style={styles.customInput}
                    />
                    <View>
                        <Text style={{color:"#5B5B5B",fontWeight:"bold",margin:10}}>Interests</Text>
                        <View style={{
                            flexDirection:"row",
                            width:"98%",
                            flexWrap:"wrap",
                            padding:10,
                            alignSelf:"center",
                        }}>
                            {
                                interestArray.map((item,index)=>(
                                    <TouchableOpacity
                                        style={[styles.itemText,item.isSelect?{backgroundColor:"#BBBABF"}:{backgroundColor:"cyan"}]}
                                        onPress={()=>selectInterest(item,index)}
                                    >
                                        <Text style={{color:"black",fontWeight:"bold"}}>{item.value}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btnContainer} 
                    >
                        <Text style={styles.btnText}>
                            Complete...
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    iconImage: {
        width: 40,
        height: 40
    },
    textStyle: {
        color: "#5B5B5B",
        fontWeight: "bold",
        fontSize: 40,
        paddingHorizontal: 30,
        marginTop:windowHeight/20
    },
    customInput:{
        width:windowWidth-60,
        backgroundColor:"white",
        marginTop:20,
        borderRadius:5,
        paddingHorizontal:20,
        borderWidth:1.5,
        borderColor:"#A8A8A8",
        alignSelf:"center"
    },
    animtedView: {
        backgroundColor: "white",
        width: windowWidth-25,
        // height: (windowHeight / 1.5),
        paddingVertical:20,
        borderRadius: 40,
        marginTop:windowHeight/20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.58,
        shadowRadius:20.00,
        elevation: 24,
        fontWeight:"bold",
        color:"black",
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
    },
    itemText:{
        color:"#5B5B5B",
        fontWeight:"bold",
        margin:10,
        backgroundColor:"rgba(101,185,255,0.48)",
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:100,
    },
    btnContainer:{
        width:windowWidth-60,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#10FFE5",
        borderRadius:200,
        borderWidth:2,
        borderColor:"#66EECD",
        marginTop:windowHeight/20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height:25,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 50,
    },
    btnText:{
        fontWeight:"bold",
        color:"#535353",
        fontSize:18,
    },
})
export default ConfimSignup;