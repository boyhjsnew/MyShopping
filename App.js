
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Authencation from './src/component/Authencation/Authencation';
import Changeinfo from './src/component/ChangeInfo/Changinfo';
import Main from './src/component/Main/Main';
import OrderHistory from './src/component/OrderHistory/OrderHistory';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{headerShown:false,
        }}>
          <Stack.Screen
          name='Main'
          component={Main}>
          </Stack.Screen>
          <Stack.Screen
          name='Changeinfo'
          component={Changeinfo}>
          </Stack.Screen>
          <Stack.Screen
          name='Authencation'
          component={Authencation}>
          </Stack.Screen>
          <Stack.Screen
          name='OrderHistory'
          component={OrderHistory}>
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
