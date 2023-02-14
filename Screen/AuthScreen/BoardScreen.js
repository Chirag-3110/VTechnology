import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, ScrollView, ActivityIndicator, TextInput } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const image = { uri: "https://img.freepik.com/free-photo/yellow-watercolor-paper_95678-446.jpg" };
function BoardScreen({ navigation }) {
    const buttonAnimation = () => {
        navigation.navigate('login')
    }
    return (
        // <View style={styles.MainView}>
            <ImageBackground source={image} style={styles.MainTopview} >
                <View style={{ justifyContent: "center", alignItems: "center", height: windoHeight / 2, zIndex: 5,marginTop:windoHeight/10 }}>
                    <Image 
                        source={{uri:"https://cdn3d.iconscout.com/3d/premium/thumb/paper-and-pencil-4329862-3599673.png"}} 
                        style={{ width: windoWidth / 1.5, height: windoHeight / 3, 
                        transform: [{ rotate: '-20deg' }] }}
                    />
                </View>
                <View style={styles.BtmView}>
                    <View>
                        <View style={styles.MainBtmView}>
                            <Text style={{ fontSize: 30, fontFamily: "SourceSansPro-Bold", color: "black", textAlign: "center" }}>Built For Students By Students</Text>
                        </View>
                        <View style={[styles.MainBtmView, { marginHorizontal: 37, marginTop: 20 }]}>
                            <Text style={{ textAlign: "center",color:'black',fontFamily:"SourceSansPro-Bold" }}>Execute, work and gain real job experience at the convenience of WeArcade </Text>

                        </View>
                    </View>
                    <TouchableOpacity style={styles.BtnView} onPress={() => buttonAnimation()}>
                        <Text style={{ color: "white", fontSize: 20, fontFamily: "SourceSansPro-Bold", }}>Start</Text>
                    </TouchableOpacity>
                </View>
                <Image source={{ uri: "https://cdn3d.iconscout.com/3d/premium/thumb/pencil-2872337-2389551.png" }} style={{ width: windoWidth / 2.5, height: windoHeight / 5, position: "absolute", right: -50, transform: [{ rotate: '70deg' }] }}></Image>
            </ImageBackground>
        // </View>
    )
}
const styles = StyleSheet.create({
    MainView: {
        width: windoWidth,
        height: windoHeight,
        backgroundColor: "yellow"
    },
    MainTopview: {
        alignSelf: "center",
        justifyContent:"space-between",
        width: windoWidth,
        height: windoHeight
    },
    BtmView: {
        height: windoHeight / 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        position: "absolute",
        bottom: 0,
        width: windoWidth,
        zIndex: 1,
        alignItems: "center",
        justifyContent: "space-around"
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
        width: windoWidth/2,
        height:50,
        alignItems: "center",
        borderRadius: 15,
        // marginTop: 60,
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