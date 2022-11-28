import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Address = () => {
  return (
    <View style={styles.AddressContainer}>
      <Text>Address</Text>
    </View>
  )
}

export default Address

const styles = StyleSheet.create({
  AddressContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})