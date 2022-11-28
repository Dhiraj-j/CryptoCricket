import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from './Home';
import MyWallet from './MyWallet';
import Prediction from './Prediction';

const MainHome = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Wallet' component={MyWallet}/>
        <Stack.Screen name='Predictions' options={{headerShown:false}} component={Prediction}/>
    </Stack.Navigator>
  )
}

export default MainHome

const styles = StyleSheet.create({})