import React, { useEffect, useState } from 'react';
import {View,Text,Modal, StyleSheet, Dimensions,TouchableOpacity} from 'react-native';
const {width,height}=Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomToast=(props)=>{
    const [show,setShow]=useState(false);
    const closeModal=()=>{
        setTimeout(() => {
            setShow(!show)
            props.manageShow(false)
        }, 1500);
    }
    useEffect(()=>{
        setShow(props.showToast);
    },[props.showToast])
    return(
        <View style={styles.container}>
            <Modal visible={show} animationType='slide' transparent={true} onShow={closeModal}>
                <View style={[styles.toastContainer,{backgroundColor:props.toastColor}]}>
                    <Text style={{color:props.toastTextColor,fontWeight:"bold"}}>
                        {props.toastMessage}
                    </Text>
                    <TouchableOpacity onPress={()=>props.manageShow(false)}>
                        <FontAwesome name="close" size={30} color={"white"}  />
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent:"center",
    },
    toastContainer:{
        width:width/1.4,
        borderRadius:10,
        alignItems: 'center',
        justifyContent:"space-between",
        flexDirection: 'row',
        padding:18,
        alignSelf:"center",
        marginTop:5
    }
})
export default CustomToast;