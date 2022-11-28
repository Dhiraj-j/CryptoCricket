import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../colors.js';

import BUSD from '../assets/Images/BUSD.png';
import Ball from '../assets/Images/BALL.png';
import Forward from '../assets/Images/Forward.png';
import Wallet from '../assets/Images/Wallet.png';
import Gift from '../assets/Images/Gift.png';
import Profile from '../assets/Images/Profile.png';
import TeamCSK from '../assets/Images/TeamCSK.png';
import TeamPK from '../assets/Images/TeamPK.png';

const MyWallet = () => {
  return (
    <View style={styles.WalletScreenContainer}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.ProfilePic}>
          <Image style={{height: 55, width: 55}} source={Profile} />
        </View>
        <Text style={{fontWeight: '500', fontSize: 20, color: COLORS.blue}}>
          OXA8....7D6B
        </Text>
      </View>

      {/* Wallet Card Start Here  */}

      <View style={{width:'100%', height:'50%', justifyContent:'center', alignItems:'center'}}> 
      <View style={styles.WalletCard}>
        <View style={styles.WalletCardTop}>
          <TouchableOpacity style={styles.walletButton}>
            <Image source={Wallet} style={{width: 25, height: 25}} />
            <Text
              style={{
                textAlign: 'center',
                color: '#fff',
                fontSize: 14,
                fontWeight: '500',
              }}>
              Your Wallet
            </Text>
          </TouchableOpacity>
          <Text style={{color: COLORS.red, fontSize: 14, fontWeight: '600'}}>
            oXa8...7D6B
          </Text>
        </View>
        <View style={styles.WalletCardBottom}>
          <View style={styles.Table}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={Ball} style={{width: 25, height: 25}} />
              <Text style={styles.TableText}>BALL</Text>
            </View>
            <Text style={styles.TableText}>0.000 BALL</Text>
          </View>
          <View style={styles.Table}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={BUSD} style={{width: 25, height: 25}} />
              <Text style={styles.TableText}>BUSD</Text>
            </View>
            <Text style={styles.TableText}>0.000 BUSD</Text>
          </View>
        </View>

      </View>
        <TouchableOpacity style={styles.ClaimRewardButton}>
        <View style={{flexDirection: 'row'}}>
          <Image style={{width: 20, height: 20}} source={Gift} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',
              color: COLORS.blue,
              paddingHorizontal: 10,
            }}>
            Claim Rewards
          </Text>
        </View>
        <Image style={{width: 20, height: 20}} source={Forward} />
      </TouchableOpacity>
     </View>

      
      {/* Wallet Card End Here  */}

      {/* Wallet Disconnect Button  */}

      {/* <TouchableOpacity style={styles.ClaimRewardButton}>
        <View style={{flexDirection: 'row'}}>
          <Image style={{width: 20, height: 20}} source={Gift} />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '400',
              color: COLORS.blue,
              paddingHorizontal: 10,
            }}>
            Claim Rewards
          </Text>
        </View>
        <Image style={{width: 20, height: 20}} source={Forward} />
      </TouchableOpacity> */}

      {/* Wallet Disconnect Button  */}
        
      <TouchableOpacity style={styles.DisconnectButton}>
        <Text style={{fontSize: 16, fontWeight: '500', color: COLORS.white}}>
          Disconnect
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyWallet;

const styles = StyleSheet.create({
  WalletScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.white,
  },

  ProfilePic: {
    height: 55,
    width: 55,
    borderRadius: '50%',
  },
  // Mactch Card Design Start
  WalletCard: {
    width: '90%',
    height: '50%',
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 6,
    backgroundColor: COLORS.white,
  },
  WalletCardTop: {
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.lightGray,
  },
  WalletCardBottom: {
    padding: 15,
  },

  TeamLogo: {
    width: 45,
    alignSelf: 'center',
    height: 45,
  },
  walletButton: {
    backgroundColor: COLORS.red,
    borderRadius: 5,
    width: '45%',
    height: '90%',
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  TableText: {
    fontSize: 15,
    color: COLORS.blue,
    fontWeight: '400',
  },
  Table: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  DisconnectButton: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: COLORS.red,
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
  },
  ClaimRewardButton: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});
