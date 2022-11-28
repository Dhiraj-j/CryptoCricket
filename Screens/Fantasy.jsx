import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../colors'

const Fantasy = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:COLORS.white}}>
      <Text style={{color:COLORS.red,fontWeight:'700',fontSize:24}}>Comming Soon</Text>
    </View>
  )
}

export default Fantasy

const styles = StyleSheet.create({
    
})