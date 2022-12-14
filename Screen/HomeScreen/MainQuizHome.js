import React, { useEffect, useState } from 'react';
import { View, Text, RefreshControl, StyleSheet, Dimensions, Image, TextInput, FlatList } from 'react-native';
const { width, height } = Dimensions.get('window');
import AnimatedQuizCard from '../../components/AnimatedCard';
import firestore from '@react-native-firebase/firestore';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const MainQuizHome = ({ navigation }) => {
    const [quizDetails, setQuizDetails] = useState([]);
    const [searchedArray, setSearchedArray] = useState([]);
    const [search, setSearch] = useState("");
    const [refreshing, setRefreshing] = React.useState(false);
    useEffect(() => {
        getQuizdetails();
    }, [])

    const getQuizdetails = async () => {
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

    const moveToQuestion = (questionArray) => {
        navigation.navigate("serviceQuiz", { quizArrayData: questionArray })
    }
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await getQuizdetails();
        setRefreshing(false);
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 30, color: "black", fontFamily:"SourceSansPro-Bold", paddingHorizontal: 30, marginVertical: 10, width: width }}>All Quizes</Text>
                <View style={styles.searchBox}>
                    <FontAwesome name="search" size={20} color={"grey"} />
                    <TextInput
                        style={{ fontFamily:"SourceSansPro-Bold", fontSize: 17, color: "black", marginLeft: 10, flex: 1 }}
                        placeholder={"Search"}
                        placeholderTextColor={"black"}
                        autoCapitalize={true}
                        onChangeText={(searchString) => searchData(searchString)}
                    />
                </View>
            </View>
            {
                quizDetails.length===0?
                <Text style={{color:"black",fontWeight:"bold",fontSize:20, fontFamily:"SourceSansPro-Bold"}}>No Activites yet</Text>:
                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    data={searchedArray.length > 0 ? searchedArray : quizDetails}
                    keyExtractor={i => i.id}
                    renderItem={(item) => (
                        <AnimatedQuizCard
                            dataProps={item}
                            getQuestionData={moveToQuestion}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                />
             }
            <View style={{ marginBottom: height / 9.5, backgroundColor: "white" }} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: "white"
    },
    header: {
        width: width,
        alignItems: "center",
        marginVertical: 15
    },
    searchBox: {
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 10,
        marginHorizontal: 20,
        width: width / 1.14,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        // justifyContent: 'center',
    }
})
export default MainQuizHome;