import React,{useEffect, useState} from 'react';
import { View,Text,TouchableOpacity, StyleSheet, Dimensions,Animated,Easing, FlatList } from 'react-native';
const {width,height}=Dimensions.get('window');
import AnimatedQuizCard from '../../components/AnimatedCard';
import firestore from '@react-native-firebase/firestore';
const MainQuizHome=({navigation})=>{
    const [quizDetails,setQuizDetails]=useState([]);
    useEffect(()=>{
        getQuizdetails();
    },[])
    const getQuizdetails=async()=>{
        let resultArray = [];
        try {
            const quizData = await firestore().collection('Quiz').get();
            quizData.forEach((item) => {
                resultArray.push({ id: item.id, ...item.data() });
            });
            setQuizDetails(resultArray);
            // console.log(resultArray);
        } catch (error) {
            console.log(error)
        }
    }
    const moveToQuestion=(questionArray)=>{
        // console.log(questionArray.QuesArray,questionArray.id)
        navigation.navigate("serviceQuiz",{quizArrayData:questionArray.QuesArray,itemID:questionArray.id})
    }
    return(
        <View style={styles.container}>
            <FlatList
                data={quizDetails}
                keyExtractor={i=>i.id}
                renderItem={(item)=>(
                    <AnimatedQuizCard
                        dataProps={item}
                        getQuestionData={moveToQuestion}
                    />
                )}
                showsHorizontalScrollIndicator={false}
            />
            <View style={{marginBottom:height/10,backgroundColor:"white"}}/>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        alignItems: 'center',
        flex:1,
        justifyContent: 'center',
        backgroundColor:"white"
    },
})
export default MainQuizHome;