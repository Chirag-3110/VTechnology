import React, { useCallback, useContext, useEffect, useState } from 'react'
import { View, Text, Animated, Image, StyleSheet, Modal, Dimensions, TouchableOpacity, ScrollView, ActivityIndicator, TextInput } from 'react-native'
import Lottie from 'lottie-react-native';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function SearchPage({ navigation }) {
    return (
        <View style={{ width: windoWidth, height: windoHeight, backgroundColor: "white" }}>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: "grey", marginVertical: 5, borderRadius: 1, display: "flex", flexDirection: "row", borderTopWidth: 0, alignItems: "center", paddingHorizontal: 10 }} onPress={() => navigation.navigate("SearchPage")}>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/54/54481.png" }} style={[{ width: 25, height: 25, marginRight: 10 }]} />
                <TextInput
                    style={{ fontWeight: "bold", fontSize: 15, color: "black", width: windoWidth / 1.6 }}
                    placeholder={"Search"}
                    placeholderTextColor={"black"}
                    autoCapitalize={true}
                />
            </TouchableOpacity>
            <View style={styles.mainComponent}>
                <TouchableOpacity style={styles.SearchBoxes} onPress={() => navigation.navigate("DashBoard")}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/610/610106.png" }} style={[{ width: 20, height: 20, marginRight: 4 }]} />
                    <Text style={styles.SearchText} >Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SearchBoxes} onPress={() => navigation.navigate("MainQuizHome")}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/8888/8888061.png" }} style={[{ width: 20, height: 20, marginRight: 4 }]} />
                    <Text style={styles.SearchText}>Activity</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SearchBoxes} onPress={() => navigation.navigate("Profile")}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/3177/3177440.png" }} style={[{ width: 20, height: 20, marginRight: 4 }]} />
                    <Text style={styles.SearchText}>Profile</Text>
                </TouchableOpacity>
            </View>
            <Lottie
                source={require('../../lottiesAnimations/115478-webdesign-support.json')} autoPlay loop style={{ height: 380, width: windoWidth, justifyContent: "center", alignItems: "center",marginTop:50,marginLeft:3 }} />
        </View>
    )
}
const styles = StyleSheet.create({
    mainComponent: {
        height: windoHeight / 18,
        display: "flex",
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "center"
    },
    SearchBoxes: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        width: windoWidth / 3.5,
        paddingHorizontal: 3,
        paddingVertical: 3,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
        borderRadius: 10
    },
    SearchText: {
        fontSize: 14,
        color: "black",
        fontWeight: "800"
    }
})
export default SearchPage