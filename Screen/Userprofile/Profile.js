import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
import { GlobalVariable } from '../../App';
import firestore from '@react-native-firebase/firestore';
import Lottie from 'lottie-react-native';
import AnimatedLottieView from 'lottie-react-native';
import auth from '@react-native-firebase/auth';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Profile({ navigation }) {
    const [getAllDetails, setgetAllDetails] = useState("")
    const { userUid } = useContext(GlobalVariable);
    const [userDate,setUserDate]=useState('');
    const [showndate,setShownDate]=useState('');
    useEffect(() => {
        GetDetails();
    }, [setShownDate])
    const GetDetails = async () => {
        try {
            const user = await firestore().collection('UserCollection').doc(userUid.uid).get()
            const Data = user._data;
            setUserDate(Data.accountDate)
            setgetAllDetails(Data);
            calulateDays()
        } catch (error) {
            console.error(error);
        }
    }
    const logout = () => {
        auth().signOut()
    }
    const calulateDays=()=>{
        let tadayDate = Date.now();
        let userSignupDate = new Date(parseInt(userDate));
        const TotalDays=(Math.abs(tadayDate-userSignupDate)/(1000*60*60*24))
        let finalDays;
        finalDays = Math.ceil(TotalDays)
        setShownDate(finalDays)
    }
    return (
        <>
            <View style={styles.Header}>
                <View style={styles.ProfileTextView}>
                    <Text style={styles.ProfileText}>Profile</Text>
                </View>
                <View style={styles.MainProfileview}>
                    <View style={styles.MainProfileInnerview}>
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png" }} style={{ width: 70, height: 70, color: "white" }} />
                    </View>
                    <View style={[styles.MainProfileInnerview, { width: windowWidth / 1.5, alignItems: "flex-start" }]}>
                        <Text style={[styles.InfoText, { fontSize: 22, fontWeight: "900", color: "black" }]}>{getAllDetails.Name}</Text>
                        <Text style={[styles.InfoText]}>{getAllDetails.email}</Text>
                    </View>
                </View>
                <View style={{ paddingVertical: 10, marginBottom: 15 }}>
                    <Text style={{ fontWeight: "800", marginHorizontal: 20, marginVertical: 10, color: "lightgrey" }}>My Status</Text>
                    <View style={{ display: "flex", flexDirection: "row", padding: 8 }}>

                        <View style={{ display: "flex", flexDirection: "row", marginHorizontal: 10 }}>
                            <View style={{ display: "flex", flexDirection: "row", paddingHorizontal: 15, paddingVertical: 6, borderRadius: 30, alignItems: "center", backgroundColor: "#373738" }}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/742/742751.png" }} style={{ width: 20, height: 20, color: "white" }} />
                                <Text style={{ fontSize: 15, color: "white", marginHorizontal: 3,}}>Away</Text>
                            </View>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", marginHorizontal: 10 }}>
                            <View style={{ display: "flex", flexDirection: "row", paddingHorizontal: 15, paddingVertical: 6, borderRadius: 30, alignItems: "center", backgroundColor: "#FBF6B3" }}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png" }} style={{ width: 30, height: 30, color: "white" }} />
                                <Text style={{ fontSize: 15, color: "black", marginHorizontal: 3 }}>Away</Text>
                            </View>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", marginHorizontal: 10 }}>
                            <View style={{ display: "flex", flexDirection: "row", paddingHorizontal: 15, paddingVertical: 6, borderRadius: 30, alignItems: "center", backgroundColor: "#FFDA87" }}>
                                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/3281/3281289.png" }} style={{ width: 30, height: 30, color: "white" }} />
                                <Text style={{ fontSize: 15, color: "black", marginHorizontal: 3 }}>Away</Text>
                            </View>
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
                            <Text style={{ fontSize: 18, fontWeight: "800", color: "black" }}>UserDetail</Text>
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
                            <Text style={{ fontSize: 18, fontWeight: "800", color: "black" }}>Dashboard</Text>
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
                            <Text style={{ fontSize: 18, fontWeight: "800", color: "black" }}>Activities</Text>
                        </View>
                        <View style={styles.MainProfileInnerview1}>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2989/2989988.png" }} style={{ width: 30, height: 30, color: "white" }} />
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginHorizontal: 15, padding: 10, marginTop: 30 }}>
                        <Text style={{ marginVertical: 5, fontWeight: "800", color: "lightgrey" }}>My Account</Text>
                        <Text style={{ fontSize: 18, color: "blue", marginVertical: 5 }}>Switch to Other Account</Text>
                        <TouchableOpacity onPress={logout} ><Text style={{ fontSize: 18, color: "red", marginVertical: 5 }}>Log Out</Text></TouchableOpacity>
                    </View>
                </View>
            </View >
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
        fontFamily: 'Quicksand-Bold'
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
        fontWeight: "600"
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
        fontWeight: "700"
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