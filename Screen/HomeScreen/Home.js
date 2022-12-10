import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Animated, Image, StyleSheet, Modal, Dimensions, TouchableOpacity, ScrollView, ActivityIndicator, TextInput } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import { GlobalVariable } from '../../App';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import Lottie from 'lottie-react-native';
import styles from "./HomeStyle";
function Home({ navigation }) {
  const { userUid } = useContext(GlobalVariable);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {
    getOrderData();
    console.log("home", userUid.uid)
  }, [])

  const getOrderData = async () => {
    console.log("hey")
    let resultArray = [];
    try {
      const user = await firestore().collection('Courses').get();
      user.forEach((item) => {
        resultArray.push({ id: item.id, ...item.data() });
      });
      setOrderDetail(resultArray);
      // console.log("hi i am ", orderDetail)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <ScrollView style={styles.MainScreen}>
        <View style={styles.topMainView}>
          <View style={styles.profilePic}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/236/236831.png" }} style={styles.ProImg} />
          </View>
          <View style={styles.TopText}>
            <Text>Hello World</Text>
            <Text style={styles.TopDate}>Thrusday ,08 July</Text>
          </View>
          <TouchableOpacity>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/891/891012.png" }} style={[styles.ProImg, { width: 30, height: 30 }]} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ borderWidth: 1, borderColor: "grey", borderRadius: 10, marginHorizontal: 20, width: windoWidth / 1.14, display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 10 }} onPress={() => navigation.navigate("SearchPage")}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/54/54481.png" }} style={[styles.ProImg, { width: 25, height: 25, marginRight: 10 }]} />
          <TextInput
            style={{ fontWeight: "bold", fontSize: 15, color: "black", width: windoWidth / 1.6 }}
            placeholder={"Search"}
            placeholderTextColor={"black"}
            autoCapitalize={true}
          />
          <TouchableOpacity onPress={() => navigation.navigate("SearchPage")} >
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/9073/9073147.png" }} style={[styles.ProImg, { width: 30, height: 30 }]} />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={{ marginVertical: 15 }}>
          <View style={styles.CourseView}>
            <View style={{ width: 130 }}>
              <Image source={{ uri: "https://cdn3d.iconscout.com/3d/premium/thumb/male-character-sitting-on-chair-and-reading-a-book-4634471-3855676.png" }} style={styles.MainImg} />
            </View>
            <View style={styles.TextMain}>
              <Text style={styles.AcitivitiesText}>Acitivities</Text>
              <Text style={styles.AcitivitiesTextanother}>On your click</Text>
              <TouchableOpacity style={styles.ActivityBtn}>
                <Text style={{ color: 'white' }}>View Acitivities</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.MyPlanView}>
          <View style={styles.ViewPlanView}>
            <Text style={styles.PlanText}>View Plan</Text>
          </View>
          <ScrollView style={{ marginHorizontal: 15, marginVertical: 10 }} horizontal={true}>
            {orderDetail.length === 0 ? <View style={{ width: windoWidth / 1.1, alignItems: "center", height: windoHeight / 4, backgroundColor: "#F0F3F0", opacity: 0.7, borderRadius: 20 }}>
              <Lottie
                source={require('../../lottiesAnimations/124010-borboleta-rosa-carregando (1).json')} autoPlay loop style={{ height: 190, width: windoWidth, justifyContent: "center", alignItems: "center", }} />
            </View> :
              orderDetail.map((item, index) => (
                <TouchableOpacity key={index} style={[styles.Scrollview, { backgroundColor: "#DBFAF5" }]} onPress={() => navigation.navigate("Course", {
                  Name: item.Name,
                  Description: item.Description,
                })}>
                  {
                    item.ImageUrl == null ? <ActivityIndicator /> : <Image source={{ uri: item.ImageUrl }} style={[styles.ScrollImg, {}]} />
                  }

                  <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 7 }}><Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>{item.Name}</Text></View>
                </TouchableOpacity>
              ))

            }
          </ScrollView>
        </View>
        <View>
          <View style={[styles.ViewPlanView, { marginVertical: 20 }]}>
            <Text style={styles.PlanText}>Track your Acitivities</Text>
          </View>
          <View style={styles.FeedBoxView}>
            <View style={{ width: windoWidth / 2 }}>
              <Lottie
                source={require('../../lottiesAnimations/115554-leadership-talent.json')} autoPlay loop style={{ height: 150 }} />
            </View>
            <View style={{ width: windoWidth / 2.6, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 20, fontWeight: "700", color: "black" }}>Check Your</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Feedback")} style={{ backgroundColor: "orange", paddingHorizontal: 10, paddingVertical: 3, marginVertical: 10, borderRadius: 5 }}><Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>Feedback</Text></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 100 }}>
        </View>
      </ScrollView>
    </>
  )
}
export default Home