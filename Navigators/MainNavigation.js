import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Home from "../Screen/HomeScreen/Home";
import Service from "../Screen/HomeScreen/Service";
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { NavigationContainer } from '@react-navigation/native';

const MainNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <NavigationContainer> */}
        <CurvedBottomBar.Navigator
          style={styles.bottomBar}
          strokeWidth={1}
          strokeColor="#FF00E1"
          height={55}
          circleWidth={55}
          bgColor="white"
          initialRouteName="Home"
          // borderTopLeftRight
          renderCircle={({ selectedTab, navigate }) => (
            <Animated.View style={styles.btnCircle}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}
                onPress={() => Alert.alert('Click Action')}>
              </TouchableOpacity>
            </Animated.View>
          )}
          >
          <CurvedBottomBar.Screen
            name="Home"
            position="LEFT"
            component={Home}
          />
          <CurvedBottomBar.Screen
            name="Service"
            component={Service}
            position="RIGHT"
          />
        </CurvedBottomBar.Navigator>
      {/* </NavigationContainer> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
});
export default MainNavigator;