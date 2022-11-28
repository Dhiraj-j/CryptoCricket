import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerComponent from './navigations/DrawerFunction';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConnectWallet from './Screens/ConnectWallet';
const Stack = createNativeStackNavigator();
const App = () => {
  const user = true;
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {user ? (
            <Stack.Screen name="mainHome" component={DrawerComponent} />
          ) : (
            <Stack.Screen name="auth" component={ConnectWallet} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

