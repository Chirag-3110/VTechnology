import React, { useState }  from 'react';
import { Dimensions, StyleSheet, Text, View,Image, ScrollView } from 'react-native';
import  DummyData  from '../../Data/DummyDashData';
import { DataTable } from 'react-native-paper';
const windoWidth=Dimensions.get('window').width;
const windoHeight=Dimensions.get('window').height;
const DashBoard=()=>{
    const element = (data, index) => (
        <View>
            <Text style={styles.TitleViewText}>{data[1][0]}</Text>   
            <Text style={[styles.TitleViewText,{fontSize:10,marginLeft:12}]}>{data[1][1]}</Text>    
        </View>
      );
    return(
        <View style={{backgroundColor:"white",flex:1}}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:20,width:'100%',textAlign:"center",padding:20}}>
                Your Progress Among all
            </Text>
            <ScrollView style={styles.container}>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title >Sr.no</DataTable.Title>
                        <DataTable.Title >Task Name</DataTable.Title>
                        <DataTable.Title >Performance</DataTable.Title>
                    </DataTable.Header>
                    {
                        DummyData.map((item,index)=>(
                            <DataTable.Row >
                                <DataTable.Cell style={styles.textLabels} >{item.id}</DataTable.Cell>
                                <DataTable.Cell >{item.taskName}</DataTable.Cell>
                                <DataTable.Cell >{item.performance}</DataTable.Cell>
                            </DataTable.Row>
                        ))
                    }
                </DataTable>
            </ScrollView>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        padding:10,
        marginBottom: windoHeight / 9
    },
})
export default DashBoard;