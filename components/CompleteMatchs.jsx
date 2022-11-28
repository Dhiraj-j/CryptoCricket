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
import axios from 'axios';
import {getCompleted, getLive} from '../API/ContestFetch';

const CompleteMatchs = ({navigation, caller}) => {
  useEffect(() => {
    // getCompleteHome();
    caller==='Home'?
    getCompleteHome():getLiveHome()
  }, []);
  const [completeMatchs, setCompleteMatchs] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const getCompleteHome = () => {
    console.log('first')
    setIsLoading(true);
    getCompleted()
    .then(res => {
        setCompleteMatchs(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getLiveHome = async () => {
    console.log('second')
    setIsLoading(true)
    try{
    const res = await getLive()
    if(res) {
        setCompleteMatchs(res.data);
        setIsLoading(false)
        console.log(res.data)
      }
    }catch(err){
      console.log(err);
    } 
  };

  // const getData = async() => {
  //     try {
  //       const fetchData = await axios.get('http://13.126.65.164:4000/api/contests?status=completed');
  //       setCompleteMatchs(fetchData.data);
  //       console.log(fetchData)
  //     } catch (error) {
  //       console.log(error)
  //     }
  // }

  //   const getData2 = async() => {
  //     try {
  //       const fetchData = await axios.get('http://13.126.65.164:4000/api/contests?status=live');
  //       setCompleteMatchs(fetchData.data);
  //       console.log(fetchData)
  //     } catch (error) {
  //       console.log(error)
  //     }
  // }

  const oneMatch = ({item}) => {
    return (
      <TouchableOpacity
        disabled={isLoading}
        onPress={() => navigation.navigate('Predictions')}
        style={styles.MatchCard}>
        <View style={styles.MatchCardTop}>
          <Text>{item.Series.seriesName}</Text>
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
              <Text style={{alignSelf: 'center'}}>
                {item.TeamA.displayName}
              </Text>
              <Image style={styles.TeamLogo} source={TeamCSK} />
            </View>
          </ImageBackground>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <View>
              <Text style={styles.ScoreText}>165/6</Text>
              <Text style={styles.OverScoreText}>(19.5)</Text>
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 11,
                fontWeight: '500',
                color: '#019543',
                marginHorizontal: 10,
              }}>
              Completed
            </Text>
            <View>
              <Text style={styles.ScoreText}>165/6</Text>
              <Text style={styles.OverScoreText}>(20)</Text>
            </View>
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
              <Text style={{alignSelf: 'center'}}>
                {item.TeamB.displayName}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.MatchCardBottom}>
          <Text style={{textAlign: 'center'}}>
            CSK won the match by 3 wickets
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={completeMatchs}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={ caller==='Home'?
          getCompleteHome:getLiveHome} />

        }
        ListEmptyComponent={<Text style={{textAlign:'center',marginTop:20}}> No complete Matchs  </Text>}
        renderItem={oneMatch}
      />
      {/* <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
        style={{width: '100%'}}>

        <TouchableOpacity style={styles.MatchCard}>
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
            <View style={{alignItems:'center',flexDirection:'row',}}>
              <View>
                <Text style={styles.ScoreText}>165/6</Text>
                <Text style={styles.OverScoreText}>(19.5)</Text>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 11,
                  fontWeight: '500',
                  color: '#019543',
                  marginHorizontal:10
                }}>
                Completed
              </Text>
              <View>
                <Text style={styles.ScoreText}>165/6</Text>
                <Text style={styles.OverScoreText}>(20)</Text>
              </View>
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
              CSK won the match by 3 wickets
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView> */}
    </View>
  );
};

export default CompleteMatchs;

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
  ScoreText: {
    fontWeight: '500',
    fontSize: 14,
    color: COLORS.blue,
    textAlign: 'center',
  },
  OverScoreText: {
    fontWeight: '400',
    fontSize: 12,
    color: COLORS.gray,
    textAlign: 'center',
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
