import React, { useEffect, useState } from 'react'
import { View, Text, Animated, Image, StyleSheet, Modal, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import { LineChart, } from "react-native-chart-kit";
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const image = { uri: "https://cdn3d.iconscout.com/3d/premium/thumb/man-with-ok-gesture-showing-business-charts-in-laptop-screen-4929412-4122896.png" };
function CourseDetail({ route, navigation }) {
    const { courseData } = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        setModalVisible(true);
    }, [])

    return (
        <View style={styles.MainView}>
            <ImageBackground source={image} resizeMode="cover" style={styles.MainTopview} >
            </ImageBackground>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        navigation.navigate("HomeStack")
                    }}
                >
                    <View style={styles.centeredView}>
                        <TouchableOpacity style={{ marginHorizontal: 20, marginVertical: 20, marginBottom: 350 }} onPress={() => navigation.navigate("HomeStack")}>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/3114/3114883.png" }} style={{ width: 30, height: 30, color: "white" }} />
                        </TouchableOpacity>
                        <View style={styles.modalView}>
                            <Text style={styles.CourseName}>{courseData.Name}</Text>
                            <Text style={styles.CourseAdmin}>{courseData.adminName} (Exp {courseData.AdminExperience} year)</Text>
                            <View style={{ marginTop: 10, height: windoHeight / 5.7 }}>
                                <Text style={{ fontSize: 17, fontWeight: "800", color: 'black' }}>Description</Text>
                                <Text style={{ color: "black" }}>{courseData.Description}</Text>
                            </View>
                            <TouchableOpacity style={styles.ActivityStartBtn} onPress={()=>navigation.navigate("Quiz")}>
                                <Text style={styles.ActivityStartBtnText}>Start Activity</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View >
        </View >
    )
}
const styles = StyleSheet.create({
    MainView: {
        width: windoWidth,
        height: windoHeight,
    },
    MainTopview: {
        backgroundColor: "rgba(115,105,248,0.85)",
        width: windoWidth,
        height: windoHeight / 1.8
    },
    centeredView: {
        // borderWidth: 1,
        flex: 1,
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
    },
    modalView: {
        width: windoWidth,
        height: windoHeight / 2.1,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        paddingTop: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 20,
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35
    },
    CourseName: {
        fontSize: 27,
        fontWeight: "800",
        color: "black"
    },
    CourseAdmin: {
        fontSize: 15,
        color: "black",
        marginVertical: 5,
        marginBottom: 15
    },
    LessonDetail: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        borderWidth: 1,
        borderColor: "lightgrey",
        width: windoWidth / 2.8,
        padding: 5,
        borderRadius: 7,
        marginRight: 10
    },
    Question: {
        fontSize: 17,
        color: "black",
        marginHorizontal: 5
    },
    ActivityStartBtn: {
        borderWidth: 1,
        borderColor: "rgba(115,105,248,0.85)",
        alignItems: "center",
        paddingVertical: 7,
        borderRadius: 10,
        marginTop: 16,
        backgroundColor: "rgba(115,105,248,0.85)",
        marginHorizontal: 20,
        shadowColor: 'rgba(115,105,248,0.85)',
        shadowOffset: {
            width: 6,
            height: -5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 400,
        elevation: 13,
    },
    ActivityStartBtnText: {
        fontSize: 19,
        color: "white"
    }

})
export default CourseDetail