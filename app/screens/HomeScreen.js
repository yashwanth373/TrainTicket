import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import {} from 'react-native'


import AvailScreen from './AvailScreen'
import TrainsScreen from './TrainsScreen'
import TicketsScreen from './TicketsScreen'
import SuccessScreen from './SuccessScreen'

const Stack = createStackNavigator();
function HomeScreen(props) {
    return (
        <Stack.Navigator initialRouteName="Avail" screenOptions={{headerTitle:false}}>
          <Stack.Screen
            name="Avail"
            component={AvailScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Trains" component={TrainsScreen} />
          <Stack.Screen name="Tickets" component={TicketsScreen}/>
          <Stack.Screen name="Success" component={SuccessScreen}/>
        </Stack.Navigator>
    );
}

export default HomeScreen;