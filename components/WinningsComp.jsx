import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../colors';

const WinningsComp = () => {
  return (
    <View style={styles.WinningsCompContainer}>
      <View style={styles.TopCardContainer}>
        <View style={{height: '90%', justifyContent: 'flex-end'}}>
          <Text style={{fontSize: 14, fontWeight: '500', color: COLORS.blue}}>
            Prize Breakup
          </Text>
        </View>
        <View>
          <Text style={{textAlign: 'right'}}>BUSD</Text>
          <Text style={{fontSize: 20, fontWeight: '500', color: COLORS.blue}}>
            212,500
          </Text>
        </View>
      </View>

      <View style={styles.Seprator}>
        <Text style={{fontSize: 14, fontWeight: '500'}}>Rank</Text>
        <Text style={{fontSize: 14, fontWeight: '500'}}>Prize</Text>
      </View>

      <View style={styles.PrizeCard}>
        <Text style={{fontSize: 14, fontWeight: '400', color: COLORS.blue}}>
          #1
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', color: COLORS.blue}}>
          1,000 BUSD
        </Text>
      </View>

      <View style={styles.PrizeCard}>
        <Text style={{fontSize: 14, fontWeight: '400', color: COLORS.blue}}>
          #2 to 10
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', color: COLORS.blue}}>
          800 BUSD
        </Text>
      </View>

      <View style={styles.PrizeCard}>
        <Text style={{fontSize: 14, fontWeight: '400', color: COLORS.blue}}>
          #10 to 100
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', color: COLORS.blue}}>
          500 BUSD
        </Text>
      </View>
      <View style={styles.PrizeCard}>
        <Text style={{fontSize: 14, fontWeight: '400', color: COLORS.blue}}>
          #100 to 500
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', color: COLORS.blue}}>
          100 BUSD
        </Text>
      </View>

      <View style={styles.PrizeCard}>
        <Text style={{fontSize: 14, fontWeight: '400', color: COLORS.blue}}>
          #500 to 1000
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', color: COLORS.blue}}>
          80 BUSD
        </Text>
      </View>

      <View style={styles.PrizeCard}>
        <Text style={{fontSize: 14, fontWeight: '400', color: COLORS.blue}}>
          #1000 to 5000
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', color: COLORS.blue}}>
          70 BUSD
        </Text>
      </View>

      <View style={styles.PrizeCard}>
        <Text style={{fontSize: 14, fontWeight: '400', color: COLORS.blue}}>
          #5000 to 10000
        </Text>
        <Text style={{fontSize: 14, fontWeight: '400', color: COLORS.blue}}>
          50 BUSD
        </Text>
      </View>
    </View>
  );
};

export default WinningsComp;

const styles = StyleSheet.create({
  WinningsCompContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  TopCardContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    height: '12%',
  },
  Seprator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingHorizontal: '6%',
    marginBottom: 5,
  },
  PrizeCard: {
    width: '90%',
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    borderRadius: 5,
    height: '8%',
    marginVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
