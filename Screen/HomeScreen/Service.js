import React from 'react'
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
function Service() {
    return (
        <View style={styles.MainView}>
            <View style={styles.TopView}>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/5708/5708793.png" }} style={styles.OptionImage} />
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/850/850960.png" }} style={styles.OptionImage} />
            </View>
            <View style={styles.CourseImageView}>
                <View style={styles.Course}>
                    <Image source={{ uri: "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/06/05174400/Types-of-Digital-Marketing.png" }} style={styles.CourseImage} />
                </View>
                <Text style={styles.CourseNameText}>Digital Marketing</Text>
            </View>
            <View style={[styles.MiddleView]}>
                <TouchableOpacity style={[styles.btnCourse, { borderTopRightRadius: 0, borderBottomRightRadius: 0, backgroundColor: "rgba(115,105,248,0.85)", borderRightWidth: 0, borderColor: "rgba(115,105,248,0.85)", borderWidth: 2 }]}>
                    <Text style={[styles.TextCourse, { color: "white" }]}>Questions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnCourse, { borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderColor: "rgba(115,105,248,0.85)", borderWidth: 2 }]}>
                    <Text style={[styles.TextCourse]}>Feedback</Text>
                </TouchableOpacity>
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
    TopView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 13,
        marginVertical: 15
    },
    OptionImage: {
        width: 33,
        height: 33
    },
    CourseImageView: {
        height: windoHeight / 3.5,
        justifyContent: "center",
        alignItems: "center"
    },
    CourseImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    Course: {
        borderRadius: 30,
        shadowColor: "rgba(115,105,248,0.9)",
        shadowOffset: {
            width: 10,
            height: -16,
        },
        shadowOpacity: 0.58,
        shadowRadius: 900,
        elevation: 20,
    },
    CourseNameText: {
        fontSize: 19,
        fontWeight: "800",
        marginVertical: 10,
        color: "black"
    },
    btnCourse: {
        borderWidth: 1,
        padding: 15,
        borderRadius: 20,
        width: windoWidth / 2.2,
        alignItems: "center"
    },
    MiddleView: {
        display: "flex",
        flexDirection: "row",
        marginHorizontal: 15
    },
    TextCourse: {
        fontSize: 15,
        fontWeight: "700",
        color: "black"
    }
});
export default Service