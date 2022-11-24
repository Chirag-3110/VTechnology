import React,{useState} from 'react';
import { Text ,StyleSheet,View,Dimensions,Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native'
import Home from "../Screen/HomeScreen/Home";
import Service from "../Screen/HomeScreen/Service";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DashBoard from "../Screen/HomeScreen/DashBoard";
import QuestionNavigation from './QuizNavigation';
const windwoheight=Dimensions.get('window').height
function Add(){
    return(
        <View style={{flex:1,backgroundColor:"white"}}> 
        <Text style={{color:"black",flex:1,backgroundColor:"white"}}>Add Page</Text>
      </View>
    )
}
const Tab=createBottomTabNavigator();
const MainNavigation=()=>{
    const [defaultColor,setDefaultColor]=useState('#AB47BC');
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarShowLabel: false,
                borderColor: "white",
                tabBarActiveTintColor:"cyan",
                tabBarStyle: {
                    borderTopRightRadius:50,
                    borderTopLeftRadius:50,
                    backgroundColor:"white",
                    height:70,
                    position:'absolute',
                    paddingVertical:10,
                    ...styles.shadow,
                },
                
            }}
        >
            <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon:({focused})=>{
                        return (
                            <View style={{alignItems:"center",justifyContent: 'center',marginTop:10,marginBottom:20}}>
                                <FontAwesome name="home" size={30} color={focused? defaultColor :"grey"} />
                                <Text style={{color:"black",fontSize:10,fontWeight:"bold"}}>
                                    Home
                                </Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name="Service" component={Service} 
                options={{
                    tabBarIcon:({focused})=>{
                        return (
                            <View style={{alignItems:"center",justifyContent: 'center',marginTop:10,marginBottom:20}}>
                                <FontAwesome name="search" size={28} color={focused? defaultColor :"grey"} />
                                <Text style={{color:"black",fontSize:10,fontWeight:"bold"}}>
                                    Service
                                </Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name="Post" component={Add}
                options={{
                    tabBarIcon:({focused})=>(
                        <View
                            style={{
                                top:-windwoheight/20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 10,
                                backgroundColor:"white",
                                width:70,
                                height:70,
                                borderRadius:35,
                                borderWidth:5,
                                borderColor:focused?'#FDC1FA':"white"
                            }}
                        >
                            <Image
                                style={{width: 60, height: 60, borderRadius: 30}}
                                resizeMode="contain"
                                source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVXNQCuHs9hAmj4b56PO7WHXgnt5FAgH3AmbS2A1DRtPfdhU31_o7Gay1eaLPsK4vOnp4&usqp=CAU',
                                }}
                            />
                        </View>
                    ),
                }}
            />
             <Tab.Screen name="Progress" component={DashBoard}
                options={{
                    tabBarIcon:({focused})=>{
                        return (
                            <View style={{alignItems:"center",justifyContent: 'center',marginTop:10,marginBottom:20}}>
                                <FontAwesome name="list-ul" size={28} color={focused? defaultColor :"grey"} />
                                <Text style={{color:"black",fontSize:10,fontWeight:"bold"}}>
                                    Progress
                                </Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen name="AddQues" component={QuestionNavigation}
                options={({ route }) => ({
                    tabBarStyle: ((route) => {
                    const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                    if (routeName === 'QuestionsSet') {
                        return { display: "none", }
                    }else{
                        return {
                            borderTopRightRadius:50,
                            borderTopLeftRadius:50,
                            backgroundColor:"white",
                            height:70,
                            position:'absolute',
                            paddingVertical:10,
                            ...styles.shadow,
                        }
                    }
                    })(route),
                    tabBarIcon:({focused})=>{
                        return (
                            <View style={{alignItems:"center",justifyContent: 'center',marginTop:10,marginBottom:20}}>
                                <FontAwesome name="question-circle" size={28} color={focused? defaultColor :"grey"} />
                                <Text style={{color:"black",fontSize:10,fontWeight:"bold"}}>
                                    Test
                                </Text>
                            </View>
                        )
                    }
                })}
            />
        </Tab.Navigator>
    )
}
const styles=StyleSheet.create({
    shadow:{
        shadowOffset:{
            width:0,
            height:-10
        },
        shadowColor:"black",
        elevation:40
    }
})
export default MainNavigation;