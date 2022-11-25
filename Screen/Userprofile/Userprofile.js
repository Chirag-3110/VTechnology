import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Animated,
  Image,
  Easing,
  StatusBar,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';
import Svg, {Path, Rect} from 'react-native-svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const {width, height} = Dimensions.get('screen');

function Userfile() {
  return (
    <View style={{flex: 1}}>
      <LinearGradient colors={['white', 'pink']} style={{flex: 1}}>
        <View style={styles.header1}>

          <View style={styles.header2}>
          <Image
                source={require('../../assests/leftarrow.png')}
                style={styles.next3}
              />
            <Text style={styles.heading}>Profile</Text>
          </View>
          <View style={styles.profile1}>
            <TouchableHighlight
              style={{
                borderRadius:
                  Math.round(
                    Dimensions.get('window').width +
                      Dimensions.get('window').height,
                  ) / 2,
                width: Dimensions.get('window').width * 0.5,
                height: Dimensions.get('window').width * 0.5,
                // backgroundColor: 'white',
                opacity: 0.7,
                backgroundColor: 'pink',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
              }}
              underlayColor="#ccc"
              onPress={() => alert('Yaay!')}>
              <Text> Mom, look, I am a circle! </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.container1}>

            <View style={styles.container3}>
                 <Image
                     source={require('../../assests/refresh.png')}
                     style={styles.next2}
                  />
                <Text style={styles.container2}>Privacy & Setting</Text>
                   <Image
                   source={require('../../assests/rightarrow.png')}
                   style={styles.nextarrow}
                   />
            </View>

            <View style={styles.container3}>
              <Image
                source={require('../../assests/notification1.png')}
                style={styles.next3}
              />
              <Text style={styles.container5}>Notification</Text>
              <Image
                source={require('../../assests/rightarrow.png')}
                style={styles.next1}
              />
            </View>
            <View style={styles.container3}>
              <Image
                source={require('../../assests/schedule.png')}
                style={styles.next4}
              />
              <Text style={styles.container4}>Order History</Text>
              <Image
                source={require('../../assests/rightarrow.png')}
                style={styles.next1}
              />
            </View>
          
          </View>
          <View style={styles.signout}>
          <Image
                source={require('../../assests/exit.png')}
                style={styles.next5}
              />
              <Text style={styles.container6}>Sign Out</Text>
            </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  header1: {
    margin: 24,
    // alignItems: 'center',
  },
  header2:{
    flexDirection:"row"
  },
  heading:{
    marginTop:25,
    alignSelf:"center",
    marginLeft:80,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
   fontSize:20
  },
  profile1: {
    margin: 50,
  },
  next3: {
    height: 30,
    width: 30,
   alignSelf:"flex-start",
    marginTop: 20,
  marginRight:35
  },
  next2: {
    height: 30,
    width: 30,
   alignSelf:"flex-start",
    marginTop: 20,
    marginStart:3
  },
  next4: {
    height: 30,
    width: 30,
   alignSelf:"flex-start",
    marginTop: 20,
    marginRight:18
  },
  next1: {
    margin: 25,
    height: 35,
    width: 35,
    alignSelf: 'flex-end',
    marginLeft:80
  },
  nextarrow:{
    margin: 25,
    height: 35,
    width: 35,
    alignSelf: 'flex-end',
    marginLeft:65
  },
  next5:{
    height:25,
    width:25
  },
  container1: {
    alignItems: 'center',
    margin: 25,
  },
  container2: {
    margin: 25,
  },
  container4:{
    marginTop:26,
    marginRight:40
  },
  container5:{
    marginTop:26,
   paddingRight:40
  },
  container3: {
    flexDirection: 'row',
  },
  container6:{
    // marginTop:2,
  marginLeft:10
  },
  signout:{
    flexDirection:"row",
    marginLeft:20,
    backgroundColor:"pink",
    width:100,
    borderRadius:10,
    height:40,
    alignContent:"center",
    alignItems:"center"
  }
});
export default Userfile;
