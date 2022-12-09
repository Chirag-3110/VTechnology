import react, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Animated, Image, ImageBackground, ImageComponent } from 'react-native';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function InnerDashboard() {
    return (
        <View style={styles.MainView}>
            <View style={styles.MainInnerView}>
                <Text style={styles.DashboardText}>DashBoard Screen</Text>
            </View>
            <View style={styles.DetailView}>
                <View>
                    <Text style={styles.DetailText}>Activity Name : dhbjdbcj</Text>
                    <Text style={styles.DetailText}>No of Question : 5</Text>
                    <Text style={styles.DetailText}>Feedback Status : pending</Text>
                    <Text style={styles.DetailText}>Course Name</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    MainView: {
        width: windoWidth,
        height: windoHeight,
        backgroundColor: "white"
    },
    MainInnerView: {
        height: windoHeight / 9,
        // borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#B6FFB6"
        backgroundColor: "#97A3FF"
    },
    DashboardText: {
        fontSize: 26,
        fontWeight: "700",
        color: "white"
    },
    DetailView: {
        // borderWidth: 1,
        height: windoHeight / 4,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#97A3FF",
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35
    },
    DetailText: {
        fontSize: 20,
        color: "white",
        marginVertical: 6
    }
})
export default InnerDashboard