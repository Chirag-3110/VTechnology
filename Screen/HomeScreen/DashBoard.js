import React, { useState }  from 'react';
import { Dimensions, StyleSheet, Text, View,Image, ScrollView } from 'react-native';
import { Table, Row, Cell ,TableWrapper} from 'react-native-table-component';
import  DummyData  from '../../Data/DummyDashData';
const windoWidth=Dimensions.get('window').width;
const windoHeight=Dimensions.get('window').height;
const DashBoard=()=>{
    const [title,setTitle]=useState(['id', 'Task Name', 'Performance'])

    const element = (data, index) => (
        <View style={{flexDirection:"row"}}>
            <Image
                source={{uri:data[1][1]}}
                style={styles.taskImage}
            />
            <View>
                <Text style={styles.TitleViewText}>{data[1][0]}</Text>   
                <Text style={[styles.TitleViewText,{fontSize:10,marginLeft:12}]}>{data[1][2]}</Text>    
            </View>
        </View> 
      );
    return(
        <ScrollView style={styles.container}>
            <Table>
                <Row    
                    data={title}    
                    style={styles.head} 
                    textStyle={styles.textLabels}
                    // flexArr={[0, 2, 2]}
                />
                {
                    DummyData.map((rowData, index) => (
                        <TableWrapper key={index} style={styles.allRows}>
                            {
                                rowData.map((cellData, cellIndex) => (
                                    <Cell 
                                        key={cellIndex} 
                                        data={
                                            cellIndex === 1 ? 
                                            element(rowData, index) :
                                            cellData
                                        } 
                                        style={styles.perColoumn} 
                                        textStyle={styles.textLabels}
                                        // flexArr={[0, 2, 2]}
                                        
                                        widthArr={[50,100,100]}   
                                    />
                                ))
                            }
                        </TableWrapper>
                    ))
                }
            </Table>
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor:"white",
        padding:10
    },
    head: { 
        height: 50, 
        backgroundColor:"white",
        justifyContent: 'center',
        borderColor:"#ECECEC",
        borderWidth:2,
        borderRadius:5
        
    },
    allRows: { 
        marginTop: 6 ,
        backgroundColor:"white",
        paddingHorizontal:10,
        paddingVertical:20,
        // alignItems: 'center',
        shadowColor: "#FF00E1",
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowOpacity: 0.58,
        shadowRadius: 20.00,
        elevation: 5,
        borderRadius:5,
        flexDirection:"row",
    },
    textLabels:{
        color:"black",
        fontWeight:"bold",
        // textAlign:"center",
        marginHorizontal:10,
        fontSize:15,
    },
    TitleViewText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        marginHorizontal:10
    },
    taskImage:{
        width:40,
        height:40,
        borderRadius:10,
        resizeMode:"contain"
    }
})
export default DashBoard;