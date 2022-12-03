import React, { useEffect, useRef, useState } from 'react';
import { Modal, Animated, TouchableOpacity, Text, View, StyleSheet, TextInput, Dimensions,ScrollView } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
let selectIntesertGlobal=[];
const ConfimSignup=({route,navigation})=>{
    const {email,password}=route.params;
    const [age,setAge]=useState(null);
    const [phone,setPhone]=useState(null);
    const [qualification,setQualification]=useState(null);
    const [selctedInterestState,setSelectedInterestState]=useState([]);

    useEffect(() => {
        showPopUp();
        selectIntesertGlobal=[];
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
        selectIntesertGlobal=selectIntesertGlobal.filter(function(item){
            return item.value != element.value;
        });
        console.log(selctedInterestState)
        setSelectedInterest((options) =>
            options.map((item) => {
                if (item.value === element.value) {
                    item.isSelect = false
                }
                return item;
            })
        );
        setSelectedInterestState(selectIntesertGlobal)
    }

    const selectInterest=(imterest,index)=>{
        let isExist=selectIntesertGlobal.find((val)=>{
            return val.value===imterest.value;
        })
        if(isExist!==undefined){
            console.log("Already Exitst");
            removeselectedTag(imterest,index);
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
            setSelectedInterestState(selectIntesertGlobal)
            console.log(selctedInterestState)
        }
    }
    const convertInterestFormat=(selctedInterestStateParams)=>{
        const updatedInterestArray=[];
        selctedInterestStateParams.forEach((item)=>{
            updatedInterestArray.push({id:item.id,value:item.value})
        })
        return updatedInterestArray;
    }
    const createNewUSer=()=>{
        try {
            console.log(email,password,age,phone,qualification);
            const newIntesetArray=convertInterestFormat(selctedInterestState)
            auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user=userCredential.user;
                console.log('User account created & signed in!',user.uid);
                firestore().collection("UserCollection")
                .doc(user.uid)
                .set({
                    userCourse:['cpp','java'],
                    email:email,
                    admin:false,
                    UserQuiz:['dasd','adfdsaf'],
                    Phone:phone,
                    Age:age,
                    Name:'juhub',
                    Interest:newIntesetArray
                })
                .then(()=>{
                    console.log("User created successfully")
                    navigation.navigate("login")
                })
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }
                console.error(error);
            });
        } catch (error) {
            console.log(error);
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
                        keyboardType={"numeric"}
                        onChangeText={(age)=>setAge(age)}
                    />
                    <TextInput
                        placeholder="Phone"
                        placeholderTextColor='black'
                        style={styles.customInput}
                        keyboardType={"phone-pad"}
                        onChangeText={(phone)=>setPhone(phone)}
                    />
                    <TextInput
                        placeholder="Qualification"
                        placeholderTextColor='black'
                        style={styles.customInput}
                        onChangeText={(qualification)=>setQualification(qualification)}
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
                        onPress={()=>createNewUSer()}
                    >
                        <Text style={styles.btnText}>
                            Complete...
                        </Text>
                    </TouchableOpacity>
                    {/* <CustomButton
                        title="Complete..."
                        onpress={()=>alert("Data Added ")}
                    /> */}
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
        alignSelf:"center",
        color:"black"
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