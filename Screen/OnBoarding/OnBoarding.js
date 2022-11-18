import React, { useEffect, useRef, useState } from 'react';
import { Animated, interpolate, TouchableOpacity, View, Text, FlatList, StyleSheet, Dimensions, Image } from 'react-native';
import NextScreen from './NextScreen';
import Paginator from './Paginator';
const windoWidth = Dimensions.get('window').width;
const windoHeight = Dimensions.get('window').height;
const DATA = [
  {
    id: '1',
    title: 'Digital Maketing',
    ImgUrl: "https://img.freepik.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg?w=2000"
  },
  {
    id: '2',
    title: 'Digital Maketing',
    ImgUrl: "https://tbamarketingblog.com/wp-content/uploads/2022/09/6-Case-Studies-to-Inspire-Your-Digital-Marketing-Campaign.jpg"
  },
  {
    id: '3',
    title: 'Digital Maketing',
    ImgUrl: "https://incredibleplanet.net/wp-content/uploads/2017/08/digital-marketing-1938274_1280-1280x715.png"
  }
];
const Onboarding = () => {
  // const { width } = useWindowDimensions();
  const [currentIndex, setcurrentIndex] = useState(0)
  const scrollX = new Animated.Value(0)
  const slidesRef = useRef(null)
  const viewbleItemchanged = useRef(({ viewableItems }) => {
    setcurrentIndex(viewableItems[0].index)
    // console.log(currentIndex)
  }).current
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current


  const scrollTo = () => {
    if (currentIndex < DATA.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
    else {

    }
  }
  const renderItem = ({ item }) => (
    <View >
      <Image style={{ width: windoWidth, height: windoHeight / 1.6 }}
        source={{ uri: item.ImgUrl }} />
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 25, color: "black", fontWeight: "800", textAlign: "center" }}>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <>
      <View style={[styles.FlatListView, { flex: 3 }]}>
        <FlatList
          bounces={false}
          pagingEnabled={true}
          horizontal={true}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,

          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewbleItemchanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={DATA} scrollX={scrollX} />
      <NextScreen scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / DATA.length)} />
    </>
  );
}
const styles = StyleSheet.create({
  main: {
    textAlign: 'center'
  },
  image: {
    // flex: "0.7",
    justifyContent: "center"
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center"
  },
  desc: {
    fontWeight: "300",
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    paddingHorizontal: 64
  },
  FlatListView: {
    // marginHorizontal: 10,
    width: windoWidth,
    height: windoHeight / 1.5
  },
  ImgLogo: {
    width: windoWidth,
    // height: 120,
    borderRadius: 11,
    flex: 0.7
  },
  ListView: {
    marginHorizontal: 15,
    width: windoWidth / 3,
    alignItems: 'center',
  },
})
export default Onboarding;