import React, { useCallback, useContext, useEffect, useState } from 'react'
import { View, Text, Animated, Image, StyleSheet, Modal, Dimensions, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import { LineChart, } from "react-native-chart-kit";
import firestore from '@react-native-firebase/firestore';
import { GlobalVariable } from '../../App';
import auth from '@react-native-firebase/auth';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import Lottie from 'lottie-react-native';


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
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
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
          <TouchableOpacity
            onPress={logout}
          >
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/891/891012.png" }} style={[styles.ProImg, { width: 30, height: 30 }]} />
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 15 }}>
          <View style={styles.CourseView}>
            <View style={{ width: 130 }}>
              <Image source={{ uri: "https://cdn3d.iconscout.com/3d/premium/thumb/male-character-sitting-on-chair-and-reading-a-book-4634471-3855676.png" }} style={styles.MainImg} />
            </View>
            <View style={styles.TextMain}>
              <Text style={styles.AcitivitiesText}>Acitivities</Text>
              <Text style={styles.AcitivitiesTextanother}>On your click</Text>
              <TouchableOpacity style={styles.ActivityBtn} onPress={getOrderData}>
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
            {orderDetail.length === 0 ? <View style={{ width: windoWidth / 1.1, alignItems: "center", height: windoHeight / 4 }}>

              <Lottie
                source={require('../../lottiesAnimations/96372-loader-5.json')} autoPlay loop style={{ height: 250, width: windoWidth, justifyContent: "center", alignItems: "center" }} />
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
          <View style={{ marginLeft: 15 }}>
            <LineChart
              data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 10,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }
                ]
              }}
              width={Dimensions.get("window").width - 30}
              height={220}
              yAxisLabel="$"
              yAxisSuffix="k"
              // yAxisInterval={10} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "white",
                backgroundGradientFrom: "white",
                backgroundGradientTo: "white",
                labelColor: (opacity = 1) => `rgba(2, 2, 2, ${opacity})`,
                color: (opacity = 1) => `rgba(37, 236, 204, ${opacity})`,

                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: 100 }}>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.NotifView} onPress={() => setModalVisible1(!modalVisible1)}>

        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/2546/2546749.png" }} style={styles.NotifImage} />
      </TouchableOpacity>
      <View style={styles.centeredView1}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}
          onRequestClose={() => {
            setModalVisible1(!modalVisible1);
          }}
        >
          <View style={styles.centeredView1}>
            <View style={styles.modalView1}>
              <View style={styles.ModelTopView1}>
                <View style={styles.ContentView1}>

                  <Text style={styles.ModelTopViewText1}>Feedback</Text>

                </View>
                <TouchableOpacity style={[styles.ContentView1, { justifyContent: "flex-end", alignItems: "flex-end" }]} onPress={() => setModalVisible1(!modalVisible1)}>
                  <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/656/656857.png" }} style={[styles.ProImg, { width: 20, height: 20, marginRight: 30 }]} />
                </TouchableOpacity>
              </View>
              <View style={{ height: 150, backgroundColor: "white", justifyContent: "center", alignItems: "center", width: windoWidth, marginVertical: 25, marginTop: 10, borderTopColor: "blue", borderTopWidth: 2 }}>
                <Lottie
                  source={require('../../lottiesAnimations/33000-feedback.json')} autoPlay loop style={{ height: 350, width: windoWidth }} />
              </View>
              <ScrollView alwaysBounceVertical={true} showsVerticalScrollIndicator={false}>

                <View style={styles.details1}>
                  <View style={styles.NotifViewActivity}>
                    <Text style={styles.NotifViewActivityText}>Activity name : DM Quiz</Text>
                  </View>
                  <Text style={styles.detailsText1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</Text>
                </View>
                <View style={styles.details1}>
                  <View style={styles.NotifViewActivity}>
                    <Text style={styles.NotifViewActivityText}>Activity name : DM Quiz</Text>
                  </View>
                  <Text style={styles.detailsText1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View >


    </>
  )
}
const styles = StyleSheet.create({
  MainScreen: {
    height: windoHeight,
    width: windoWidth,
    backgroundColor: "white"
  },
  topMainView: {
    // borderWidth: 1,
    width: windoWidth,
    display: "flex",
    flexDirection: 'row',
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginLeft: 10
  },
  ProImg: {
    width: 37,
    height: 37
  },
  profilePic: {
    width: windoWidth / 7
  },
  TopText: {
    width: windoWidth / 1.56
  },
  TopDate: {
    fontWeight: "800",
    fontSize: 18,
    color: "black"
  },
  MainImg: {
    width: 100,
    height: 150,
  },
  CourseView: {
    // borderWidth: 1,
    backgroundColor: "#FFE7DF",
    marginHorizontal: 20,
    borderRadius: 14,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    shadowColor: 'red',
    shadowOffset: {
      width: 10,
      height: -16,
    },
    shadowOpacity: 0.58,
    shadowRadius: 700,
    elevation: 20,
    //   elevation: 25,
  },
  TextMain: {
    // borderWidth: 1,
    width: windoWidth / 2.2,
    // justifyContent: "center"
    alignItems: "center",
    marginTop: 10
  },
  AcitivitiesText: {

    fontSize: 28,
    color: "black",
    fontWeight: "800"
  },
  AcitivitiesTextanother: {
    fontSize: 14,
    color: "grey",
    marginVertical: 10
  },
  ActivityBtn: {
    marginVertical: 10,
    backgroundColor: "#FC6736",
    borderRadius: 5,
    padding: 6,
    paddingHorizontal: 8
  },
  MyPlanView: {
    // borderWidth: 1,
    marginVertical: 15
  },
  ViewPlanView: {
    marginHorizontal: 25,
    marginTop: 20
  },
  PlanText: {
    fontSize: 20,
    fontWeight: "800",
    color: "black"
  },
  Scrollview: {
    backgroundColor: "#FFE7DF",
    width: windoWidth / 2.5,
    borderRadius: 14,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  ScrollImg: {
    width: windoWidth / 2.6,
    height: 120
  },
  ModelView: {
    // position: 'absolute',
    zIndex: 1,
    backgroundColor: "white",
    width: windoWidth,
    marginTop: 20,
    height: windoHeight / 2,
    bottom: 10,
    borderWidth: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  ModelTopView: {
    // borderWidth: 1,
    marginVertical: 15,
    // marginHorizontal: 30,
    width: windoWidth,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  ModelTopViewText: {
    fontSize: 20,
    fontWeight: "700",
    color: "black"
  },
  ContentView: {
    // borderWidth: 1,
    width: windoWidth / 2.3
  },
  ModelTopTextPrice: {
    marginVertical: 10,
    fontSize: 20,
    color: "black",
    fontWeight: "800",
    borderWidth: 1,
  },
  PriceView: {
    marginHorizontal: 25
  },
  details: {
    marginHorizontal: 0,
    fontWeight: "700",
    width: windoWidth / 1.2
  },
  Modelviewbtn: {
    width: windoWidth / 1.3,
    borderWidth: 1,
    backgroundColor: "black",
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: "center",
    opacity: 0.9
  },
  ModelviewTextbtn: {
    color: "white",
    fontSize: 20,
    fontWeight: "700"
  },
  detailsText: {
    fontWeight: "700"
  },

  //modelView
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  modalView: {
    width: windoWidth,
    height: windoHeight / 2.3,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 20,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

  // Image for feedback
  NotifView: {
    position: "absolute",
    right: 25,
    bottom: windoHeight / 7,
    borderWidth: 2,
    borderColor: "yellow",
    borderRadius: 30,
    backgroundColor: "#0F69F4"
  },
  NotifImage: {
    width: 50,
    height: 50
  },



  // Model View for feedback
  centeredView1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  modalView1: {
    width: windoWidth,
    height: windoHeight / 1.2,
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 35,
    paddingVertical: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  button1: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen1: {
    backgroundColor: "#F194FF",
  },
  buttonClose1: {
    backgroundColor: "#2196F3",
  },
  textStyle1: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText1: {
    marginBottom: 15,
    textAlign: "center"
  },
  detailsText1: {
    color: "black"
  },
  ModelTopView1: {
    marginVertical: 15,
    width: windoWidth,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  ModelTopViewText1: {
    fontSize: 20,
    fontWeight: "700",
    color: "black"
  },
  ContentView1: {
    // borderWidth: 1,
    width: windoWidth / 2.3
  },
  ModelTopTextPrice1: {
    marginVertical: 10,
    fontSize: 20,
    color: "black",
    fontWeight: "800",
    borderWidth: 1,
  },
  details1: {
    marginHorizontal: 0,
    fontWeight: "700",
    width: windoWidth / 1.2,
    // backgroundColor: "rgba(115,105,248,0.85)",
    backgroundColor: "white",
    borderColor: "blue",
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    marginVertical: 10
  },
  NotifViewActivityText: {
    fontSize: 20,
    color: "black",
    marginVertical: 10
  }

});
export default Home