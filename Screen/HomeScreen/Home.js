import React from 'react'
import { View, Text, FlatList, Image, StyleSheet,Dimensions } from 'react-native'
import CustomSlider from '../../components/CustomSlider'
import DATA from "../../Data/CourseSuggestion"
const windoWidth=Dimensions.get('window').width
const Home = () => {
    const images = [
        'https://miro.medium.com/max/762/1*L5QyrMNalM3yhtgdgBcvkQ.png',
        'https://miro.medium.com/max/762/1*L5QyrMNalM3yhtgdgBcvkQ.png',
        'https://miro.medium.com/max/762/1*L5QyrMNalM3yhtgdgBcvkQ.png',
        'https://miro.medium.com/max/762/1*L5QyrMNalM3yhtgdgBcvkQ.png',
    ];
    const renderItem = ({ item }) => (
        <View style={styles.ListView}>
            <View style={{
                shadowColor: "#FF00E1",
                shadowOffset: {
                    width: 10,
                    height: -5,
                },
                shadowOpacity: 0.58,
                shadowRadius: 500,
                elevation:25,
                margin:10,
                borderRadius:10
            }}>
                <Image
                    style={styles.ImgLogo}
                    source={{
                        uri: item.ImgUrl
                    }} 
                />
            </View>
            <View style={styles.TitleView}>
                <Text style={styles.TitleViewText}>{item.title}</Text>
            </View>
        </View>
    );
    return (
       <>
            <View style={{flex:1,backgroundColor:"white",}}>
                <View style={styles.titleTopView}>
                    <View>
                        <Text style={styles.titleTopText}>Hi Chirag !</Text>
                        <Text style={styles.titleTopSubText}>Welcome back</Text>
                    </View>
                    <Image
                        source={require('../../assests/search.png')}
                        style={styles.iconImage}
                    />
                </View>
                <CustomSlider
                    images={images}
                />
                <View style={{ flex: 1 }}>
                <View style={styles.OptionView}>
                    <Text style={styles.OptionViewText}>Made for you</Text>
                </View>
                <View style={styles.FlatListView}>

                    <FlatList
                        horizontal={true}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                </View>
            </View>
       </>
    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    ImgLogo: {
        width: 110,
        height: 120,
        borderRadius: 11,
    },
    ListView: {
        marginHorizontal: 15,
        width:windoWidth/3,
        alignItems:"center",
    },
    FlatListView: {
        marginHorizontal: 5,
    },
    TitleView: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10
    },
    TitleViewText: {
        fontSize: 13,
        fontWeight: "600",
        color: "black"
    },
    OptionView: {
        marginVertical: 20,
        marginTop: 50,
        marginHorizontal: 20
    },
    OptionViewText: {
        fontSize: 18,
        color: "#373637",
        fontWeight: "700",
        alignSelf:"flex-start",
        marginTop:10,
        borderRadius:8,
        paddingHorizontal:30,
        paddingVertical:10
    },
    titleTopText:{
        fontWeight:"bold",
        color:'black',
        fontSize:30
    },
    titleTopSubText:{
        fontWeight:"bold",
        color:'#4C4C4C',
        fontSize:15,
    },
    titleTopView:{
        paddingHorizontal:30,
        paddingVertical:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:'95%',
        alignSelf:"center",
        marginTop:10,
        borderRadius:10
    },
    iconImage:{
        width:30,
        height:30
    },
});
export default Home 