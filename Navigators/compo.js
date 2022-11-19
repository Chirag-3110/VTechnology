import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const compo = () => {
  return (
    <View>
      <Text style={styles.create}>compo</Text>
    </View>
  )
}

export default compo

const styles = StyleSheet.create({
    create:{
        backgroundColor:red,
        position: 'absolute',
            backgroundColor: 'white',
            border: 5,
            borderWidth:1,
            borderColor:"#EDEADE",
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
    }
})