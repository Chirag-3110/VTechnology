import React, { useEffect, useState }  from 'react';
import {  StyleSheet, Text, View, ScrollView, TouchableOpacity,Dimensions } from 'react-native';
import CustomCircleBar from  '../../components/CustomCicleBar';
import MONTHS_NAME from '../../Componentdata/APPConstants';
import WEEK_DAYS_NAMES from '../../Componentdata/WeekData';
import LinearGradient from 'react-native-linear-gradient';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const DashBoard=()=>{
    const d = new Date();
    const newDayDateArray=[];
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    const [dateStateArray,setDateStateArray]=useState([]);
    const [monthStateArray,setMonthArray]=useState([]);
    useEffect(()=>{
        setMonthArray(MONTHS_NAME);
        d.getFullYear();
    },[])
    const setAsSelected=(dateObj,index)=>{
        setDateStateArray((seletedDate) =>
            seletedDate.map((item) => {
                if (item.date === dateObj.date) {
                    item.isSelected = true;
                }
                else{
                    item.isSelected=false;
                }
                return item;
            })
        );
    }   
    const setMonthAsSelected=(monthObj)=>{
        setMonthArray((seletedMonth) =>
            seletedMonth.map((item) => {
                if (item.name === monthObj.name) {
                    item.isSelected = true;
                }
                else{
                    item.isSelected=false;
                }
                return item;
            })
        );
        getSelectDateMonth(monthObj);
    }
    const getArrayDataSet=(dayName,dayIndex,monthName)=>{
        let isLooping=dayIndex;
        for (let i = 0; i < monthName.limit; i++) {
            if(isLooping === 7){
                isLooping=0;
            }
            newDayDateArray.push({id:i,date:i+1,day:WEEK_DAYS_NAMES[isLooping],isSelected:false})
            isLooping++;
        }
        setDateStateArray(newDayDateArray);
        setVisible(false)
    }

    const getSelectDateMonth=(monthName)=>{
        let currentYear=d.getFullYear();
        function getFirstDayOfMonth(year, month) {
            return new Date(year,month,1);
        }
        const firstDayIndex = getFirstDayOfMonth(currentYear,monthName.index);
        getArrayDataSet(WEEK_DAYS_NAMES[firstDayIndex.getDay()],firstDayIndex.getDay(),monthName);
    }

    return(
        <>
            <ScrollView style={{flex:1,backgroundColor:"white"}}>
                <View>
                    <Text style={{fontWeight:"bold",color:"rgba(200,95,250,0.85)",padding:5,textAlign:"center",marginTop:10,fontSize:15}}>
                        Select Month
                    </Text>
                    <ScrollView style={styles.container} horizontal={true} zIndex={-5} >
                        <View style={{flexDirection:"row",padding:10}}>
                            {
                                MONTHS_NAME.map((month,index)=>(
                                    <TouchableOpacity style={[styles.monthBox,month.isSelected?{backgroundColor:"black",}:{backgroundColor:"white",}]}
                                        onPress={()=>setMonthAsSelected(month)}
                                    >
                                        <Text style={[{fontWeight:"bold",fontSize:18,},month.isSelected?{color:"white"}:{color:"black"}]}>{month.name}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </ScrollView>
                </View>
                <ScrollView style={styles.container} horizontal={true} zIndex={-5} >
                    <View style={{flexDirection:"row"}}>
                        {
                            dateStateArray.length === 0 ?null:
                            dateStateArray.map((item,index)=>(
                                <TouchableOpacity style={[styles.dateDayContainer,item.isSelected?{backgroundColor:"#292929",}:{backgroundColor:"white",}]}
                                    onPress={()=>setAsSelected(item,index)}
                                >
                                    <Text style={[{fontWeight:"bold",fontSize:18,},item.isSelected?{color:"white"}:{color:"black"}]}>{item.date}</Text>
                                    <Text style={[{fontWeight:"bold",fontSize:12,},item.isSelected?{color:"white"}:{color:"black"}]}>{item.day}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </ScrollView>
                <LinearGradient colors={['rgba(245,230,252,0.80)', 'rgba(246,229,254,0.80)','rgba(249,243,252,0.80)']} style={styles.cardStyle}>
                    <Text style={{color:"black",fontWeight:"bold",fontSize:20,padding:20}}>
                        Daily Progress
                    </Text>
                    <CustomCircleBar
                        percentageValue={72}
                    />
                </LinearGradient>
            </ScrollView>
        </>
    )
}
const styles=StyleSheet.create({
    container:{
        // flex:1,
        marginTop:10,
        marginHorizontal:10,
    },
    dateDayContainer:{
        width:50,
        paddingHorizontal:10,
        paddingVertical:20,
        margin:10,
        borderRadius:50,
        alignItems: 'center',
        justifyContent:"center",
        height:100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.58,
        shadowRadius:20.00,
        elevation: 10,
    },
    cardStyle:{
        width:windoWidth-30,
        backgroundColor:"white",
        borderRadius:10,
        margin:10,
        height:300,
        alignSelf:"center",
        marginTop:20,
        elevation:5,
        alignItems: 'center',
        zIndex:-5
    },
    monthBox:{
        width:100,
        height:40,
        alignItems:"center",
        justifyContent: 'center',
        marginHorizontal:10,
        borderRadius:5, 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.58,
        shadowRadius:20.00,
        elevation: 5,       
    }
})
export default DashBoard;