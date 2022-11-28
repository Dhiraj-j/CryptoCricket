import { View, Text } from 'react-native'
import React from 'react'

import LiveMatchs from '../components/LiveMatchs.jsx';
import UpcomingMatchs from '../components/UpcomingMatchs.jsx';
import CompleteMatchs from '../components/CompleteMatchs.jsx';
import Header from '../components/Header.jsx';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { COLORS } from '../colors.js';

const Tab = createMaterialTopTabNavigator();

const Prediction = ({caller='Home',navigation}) => {
    console.log(caller)
  return (
    <>
    <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle: {fontSize: 14,fontWeight:'500' },
          tabBarItemStyle:{borderColor:COLORS.gray, borderEndWidth:1,height:40, },
          tabBarStyle:{paddingVertical:12},
          tabBarPressColor:COLORS.red,
          tabBarIndicatorStyle:{backgroundColor:COLORS.red},
          tabBarActiveTintColor:COLORS.red,
          tabBarInactiveTintColor:COLORS.gray 
        }}
        style={{height: '70%', width: '100%'}}>
        <Tab.Screen   name="Upcoming"  children = {()=><UpcomingMatchs caller={caller} navigation={navigation}/>} />
        <Tab.Screen name="Live" children = {()=><LiveMatchs caller={caller} navigation={navigation}/>} />
        <Tab.Screen name="Completed" children = {()=><CompleteMatchs caller={caller} navigation={navigation}/>}/>
      </Tab.Navigator>
    </>
  )
}

export default Prediction