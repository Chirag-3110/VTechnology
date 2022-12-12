import React, { useCallback, useContext, useEffect, useState } from 'react'
import { View, Text, RefreshControl, Image, StyleSheet, Modal, Dimensions, TouchableOpacity, ScrollView, ActivityIndicator, TextInput } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import firestore from '@react-native-firebase/firestore';
import { GlobalVariable } from '../../App';
import Lottie from 'lottie-react-native';
function Feedback({ navigation }) {
    const { userUid } = useContext(GlobalVariable);
    const [performanceStateArray, setPerformanceStateArray] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    useEffect(() => {
        getUserFeedback()
    }, [])
    const getUserFeedback = async () => {
        try {
            let i = 0;
            let j = 0;
            // const NewAppendArray = []
            const resultedArray = []
            const resultedArray1 = []
            const performanceData = await firestore().collection("UserPerformance").where("UserID", "==", userUid.uid).where("status", '==', "completed").get();
            performanceData.forEach((item) => {
                resultedArray.push({ ...item.data(), id: item.id });
            })
            setPerformanceStateArray(resultedArray);
        } catch (error) {
            console.log(error);
        }
    }
    const onRefresh =useCallback(async() => {
        setRefreshing(true);
        await getUserFeedback();
        setRefreshing(false);
    }, []);
    return (
        <>
            <View style={styles.MainViewFeed}>
                <View style={styles.FeedbackTextView}>
                    <TouchableOpacity style={{ marginHorizontal: 20, marginVertical: 20, }} onPress={() => navigation.navigate("HomeStack")}>
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/3114/3114883.png" }} style={{ width: 30, height: 30, color: "white" }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, fontWeight: "700", color: "black", width: windoWidth / 1.5, textAlign: "center" }}>Feedback</Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Lottie
                        source={require('../../lottiesAnimations/53778-customer-experience-and-website-feedback-five-stars-client-review (1).json')} autoPlay loop style={{ height: 210, width: windoWidth, }} />
                </View>
                <ScrollView 
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    alwaysBounceVertical={true} 
                    showsVerticalScrollIndicator={false} 
                    style={{ marginBottom: 70 }}
                >
                    {performanceStateArray.length === 0 ? 
                        <Text style={{ justifyContent: "center", textAlign: "center", fontSize: 30, fontWeight: "700" }}>Nothing to show</Text> :
                        performanceStateArray.map((item, index) => (
                            <View style={styles.details1} key={index}>
                                <View style={styles.NotifViewActivity}>
                                    <Text style={styles.NotifViewActivityText}>Activity name : {item.activityName}</Text>
                                </View>
                                <Text style={styles.detailsText1}>{item.AdminFeedback}</Text>
                                <View style={{ display: "flex", flexDirection: "row" }}>

                                    <Text style={{ alignItems: "center", justifyContent: "center", alignSelf: "center", fontSize: 20, color: "black", fontWeight: "700" }}>Stars : </Text>
                                    {
                                        item.StarArray.map((value) => (
                                            <Lottie
                                                source={require('../../lottiesAnimations/59450-star.json')} autoPlay loop style={{ height: 40 }} />
                                        ))
                                    }
                                </View>
                            </View>
                        ))}
                </ScrollView>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    MainViewFeed: {
        width: windoWidth,
        height: windoHeight,
        backgroundColor: "white",
    },
    FeedbackTextView: {
        height: windoHeight / 10,
        alignItems: "center",
        display: "flex",
        flexDirection: "row"
    },
    details1: {
        marginHorizontal: 0,
        fontWeight: "700",
        width: windoWidth / 1.2,
        // backgroundColor: "rgba(115,105,248,0.85)",
        backgroundColor: "white",
        borderColor: "blue",
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 30,
        marginVertical: 15
    },
    NotifViewActivityText: {
        fontSize: 20,
        color: "black",
        marginVertical: 10
    },
})
export default Feedback