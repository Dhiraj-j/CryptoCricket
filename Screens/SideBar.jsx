import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../colors';
import Cross from '../assets/Images/Cross.png';
const SideBar = ({navigation}) => {
  return (
    <View style={styles.SideBarContainer}>
      <TouchableOpacity
        style={{
          marginTop: 20,
          marginLeft: 20,
          width:40
        }}
        onPress={()=>navigation.closeDrawer()}
        >
        <Image style={styles.CloseButton} source={Cross} />
      </TouchableOpacity>
      <View style={styles.SideBarOptions} >
        <TouchableOpacity onPress={()=>navigation.navigate('MyPredictions')}>
          <Text style={styles.SideBarTitle}>My Predictions</Text>
        </TouchableOpacity>
        <View style={styles.RedLine} />
        <TouchableOpacity onPress={()=>navigation.navigate('Fantasy')}>
          <Text style={styles.SideBarTitle}>Fantasy Cricet</Text>
        </TouchableOpacity>
        <View style={styles.RedLine} />
        <TouchableOpacity onPress={()=>navigation.navigate('Staking')}>
          <Text style={styles.SideBarTitle}>Staking</Text>
        </TouchableOpacity>
        <View style={styles.RedLine} />
        <TouchableOpacity onPress={()=>navigation.navigate('Address')}>
          <Text style={styles.SideBarTitle}>Address</Text>
        </TouchableOpacity>
        <View style={styles.RedLine} />
        <TouchableOpacity>
          <Text style={styles.SideBarTitle}>Terms and Conditions</Text>
        </TouchableOpacity>
        <View style={styles.RedLine} />
        <TouchableOpacity>
          <Text style={styles.SideBarTitle}>Privacy Policy</Text>
        </TouchableOpacity>
        <View style={styles.RedLine} />
      </View>
    </View>
  );
};

export default SideBar;

const styles = StyleSheet.create({
  SideBarContainer: {
    flex: 1,
  },
  RedLine: {
    width: '70%',
    backgroundColor: COLORS.red,
    height: 2,
    borderRadius: 2,
  },
  SideBarOptions: {
    height: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: '20%',
  },
  SideBarTitle: {
    marginVertical: 3,
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.red,
  },
  CloseButton: {
    width: 40,
    height: 40,
  },
});
