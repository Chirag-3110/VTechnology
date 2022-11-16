import React  from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View,Image } from 'react-native';
import  DummyData  from '../../Data/DummyDashData';
const windoWidth=Dimensions.get('window').width;
const windoHeight=Dimensions.get('window').height;
const DashBoard=()=>{

    const renderList = ({item}) => (
        <View style={styles.ListView} >
            <View style={styles.TitleView}>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Text style={[styles.TitleViewText,{fontSize:20}]}>{item.taskId}</Text>
                    <View style={{flexDirection:"row",alignItems:"center",marginLeft:20}}>
                        <Image
                            source={{uri:item.userImage}}
                            style={styles.taskImage}
                        />
                        <View>
                            <Text style={styles.TitleViewText}>{item.taskName}</Text>   
                            <Text style={[styles.TitleViewText,{fontSize:10,marginLeft:12}]}>{item.byUser}</Text>    
                        </View>
                    </View> 
                </View>              
                    <Text style={styles.TitleViewText}>{item.performane}</Text>
            </View>
        </View>
    )
    return(
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={
                    <View style={styles.headerTitleView}>
                        <View style={{flexDirection:"row"}}>
                            <Text style={[styles.TitleViewText,{fontSize:20}]}>id</Text>
                            <Text style={[styles.TitleViewText,{fontSize:20}]}>Task Name</Text>    
                        </View>                    
                        <Text style={[styles.TitleViewText,{fontSize:20}]}>performane</Text>
                    </View>
                }
                data={DummyData}
                keyExtractor={item=>item.taskId}
                renderItem={renderList}
                style={{
                    backgroundColor:"rgba(246,196,255,0.78)",
                    paddingVertical:20,
                }}
                ListFooterComponent={
                    <View style={{marginBottom:windoHeight/8}}/>
                }
            />
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"white",
    },
    ListView: {
        alignItems:"center",
        width:windoWidth,
    },
    TitleView: {
        marginVertical: 10,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems: "center",
        width:windoWidth,
        paddingHorizontal: 20,
    },
    headerTitleView: {
        marginVertical: 10,
        flexDirection:'row',
        justifyContent:"space-between",
        width:windoWidth,
        padding: 10,
        backgroundColor:"rgba(250,233,255,0.78)",
        width:'90%',
        alignSelf:"center",
        borderRadius:5
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