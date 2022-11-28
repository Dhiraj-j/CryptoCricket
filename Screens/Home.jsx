import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../colors.js';
import Banner from '../assets/Images/Banner.png';
import Header from '../components/Header.jsx';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Prediction from '../components/Prediction.jsx';

const Tab = createMaterialTopTabNavigator();
const Home = ({navigation}) => {
 
  return (
    <View style={styles.HomeScreenContainer}>
      {/* Navbar  */}
    <Header navigation={navigation}/>

      {/* carousel Sections  */}

      <View style={{width: '95%', height: '15%', marginVertical: 10}}>
        <Image style={styles.Banner} source={Banner} />
      </View>

      {/* carousel Sections End */}

      <Prediction navigation={navigation}/>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  HomeScreenContainer: {
    flex: 1,
    alignItems: 'center',
  },
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
