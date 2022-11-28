import { StyleSheet, View } from 'react-native'
import React from 'react'
import BackHeaderPrediction from '../components/BackHeaderPrediction';
import Prediction from '../components/Prediction';



const MyPredictions = ({navigation}) => {
  return (
    <View style={styles.MyPredictionsContainer}>
      <BackHeaderPrediction navigation={navigation}/>
      <Prediction caller='MyPredictions' navigation={navigation} />
    </View>
  )
}

export default MyPredictions

const styles = StyleSheet.create({
  MyPredictionsContainer:{
    flex:1
  }
})