import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../Home';
// import Service from '../Service';
// import Setting from '../Setting';
// import Profile from '../Profile';
// import Home1 from '../Home1';
const Tab1 = createBottomTabNavigator();
function BottomTabNew() {
    return (
        <Tab1.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: 'green', borderColor: "red" },
                // tabBarShowLabel: false,
                tabBarIconStyle: { color: "red" },
                // tabBarActiveBackgroundColor: "red",
                borderColor: "white",
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    right: 20,
                    left: 20,
                    elevation: 0,
                    // backgroundColor: "grey",
                    borderRadius: 15,
                    height: 90
                },
                tabBarIconStyle: {
                    color: "red",
                    backgroundColor: "red"
                }
            }}
        >
            {/* <Tab1.Screen name="Home" component={Home} /> */}
            {/* <Tab1.Screen name="Service" component={Service} />
            <Tab1.Screen name="Setting" component={Setting} />
            <Tab1.Screen name="Profile" component={Profile} />
            <Tab1.Screen name="Home1" component={Home1} /> */}
        </Tab1.Navigator>
    )
}

export default BottomTabNew;