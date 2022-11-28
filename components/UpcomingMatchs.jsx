import {
  FlatList,
  Image,
  ImageBackground,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS} from '../colors';
import CardBgLeft from '../assets/Images/CardBgLeft.png';
import CardBgRight from '../assets/Images/CardBgRight.png';
import TeamCSK from '../assets/Images/TeamCSK.png';
import TeamPK from '../assets/Images/TeamPK.png';
import {getUpcoming} from '../API/ContestFetch';

const UpcomingMatchs = ({navigation, caller}) => {
  useEffect(() => {
    getUpcomingHome();
  }, []);
  const [upcomingMatchs, setUpcomingMatchs] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getUpcomingHome = async () => {
    await getUpcoming()
      .then(res => {
        setIsLoading(true);
        setUpcomingMatchs(res.data);
        // console.log(upcomingMatchs);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const oneMatch = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Predictions')}
        style={styles.MatchCard}>
        <View style={styles.MatchCardTop}>
          <Text>TATA IPL</Text>
          <Text>Match 15 of 70</Text>
        </View>
        <View style={styles.MatchCardMiddle}>
          <ImageBackground
            source={CardBgLeft}
            resizeMode="cover"
            style={{width: 100, height: 50}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingTop: 2,
              }}>
              <Text style={{alignSelf: 'center'}}>CSK</Text>
              <Image style={styles.TeamLogo} source={TeamCSK} />
            </View>
          </ImageBackground>
          <View>
            <Text style={{textAlign: 'center'}}>Tomorrow</Text>
            <Text style={{fontSize: 20, fontWeight: '700'}}>07:30 PM</Text>
          </View>
          <ImageBackground
            source={CardBgRight}
            resizeMode="cover"
            style={{width: 100, height: 50}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingTop: 2,
              }}>
              <Image style={styles.TeamLogo} source={TeamPK} />
              <Text style={{alignSelf: 'center'}}>CSK</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.MatchCardBottom}>
          <Text style={{textAlign: 'center'}}>
            CSK won the toss and choose the batting
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      {
        // upcomingMatchs.length != 0 ?
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={getUpcomingHome}
            />
          }
          
          data={upcomingMatchs}
          renderItem={oneMatch}
          ListEmptyComponent={<Text style={{textAlign:'center',marginTop:20}}> No Upcoming Matchs  </Text>}
        />
        // : <Text>Currently No Upcoming Matchs</Text>
      }
      {/* <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
        style={{width: '100%'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Predictions')} style={styles.MatchCard}>
          <View style={styles.MatchCardTop}>
            <Text>TATA IPL</Text>
            <Text>Match 15 of 70</Text>
          </View>
          <View style={styles.MatchCardMiddle}>
            <ImageBackground
              source={CardBgLeft}
              resizeMode="cover"
              style={{width: 100, height: 50}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  paddingTop: 2,
                }}>
                <Text style={{alignSelf: 'center'}}>CSK</Text>
                <Image style={styles.TeamLogo} source={TeamCSK} />
              </View>
            </ImageBackground>
            <View>
              <Text style={{textAlign: 'center'}}>Tomorrow</Text>
              <Text style={{fontSize: 20, fontWeight: '700'}}>07:30 PM</Text>
            </View>
            <ImageBackground
              source={CardBgRight}
              resizeMode="cover"
              style={{width: 100, height: 50}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  paddingTop: 2,
                }}>
                <Image style={styles.TeamLogo} source={TeamPK} />
                <Text style={{alignSelf: 'center'}}>CSK</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.MatchCardBottom}>
            <Text style={{textAlign: 'center'}}>
              CSK won the toss and choose the batting
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView> */}
    </View>
  );
};

export default UpcomingMatchs;

const styles = StyleSheet.create({
  MatchCard: {
    width: '95%',
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    padding: 5,
    marginVertical: 5,
    elevation: 2,
    borderRadius: 6,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
  },
  MatchCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    width: '90%',
    borderBottomWidth: 1,
    borderColor: COLORS.lightGray,
    marginBottom: 5,
    alignSelf: 'center',
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
    borderTopWidth: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: 7,
    borderColor: COLORS.lightGray,
  },
  TeamLogo: {
    width: 45,
    alignSelf: 'center',
    height: 45,
  },
});
