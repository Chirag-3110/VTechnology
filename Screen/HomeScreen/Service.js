import React,{useEffect, useState}  from 'react'
import { View, Text, TextInput, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import styles from './QuestionsStyles';
import dummyQuestion from '../../Data/DummyQuestionsData';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const Service=()=>{
    const [ques,setQues]=useState([]);
    const setAnswerAsSelected=(quesIndex,optIndex)=>{
        setQues((question) =>
            question.map((val,index) => {
                if (index ===quesIndex) {
                    for (let i = 0; i < val.options.length; i++) {
                        if(i===optIndex){
                            val.options[i].isSelected=true;
                        }
                        else{
                            val.options[i].isSelected=false;
                        }
                    }
                }
                return val;
            })
        );
    }
    useEffect(()=>{
        setQues(dummyQuestion)
    },[])
    return (
        <ScrollView style={styles.MainView}>
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
                <TouchableOpacity style={[styles.btnCourse, { borderTopRightRadius: 0, borderBottomRightRadius: 0, backgroundColor: "#7439FF", borderRightWidth: 0, borderColor: "rgba(120,105,248,0.85)", borderWidth: 2 }]}>
                    <Text style={[styles.TextCourse, { color: "white" }]}>Questions</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnCourse, { borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderColor: "rgba(115,105,248,0.85)", borderWidth: 2, backgroundColor: "white" }]}>
                    <Text style={[styles.TextCourse]}>Feedback</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={{ width: windoWidth ,padding:10,flexDirection:"row",justifyContent:"space-between",alignItems: 'center',alignSelf:"center"}}>
                    <Image source={{ uri: "https://cdn3d.iconscout.com/3d/premium/thumb/male-character-sitting-on-chair-and-reading-a-book-4634471-3855676.png" }} style={styles.MainImg} />
                    <Text style={{color:"white",fontWeight:"bold",fontSize:60,width:170,}}>Quiz Time</Text>
                </View>
                <View style={styles.Quiztitle}>
                    <Text style={styles.quiCardTitle}>Hello there, Quiz Time</Text>
                    <Text style={styles.quizCardSubText}>Digital Maketing Quiz</Text>
                    <Text style={styles.quizCardMiniText}>
                        Boost your performance by giving Quizes
                    </Text>
                </View>
                <View style={styles.Quiztitle}>
                    <View style={[styles.quiCardTitle,{flexDirection: 'row',alignItems:"center",justifyContent: 'space-evenly',}]}>
                        <Text style={{fontWeight:"bold",fontSize:20,color:"rgba(115,105,248,0.85)"}}>Questions</Text>
                        <Text style={{color:"white",fontWeight:"bold",fontSize:20,backgroundColor:"rgba(115,105,248,0.85)",padding:5,borderRadius:5,paddingHorizontal:10}}>5</Text>
                    </View>
                    {
                        ques.map((items,quesIndex)=>(
                            <View key={quesIndex} style={styles.quesCard}>
                                <Text style={{fontWeight:"bold",color:"black",fontSize:22,width:'95%',paddingVertical:10}}>
                                    Q{quesIndex+1}. {items.quesion}
                                </Text>
                                {
                                    items.options.map((value,index)=>(
                                        <TouchableOpacity key={index}  style={[{width:'95%',padding:2},value.isSelected?styles.selctedOptionLabel:null]}
                                            onPress={()=>setAnswerAsSelected(quesIndex,index)}
                                        >
                                            <Text style={{fontWeight:"bold",color:value.isSelected?'#6f2ff7':"#2e2e2f",fontSize:20}}>
                                                {index+1}. {value.optionValue}
                                            </Text>
                                        </TouchableOpacity>
                                    ))
                                }
                                <TextInput
                                    placeholder='Enter Yor Answer'
                                    placeholderTextColor={"black"}
                                    style={styles.inputField}
                                />
                            </View>
                        ))
                    }
                </View>
                <View style={{
                    width:windoWidth-30,
                    alignSelf:"center",
                    flexDirection:"row",
                    paddingVertical:10,
                    marginBottom:10,
                    justifyContent:"space-around"
                }}>
                    <TouchableOpacity style={[styles.btnBody,{backgroundColor:"white"}]}>
                        <Text style={{color:"#6f2ff7",fontWeight:"bold",fontSize:18}}>Clear</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btnBody,{backgroundColor:"#6f2ff7"}]}>
                        <Text style={{color:"white",fontWeight:"bold",fontSize:18}}>Check</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Service