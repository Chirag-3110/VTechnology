import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, ScrollView, ActivityIndicator, TextInput } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
// const image = { uri: "https://i.pinimg.com/originals/34/7b/05/347b05f70e3ec739230bb470bdda89d7.jpg" };
const image = { uri: "https://img.freepik.com/free-photo/yellow-watercolor-paper_95678-446.jpg" };
function BoardScreen({ navigation }) {
    const buttonAnimation = () => {
        navigation.navigate('login')
    }
    return (
        <View style={styles.MainView}>
            {/* <View style={styles.MainTopview} > */}
            <ImageBackground source={image} style={styles.MainTopview} >
                <View style={{ justifyContent: "center", alignItems: "center", height: windoHeight / 2, paddingTop: windoHeight / 5, zIndex: 5 }}>
                    <Image source={require('../../assests/Boarding.png')} style={{ width: windoWidth / 1.5, height: windoHeight / 3, transform: [{ rotate: '-20deg' }] }}></Image>
                </View>
                <View style={styles.BtmView}>
                    <View style={styles.MainBtmView}>
                        <Text style={{ fontSize: 30, fontWeight: "800", color: "black", textAlign: "center" }}>Manage your Studies and Career</Text>
                    </View>
                    <View style={[styles.MainBtmView, { marginHorizontal: 37, marginTop: 20 }]}>
                        <Text style={{ textAlign: "center" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa </Text>

                    </View>
                    <TouchableOpacity style={styles.BtnView} onPress={() => buttonAnimation()}>
                        <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>Start</Text>
                    </TouchableOpacity>
                </View>
                <Image source={{ uri: "https://cdn3d.iconscout.com/3d/premium/thumb/pencil-2872337-2389551.png" }} style={{ width: windoWidth / 2.5, height: windoHeight / 5, position: "absolute", right: -50, transform: [{ rotate: '70deg' }] }}></Image>
            </ImageBackground>
            {/* </View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    MainView: {
        width: windoWidth,
        height: windoHeight,
        backgroundColor: "yellow"
    },
    MainTopview: {
        backgroundColor: "rgba(115,105,248,0.85)",
        backgroundColor: "#FDB65B",
        alignSelf: "center",
        width: windoWidth,
        height: windoHeight
    },
    BtmView: {
        // borderWidth: 1,
        height: windoHeight / 1.9999,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: "absolute",
        bottom: 0,
        width: windoWidth,
        zIndex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    MainBtmView: {
        justifyContent: "center",
        // borderWidth: 1,
        marginHorizontal: 45,
        marginTop: 40
    },
    BtnView: {
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#BA5CFC",
        width: 230,
        alignItems: "center",
        marginVertical: 30,
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 60,
        alignItems: "center",
        textAlign: "center",
        shadowColor: 'purple',
        shadowOffset: {
            width: 10,
            height: -16,
        },
        shadowOpacity: 0.88,
        shadowRadius: 700,
        elevation: 10,
    }
})
export default BoardScreen