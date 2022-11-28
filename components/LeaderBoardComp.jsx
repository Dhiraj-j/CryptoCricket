import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../colors'
import Dp from '../assets/Images/Dp.png'

const LeaderBoardComp = () => {
  return (
    <View style={styles.LeaderBoardCompContainer}>
      <View style={styles.TopCardContainer}>
        <View style={{height: '90%', justifyContent: 'flex-end'}}>
          <Text style={{fontSize: 14, fontWeight: '500', color: COLORS.blue}}>
            Hot Contest
          </Text>
        </View>
        <View>
          <Text style={{textAlign: 'right'}}>Sports</Text>
          <Text style={{fontSize: 20, fontWeight: '500', color: COLORS.blue}}>
            10
          </Text>
        </View>
      </View>

      <View style={styles.Seprator}>
        <Text style={{fontSize: 14, width:'40%', fontWeight: '500'}}>Team</Text>
        <Text style={{fontSize: 14, fontWeight: '500'}}>Points</Text>
        <Text style={{fontSize: 14, fontWeight: '500'}}>Rank</Text>
      </View>


      <View style={styles.PlayerCard}>
        <View style={{width:'36%',flexDirection:'row', alignItems:'center'}}>

        <Image style={{width:30,height:30,borderRadius:15}} source={Dp}/>
        <Text style={{fontSize: 14,paddingLeft:'7%', fontWeight: '400', color: COLORS.blue}}>
          Subhani Sayyad
        </Text>
        </View>
        <Text>0 Pts</Text>
        <Text style={{fontSize: 14, fontWeight: '400'}}>
          #0
        </Text>
      </View>

      <View style={styles.PlayerCard}>
        <View style={{width:'36%',flexDirection:'row', alignItems:'center'}}>

        <Image style={{width:30,height:30,borderRadius:15}} source={Dp}/>
        <Text style={{fontSize: 14,paddingLeft:'7%', fontWeight: '400', color: COLORS.blue}}>
          Subhani Sayyad
        </Text>
        </View>
        <Text>0 Pts</Text>
        <Text style={{fontSize: 14, fontWeight: '400'}}>
          #0
        </Text>
      </View>

      <View style={styles.PlayerCard}>
        <View style={{width:'36%',flexDirection:'row', alignItems:'center'}}>

        <Image style={{width:30,height:30,borderRadius:15}} source={Dp}/>
        <Text style={{fontSize: 14,paddingLeft:'7%', fontWeight: '400', color: COLORS.blue}}>
          Subhani Sayyad
        </Text>
        </View>
        <Text>0 Pts</Text>
        <Text style={{fontSize: 14, fontWeight: '400'}}>
          #0
        </Text>
      </View>

      <View style={styles.PlayerCard}>
        <View style={{width:'36%',flexDirection:'row', alignItems:'center'}}>

        <Image style={{width:30,height:30,borderRadius:15}} source={Dp}/>
        <Text style={{fontSize: 14,paddingLeft:'7%', fontWeight: '400', color: COLORS.blue}}>
          Subhani Sayyad
        </Text>
        </View>
        <Text>0 Pts</Text>
        <Text style={{fontSize: 14, fontWeight: '400'}}>
          #0
        </Text>
      </View>

      <View style={styles.PlayerCard}>
        <View style={{width:'36%',flexDirection:'row', alignItems:'center'}}>

        <Image style={{width:30,height:30,borderRadius:15}} source={Dp}/>
        <Text style={{fontSize: 14,paddingLeft:'7%', fontWeight: '400', color: COLORS.blue}}>
          Subhani Sayyad
        </Text>
        </View>
        <Text>0 Pts</Text>
        <Text style={{fontSize: 14, fontWeight: '400'}}>
          #0
        </Text>
      </View>

      <View style={styles.PlayerCard}>
        <View style={{width:'36%',flexDirection:'row', alignItems:'center'}}>

        <Image style={{width:30,height:30,borderRadius:15}} source={Dp}/>
        <Text style={{fontSize: 14,paddingLeft:'7%', fontWeight: '400', color: COLORS.blue}}>
          Subhani Sayyad
        </Text>
        </View>
        <Text>0 Pts</Text>
        <Text style={{fontSize: 14, fontWeight: '400'}}>
          #0
        </Text>
      </View>

      

     
      

    </View>
  )
}

export default LeaderBoardComp

const styles = StyleSheet.create({
  LeaderBoardCompContainer:{
    flex:1,
    backgroundColor:COLORS.white,
    alignItems:'center'
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
  PlayerCard: {
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
  }
})