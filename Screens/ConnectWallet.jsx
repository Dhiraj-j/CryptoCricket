import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../colors';

const ConnectWallet = () => {
  return (
    <View style={styles.ConnectWalletContainer}>
      <View style={styles.WalletContent}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              color: COLORS.blue,
              fontWeight: '500',
              marginVertical: 10,
            }}>
            Connect Wallet
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: COLORS.gray,
              fontWeight: '400',
              textAlign: 'center',
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </Text>
        </View>
        <TouchableOpacity style={styles.ConnectWallet}>
          <Text style={{fontSize: 17,
              color: COLORS.blue,
              fontWeight: '400',}}>METAMASK</Text>
        </TouchableOpacity>

        <View >
          <Text style={{textAlign:'center',color:COLORS.blue,fontSize:12,fontWeight:'500'}}>By Connecting Wallet you Agree to the</Text>
          <Text style={{textAlign:'center',color:COLORS.blue}}>
            <Text style={{color:COLORS.red}}>Terms of Services</Text> & <Text style={{color:COLORS.red}}>Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ConnectWallet;

const styles = StyleSheet.create({
  ConnectWalletContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  WalletContent: {
    width: '85%',
    height: '90%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  ConnectWallet:{
    backgroundColor: '#EFAB6C',
    width: '80%',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
});


