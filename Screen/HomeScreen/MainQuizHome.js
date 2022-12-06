import React,{useEffect, useState} from 'react';
import { View,Text,TouchableOpacity, StyleSheet, Dimensions,Image,TextInput, FlatList } from 'react-native';
const {width,height}=Dimensions.get('window');
import AnimatedQuizCard from '../../components/AnimatedCard';
import firestore from '@react-native-firebase/firestore';
const MainQuizHome=({navigation})=>{
    const [quizDetails,setQuizDetails]=useState([]);
    const [searchedArray,setSearchedArray]=useState([]);
    const [search, setSearch] = useState("");
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
        } catch (error) {
            console.log(error)
        }
    }

    const searchData = (searchItem) => {
        setSearch(searchItem);
        if (search != "") {
          const searchedOrders = quizDetails.filter((filteredOrders) => {
            return Object.values(filteredOrders)
              .join(" ")
              .toLowerCase()
              .includes(searchItem.toLowerCase());
            });
            setSearchedArray(searchedOrders);
        } else {
            setSearchedArray(quizDetails);
        }
      };

    const moveToQuestion=(questionArray)=>{
        navigation.navigate("serviceQuiz",{quizArrayData:questionArray.QuesArray,itemID:questionArray.id,numOfQues:questionArray.NOQues})
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize:30,color:"black",fontWeight:"bold",paddingHorizontal:30,marginVertical:10,width:width}}>All Quizes</Text>
                <View style={styles.searchBox}>
                    <TextInput
                        style={{ fontWeight: "bold", fontSize: 15, color: "black",marginLeft:15 }}
                        placeholder={"Search"}
                        placeholderTextColor={"black"}
                        autoCapitalize={true}
                        onChangeText={(searchString)=>searchData(searchString)}
                    />
                    <TouchableOpacity>
                        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/3128/3128287.png" }} style={{ width: 30, height: 30,marginRight:15 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={searchedArray.length > 0 ? searchedArray : quizDetails}
                keyExtractor={i=>i.id}
                renderItem={(item)=>(
                    <AnimatedQuizCard
                        dataProps={item}
                        getQuestionData={moveToQuestion}
                    />
                )}
                showsHorizontalScrollIndicator={false}
            />
            <View style={{marginBottom:height/9.5,backgroundColor:"white"}}/>
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
    header:{
        width:width,
        alignItems:"center"
    },
    searchBox:{ 
        borderWidth: 1, 
        borderColor: "orange", 
        borderRadius: 10,
        width: width-50, 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center",
        justifyContent:"space-between",
    }
})
export default MainQuizHome;