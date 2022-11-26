import React, { useState } from 'react'
import { View, Text, Animated, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { LineChart, } from "react-native-chart-kit";
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

function Home() {
  const [showModel, setShowModel] = useState(false)
  const position = new Animated.ValueXY({ x: 0, y: windoHeight });
  const position1 = new Animated.ValueXY({ x: 0, y: 0 });


  const showPopUp = () => {

    setShowModel(true),
      Animated.timing(position, {
        // toValue: { x: 0, y: -windowHeight/80 },
        duration: 1000,
        useNativeDriver: true
      }).start();
  }
  const showPopUpfalse = () => {

    setShowModel(false),
      Animated.timing(position1, {
        // toValue: { x: 0, y: -windowHeight/80 },
        duration: 1000,
        useNativeDriver: true
      }).start();
  }

  const createNewUser = async () => {
    createUserWithEmailAndPassword(auth, "abhishek.jangid643@gmail.com", "Abhi@123#k")
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)

      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            console.log("Email Already Exists")
            break;
          default:
            break;
        }
      });
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
        <View style={{ marginVertical: 15 }}>
          <View style={styles.CourseView}>
            <View style={{ width: 130 }}>
              <Image source={{ uri: "https://cdn3d.iconscout.com/3d/premium/thumb/male-character-sitting-on-chair-and-reading-a-book-4634471-3855676.png" }} style={styles.MainImg} />
            </View>
            <View style={styles.TextMain}>
              <Text style={styles.AcitivitiesText}>Acitivities</Text>
              <Text style={styles.AcitivitiesTextanother}>On your click</Text>
              <TouchableOpacity style={styles.ActivityBtn} onPress={showPopUp}>
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
            <View style={[styles.Scrollview, { backgroundColor: "#DBFAF5" }]}>
              <Image source={{ uri: "https://cdn3d.iconscout.com/3d/premium/thumb/social-media-app-5473289-4589249.png" }} style={[styles.ScrollImg, {}]} />
              <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 7 }}><Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>digital market</Text></View>
            </View>
            <View style={[styles.Scrollview, { backgroundColor: "#FAF6DB" }]}>
              <Image source={{ uri: "https://img.pikbest.com/png-images/20210414/social-media-marketing-illustration-red_5845297.png!bw700" }} style={[styles.ScrollImg, {}]} />
              <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 7 }}><Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>digital market</Text></View>
            </View>
            <View style={styles.Scrollview}>
              <Image source={{ uri: "https://cdn3d.iconscout.com/3d/premium/thumb/new-social-media-notification-5473287-4589247.png" }} style={[styles.ScrollImg, {}]} />
              <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 7 }}><Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>digital market</Text></View>
            </View>
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
      {
        showModel ?
          <Animated.View style={[styles.ModelView,
          {
            transform: [
              { translateX: position.x },
              { translateY: position.y }
            ]
          }
          ]}>
            <View style={styles.ModelTopView}>
              <View style={styles.ContentView}>

                <Text style={styles.ModelTopViewText}>Get your position in digital marketing</Text>
              </View>
              <View style={[styles.ContentView, { justifyContent: "flex-end", alignItems: "flex-end" }]}>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/4340/4340207.png" }} style={styles.ProImg} />

              </View>
            </View>
            <View style={styles.PriceView}>
              <Text style={styles.ModelTopTextPrice}>Price:$400</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.detailsText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</Text>
            </View>
            <TouchableOpacity style={[styles.Modelviewbtn]} onPress={() => { setShowModel(false) }}>
              <Text style={styles.ModelviewTextbtn}>Enroll Now</Text>
            </TouchableOpacity>
          </Animated.View>

          : null
      }


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
    position: 'absolute',
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
    fontWeight: "800"
  },
  PriceView: {
    marginHorizontal: 25
  },
  details: {
    marginHorizontal: 15,
    fontWeight: "700"
  },
  Modelviewbtn: {
    borderWidth: 1,
    backgroundColor: "black",
    marginHorizontal: 30,
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
  }

});
export default Home