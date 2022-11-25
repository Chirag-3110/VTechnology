import React,{useEffect, useState} from 'react';
import {View,Text,StyleSheet,ScrollView,Dimensions,Image,TouchableOpacity,ActivityIndicator} from 'react-native';
import dummyQuestion from '../../Data/DummyQuestionsData';
const windoWidth=Dimensions.get('window').width;
const QuestionsCards=()=>{
   
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
    return(
       <ScrollView style={styles.container}>
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
       </ScrollView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"rgba(115,105,248,0.85)"
    },
    MainImg: {
        width: 150,
        height: 200,
    },
    Quiztitle:{
        width:windoWidth-30,
        padding:15,
        borderRadius:10,
        backgroundColor:"white",
        alignSelf:"center",
        elevation:50,
        shadowColor:"#1000ff",
        marginBottom:20,
        shadowOffset:{
            width:0,
            height:-20
        }
    },
    quiCardTitle:{
        color:"rgba(115,105,248,0.85)",
        fontWeight:"bold",
        fontSize:16,
        width:'70%',
        backgroundColor:"rgba(198,194,250,0.40)",
        textAlign:"center",
        padding:10,
        borderRadius:10,
        marginVertical:5,
    },
    quizCardSubText:{
        color:"#2e2e2f",
        fontWeight:"bold",
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:5,
    },
    quizCardMiniText:{
        color:"#7f7f7f",
        fontWeight:"800",
        fontSize:15,
        paddingHorizontal:10,
        paddingVertical:5,
        width:'90%'
    },
    quesCard:{
        backgroundColor:"red",
        padding:10,
        backgroundColor:"rgba(198,194,250,0.40)",
        borderRadius:10,
        alignItems: 'center',
        marginVertical:10,
        paddingVertical:20
    },
    btnBody:{
        width:'40%',
        height:40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        elevation:20
    },
    selctedOptionLabel:{
        color:"rgba(115,105,248,0.85)",
        backgroundColor:"rgba(198,194,250,0.80)",
        paddingVertical:6,
        borderRadius:3,
    }
})
export default QuestionsCards;