import React, { useContext, useEffect, useState,useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import { GlobalVariable } from '../../App';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import CustomToast from '../../components/CustomToast';
import { createIconSetFromFontello } from 'react-native-vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Profile({ navigation }) {
    const [getAllDetails, setgetAllDetails] = useState("")
    const { userUid } = useContext(GlobalVariable);
    const childRef = useRef(null);

    const [toastColorState,setToastColorState]=useState('rgba(41,250,25,1)');
    const [toastTextColorState,setToastTextColorState]=useState('black');
    const [toastMessage,setToastMessage]=useState('');
    useEffect(() => {
        GetDetails();
    }, [])
    const GetDetails = async () => {
        try {
            const user = await firestore().collection('UserCollection').doc(userUid.uid).get()
            const Data = user._data;
            setgetAllDetails(Data);
        } catch (error) {
            console.error(error);
        }
    }
    const logout = () => {
        auth().signOut()
    }
    const deleteAccount=()=>{
        setToastMessage("Account Deleted Successfully");
        setToastTextColorState("black")
        setToastColorState("rgba(41,250,25,1)")
        childRef.current.showToast();
        console.log(userUid.uid)
        let user = auth().currentUser;
        user.delete()
        .then(() => {
            firestore().collection('UserCollection').doc(userUid.uid).delete()
            .then(() => {
                setToastMessage("Account Deleted Successfully");
                setToastTextColorState("black")
                setToastColorState("rgba(41,250,25,1)")
                childRef.current.showToast();
            })
            .catch((e)=>{
                console.log(e);
            });
        })
        .catch((error) => console.log(error));
    }
    const createTwoButtonAlert = () =>
    Alert.alert(
     "Delete Your Account",
      "Are you sure you wants to delete your acccount",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => deleteAccount() }
      ]
    );
    return (
        <>
            <ScrollView style={styles.Header}>
                <CustomToast
                    toastColor={toastColorState}
                    toastTextColor={toastTextColorState}
                    toastMessage={toastMessage}
                    ref={childRef}
                />
                <View style={styles.ProfileTextView}>
                    <Text style={styles.ProfileText}>Profile</Text>
                </View>
                <View style={styles.MainProfileview}>
                    <View style={styles.MainProfileInnerview}>
                        {
                            getAllDetails.gender == "Male" ? <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/236/236831.png" }} style={{ width: 70, height: 70, color: "white" }} />
                                : <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png" }} style={{ width: 70, height: 70, color: "white" }} />
                        }
                        {/* <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png" }} style={{ width: 70, height: 70, color: "white" }} /> */}
                    </View>
                    <View style={[styles.MainProfileInnerview, { width: windowWidth / 1.5, alignItems: "flex-start" }]}>
                        <Text style={[styles.InfoText, { fontSize: 22, fontFamily: "SourceSansPro-Bold", color: "black" }]}>{getAllDetails.Name}</Text>
                        <Text style={[styles.InfoText]}>{getAllDetails.email}</Text>
                    </View>
                </View>
                <View style={{ paddingVertical: 10, marginBottom: 15 }}>
                    <Text style={{ fontFamily: "SourceSansPro-Bold", fontSize: 15, marginHorizontal: 20, marginVertical: 10, color: "lightgrey" }}>My Status</Text>
                    <View style={{ display: "flex", flexDirection: "row", padding: 8 }}>

                        <View style={{ display: "flex", flexDirection: "row", marginHorizontal: 10 }}>
                            <TouchableOpacity style={{ display: "flex", flexDirection: "row", paddingHorizontal: 15, paddingVertical: 6, borderRadius: 30, alignItems: "center", backgroundColor: "#373738" }}
                                onPress={() => navigation.navigate("Feedback")}
                            >
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/742/742751.png" }} style={{ width: 20, height: 20, color: "white" }} />
                                <Text style={{ fontSize: 15, color: "white", marginHorizontal: 3, fontFamily: "SourceSansPro-Bold" }}> FeedBack</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.MenuSection}>
                    <View style={styles.OptionView}>
                        <Text style={styles.OptionViewText}>Options</Text>
                    </View>
                    <TouchableOpacity style={{ display: "flex", flexDirection: "row", alignItems: "center", marginHorizontal: 15, paddingVertical: 5, borderRadius: 13, marginVertical: 7 }} onPress={() => navigation.navigate("Userprofile")}>
                        <View style={[styles.MainProfileInnerview1, {}]}>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/1144/1144709.png" }} style={{ width: 40, height: 40, color: "white" }} />
                        </View>
                        <View style={{ width: windowWidth / 2 }}>
                            <Text style={{ fontSize: 18, fontFamily: "SourceSansPro-Bold", color: "black" }}>UserDetail</Text>
                        </View>
                        <View style={styles.MainProfileInnerview1}>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2989/2989988.png" }} style={{ width: 30, height: 30, color: "white" }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: "flex", flexDirection: "row", alignItems: "center", marginHorizontal: 15, paddingVertical: 5, borderRadius: 13, marginVertical: 7 }} onPress={() => navigation.navigate("Dashboard")}>
                        <View style={styles.MainProfileInnerview1}>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/9115/9115400.png" }} style={{ width: 40, height: 40, color: "white" }} />
                        </View>
                        <View style={{ width: windowWidth / 2, }}>
                            <Text style={{ fontSize: 18, fontFamily: "SourceSansPro-Bold", color: "black" }}>Dashboard</Text>
                        </View>
                        <View style={styles.MainProfileInnerview1}>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2989/2989988.png" }} style={{ width: 30, height: 30, color: "white" }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ display: "flex", flexDirection: "row", alignItems: "center", marginHorizontal: 15, paddingVertical: 5, borderRadius: 13, marginVertical: 7 }} onPress={() => navigation.navigate("QuizNavigation")}>
                        <View style={styles.MainProfileInnerview1}>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/7111/7111141.png" }} style={{ width: 40, height: 40, color: "white" }} />
                        </View>
                        <View style={{ width: windowWidth / 2, }}>
                            <Text style={{ fontSize: 18, fontFamily: "SourceSansPro-Bold", color: "black" }}>Activities</Text>
                        </View>
                        <View style={styles.MainProfileInnerview1}>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2989/2989988.png" }} style={{ width: 30, height: 30, color: "white" }} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginHorizontal: 15, padding: 10, marginTop: 30 }}>
                        <Text style={{ marginVertical: 5, fontFamily: "SourceSansPro-Bold", fontSize: 15, color: "lightgrey" }}>My Account</Text>
                        <TouchableOpacity onPress={logout} ><Text style={{fontWeight:"bold", fontSize: 18, color: "red", marginVertical: 5, fontFamily: "SourceSansPro-Regular" }}>Log Out</Text></TouchableOpacity>
                        <TouchableOpacity
                            onPress={createTwoButtonAlert}
                        >
                            <Text style={{ fontSize: 18, color: "blue", marginVertical: 5,fontWeight:"bold" }}>Delete Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        </>
    )
}
const styles = StyleSheet.create({
    Header: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: "white"
    },
    ProfileTextView: {
        // borderWidth: 1,
        height: windowHeight / 10,
        justifyContent: "center",
        alignItems: "center"
    },
    ProfileText: {
        fontSize: 30,
        // fontWeight: "700",
        color: "black",
        fontFamily: "SourceSansPro-Bold"
    },
    MainProfileview: {
        display: "flex",
        flexDirection: "row",
        width: windowWidth,
        // borderWidth: 1,
        height: windowHeight / 8,
    },
    MainProfileInnerview: {
        // borderWidth: 1,
        marginHorizontal: 7,
        marginLeft: 20,
        justifyContent: "center",
        width: windowWidth / 5,
        alignItems: "center"
    },
    InfoText: {
        fontSize: 17,
        // fontWeight: "600",
        color: "black",
        marginLeft: 5,
        fontFamily: "SourceSansPro-SemiBold"
    },
    MenuSection: {
        height: windowHeight / 1.9,
        // borderWidth: 1
    },
    OptionView: {
        // borderWidth: 1,
        // marginVertical: 20,
        marginTop: 20,
        marginHorizontal: 20
    },
    OptionViewText: {
        fontSize: 20,
        color: "lightgrey",
        fontFamily: "SourceSansPro-Bold"
        // fontWeight: "700"
    },
    MainProfileInnerview1: {
        // borderWidth: 1,
        marginHorizontal: 2,
        justifyContent: "center",
        width: windowWidth / 5,
        alignItems: "center"
    },
});
export default Profile