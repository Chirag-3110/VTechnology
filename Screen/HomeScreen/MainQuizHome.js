import React,{useEffect, useState} from 'react';
import { View,Text,TouchableOpacity, StyleSheet, Dimensions,Animated,Easing, FlatList } from 'react-native';
const {width,height}=Dimensions.get('window');
import AnimatedQuizCard from '../../components/AnimatedCard';
const MainQuizHome=()=>{
    
    return(
        <View style={styles.container}>
            <Text style={{color:"black"}}>Text</Text>
            <FlatList
                data={[1,2,3,4,5,6]}
                keyExtractor={i=>i}
                renderItem={()=>(<AnimatedQuizCard/>)}
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