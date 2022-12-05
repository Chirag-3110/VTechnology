import React from 'react'
import { View, Text, Animated, Image, StyleSheet, Modal, Dimensions, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
const windoWidth = Dimensions.get('window').width;
const Onboardingscreen=({navigation})=>{
  return (

      <Onboarding
        onSkip={()=>navigation.replace("login")}
        onDone={()=>navigation.replace("login")}
        pages={[
          {
            backgroundColor: '#E293FA',
            image: <Lottie
            source={require('../../lottiesAnimations/89806-digital-marketing.json')} autoPlay loop style={{ height: 350,width: windoWidth }} />,
            title: 'Email Marketing',
            subtitle: 'Make the customer the hero of your story',
          },
          {
            backgroundColor: '#4169E1',
            image: <Lottie
            source={require('../../lottiesAnimations/90837-digital-marketing.json')} autoPlay loop style={{ height: 300,width: windoWidth,  justifyContent: "center", alignItems: "center" }} />,
            title: 'Digital Marketing',
            subtitle: 'Good marketing makes the company look smart. Great marketing makes the customer feel smart',
          },
          {
            backgroundColor: '#FF974F',
            image: <Lottie
            source={require('../../lottiesAnimations/99954-digital-marketing-services.json')} autoPlay loop style={{ height: 300,width: windoWidth,  justifyContent: "center", alignItems: "center" }} />,
            title: 'Marketing',
            subtitle: 'Business has only two functions- marketing and innovation',
          },
          
        ]}
      />
  )
}

export default Onboardingscreen
