import React, { useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
  Text,
  Alert,
} from 'react-native';
import CustomSlider from '../components/CustomSlider';
import Home from '../Screen/HomeScreen/Home';
import Service from '../Screen/HomeScreen/Service';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {border} from 'native-base/lib/typescript/theme/styled-system';
import {Center} from 'native-base';

const Bottomtab=(props)=> {
    const [nav,setNav]=useState("Home");
    const [defaultColor,setDefaultColor]=useState('#AB47BC');
    const toggleOpen = (stateValue) => {
      setNav(stateValue)
      props.setRoute(stateValue)
    };
    return (
      <View
        style={{
          // flex:0,
          flexDirection: 'column',
          // backgroundColor: transparent',
          // borderTopRightRadius:100
        }}>
        <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            backgroundColor: 'yellow',
            width: 70,
            height: 70,
            borderRadius: 35,
            bottom: 35,
            zIndex: 10,
            // borderWidth:1,

            backgroundColor: 'white',
            shadowColor: '#FF00E1',
            shadowOffset: {
              width: 0,
              height: -10,
            },
            shadowOpacity: 0.58,
            shadowRadius: 20.0,
            elevation: 5,
          }}>
          <TouchableWithoutFeedback onPress={toggleOpen}>
            <View style={[styles.button, styles.actionBtn]}>
              <Image
                style={{width: 60, height: 60, borderRadius: 30}}
                resizeMode="contain"
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVXNQCuHs9hAmj4b56PO7WHXgnt5FAgH3AmbS2A1DRtPfdhU31_o7Gay1eaLPsK4vOnp4&usqp=CAU',
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            border: 5,
            borderWidth:1,
            radius: 3,
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
              height: 3,
              width: 3,
            },
            x: 0,
            y: 0,
            style: {marginVertical: 50},
            bottom: 0,
            width: '100%',
            height: 70,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 25,

            borderTopLeftRadius: 45,
            borderTopRightRadius: 45,
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={()=>toggleOpen("Home")}>
              <FontAwesome name="home" size={30} color={nav==='Home'? defaultColor :"grey"} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={()=>toggleOpen("Service")}>
              <FontAwesome name="search" size={28} color={nav==='Service'? defaultColor :"grey"} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginStart: 80,
            }}>
            <TouchableOpacity onPress={()=>toggleOpen("List")}>
              <FontAwesome name="list-ul" size={28} color={nav==='List'? defaultColor :"grey"} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginEnd: 6,
            }}>
            <TouchableOpacity onPress={()=>toggleOpen("Like")}>
              <FontAwesome name="heart" size={28} color={nav==='Like'? defaultColor :"grey"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}
export default Bottomtab;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {x: 2, y: 0},
    shadowRadius: 2,
    borderRadius: 30,
    position: 'absolute',
    bottom: 30,
    right: 0,
    top: 9,
    left: 9,
    shadowOpacity: 5.0,
    backgroundColor: 'pink',
  },
  actionBtn: {
    backgroundColor: '#1E90FF',
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
});
