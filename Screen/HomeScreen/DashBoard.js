import React, { useEffect, useState }  from 'react';
import {  StyleSheet, Text, View, ScrollView, TouchableOpacity,Dimensions } from 'react-native';
import CustomCircleBar from  '../../components/CustomCicleBar';
import MONTHS_NAME from '../../Componentdata/APPConstants';
import WEEK_DAYS_NAMES from '../../Componentdata/WeekData';
import LinearGradient from 'react-native-linear-gradient';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const DashBoard=()=>{
    const newDayDateArray=[];
    const d = new Date();
    const [dateStateArray,setDateStateArray]=useState([]);
    const [monthStateArray,setMonthArray]=useState([]);
    const [selectedMonth,setSelectedMonth]=useState(null);
    const [selectedDate,setSelectedDate]=useState(null);
    useEffect(()=>{
        setMonthArray(MONTHS_NAME);
        var currentMonthsObject=MONTHS_NAME.filter((item)=>{
            return item.index === d.getMonth();
        })
        console.log(currentMonthsObject)
        setMonthAsSelected(currentMonthsObject[0]);
        setSelectedDate(d.getDate());
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
        setSelectedDate(dateObj.date)
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
//final functino
    const getArrayDataSet=(dayName,dayIndex,monthName)=>{
        let isLooping=dayIndex;
        for (let i = 0; i < monthName.limit; i++) {
            if(isLooping === 7){
                isLooping=0;
            }
            newDayDateArray.push({id:i,date:i+1,day:WEEK_DAYS_NAMES[isLooping],isSelected:false})
            isLooping++;
        }
        setSelectedMonth(monthName.index);
        setDateStateArray(newDayDateArray);

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
            <View style={{backgroundColor:"white",flex:1}}>
            <ScrollView style={{flex:1,backgroundColor:"white"}}>
                <View>
                    <Text style={{fontWeight:"bold",color:"rgba(200,95,250,0.85)",padding:5,textAlign:"center",marginTop:10,fontSize:15}}>
                        Select Month
                    </Text>
                    <ScrollView style={styles.container} horizontal={true} zIndex={-5} pagingEnabled >
                        <View style={{flexDirection:"row",padding:10}}>
                            {
                                MONTHS_NAME.map((month,index)=>(
                                    <TouchableOpacity key={index} style={[styles.monthBox,month.isSelected?{backgroundColor:"black",}:{backgroundColor:"white",}]}
                                        onPress={()=>setMonthAsSelected(month)}
                                    >
                                        <Text style={[{fontWeight:"bold",fontSize:18,},month.isSelected?{color:"white"}:{color:"black"}]}>{month.name}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </ScrollView>
                </View>
                <ScrollView style={styles.container} horizontal={true} zIndex={-5} pagingEnabled >
                    <View style={{flexDirection:"row"}}>
                        {
                            dateStateArray.length === 0 ?null:
                            dateStateArray.map((item,index)=>(
                                <TouchableOpacity key={index} style={[styles.dateDayContainer,item.isSelected?{backgroundColor:"#292929",}:{backgroundColor:"white",}]}
                                    onPress={()=>setAsSelected(item,index)}
                                >
                                    <Text style={[{fontWeight:"bold",fontSize:23,},item.isSelected?{color:"white"}:{color:"black"}]}>{item.date}</Text>
                                    <Text style={[{fontWeight:"bold",fontSize:13,},item.isSelected?{color:"white"}:{color:"black"}]}>{item.day}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </ScrollView>
                <LinearGradient 
                    colors={['rgba(102,167,255,0.50)','rgba(142,189,251,0.40)','rgba(203,222,248,0.50)','rgba(191,217,251,0.30)']} 
                    style={styles.cardStyle}>
                    <Text style={{color:"black",fontWeight:"bold",fontSize:30,fontStyle:"italic",padding:20,color:"#3D3D3D"}}>
                        Daily Progress
                    </Text>
                    <View style={styles.Details}>
                        <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:5}}>
                            <Text style={[styles.cartText,{width:120,textAlign:"center",}]}>
                                Test Title 
                            </Text>
                            <Text style={[styles.cartText,{width:180,textAlign:"center"}]}>Digital Marketing</Text>
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:5}}>
                            <Text style={[styles.cartText,{width:120,textAlign:"center"}]}>Test Date </Text>
                            <Text style={[styles.cartText,{width:180,textAlign:"center"}]}>
                                {selectedDate}-{selectedMonth+1}-{d.getFullYear()}
                            </Text>
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:5}}>
                            <Text style={[styles.cartText,{width:120,textAlign:"center"}]}>Test Score </Text>
                            <Text style={[styles.cartText,{width:180,textAlign:"center"}]}>50</Text>
                        </View>
                    </View>
                    <CustomCircleBar
                        percentageValue={75}
                    />
                </LinearGradient>
            </ScrollView>
            <View style={{marginBottom:windoHeight / 10,backgroundColor:"white"}}/>
            </View>
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
        alignSelf:"center",
        marginTop:20,
        elevation:5,
        alignItems: 'center',
        zIndex:-5,
        paddingVertical:20
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
    },
    Details:{
        width:'100%',
        paddingHorizontal:10,
        marginTop:10,
        marginBottom:20,
    },
    cartText:{
        color:"black",
        fontSize:18,
        fontWeight:"bold",
        backgroundColor:"rgba(85,149,250,1)",
        borderRadius:3,
        paddingHorizontal:10,
        color:"white",
        paddingVertical:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.58,
        shadowRadius:20.00,
        elevation: 10,
    }
})
export default DashBoard;