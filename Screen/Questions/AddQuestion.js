import React,{useState,useEffect} from 'react';
import {View,Text,Dimensions,TextInput, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './QuizStyles';
const windowWidth=Dimensions.get('window').width;
import CustomButton from '../../components/AnimatedButton';
import LinearGradient from 'react-native-linear-gradient';
const MainQuesionSceen=({navigation})=>{
//data set
    const [testName,setTestName]=useState(null);
    const [noOfQuesValue, setnoOfQuesValue] = useState(null);
    const [noOfQuesOpen, setnoOfQuesOpen] = useState(false);
    const [noOfQues,setnoOfQues]=useState([
        {label: '1', value: 1},
        {label: '2', value: 2},
        {label: '5', value: 5},
    ]);
    const moveToQuestion=()=>{
        console.log(testName);
        console.log(noOfQuesValue);
        navigation.navigate("QuestionsSet",{noOfQues:noOfQuesValue});
    }
    return(
        <View style={styles.container}>
            <LinearGradient 
                colors={['rgba(68,155,251,0.52)', 'rgba(127,184,247,0.32)','rgba(173,214,252,0.22)']} 
                style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: -5,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius:20.00,
                    elevation: 5,  
                    alignItems:"center",
                    backgroundColor:"white",
                    paddingHorizontal:10,
                    paddingVertical:50,
                    borderRadius:10
                }}
            >
                <Text style={{padding:10,fontWeight:"bold",color:"black"}}>Add Quiz</Text>
                <View style={{paddingHorizontal:20,alignSelf:"center",marginTop:10}}>
                    <Text style={{fontWeight:"bold",color:"black"}}>Test Name</Text>
                    <TextInput
                        placeholder="Test name"
                        placeholderTextColor='black'
                        style={styles.customInput}
                        onChangeText={(name)=>setTestName(name)}
                    />
                </View>
                <View style={{alignSelf:"center",marginTop:10,width:windowWidth-80,}}>
                    <Text style={{fontWeight:"bold",color:"black"}}>Total questions in Quiz</Text>
                    <DropDownPicker
                        placeholder="Select one option"
                        open={noOfQuesOpen}
                        value={noOfQuesValue}
                        items={noOfQues}
                        setOpen={setnoOfQuesOpen}
                        setValue={setnoOfQuesValue}
                        setItems={setnoOfQues}
                        zIndex={3000}
                        style={{
                            width:windowWidth-80,
                            height: windowWidth/9,
                            borderRadius: 4,
                            marginTop: 10,
                            borderColor: 'rgba(21, 47, 74, 0.12)',
                            backgroundColor:"white",
                        }}
                    />
                </View>
                <LinearGradient
                    style={{
                            width:windowWidth-80,
                            height:40,
                            justifyContent: 'center',
                            alignItems:"center",
                            marginTop:30,
                            borderRadius:10,
                            shadowColor: "#3995fb",
                            shadowOffset: {
                                width: 0,
                                height: -5,
                            },
                            shadowOpacity: 0.58,
                            shadowRadius: 20.00,
                            elevation: 24,
                    }}
                    colors={['rgba(20,129,247,0.65)', 'rgba(59,148,247,0.80)','rgba(89,165,248,0.41)']}
                >
                    <TouchableOpacity
                        onPress={moveToQuestion}
                    >
                        <Text style={{color:"white",fontWeight:"bold"}}>Move To Next</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </LinearGradient>
        </View>
    )
}
export default MainQuesionSceen;