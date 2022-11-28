import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import UpcomingMatchs from '../components/UpcomingMatchs';
import Prediction from '../Screens/Prediction';

const Stack = createNativeStackNavigator();
const StackInsideTabs = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Upcoming' component={UpcomingMatchs}/>
        <Stack.Screen name='Prediction' component={Prediction}/>
        
    </Stack.Navigator>
  )
}

export default StackInsideTabs

const styles = StyleSheet.create({})