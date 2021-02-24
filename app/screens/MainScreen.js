import React from 'react';
import { View,StyleSheet,Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import HomeScreen from './HomeScreen'
import RecentsScreen from './RecentsScreen'
import SettingsScreen from './SettingsScreen'

const Tab = createBottomTabNavigator();





function MainScreen(props) {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomeScreen} 
                        options={{tabBarLabel:'Home',
                                  tabBarIcon:({ color, size }) => (
                                    <MaterialCommunityIcons name="home" color={color} size={size} />
                                )}}
            />
            <Tab.Screen name="Recents" component={RecentsScreen} 
                        options={{tabBarLabel:'Recents',
                        tabBarIcon:({ color, size }) => (
                          <MaterialCommunityIcons name="clock-time-eight-outline" color={color} size={size} />
                      )}}
            />
            <Tab.Screen name="Settings" component={SettingsScreen}
                        options={{tabBarLabel:'Settings',
                        tabBarIcon:({ color, size }) => (
                          <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
                      )}}
            />
        </Tab.Navigator>
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
  

export default MainScreen;