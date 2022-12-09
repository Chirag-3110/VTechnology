import react, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Animated, Image, ImageBackground, ImageComponent } from 'react-native';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import firestore from '@react-native-firebase/firestore';
import Lottie from 'lottie-react-native';
import { GlobalVariable } from '../../App';
const MainDashboard = ({ navigation }) => {
    const { userUid } = useContext(GlobalVariable);
    const [performanceStateArray, setPerformanceStateArray] = useState([]);
    const [totalActivities, setTotalActivities] = useState(null);
    const [userName, setUserName] = useState('');
    useEffect(() => {
        getUserPerformance()
    }, [])
    const getUserPerformance = async () => {
        try {
            const resultedArray = []
            const performanceData = await firestore().collection("UserPerformance").where("UserID", "==", userUid.uid).get();
            const userDetails = await firestore().collection("UserCollection").doc(userUid.uid).get();
            performanceData.forEach((item) => {
                resultedArray.push({ ...item.data(), id: item.id });
            })
            console.log(resultedArray)
            setPerformanceStateArray(resultedArray);
            setTotalActivities(resultedArray.length);
            setUserName(userDetails.data().Name)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <View style={{ backgroundColor: "white", width: windoWidth, height: windoHeight }}>
                <ScrollView style={[styles.MainView, { marginBottom: 70 }]}>
                    <View style={{ display: "flex", flexDirection: "row", height: windoHeight / 10, alignItems: "center" }}>
                        <View style={styles.NameView}>
                            <Text style={{ fontSize: 20, fontWeight: "800", marginLeft: 15, color: "black" }}>{userName}</Text>
                            <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 15, color: "black" }}>{userName}</Text>
                        </View>
                        <View style={styles.MainProfileInnerview}>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png" }} style={{ width: 35, height: 35, color: "white" }} />
                        </View>
                    </View>
                    <View style={styles.LottieAnimation}>
                        <View style={styles.LView}>
                            <Text style={{ fontSize: 80, color: "black", fontWeight: "800", justifyContent: "center", alignItems: "center", alignSelf: "center", marginTop: 30 }}>{totalActivities}</Text>
                            <Text style={{ fontSize: 15, color: "black", fontWeight: "500", justifyContent: "center", alignItems: "center", alignSelf: "center" }}>Activities done</Text>
                        </View>
                        <View style={[styles.LottieView, { alignItems: "center" }]}>
                            <Lottie
                                source={require('../../lottiesAnimations/45698-a-cool-boy-standing.json')} autoPlay loop style={{ height: 490, marginLeft: 10 }} />
                        </View>
                    </View>
                    <View>
                        <View style={styles.CircularOption}>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2722/2722991.png" }} style={{ width: 35, height: 35 }} />
                            <View style={{ borderWidth: 1, borderRadius: 30, padding: 10, backgroundColor: "black", marginHorizontal: 10 }}>
                                <Image source={{ uri: "data:image/png;base64,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" }} style={{ width: 35, height: 35, }} />
                            </View>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2989/2989988.png" }} style={{ width: 35, height: 35, }} />

                        </View>
                    </View>
                    <View>
                        {
                            performanceStateArray.length === 0 ? <Lottie
                                source={require('../../lottiesAnimations/124010-borboleta-rosa-carregando (1).json')} autoPlay loop style={{ height: 190, width: windoWidth, justifyContent: "center", alignItems: "center", }}
                            /> :

                                performanceStateArray.map((item, index) => (
                                    <TouchableOpacity style={styles.PerformanceMainView} key={index} onPress={() => navigation.navigate("InnerDashboard")}>
                                        <View style={[styles.PerformanceinnerMainView, { paddingLeft: 10, paddingTop: 10 }]}>
                                            <Text style={{ fontSize: 20, color: "black", fontWeight: "800", marginBottom: 5 }}>{item.activityName}</Text>
                                            <Text style={{ fontSize: 15, color: "black", fontWeight: "600", marginBottom: 5 }}>{item.courseName}</Text>
                                            <Text style={{ fontSize: 15, color: "black", fontWeight: "600", marginBottom: 5 }}>Points</Text>
                                        </View>
                                        <View style={styles.PerformanceImage}>
                                            <Text style={{ fontSize: 20, color: "black", fontWeight: "800", marginBottom: 5 }}>{item.status}</Text>
                                            {
                                                item.status === "Pending" ? null :
                                                    <TouchableOpacity style={styles.cardButton} >
                                                        <Text style={[styles.textStyles, { fontSize: 15, paddingHorizontal: 15, color: "#a000ff" }]}>More...</Text>
                                                    </TouchableOpacity>
                                            }
                                        </View>
                                    </TouchableOpacity>
                                ))
                        }
                    </View>
                </ScrollView>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    MainView: {
        width: windoWidth,
        height: windoHeight,
        backgroundColor: "white"
    },
    NameView: {
        width: windoWidth / 2
    },
    MainProfileInnerview: {
        width: windoWidth / 2.2,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    LottieAnimation: {
        height: windoHeight / 1.6,
        display: "flex",
        flexDirection: "row"
    },
    LView: {
        width: windoWidth / 3,
    },
    LottieView: {
        width: windoWidth / 1.55,
    },
    PerformanceMainView: {
        display: "flex",
        flexDirection: "row",
        width: windoWidth - 40,
        alignSelf: "center",
        marginVertical: 15,
        backgroundColor: "#D4FFCD",
        shadowColor: 'green',
        shadowOffset: {
            width: 50,
            height: -10,
        },
        shadowOpacity: 0.7,
        shadowRadius: 900,
        elevation: 10,
        borderRadius: 10,
        padding: 10
    },
    PerformanceinnerMainView: {
        width: windoWidth / 2
    },
    PerformanceImage: {
        width: windoWidth / 3.2,
        paddingVertical: 5,
        alignItems: "center",
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    CircularOption: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        marginVertical: 20,
        marginTop: 40,
        borderRadius: 30,
        paddingHorizontal: 20,
        backgroundColor: "white",
        borderWidth: 2,
        shadowColor: 'black',
        shadowOffset: {
            width: 50,
            height: -10,
        },
        shadowOpacity: 0.7,
        shadowRadius: 900,
        elevation: 10,
    },
    textStyles: {
        color: "white",
        fontWeight: "bold"
    },
    cardButton: {
        width: 100,
        height: 35,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        alignSelf: "flex-end",
    },
})
export default MainDashboard;