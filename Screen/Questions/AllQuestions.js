import React,{useEffect, useState} from 'react';
import {View,Text,StyleSheet,ScrollView,Dimensions,TextInput,TouchableOpacity,ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../components/AnimatedButton';
import CustomDropDown from '../../components/CustomDropDown';
import styles from './QuizStyles';
const QuestionsCards=({route})=>{
    const [loading, setLoading] = useState(false);
    const {noOfQues}=route.params;
//ques arrays
    const [quizQues,setQuizQues]=useState([]);
    const [optionsArray,setOptionArray]=useState(["","","",""]);
    useEffect(()=>{
        const questionsArray=[];
        for (let i = 0; i <noOfQues; i++) {
            questionsArray.push({
                correctAnswerIndex:-1,
                question:"",
                options:[
                    {_id:1,answer:"",option:"A"},
                    {_id:2,answer:"",option:"B"},
                    {_id:3,answer:"",option:"C"},
                    {_id:4,answer:"",option:"D"},
                ],
                correctOptionDropDowns:[
                    {label: 'A', value: 'A'},
                    {label: 'B', value: 'B'},
                    {label: 'C', value: 'C'},
                    {label: 'D', value: 'D'},
                ]
            })
        }
        setQuizQues(questionsArray);
    },[])

    const handleQuesChange=(ques,selectedIndex)=>{
        setQuizQues((question) =>
            question.map((val,index) => {
                if (index ===selectedIndex) {
                    val.question = ques
                }
                return val;
            })
        );
    }
    const handleOptions=(options_val,quesindex,optIndex)=>{
            setQuizQues((question) =>
                question.map((val,index) => {
                    if (index ===quesindex) {
                        for (let i = 0; i < val.options.length; i++) {
                            if(i===optIndex){
                                val.options[i].answer=options_val;
                                val.correctOptionDropDowns[i].label=options_val;
                            }
                        }
                    }
                    return val;
                })
            );
    }
    const handleCorrectOption=(item,quesindex)=>{
        setQuizQues((question) =>
            question.map((val,index) => {
                if (index === quesindex) {
                    for (let i = 0; i < val.options.length; i++) {
                        if(item.value===val.options[i].option){
                            val.correctAnswerIndex=i;
                        }
                    }
                }
                return val;
            })
        );
    }
    const uploadQuizData=()=>{
         if(loading){
            console.log("Please Wait for Adding New Questions");
            return ;
        }
        //form validations
        try {
            quizQues.forEach(item => {
                if(item.question==="")
                    throw "Please Enter All The Questions";
                if(item.correctAnswerIndex===-1)
                    throw "Please select correct options for question";
                item.options.forEach((optVal)=>{
                    if(optVal==="")
                        throw "Please Enter Options";
                })
            });
            let updatedQuizFormat=changeQuizArrayFormat();
            console.log(updatedQuizFormat);
        } catch (error) {
            alert(error)
        }
    }
    const changeQuizArrayFormat=()=>{
        let updatedQuizQuestionArray=[];
        quizQues.forEach((item)=>{
            updatedQuizQuestionArray.push({
                correctAnswerIndex:item.correctAnswerIndex,
                options:item.options,
                question:item.question
            });
        })
        return updatedQuizQuestionArray;
    }
    return(
        <ScrollView style={styles.Quescontainer} showsVerticalScrollIndicator={false}>
            <Text style={{padding:10,fontWeight:"bold",fontSize:20,color:"black",marginTop:30}}>Add Questions</Text>
            {
                quizQues.map((item,index)=>(
                    <LinearGradient 
                        key={index}
                        colors={['rgba(245,230,252,0.80)', 'rgba(246,229,254,0.80)','rgba(249,243,252,0.80)']} 
                        style={styles.infoContainer}>
                        <View style={{paddingHorizontal:20,alignSelf:"center",marginTop:10}}>
                            <Text style={{fontWeight:"bold",color:"black"}}>Question {index+1}</Text>
                            <TextInput
                                placeholder='Enter question'
                                placeholderTextColor={"black"}
                                style={styles.customInput}
                                onChangeText={(ques)=>handleQuesChange(ques,index)}
                            />
                            <View style={{paddingVertical:10}}>
                                <Text style={{fontWeight:"bold",color:"black"}}>Options</Text>
                                {
                                    optionsArray.map((opt,optIndex)=>(
                                        <TextInput
                                            placeholder={`Enter option ${optIndex+1}`}  
                                            placeholderTextColor={"black"}
                                            style={styles.customInput}
                                            onChangeText={(options_val)=>handleOptions(options_val,index,optIndex)}
                                        />
                                    ))
                                }
                            </View>
                            {/* <Text style={{fontWeight:"bold",color:"black"}}>Correct answer</Text>
                            <CustomDropDown
                                data={item.correctOptionDropDowns}
                                label="Select one"
                                labelStyle={styles.dropDownLabelStyle}
                                dropDownStyle={styles.dropDownContainerStyle}
                                itemStyle={styles.dropDownItemStyle}
                                onSelectValue={(item)=>handleCorrectOption(item,index)}
                            /> */}
                        </View>
                    </LinearGradient>
                ))
            }
            <View style={{marginBottom:30}}>
                {/* {
                    loading?
                    <ActivityIndicator size={30} color="blue" style={{margin:50}}/>:
                    <CustomButton
                        title="Post Questions"
                    />
                } */}
            </View>
        </ScrollView>
    )
}
export default QuestionsCards;