import React from 'react'
import { View, Text, FlatList, Image, StyleSheet, } from 'react-native'
import DATA from "../../Data/CourseSuggestion"
const Home = () => {
    const renderItem = ({ item }) => (
        <View style={styles.ListView}>
            <View>

                <Image
                    style={styles.ImgLogo}
                    source={{
                        uri: item.ImgUrl
                    }} />
            </View>
            <View style={styles.TitleView}>

                <Text style={styles.TitleViewText}>{item.title}</Text>
            </View>
        </View>
    );
    return (
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
                />
            </View>
        </View>
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
        height: 110,
        borderRadius: 11
    },
    ListView: {
        marginHorizontal: 15
    },
    FlatListView: {
        marginHorizontal: 5
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
        fontSize: 21,
        color: "black",
        fontWeight: "700"
    }
});
export default Home 