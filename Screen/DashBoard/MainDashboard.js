import react, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Animated, Image, ImageBackground } from 'react-native';
const { width, height } = Dimensions.get('window');
const MainDashboard = () => {
    const barWidth = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.spring(barWidth, {
            toValue: width / 2,
            bounciness: 80,
            speed: 1,
            useNativeDriver: false
        }).start();
    }, [])
    const [quizdata, setDuizData] = useState([
        {
            id: 1,
            title: "Digital Quiz 1",
            quizDate: "2/5/2022",
            isSelect: false
        },
        {
            id: 2,
            title: "Digital Quiz 1",
            quizDate: "3/5/2022",
            isSelect: false
        },
        {
            id: 3,
            title: "Digital Quiz 1",
            quizDate: "4/5/2022",
            isSelect: false
        },
        {
            id: 4,
            title: "Digital Quiz 1",
            quizDate: "5/5/2022",
            isSelect: false
        },
        {
            id: 5,
            title: "Digital Quiz 1",
            quizDate: "6/5/2022",
            isSelect: false
        },
    ]);
    const seletedQuiz = (selectedItem) => {
        setDuizData((seletedQuiz) =>
            seletedQuiz.map((item) => {
                if (item.id === selectedItem.id) {
                    item.isSelect = true;
                }
                else {
                    item.isSelect = false;
                }
                return item;
            })
        );
        console.log(selectedItem)
    }
    return (
        <>
            <View style={styles.container}>
                <View style={{ width: width, marginVertical: 20 }}>
                    <View
                        style={styles.titleMainImage}
                    >
                        <Image
                            style={{ width: 40, height: 40, borderRadius: 20, resizeMode: "contain", marginLeft: 20 }}
                            source={{ uri: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png" }}
                        />
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, marginLeft: 10 }}>Hello, User</Text>
                    </View>
                    <TouchableOpacity style={{
                        width: width / 3,
                        height: 40,
                        backgroundColor: "transparent",
                        alignItems: "center",
                        marginLeft: 20,
                        borderRadius: 50,
                        borderWidth: 2,
                        borderColor: "#001FFF",
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 13,
                            color: "#001FFF"
                        }}>
                            History
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center', }}>
                    <View style={{ flexDirection: "row", alignItems: 'center', }}>
                        <Image
                            style={{ width: 35, height: 35, borderRadius: 20, resizeMode: "contain", marginLeft: 10 }}
                            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROezRXsfr37yCx5KPjg8vuEzjP9d_GiZRUHQ&usqp=CAU" }}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: "black", fontWeight: "bold", fontSize: 25 }}>25</Text>
                            <Text style={{ color: "black", fontWeight: "700", fontSize: 15 }}>Punch Points</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 15,
                            color: "red"
                        }}>
                            REWARDS
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {/* <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, paddingHorizontal: 10, marginTop: 20 }}>
                    Daily Progress
                </Text> */}
                    <View style={{ marginTop: 20, marginHorizontal: 10 }}>
                        <View style={styles.progressOuter}>
                            <Animated.View
                                style={[styles.progressInner, { width: barWidth }]}
                            />
                            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between", position: "absolute", width: '100%' }}>
                                {
                                    [0, 20, 40, 60, 80].map((items, index) => (
                                        <View key={index} style={{ alignItems: 'center', justifyContent: "center", top: 8, paddingHorizontal: 5 }}>
                                            <View style={{ width: 10, height: 10, backgroundColor: "#001FFF", borderRadius: 5, elevation: 20 }} />
                                        </View>
                                    ))
                                }
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                            {
                                [0, 20, 40, 60, 80].map((items, index) => (
                                    <View key={index} style={{ alignItems: 'center', marginTop: 5, paddingHorizontal: 5 }}>
                                        <Text style={{ color: "#5E71FF", fontWeight: "bold", fontSize: 15 }}>{items}</Text>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </View>
                <View style={{ height: width / 1.5, justifyContent: "center", alignSelf: 'center', }} >
                    <Text style={{ color: "black", fontWeight: "bold", fontSize: 20, width: width, paddingHorizontal: 30, marginTop: 20 }}>
                        Redeem your Punch Points
                    </Text>
                    <ScrollView style={styles.itemsContainer} showsHorizontalScrollIndicator={false} horizontal={true} zIndex={-5} decelerationRate={0}>
                        <View style={{ flexDirection: "row", padding: 10 }}>
                            {
                                quizdata.map((item, index) => (
                                    <TouchableOpacity key={index} style={[styles.previousQuizCard, item.isSelect ? { backgroundColor: "#001FFF" } : { backgroundColor: "white" }]} onPress={() => seletedQuiz(item)} >
                                        <Text style={{ color: item.isSelect ? "white" : "black", fontWeight: "bold", fontSize: 22, marginHorizontal: 5 }}>
                                            {item.title}
                                        </Text>
                                        <Text style={{ color: item.isSelect ? "white" : "#4A4A4A", fontWeight: "bold", fontSize: 15 }}>
                                            {item.quizDate}
                                        </Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
            <Image
                style={{ width: 110, height: 110, borderRadius: 20, position: "absolute", right: 20, top: 20 }}
                source={{ uri: "https://cdn-icons-png.flaticon.com/128/6009/6009688.png" }}
            />
            <Image
                style={{ width: 30, height: 30, borderRadius: 20, position: "absolute", right: 100, top: 10 }}
                source={{ uri: "https://cdn-icons-png.flaticon.com/128/686/686751.png" }}
            />
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "white",
    },
    titleMainImage: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: "center",
        width: '100%',
        height: 80,
        paddingVertical: 15,
        borderRadius: 10
    },
    previousQuizCard: {
        alignItems: "center",
        justifyContent: "center",
        height: width / 2.5,
        width: width / 3,
        borderRadius: 20,
        elevation: 10,
        shadowColor: 'blue',
        marginHorizontal: 10,
        padding: 5,
        borderWidth: 2,
        borderColor: 'rgba(198,194,250,0.40)'
    },
    itemsContainer: {
        marginTop: 10,
        marginHorizontal: 10,
    },
    progressOuter: {
        backgroundColor: "rgba(198,194,250,1)",
        height: 30,
        width: width - 30,
        elevation: 20,
        borderRadius: 8,
        borderColor: "#9CA6F3",
        borderWidth: 2
    },
    progressInner: {
        backgroundColor: "#93A0FF",
        height: '100%',
        borderRadius: 20,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        elevation: 15,
    },
    mainCardTitle: {
        color: "rgba(115,105,248,0.85)",
        width: '65%',
        backgroundColor: "rgba(198,194,250,0.72)",
        padding: 5,
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: "center",
        marginHorizontal: 10
    },
    btnContainer: {
        width: width / 3,
        height: 40,
        backgroundColor: "transparent",
        alignItems: "center",
        // paddingVertical:8,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "red",
        justifyContent: 'center',
    }
})
export default MainDashboard;