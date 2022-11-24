import React from 'react'
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function Service() {
    return (
        <View style={styles.MainScreen}>
            <View style={styles.topMainView}>
                <View style={styles.profilePic}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/236/236831.png" }} style={styles.ProImg} />
                </View>
                <View style={styles.TopText}>
                    <Text>Hello World</Text>
                    <Text style={styles.TopDate}>Thrusday ,08 July</Text>
                </View>
                <View>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/1182/1182718.png" }} style={styles.ProImg} />
                </View>
            </View>
            <View style={{ marginVertical: 15 }}>
                <View style={styles.CourseView}>
                    <View style={{ width: 130 }}>
                        <Image source={{ uri: "https://cdn3d.iconscout.com/3d/premium/thumb/male-character-sitting-on-chair-and-reading-a-book-4634471-3855676.png" }} style={styles.MainImg} />
                    </View>
                    <View style={styles.TextMain}>
                        <Text style={styles.AcitivitiesText}>Acitivities</Text>
                        <Text style={styles.AcitivitiesTextanother}>On your click</Text>
                        <TouchableOpacity style={styles.ActivityBtn}>
                            <Text style={{ color: 'white' }}>View Acitivities</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.MyPlanView}>
                <View style={styles.ViewPlanView}>
                    <Text style={styles.PlanText}>View Plan</Text>
                </View>
                <ScrollView style={{ marginHorizontal: 15, marginVertical: 10 }} horizontal={true}>
                    <View style={[styles.Scrollview, { backgroundColor: "#DBFAF5" }]}>
                        <Image source={{ uri: "https://cdn3d.iconscout.com/3d/premium/thumb/social-media-app-5473289-4589249.png" }} style={[styles.ScrollImg, {}]} />
                        <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 7 }}><Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>digital market</Text></View>
                    </View>
                    <View style={[styles.Scrollview, { backgroundColor: "#FAF6DB" }]}>
                        <Image source={{ uri: "https://img.pikbest.com/png-images/20210414/social-media-marketing-illustration-red_5845297.png!bw700" }} style={[styles.ScrollImg, {}]} />
                        <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 7 }}><Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>digital market</Text></View>
                    </View>
                    <View style={styles.Scrollview}>
                        <Image source={{ uri: "https://cdn3d.iconscout.com/3d/premium/thumb/new-social-media-notification-5473287-4589247.png" }} style={[styles.ScrollImg, {}]} />
                        <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 7 }}><Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>digital market</Text></View>
                    </View>
                </ScrollView>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    MainScreen: {
        height: windoHeight,
        width: windoWidth,
        backgroundColor: "white"
    },
    topMainView: {
        // borderWidth: 1,
        width: windoWidth,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "flex-start",
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignContent: "center",
        alignItems: "center",
        marginVertical: 10,
        marginLeft: 10
    },
    ProImg: {
        width: 37,
        height: 37
    },
    profilePic: {
        width: windoWidth / 7
    },
    TopText: {
        width: windoWidth / 1.56
    },
    TopDate: {
        fontWeight: "800",
        fontSize: 18,
        color: "black"
    },
    MainImg: {
        width: 100,
        height: 150,
    },
    CourseView: {
        // borderWidth: 1,
        backgroundColor: "#FFE7DF",
        marginHorizontal: 20,
        borderRadius: 14,
        paddingVertical: 10,
        display: "flex",
        flexDirection: "row",
        shadowColor: 'red',
        shadowOffset: {
            width: 10,
            height: -16,
        },
        shadowOpacity: 0.58,
        shadowRadius: 700,
        elevation: 20,
        //   elevation: 25,
    },
    TextMain: {
        // borderWidth: 1,
        width: windoWidth / 2.2,
        // justifyContent: "center"
        alignItems: "center",
        marginTop: 10
    },
    AcitivitiesText: {

        fontSize: 28,
        color: "black",
        fontWeight: "800"
    },
    AcitivitiesTextanother: {
        fontSize: 14,
        color: "grey",
        marginVertical: 10
    },
    ActivityBtn: {
        marginVertical: 10,
        backgroundColor: "#FC6736",
        borderRadius: 5,
        padding: 6,
        paddingHorizontal: 8
    },
    MyPlanView: {
        // borderWidth: 1,
        marginVertical: 15
    },
    ViewPlanView: {
        marginHorizontal: 25,
        marginTop: 20
    },
    PlanText: {
        fontSize: 20,
        fontWeight: "800",
        color: "black"
    },
    Scrollview: {
        backgroundColor: "#FFE7DF",
        width: windoWidth / 2.5,
        borderRadius: 14,
        paddingVertical: 10,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    ScrollImg: {
        width: windoWidth / 2.6,
        height: 120
    }

});
export default Service