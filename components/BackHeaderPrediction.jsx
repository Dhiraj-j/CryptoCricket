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
  
  const BackHeaderPrediction = ({navigation}) => {
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
            <Text style={styles.HeaderText}>My Predictions</Text>
          </View>
        </View>
      </ImageBackground>
    );
  };
  
  export default BackHeaderPrediction;
  
  const styles = StyleSheet.create({
    // NavBar Hearder
    NavBar: {
      width: '100%',
      minHeight: '10%',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf:'center'
    },
    Center: {
      width: '82%',
    },
    HeaderText: {
      fontSize: 18,
      fontWeight: '600',
      color: COLORS.lightGray,
      textAlign: 'center',
        
    },
    icons: {
      width: 30,
      height: 30,
    },
   
  });
  