import React, { useEffect, useRef, useState } from 'react'
import Svg, { Circle } from 'react-native-svg'
import { View, Text, Animated, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, ProgressBarAndroid } from 'react-native';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import { ProgressBar, MD3Colors } from 'react-native-paper';
const ReviewQuestions = () => {
    const progressAnimation = new Animated.Value(0)
    const progressRef = useRef(null);
    const animation = (toValue) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 2000,
            useNativeDriver: true
        }).start();
    }
    const Size = 90;
    const strokeWidth = 10;
    const center = Size / 2;
    const radius = Size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    const percentageValue = 56;
    const [percentage, setPercentange] = useState(percentageValue);
    useEffect(() => {
        animation(percentage)
    }, [percentage]);
    useEffect(() => {
        progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - (circumference * value.value) / 100;
            if (progressRef?.current) {
                progressRef.current.setNativeProps({
                    strokeDashoffset
                })
            }
        }, [percentage])
        return () => {
            progressAnimation.removeAllListeners();
        }
    }, [percentage])
    return (
        <ScrollView style={styles.MainView}>
            <View style={styles.ReviewView}>
                <Text style={styles.ReViewText}>Review Question</Text>
            </View>
            <View style={styles.SummaryView}>
                <View style={styles.QuizName}>
                    <Text style={styles.QuizNameText}>Quiz Name : assegment 1</Text>
                </View>
                <View style={[styles.circularBar, { marginHorizontal: 20, backgroundColor: "#FB9478" }]}>
                    {/* <ProgressBar progress={0.5} color="red" style={{ height: 2 }} /> */}
                    <View style={{ justifyContent: "center", alignItems: "center", width: windoWidth / 2.6 }}>
                        <Svg width={Size} height={Size}>
                            <Circle stroke="rgba(85,149,250,0.62)" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
                            <Circle ref={progressRef} stroke="white"
                                cx={center} cy={center} r={radius} strokeWidth={strokeWidth}
                                strokeDasharray={circumference}
                                strokeLinecap="round"
                            />
                        </Svg>
                        <View style={styles.button}>
                            <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>8/10</Text>
                        </View>
                    </View>
                    <View style={{ display: "flex", width: windoWidth / 2.5, justifyContent: "center", alignItems: "center" }}><Text style={{ fontSize: 14, color: "white", fontWeight: "800" }}>You have completed 50%</Text></View>
                </View>
            </View>
            <View>
                <View style={styles.YAnswerView}>
                    <Text style={styles.YAnswerViewText}>Your Answer</Text>
                </View>
                <View style={styles.AnswerReview1} >
                    <View style={styles.AnswerView}>
                        <View style={styles.TextNumber1}>
                            <View style={{ justifyContent: "center", borderRadius: 40, height: 35, backgroundColor: "white", alignItems: "center" }}>
                                <Text style={styles.innerText}>1</Text>
                            </View>
                        </View>
                        <View style={styles.TextNumber2}><Text>orem ipsum dolor sit amet, consnem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</Text></View>
                        <View style={styles.TextNumber3}>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/189/189664.png" }} style={styles.ProImg} />
                        </View>
                    </View>

                    <View style={styles.AnswerView}>
                        <View style={styles.TextNumber1}>
                            <View style={{ justifyContent: "center", borderRadius: 40, height: 35, backgroundColor: "white", alignItems: "center" }}>
                                <Text style={styles.innerText}>2</Text>
                            </View>
                        </View>
                        <View style={styles.TextNumber2}><Text>orem ipsum dolor sit amet, consnem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</Text></View>
                        <View style={styles.TextNumber3}>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/189/189664.png" }} style={styles.ProImg} />
                        </View>
                    </View>
                    <View style={styles.AnswerView}>
                        <View style={styles.TextNumber1}>
                            <View style={{ justifyContent: "center", borderRadius: 40, height: 34, backgroundColor: "white", alignItems: "center" }}>
                                <Text style={styles.innerText}>3</Text>
                            </View>
                        </View>
                        <View style={styles.TextNumber2}><Text>orem ipsum dolor sit amet, consnem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</Text></View>
                        <View style={styles.TextNumber3}>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/189/189664.png" }} style={styles.ProImg} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.Btns}>
                <TouchableOpacity style={styles.BtnsView}><Text style={styles.BtnsViewText}>Submit</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.BtnsView, { backgroundColor: "white", borderColor: "#606DE2", borderWidth: 1 }]}><Text style={[styles.BtnsViewText, { color: "#606DE2" }]}>Cancel</Text></TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    MainView: {
        width: windoWidth,
        height: windoHeight
    },
    ReviewView: {
        // borderWidth: 1,
        height: windoHeight / 9,
        justifyContent: "center",
    },
    ReViewText: {
        fontSize: 20,
        color: "black",
        textAlign: "center",
        fontWeight: "700",
    },
    SummaryView: {
        height: windoHeight / 3.5,
        // borderWidth: 1,
        backgroundColor: "#606DE2",
        borderRadius: 20,
        marginHorizontal: 15,
        shadowColor: '#051FFA',
        shadowOffset: {
            width: 60,
            height: -25,
        },
        shadowOpacity: 1,
        shadowRadius: 1000,
        elevation: 25,
    },
    QuizName: {
        height: windoHeight / 10,
        // borderWidth: 1,
        justifyContent: "center",
        marginHorizontal: 10
    },
    QuizNameText: {
        fontSize: 18,
        color: "white",
        fontWeight: "800"
    },
    YAnswerView: {
        // borderWidth: 1,
        // height: 40S
    },
    YAnswerViewText: {
        fontSize: 20,
        color: "black",
        marginHorizontal: 30,
        fontWeight: "800",
        marginVertical: 30
    },
    ProImg: {
        width: 30,
        height: 30
    },
    AnswerView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        // backgroundColor: "#B6BDF9",
        marginHorizontal: 20,
        marginVertical: 8
        // borderRadius: 15
    },
    TextNumber1: {
        width: windoWidth / 10,
        marginRight: 10

        // borderWidth: 1
    },
    TextNumber2: {
        width: windoWidth / 1.6,
        // borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 4
    },
    innerText: {
        fontSize: 20,
        fontWeight: "800",
        color: "black"
    },
    AnswerReview1: {
        backgroundColor: "#E6DDFD",
        marginHorizontal: 20,
        borderRadius: 20,
        marginBottom: 40,

    },
    Btns: {
        marginBottom: 80,
        display: "flex",
        flexDirection: "row",
    },
    BtnsView: {
        backgroundColor: "#606DE2",
        width: windoWidth / 2.4,
        marginHorizontal: 15,
        marginBottom: 80,
        borderRadius: 8,
        paddingVertical: 4,
        marginRight: 10
    },
    BtnsViewText: {
        color: 'white',
        fontSize: 23,
        textAlign: "center"
    },
    button: {
        position: "absolute",
        backgroundColor: "transparent",
        borderRadius: 100,
        padding: 40,
    },
    circularBar: {
        // borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        // justifyContent: "flex-end",
        // alignItems: "flex-start",
        backgroundColor: "yellow ",
        // backgroundColor: "red",
        borderRadius: 30,
        paddingHorizontal: 10,
        borderTopLeftRadius: 30,
        paddingVertical: 26,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    }


})
export default ReviewQuestions;