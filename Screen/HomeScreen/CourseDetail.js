import React, { useEffect, useState } from 'react'
import { View, Text, Animated, Image, StyleSheet, Modal, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { LineChart, } from "react-native-chart-kit";
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function CourseDetail() {
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        setModalVisible(true)
    }, [])

    return (
        <View style={styles.MainView}>
            <View style={styles.MainTopview}>
                <Image source={{ uri: "https://cdn3d.iconscout.com/3d/premium/thumb/man-with-ok-gesture-showing-business-charts-in-laptop-screen-4929412-4122896.png" }} style={[styles.ProImg]} />
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.ModelTopView}>
                                <View style={styles.ContentView}>

                                    <Text style={styles.ModelTopViewText}>Get your position in digital marketing</Text>
                                </View>
                                {/* <TouchableOpacity style={[styles.ContentView, { justifyContent: "flex-end", alignItems: "flex-end" }]} onPress={() => setModalVisible(!modalVisible)}>
                                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/656/656857.png" }} style={[styles.ProImg, { width: 20, height: 20, marginRight: 30 }]} />

                                </TouchableOpacity> */}
                            </View>
                            <View style={styles.details}>
                                <Text style={styles.detailsText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus aspeorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</Text>
                            </View>
                            <TouchableOpacity style={[styles.Modelviewbtn]}>
                                <Text style={styles.ModelviewTextbtn}>Enroll Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    MainView: {
        width: windoWidth,
        height: windoHeight,
    },
    MainTopview: {
        backgroundColor: "rgba(115,105,248,0.85)"
    },
    ProImg: {
        width: windoWidth,
        height: windoHeight / 1.8
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
        alignItems: "center",
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    ModelView: {
        // position: 'absolute',
        zIndex: 1,
        backgroundColor: "white",
        width: windoWidth,
        marginTop: 20,
        height: windoHeight / 2,
        bottom: 10,
        borderWidth: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    ModelTopView: {
        // borderWidth: 1,
        marginVertical: 15,
        // marginHorizontal: 30,
        width: windoWidth / 1.2,
        display: "flex",
        flexDirection: "row",
        // justifyContent: "center",
        // alignItems: "center"
    },
    ModelTopViewText: {
        fontSize: 20,
        fontWeight: "700",
        color: "black"
    },
    ContentView: {
        // borderWidth: 1,
        width: windoWidth / 1.2
    },
    ModelTopTextPrice: {
        marginVertical: 10,
        fontSize: 20,
        color: "black",
        fontWeight: "800",
        borderWidth: 1,
    },
    PriceView: {
        marginHorizontal: 25
    },
    Modelviewbtn: {
        width: windoWidth / 1.3,
        borderWidth: 1,
        backgroundColor: "black",
        marginHorizontal: 10,
        marginVertical: 20,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: "center",
        opacity: 0.9
    },
    ModelviewTextbtn: {
        color: "white",
        fontSize: 20,
        fontWeight: "700"
    },
    details: {
        marginHorizontal: 0,
        fontWeight: "700",
        width: windoWidth / 1.2
    },
})
export default CourseDetail