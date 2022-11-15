import React, { useState } from "react";
import {
    View,
    Image,
    Dimensions,
    StyleSheet,
    ScrollView
} from 'react-native';
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const CustomSlider=(props)=>{
    const [active,setActive]=useState(0);
    return(
        <View style={styles.continer}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={(e) => {
                    // console.log(e.nativeEvent.contentOffset.x/windowWidth)
                    let value=Math.ceil(e.nativeEvent.contentOffset.x/windowWidth)
                    if(value!==active){
                        setActive(value);
                    }
                }}
            >
                {
                    props.images.map((image,index)=>(
                        <Image
                            key={index}
                            source={{uri:image}}
                            style={styles.imageStyle}
                        />
                    ))
                }
            </ScrollView>
            <View
                style={{
                    flexDirection:"row",
                    alignSelf:"center",
                    position:"absolute",
                    bottom:8,
                    alignItems:"center"
                }}
            >
                {
                    props.images.map((i,k)=>(
                        <View style={k===active?styles.seletedImage:styles.notSeletedImage} />
                    ))
                }
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    continer:{
        backgroundColor:"white",
        width:windowWidth-70,
        height:windowHeight/4.5,
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        margin:10,
        // marginTop:20,
        padding:10,
        borderRadius:30,
        backgroundColor:"white",
        shadowColor: "#FF00E1",
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.00,
        elevation: 5,
    },
    imageStyle:{
        width:windowWidth-90,
        height:windowHeight/5,
        resizeMode:"cover",
        // marginVertical:10,
        borderRadius:30,
        // marginBottom:5
    },
    seletedImage:{
        backgroundColor:"#FF00E1",
        width:20,
        height:6,
        borderRadius:10,
        marginHorizontal:3
    },
    notSeletedImage:{
        backgroundColor:"#FF00E1",
        width:6,
        height:6,
        borderRadius:10,
        marginHorizontal:3
    },
    dotsContainer:{
        flexDirection:"row",
        alignSelf:"center",
        position:"absolute",
        bottom:8,
        alignItems:"center"
    }
})
export default CustomSlider;