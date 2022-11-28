import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import {COLORS} from '../colors.js';
import NavBG from '../assets/Images/NavBackground.png';
import Logo from '../assets/Images/Logo.png';
import Menu from '../assets/Images/Menu.png';
import Wallet from '../assets/Images/Wallet.png';

const Header = ({navigation}) => {
  return (
    <ImageBackground
      source={NavBG}
      resizeMode="cover"
      style={{width: '100%', minHeight: '6%'}}>
      <View style={styles.NavBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image style={styles.icons} source={Menu} />
        </TouchableOpacity>
        <View>
          <Image style={styles.LogoIcon} source={Logo} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
          <Image style={styles.icons} source={Wallet} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  // NavBar Hearder
  NavBar: {
    width: '100%',
    minHeight: '6%',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icons: {
    width: 45,
    height: 45,
  },
  LogoIcon: {
    width: 150,
    height: 50,
  },

  // Carusal image

  Banner: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    alignSelf: 'center',
  },

  // Mactch Card Design Start
  MatchCard: {
    width: '95%',
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    padding: 5,
    marginVertical: 5,
    elevation: 2,
    borderRadius: 6,
    backgroundColor: COLORS.white,
  },
  MatchCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  MatchCardMiddle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MatchCardBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 3,
  },
  TeamLogo: {
    width: 45,
    alignSelf: 'center',
    height: 45,
  },
});
