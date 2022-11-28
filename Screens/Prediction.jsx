import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackHeader from '../components/BackHeader';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { COLORS } from '../colors';
import LeaderBoardComp from '../components/LeaderBoardComp'

import WinningsComp from '../components/WinningsComp'
import PredictionComp from '../components/PredictionComp'
const Tab = createMaterialTopTabNavigator();



const Prediction = ({navigation}) => {
  return (
    <View style={styles.PredictionContainer}>
     
      <BackHeader navigation={navigation}/>

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
        <Tab.Screen  name="Prediction" component={PredictionComp} />
        <Tab.Screen name="Winnings" component={WinningsComp} />
        <Tab.Screen name="Leaderboard" component={LeaderBoardComp} />
      </Tab.Navigator>
    </View>

  )
}

export default Prediction

const styles = StyleSheet.create({
    PredictionContainer:{
        flex:1
    }
})