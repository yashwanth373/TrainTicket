import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableHighlight } from 'react-native'

function SuccessScreen(props) {
  const navigation = props.navigation
  const route = props.route
  const seats_allocated = []
  let s = Math.floor(Math.random() * 100);
  for (let i = 0; i < route.params.tickets; i++) {
    seats_allocated.push(s)
    seats_allocated.push(" ")
    s += 1
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/background.jpg")} imageStyle={{ opacity: 0.5 }} style={{ width: 600, height: 600, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 25 }}>
          Your tickets have been
      </Text>
        <Text style={{ fontSize: 25, marginBottom: 30 }}>
          booked successfully
      </Text>
        <View style={{ width: 370, height: 260, borderColor: 'black', borderRadius: 2, borderWidth: 2, margin: 10 }} >
          <Text style={{ margin: 5, fontSize: 18 }}>From: {route.params.from}</Text>
          <Text style={{ position: 'absolute', right: 25, top: 5, fontSize: 18 }}>To: {route.params.to}</Text>
          <Text style={{ marginTop: 15, marginLeft: 5, fontSize: 18 }}>Date: {route.params.date}</Text>
          <Text style={{ marginTop: 15, marginLeft: 5, fontSize: 18 }}>Train Name: {route.params.train_name}</Text>
          <Text style={{ marginTop: 15, marginLeft: 5, fontSize: 18 }}>Time: {route.params.time}</Text>
          <Text style={{ marginTop: 15, marginLeft: 5, fontSize: 18 }}>No. of Tickets: {route.params.tickets}</Text>
          <Text style={{ marginTop: 15, marginLeft: 5, fontSize: 18 }}>Seats Allocated: {seats_allocated}</Text>
        </View>
        <TouchableHighlight style={{ marginTop: 30, width: 200, alignSelf: 'center', backgroundColor: '#2196F3', justifyContent: 'center' }} onPress={navigation.popToTop} >
          <Text style={{ color: 'white', textAlign: 'center', padding: 15, fontWeight: 'bold' }}>
            Back To Home
            </Text>
        </TouchableHighlight>
      </ImageBackground>
    </View>
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

export default SuccessScreen;