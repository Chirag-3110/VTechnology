
import React from 'react';

import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const ReviewQuestions = () => {

    return (
        <View style={styles.MainView}>
            <View style={styles.ReviewView}>
                <Text style={styles.ReViewText}>Review Question</Text>
            </View>
            <View style={styles.SummaryView}>
                <View style={styles.QuizName}>
                    <Text style={styles.QuizNameText}>Quiz Name : assegment 1</Text>
                </View>
            </View>
            <View>
                <View style={styles.YAnswerView}>
                    <Text style={styles.YAnswerViewText}>Your Answer</Text>
                </View>
                <View style={styles.AnswerReview} >
                    <View style={styles.AnswerView}>
                        <View style={styles.TextNumber1}><Text style={styles.innerText}>1</Text></View>
                        <View style={styles.TextNumber2}><Text>orem ipsum dolor sit amet, consnem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</Text></View>
                        <View style={styles.TextNumber3}>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/189/189664.png" }} style={styles.ProImg} />
                        </View>
                    </View>
                </View>
                <View style={styles.AnswerReview}>
                    <View style={styles.AnswerView}>
                        <View style={styles.TextNumber1}><Text style={styles.innerText}>2</Text></View>
                        <View style={styles.TextNumber2}><Text>orem ipsum dolor sit amet, consnem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</Text></View>
                        <View style={styles.TextNumber3}>
                            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/189/189664.png" }} style={styles.ProImg} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
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
        height: windoHeight / 4.5,
        borderWidth: 1,
        backgroundColor: "#606DE2",
        borderRadius: 20,
        marginHorizontal: 15
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
        borderWidth: 1,
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
        backgroundColor: "#B6BDF9",
        marginHorizontal: 20,
        borderRadius: 15
    },
    TextNumber1: {
        width: windoWidth / 10,
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
    AnswerReview: {
        marginVertical: 10
    }
})
export default ReviewQuestions;