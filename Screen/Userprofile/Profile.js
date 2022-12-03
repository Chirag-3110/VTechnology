import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
import { GlobalVariable } from '../../App';
import firestore from '@react-native-firebase/firestore';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Profile() {
    const [getAllDetails, setgetAllDetails] = useState("")
    const { userUid } = useContext(GlobalVariable);
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
    return (
        <View style={styles.Header}>
            <View style={styles.ProfileTextView}>
                <Text style={styles.ProfileText}>Profile</Text>
            </View>
            <View style={styles.MainProfileview}>
                <View style={styles.MainProfileInnerview}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png" }} style={{ width: 50, height: 50, color: "white" }} />
                </View>
                <View style={[styles.MainProfileInnerview, { width: windowWidth / 1.5, alignItems: "flex-start", marginLeft: 2 }]}>
                    <Text style={[styles.InfoText, { fontSize: 22, fontWeight: "900" }]}>{getAllDetails.Name}</Text>
                    <Text style={styles.InfoText}>{getAllDetails.email}</Text>
                </View>
            </View>
            <View style={styles.MenuSection}>
                <View style={styles.OptionView}>
                    <Text style={styles.OptionViewText}>Options</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginHorizontal: 15, paddingVertical: 15, backgroundColor: "#CFD8FF", borderRadius: 13, marginVertical: 14 }}>
                    <View style={styles.MainProfileInnerview1}>
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/1100/1100523.png" }} style={{ width: 38, height: 38, color: "white" }} />
                    </View>
                    <View style={{ width: windowWidth / 2 }}>
                        <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>UserDetail</Text>
                    </View>
                    <View style={styles.MainProfileInnerview1}>
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/556/556690.png" }} style={{ width: 30, height: 30, color: "white" }} />
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginHorizontal: 15, paddingVertical: 15, backgroundColor: "#C0FFF3", borderRadius: 13, marginVertical: 14 }}>
                    <View style={styles.MainProfileInnerview1}>
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/3368/3368819.png" }} style={{ width: 35, height: 35, color: "white" }} />
                    </View>
                    <View style={{ width: windowWidth / 2, }}>
                        <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>Dashboard</Text>
                    </View>
                    <View style={styles.MainProfileInnerview1}>
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/1294/1294738.png" }} style={{ width: 30, height: 30, color: "white" }} />
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginHorizontal: 15, paddingVertical: 15, backgroundColor: "#FBE0E6", borderRadius: 13, marginVertical: 14 }}>
                    <View style={styles.MainProfileInnerview1}>
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/7111/7111141.png" }} style={{ width: 35, height: 35, color: "white" }} />
                    </View>
                    <View style={{ width: windowWidth / 2, }}>
                        <Text style={{ fontSize: 18, fontWeight: "600", color: "black" }}>Activities</Text>
                    </View>
                    <View style={styles.MainProfileInnerview1}>
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/556/556690.png" }} style={{ width: 30, height: 30, color: "white" }} />
                    </View>
                </View>
            </View>
        </View >
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
        fontWeight: "700",
        color: "black"
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
        marginHorizontal: 2,
        marginLeft: 10,
        justifyContent: "center",
        width: windowWidth / 5,
        alignItems: "center"
    },
    InfoText: {
        fontSize: 17,
        color: "black",
        fontWeight: "600"
    },
    MenuSection: {
        height: windowHeight / 1.5,
        // borderWidth: 1
    },
    OptionView: {
        // borderWidth: 1,
        marginVertical: 20,
        marginHorizontal: 20
    },
    OptionViewText: {
        fontSize: 25,
        color: "black",
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