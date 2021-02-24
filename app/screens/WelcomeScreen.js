import React from 'react';
import {StyleSheet,View,ImageBackground,Text,TouchableHighlight} from 'react-native'

function WelcomeScreen(props) {
    const navigation = props.navigation
    return (
        <View style={styles.container}>
        <ImageBackground source={require("../assets/background.jpg")}  imageStyle={{opacity:0.5}} style={{width:600,height:600,alignItems:'center',justifyContent: 'center',}}>
          <Text style={{fontSize:42, marginBottom:30}}>
            Welcome!
          </Text>
          <Text style={{fontSize:22, textAlign:'center'}}>
            Book your train tickets
          </Text>
          <Text style={{fontSize:22, textAlign:'center'}}>
            hassle free
          </Text>
          <TouchableHighlight onPress={()=>{navigation.navigate("Main")}} style={{marginTop: 30,width: 200,alignItems: 'center',backgroundColor: '#2196F3'}}>
            <Text style={{color:'white',textAlign:'center',padding:15,fontWeight:'bold'}}>
              GET STARTED
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

export default WelcomeScreen;


