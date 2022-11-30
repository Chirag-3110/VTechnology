import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function Profile() {
    return (
        <View style={styles.Header}>
            <View style={styles.LogInBox}>
                <Text style={styles.ProfileText}>Complete Your Profile</Text>
                <View style={{ justifyContent: "center", alignItems: "center", }}>

                    <Image
                        style={[styles.BackImg, { height: 150, width: 150 }]}
                        source={{ uri: "https://thumbs.dreamstime.com/b/add-account-glyph-color-flat-vector-icon-add-account-vector-icon-elements-mobile-concept-web-apps-thin-line-icons-142246431.jpg" }}
                    />
                </View>
                <View style={styles.Input}>
                    <TextInput
                        placeholder='Age'
                        keyboardType='numeric'
                    />
                </View>
                <View style={styles.Input}>
                    <TextInput
                        placeholder='Phone Number'
                        keyboardType='numeric'
                    />
                </View>
                <TouchableOpacity style={[styles.Input, { borderWidth: 0, backgroundColor: "#3063A0", width: windowWidth / 2.8, justifyContent: "center", borderRadius: 13, padding: 0, marginTop: 30, alignSelf: "flex-end", display: "flex", flexDirection: "row" }]}>

                    <Text style={{ color: "white", textAlign: "center", fontSize: 20, margin: 0, padding: 0, alignSelf: "center" }}>Save</Text>
                    <Image
                        style={[styles.BackImg, { height: 30, width: 30, alignItems: "center", justifyContent: "center", alignContent: "center" }]}
                        source={{ uri: "https://www.freeiconspng.com/thumbs/white-arrow-png/white-arrow-transparent-png-10.png" }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Header: {
        height: windowHeight,
        width: windowWidth,
        backgroundColor: "#3063A0",
        justifyContent: "center"
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