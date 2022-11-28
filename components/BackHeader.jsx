import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../colors.js';
import NavBG from '../assets/Images/NavBackground.png';
import Back from '../assets/Images/Back.png';

const BackHeader = ({navigation}) => {
  return (
    <ImageBackground
      source={NavBG}
      resizeMode="cover"
      style={{width: '100%', minHeight: '10%'}}>
      <View style={styles.NavBar}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image style={styles.icons} source={Back} />
        </TouchableOpacity>
        <View style={styles.Center}>
          <View style={styles.LogoContainer}>
            <Image style={styles.LogoIcon} source={require('../assets/Images/TeamRC.png')} />
          </View>
          <View>
            <Text style={styles.HeaderText}>RCB  vs  KKR</Text>
            <Text style={styles.HeaderText}>7H : 30M</Text>
          </View>
          <View style={styles.LogoContainer}>
          <Image style={styles.LogoIcon} source={require('../assets/Images/TeamKR.png')} />
          </View>
        </View>
      </View>
          <Text style={{color:COLORS.lightGray, textAlign:'center', paddingBottom:8}}>RCB won the toss and choose the batting</Text>
    </ImageBackground>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  // NavBar Hearder
  NavBar: {
    width: '100%',
    minHeight: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth:0.5,
    borderBottomColor:COLORS.lightGray,
    margin:8,
    alignSelf:'center'
  },
  Center: {
    flexDirection: 'row',
    width: '85%',
    alignItems: 'center',
  },
  HeaderText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.lightGray,
    textAlign: 'center',
  },
  icons: {
    width: 45,
    height: 45,
  },
  LogoIcon: {
    width: 45,
    height: 45,
  }, 
  LogoContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.lightGray,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
