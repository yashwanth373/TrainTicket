import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import {useDimensions} from '@react-native-community/hooks'


import WelcomeScreen from './app/screens/WelcomeScreen'
import MainScreen from './app/screens/MainScreen'

const Stack = createStackNavigator()


export default function App() {
    return(
        <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="Avail" screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen name="Main" component={MainScreen} />
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
