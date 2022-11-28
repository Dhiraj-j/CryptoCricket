import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../colors';
import axios from 'axios';

const options1 = [
  {option: 0},
  {option: 1},
  {option: 2},
  {option: 3},
];
const options2 = [
  {option: '0-2'},
  {option: '3-5'},
  {option: '6-8'},
  {option: '9-10'},
];

const PredictionComp = () => {
  const [SetOption1, setSetOption1] = useState('');
  const [SetOption2, setSetOption2] = useState('');
  const headers = {
    'Content-Type': 'application/json',
    'token':
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNTg3OTBhOTIwMmY0ZTFlYjM4OTciLCJwdWJsaWNBZGRyZXNzIjoiMFg0OEUwRjk1OUM4RDgxRDZDNEQ0OUI5MDU1OUU5NDEyRDdBMzU1RDRGIiwidG90YWxDb3VudE9mQ29udGVzdHMiOjAsImlhdCI6MTY2OTI5MTc5NH0.OZjnxZUyNSb4JYrDiK0dNFPg9NYbjAYm1Ysl0ps2kak',
  };
   var submitData = {
    answers:[0,55,0,0]
  }
  const postData = async() => {
    try {
      const res = await axios.post('http://3.108.42.76:3000/api/answers/638068ca21c18591eb85f263',submitData,{ headers:headers});
      console.log(res)
    } catch (error) {
      console.log(error);
      console.log('-----------')
    }
  }
  // const postData =  () => {
   

  //   axios.post('http://3.108.42.76:3000/api/answers/638068ca21c18591eb85f263',submitData,{ headers:headers} )
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // };

 


  return (
    <View style={styles.PredictionCompContainer}>
      <Text
        style={{
          textAlign: 'left',
          width: '90%',
          padding: 10,
          fontSize: 15,
          fontWeight: '500',
          color: COLORS.blue,
        }}>
        Prediction Contest
      </Text>
      <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
        style={{width: '100%'}}>
        <View style={styles.QuestionCard}>
          <Text style={styles.QuestionText}>
            <Text style={{color: COLORS.red}}> * </Text>
            What will be the score of SRH in the powerplay?
          </Text>
          <Text style={styles.QuestionText}> (Example: 36)</Text>
          <TextInput
            maxLength={3}
            keyboardType='phone-pad'
            textContentType='telephoneNumber'
            dataDetectorTypes='phoneNumber' 
            
            style={{
              borderBottomWidth: 1.5,
              borderBottomColor: COLORS.lightGray,
            }}
            placeholder="Short-answer Text"
          />
          <Text style={{textAlign: 'right', fontSize: 10}}>3 Points</Text>
        </View>

        <View style={styles.QuestionCard}>
          <Text style={styles.QuestionText}>
            <Text style={{color: COLORS.red}}> * </Text>
            What will be the opening partnership in SRH?
          </Text>
          <Text style={styles.QuestionText}> (Example: 36)</Text>
          <TextInput
            maxLength={3}
            keyboardType="number-pad"
            style={{
              borderBottomWidth: 1.5,
              borderBottomColor: COLORS.lightGray,
            }}
            placeholder="Short-answer Text"
          />
          <Text style={{textAlign: 'right', fontSize: 10}}>3 Points</Text>
        </View>

        <View style={styles.QuestionCard}>
          <Text style={styles.QuestionText}>
            <Text style={{color: COLORS.red}}> * </Text>
            How many sixes will SRH hit today?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {options1.map((item, index) => {
              return (
                <Pressable
                  key={index}
                  style={{width: '50%', flexDirection: 'row'}}
                  onPress={() => setSetOption1(item.option)}>
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderWidth: 0.5,
                      borderRadius: 15,
                      margin: 5,
                    }}>
                    {SetOption1 === item.option ? (
                      <View
                        style={{
                          width: 15,
                          height: 15,
                          borderWidth: 0.5,
                          borderRadius: 7.5,
                          backgroundColor: COLORS.black,
                          margin: 2,
                        }}
                      />
                    ) : null}
                  </View>
                  <Text style={{marginVertical: 5}}> {item.option}</Text>
                </Pressable>
              );
            })}
          </View>

          <Text style={{textAlign: 'right', fontSize: 10}}>2 Points</Text>
        </View>

        <View style={styles.QuestionCard}>
          <Text style={styles.QuestionText}>
            <Text style={{color: COLORS.red}}> * </Text>
            How many total wickets will fall in SRH innings?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {options2.map((item, index) => {
              return (
                <Pressable
                  key={index}
                  style={{width: '50%', flexDirection: 'row'}}
                  onPress={() => setSetOption2(item.option)}>
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderWidth: 0.5,
                      borderRadius: 15,
                      margin: 5,
                    }}>
                    {SetOption2 === item.option ? (
                      <View
                        style={{
                          width: 15,
                          height: 15,
                          borderWidth: 0.5,
                          borderRadius: 7.5,
                          backgroundColor: COLORS.blue,
                          margin: 2,
                        }}
                      />
                    ) : null}
                  </View>
                  <Text style={{marginVertical: 5}}> {item.option}</Text>
                </Pressable>
              );
            })}
          </View>

          <Text style={{textAlign: 'right', fontSize: 10}}>2 Points</Text>
        </View>

        <TouchableOpacity
          disabled={false}
          style={[
            styles.SubmitButton,
            {backgroundColor: false ? '#fa98aa' : COLORS.red},
            
          ]
      
          } onPress={() => {postData()}}>
          <Text style={{fontSize: 16, fontWeight: '500', color: COLORS.white}}>
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default PredictionComp;

const styles = StyleSheet.create({
  PredictionCompContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  QuestionCard: {
    width: '90%',
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },

  QuestionText: {color: COLORS.blue, fontSize: 13, fontWeight: '400'},
  SubmitButton: {
    width: '85%',
    alignItems: 'center',
    backgroundColor: COLORS.red,
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    marginVertical: 18,
  },
});
