import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Animated, Image, StyleSheet, Modal, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import Lottie from 'lottie-react-native';
import { GlobalVariable } from '../../App';
import firestore from '@react-native-firebase/firestore';
function Userprofile({ navigation }) {
  const [getAllDetails, setgetAllDetails] = useState("")
  const { userUid } = useContext(GlobalVariable);
  useEffect(() => {
    GetDetails();
  }, [])
  const GetDetails = async () => {
    try {
      const user = await firestore().collection('UserCollection').doc(userUid.uid).get()
      const Data = user._data;
      setgetAllDetails(Data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View style={styles.MainView}>
      <View style={styles.InnerMainView}>
        <TouchableOpacity style={{ marginHorizontal: 20, width: windoWidth - 290 }} onPress={() => navigation.navigate("Prof")}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/3114/3114883.png" }} style={{ width: 30, height: 30, color: "black" }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, fontWeight: "800", color: "black" }}>UserProfile</Text>
      </View>

      <View style={styles.ProfileBox}>
        <View style={{ alignItems: "center" }}>
          <Lottie
            source={require('../../lottiesAnimations/3825-name.json')} autoPlay loop style={{ height: 170, width: windoWidth, justifyContent: "center", alignItems: "center" }} />
        </View>
        <View style={{ justifyContent: "flex-start", marginVertical: 15, marginHorizontal: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>Name : {getAllDetails.Name}</Text>
        </View>
        <View style={{ justifyContent: "flex-start", marginVertical: 15, marginHorizontal: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>Age : {getAllDetails.Age}</Text>
        </View>
        <View style={{ justifyContent: "flex-start", marginVertical: 15, marginHorizontal: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>Phone : {getAllDetails.Phone}</Text>
        </View>
        <View style={{ justifyContent: "flex-start", marginVertical: 15, marginHorizontal: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>city : jaipur</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  MainView: {
    width: windoWidth,
    height: windoHeight,
    backgroundColor: "white"
  },
  InnerMainView: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: windoHeight / 8,
    display: "flex",
    flexDirection: "row"
  },
  ProfileBox: {
    // borderWidth: 1,
    marginHorizontal: 30,
    height: windoHeight / 1.5,
    marginTop: 30,
    backgroundColor: "#FFE1CA",
    borderRadius: 20,
    shadowColor: 'red',
    shadowOffset: {
      width: 50,
      height: -10,
    },
    shadowOpacity: 0.7,
    shadowRadius: 900,
    elevation: 15,
  }
})
export default Userprofile