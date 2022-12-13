import React, { useContext, useEffect, useState, useRef } from 'react'
import { View, Text, TextInput, Image, Linking, Dimensions, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import styles from './QuestionsStyles';
const windoWidth = Dimensions.get('window').width;
import { GlobalVariable } from '../../App';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import CustomToast from '../../components/CustomToast';

const Service = ({ route, navigation }) => {
    const childRef = useRef(null);
    const [toastColorState, setToastColorState] = useState('rgba(41,250,25,1)');
    const [toastTextColorState, setToastTextColorState] = useState('black');
    const [toastMessage, setToastMessage] = useState('');

    const { quizArrayData } = route.params;
    const { userUid } = useContext(GlobalVariable);
    const [ques, setQues] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingClear, setloadingClear] = useState(false);

    useEffect(() => {
        setQues(quizArrayData.QuesArray)
    }, []);
    const setAnswerAsSelected = (quesIndex, optIndex, selectedQues) => {
        setQues((question) =>
            question.map((val, index) => {
                if (index === quesIndex) {
                    for (let i = 0; i < val.options.length; i++) {
                        if (i === optIndex) {
                            val.options[i].isSelected = true;
                            selectedQues.selectedOption = i
                        }
                        else {
                            val.options[i].isSelected = false;
                        }
                    }
                }
                return val;
            })
        );
    }
    const setAnswerFromuser = (quesIndex,value) => {
        setQues((question) =>
            question.map((val, index) => {
                if (index === quesIndex) {
                    val.userAnswer=value
                }
                return val;
            })
        );
    }
    const convertData = (quizData) => {
        const newArray = [];
        quizData.forEach((item) => {
            item.options.forEach((value) => {
                newArray.push({ _id: value._id, answer: value.answer, option: value.option })
            })
        })
        return quizData
    }
    const setUserQuizDataPerformance = async () => {
        if (loading || loadingClear)
            return;
        try {
            const newUpdatedQuesArray = convertData(ques);
            setLoading(true)
            firestore()
                .collection("UserPerformance")
                .add({
                    AdminFeedback: "",
                    ReviewerName: "",
                    UserID: userUid.uid,
                    quizID: quizArrayData.id,
                    status: "Pending",
                    QuesArray: newUpdatedQuesArray,
                    quizDate: new Date(),
                    activityName: quizArrayData.ActivityName,
                    courseName: quizArrayData.courseName,
                    StarArray: []
                })
                .then(() => {
                    setToastMessage("Your Activity is Submitted");
                    setToastTextColorState("black")
                    setToastColorState("rgba(41,250,25,1)")
                    childRef.current.showToast();
                    setLoading(false)
                    setTimeout(() => {
                        clearAll();
                        navigation.navigate("MainQuiz")
                    }, 1500);
                })
                .catch((error) => {
                    setToastMessage(error);
                    setToastTextColorState("white")
                    setToastColorState("#00C767")
                    childRef.current.showToast();
                    setLoading(false)
                });
        } catch (error) {
            setToastMessage(error);
            setToastTextColorState("white")
            setToastColorState("red")
            childRef.current.showToast();
            setLoading(false)
        }
    }

    
    const clearAll = () => {
        setloadingClear(true)
        setQues((question) =>
            question.map((val, index) => {
                for (let i = 0; i < val.options.length; i++) {
                    val.options[i].isSelected = false;
                    val.selectedOption = ""
                }
                return val;
            })
        );
        setloadingClear(false)
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', }}>
            <CustomToast
                toastColor={toastColorState}
                toastTextColor={toastTextColorState}
                toastMessage={toastMessage}
                ref={childRef}
            />
            <ScrollView style={styles.MainView}>
                <View style={styles.CourseImageView}>
                    <View style={styles.Course}>
                        <Image source={{ uri: "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/06/05174400/Types-of-Digital-Marketing.png" }} style={styles.CourseImage} />
                    </View>
                    <Text style={styles.CourseNameText}>Digital Marketing</Text>
                </View>
                <View style={[styles.MiddleView]}>
                    <TouchableOpacity style={[styles.btnCourse, { borderTopRightRadius: 0, borderBottomRightRadius: 0, backgroundColor: "#7439FF", borderRightWidth: 0, borderColor: "rgba(120,105,248,0.85)", borderWidth: 2 }]}>
                        <Text style={[styles.TextCourse, { color: "white" }]}>Questions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnCourse, { borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderColor: "rgba(115,105,248,0.85)", borderWidth: 2, backgroundColor: "white" }]} onPress={() => navigation.navigate("Feedback")}>
                        <Text style={[styles.TextCourse]}>Feedback</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <View style={styles.Quiztitle}>
                        <Text style={styles.quiCardTitle}>Hello there, Quiz Time</Text>
                        <Text style={styles.quizCardSubText}>Digital Maketing Quiz</Text>
                        <Text style={styles.quizCardMiniText}>
                            Boost your performance by giving Quizes
                        </Text>
                    </View>
                    <View style={styles.Quiztitle}>
                        <View style={[styles.quiCardTitle, { flexDirection: 'row', alignItems: "center", justifyContent: 'space-evenly', }]}>
                            <Text style={{ fontFamily: "SourceSansPro-Bold", fontSize: 20, color: "rgba(115,105,248,0.85)" }}>Questions</Text>
                            <Text style={{ color: "white", fontFamily: "SourceSansPro-Bold", fontSize: 20, backgroundColor: "rgba(115,105,248,0.85)", padding: 5, borderRadius: 5, paddingHorizontal: 10 }}>
                                {quizArrayData.NOQues}
                            </Text>
                        </View>
                        {
                            ques.map((items, quesIndex) => (
                                <View key={quesIndex} style={styles.quesCard}>
                                    <Text style={{ fontFamily: "SourceSansPro-Bold", color: "black", fontSize: 22, width: '95%', paddingVertical: 10 }}>
                                        Q{quesIndex + 1}. {items.question}
                                    </Text>
                                    {
                                        items.options.map((value, index) => (
                                            <TouchableOpacity key={index} style={[{ width: '95%', padding: 2 }, value.isSelected ? styles.selctedOptionLabel : null]}
                                                onPress={() => setAnswerAsSelected(quesIndex, index, items)}
                                            >
                                                <Text style={{ fontFamily: "SourceSansPro-Bold", color: value.isSelected ? '#6f2ff7' : "#2e2e2f", fontSize: 18 }}>
                                                    {index + 1}. {value.answer}
                                                </Text>
                                            </TouchableOpacity>
                                        ))
                                    }
                                    <TextInput
                                        style={{ 
                                            flex: 1, 
                                            fontWeight: "bold", 
                                            fontSize: 15, 
                                            color: "black", 
                                            paddingLeft: 10,
                                            fontFamily:"SourceSansPro-Bold",
                                            backgroundColor:"white",
                                            width:'100%',
                                            height:50,
                                            borderRadius:5,
                                            paddingHorizontal:10,
                                            margin:10
                                        }}
                                        placeholder="Enter Answer"
                                        placeholderTextColor={"grey"}
                                        onChangeText={value => setAnswerFromuser(quesIndex,value,items)}
                                    />
                                    {
                                        items.youTubevideoLink === "" ? null :
                                            <View style={{flexDirection:'row',alignItems:"center",margin:10,alignSelf:"flex-end"}}>
                                                <Text style={{ fontFamily: "SourceSansPro-Bold", color: "#2e2e2f", fontSize: 18,marginRight:10 }}>YouTube Link</Text>
                                                <TouchableOpacity style={styles.youtueIconsLink}
                                                    onPress={() => Linking.openURL(items.youTubevideoLink)}
                                                >
                                                    <FontAwesome name="link" size={20} color={"white"} />
                                                </TouchableOpacity>
                                            </View>
                                    }
                                </View>
                            ))
                        }
                    </View>
                    <View style={{
                        width: windoWidth - 30,
                        alignSelf: "center",
                        flexDirection: "row",
                        paddingVertical: 10,
                        marginBottom: 15,
                        justifyContent: "space-around"
                    }}>
                        <TouchableOpacity style={[styles.btnBody, { backgroundColor: "white" }]}
                            onPress={clearAll}
                        >
                            {
                                loadingClear ?
                                    <ActivityIndicator size={25} color="white" /> :
                                    <Text style={{ color: "#6f2ff7", fontFamily: "SourceSansPro-Bold", fontSize: 18 }}>Clear</Text>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btnBody, { backgroundColor: "#6f2ff7" }]} onPress={setUserQuizDataPerformance}>
                            {
                                loading ?
                                    <ActivityIndicator size={25} color="white" /> :
                                    <Text style={{ color: "white", fontFamily: "SourceSansPro-Bold", fontSize: 18 }} onPress={setUserQuizDataPerformance}>Submit</Text>
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Service