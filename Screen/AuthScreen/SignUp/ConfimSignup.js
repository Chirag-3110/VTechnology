import React, { useEffect, useRef, useState } from 'react';
import { Modal, Animated, TouchableOpacity, Text, View, StyleSheet, TextInput, Dimensions, ScrollView } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import CustomToast from '../../../components/CustomToast';
import Lottie from 'lottie-react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { ActivityIndicator } from 'react-native-paper';
let selectIntesertGlobal = [];
const ConfimSignup = ({ route, navigation }) => {
    //toast states
    const childRef = useRef(null);
    const [toastColorState, setToastColorState] = useState('rgba(41,250,25,1)');
    const [toastTextColorState, setToastTextColorState] = useState('#575757');
    const [toastMessage, setToastMessage] = useState('');

    const { email, password } = route.params;
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [phone, setPhone] = useState(null);
    const [qualification, setQualification] = useState(null);
    const [selctedInterestState, setSelectedInterestState] = useState([]);

    const [open, setOpen] = useState(false);
    const [gender, setGender] = useState(null);
    const [items, setItems] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' }
    ]);

    useEffect(() => {
        showPopUp();
        selectIntesertGlobal = [];
    }, [])
    const position = new Animated.ValueXY({ x: 0, y: windowHeight });
    const showPopUp = () => {
        Animated.timing(position, {
            duration: 1000,
            useNativeDriver: true
        }).start();
    }
    const [interestArray, setSelectedInterest] = useState([
        { id: 1, value: "Science", isSelect: false },
        { id: 2, value: "Tech", isSelect: false },
        { id: 3, value: "Teaching", isSelect: false },
        { id: 4, value: "Physics", isSelect: false },
        { id: 5, value: "C++", isSelect: false },
        { id: 6, value: "Java", isSelect: false },
        { id: 7, value: "React", isSelect: false },
    ])
    const removeselectedTag = (element, elementIndex) => {
        selectIntesertGlobal = selectIntesertGlobal.filter(function (item) {
            return item.value != element.value;
        });
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

    const selectInterest = (imterest, index) => {
        let isExist = selectIntesertGlobal.find((val) => {
            return val.value === imterest.value;
        })
        if (isExist !== undefined) {
            removeselectedTag(imterest, index);
        }
        else {
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
        }
    }
    const convertInterestFormat = (selctedInterestStateParams) => {
        const updatedInterestArray = [];
        selctedInterestStateParams.forEach((item) => {
            updatedInterestArray.push({ id: item.id, value: item.value })
        })
        return updatedInterestArray;
    }
    const createNewUSer = () => {
        try {
            const newIntesetArray = convertInterestFormat(selctedInterestState)
            if (name == null)
                throw "Please enter Name";
            if (age == null)
                throw "Please enter Age";
            if (gender == null)
                throw "Please select Gender";
            if (phone.length != 10)
                throw "Phone Should be 10 length long"
            if (qualification == null)
                throw "Please enter Qualification";
            if (newIntesetArray.length == 0)
                throw "Please Select Atleast One Intreast";
            const userDetails = {
                userCourse: [],
                email: email,
                admin: false,
                UserQuiz: [],
                Phone: phone,
                Age: age,
                Name: name,
                Interest: newIntesetArray,
                gender: gender,
                accountDate: Date.now()
            }
            setUserData(userDetails);
        } catch (error) {
            setToastMessage(error);
            setToastTextColorState("white")
            setToastColorState("red")
            childRef.current.showToast();
        }
    }
    const setUserData = (userDetails) => {
        if(loading)
            return;
        setLoading(true)
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            firestore().collection("UserCollection").doc(user.uid).set(userDetails)
            .then(()=>{
                setLoading(false)
            })
            .catch((error)=>{
                setLoading(false)
                console.log(error);
            })
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                setLoading(false)
                setToastMessage('Email Already Exists');
                setToastTextColorState("white")
                setToastColorState("red")
                childRef.current.showToast();
            }
            else{
                setToastMessage("SomeThing went Wrong ! Try Again");
                setLoading(false)
                setToastTextColorState("white")
                setToastColorState("red")
                childRef.current.showToast();
            }
        });
    }
    return (
        <View style={styles.container}>
            <CustomToast
                toastColor={toastColorState}
                toastTextColor={toastTextColorState}
                toastMessage={toastMessage}
                ref={childRef}
            />
            <Text style={[styles.textStyle,{fontFamily:"SourceSansPro-Bold"}]}>
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
                <View style={{ alignItems: "center" }} >
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor='black'
                        style={[styles.customInput,{fontFamily:"SourceSansPro-Bold"}]}
                        onChangeText={(name) => setName(name)}
                    />
                    <TextInput
                        placeholder="Age"
                        placeholderTextColor='black'
                        style={[styles.customInput,{fontFamily:"SourceSansPro-Bold"}]}
                        keyboardType={"numeric"}
                        onChangeText={(age) => setAge(age)}
                    />
                    <DropDownPicker
                        open={open}
                        value={gender}
                        items={items}
                        setOpen={setOpen}
                        setValue={setGender}
                        setItems={setItems}
                        style={styles.customInput}
                        placeholder="Select Gender"
                    />
                    <TextInput
                        placeholder="Phone"
                        placeholderTextColor='black'
                        style={[styles.customInput,{fontFamily:"SourceSansPro-Bold"}]}
                        keyboardType={"phone-pad"}
                        onChangeText={(phone) => setPhone(phone)}
                    />
                    <TextInput
                        placeholder="Qualification"
                        placeholderTextColor='black'
                        style={[styles.customInput,{fontFamily:"SourceSansPro-Bold"}]}
                        onChangeText={(qualification) => setQualification(qualification)}
                    />
                    <View>
                        <Text style={{ color: "#5B5B5B", fontWeight: "bold", margin: 10,fontFamily:"SourceSansPro-Bold" }}>Interests</Text>
                        <View style={{
                            flexDirection: "row",
                            width: "98%",
                            flexWrap: "wrap",
                            padding: 10,
                            alignSelf: "center",
                        }}>
                            {
                                interestArray.map((item, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={[styles.itemText, item.isSelect ? { backgroundColor: "#BBBABF" } : { backgroundColor: "#1D0EFE" }]}
                                        onPress={() => selectInterest(item, index)}
                                    >
                                        <Text style={{ color: "white", fontWeight: "bold",fontFamily:"SourceSansPro-Bold" }}>{item.value}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                        <TouchableOpacity style={styles.btnContainer}
                            onPress={() => createNewUSer()}
                        >
                            {
                                loading?
                                <ActivityIndicator size={25} color="white"/>:
                                    <Text style={styles.btnText}>
                                    Complete...
                                </Text>
                            }
                        </TouchableOpacity>
                </View>
            </Animated.View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "white"
    },
    iconImage: {
        width: 40,
        height: 40
    },
    textStyle: {
        color: "#5B5B5B",
        fontWeight: "bold",
        fontSize: 30,
        paddingHorizontal: 30,
        marginTop: windowHeight / 20
    },
    customInput: {
        width: windowWidth - 60,
        backgroundColor: "white",
        marginTop: 20,
        borderRadius: 5,
        paddingHorizontal: 20,
        borderWidth: 1.5,
        borderColor: "#A8A8A8",
        alignSelf: "center",
        color: "black"
    },
    animtedView: {
        backgroundColor: "white",
        width: windowWidth - 25,
        paddingVertical: 25,
        borderRadius: 40,
        marginTop: windowHeight / 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.00,
        elevation: 24,
        fontWeight: "bold",
        color: "black",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    itemText: {
        color: "#5B5B5B",
        fontWeight: "bold",
        margin: 10,
        backgroundColor: "rgba(101,185,255,0.48)",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    btnContainer: {
        width: windowWidth - 60,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1D0EFE",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 25,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 50,
        marginTop: 10
    },
    btnText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 18,
    },
})
export default ConfimSignup;