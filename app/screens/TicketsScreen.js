import React from 'react';
import {View,Text,ImageBackground,StyleSheet,Button} from 'react-native'
import t from 'tcomb-form-native'

function TicketsScreen(props) {
    const Form = t.form.Form

    var _form = null;

    const count = t.struct({
      tickets:t.Number
    });





    const navigation = props.navigation
    const route = props.route

    handleSubmit = () => {
    
      const value = _form.getValue(); // use that ref to get the form value
      if(value){
        navigation.navigate('Success',{train_name:route.params.train_name,from:route.params.from,to:route.params.to,date:route.params.date,tickets:value.tickets,time:route.params.time})
      }
      
    }



    return (
        <View style={styles.container}>
      <ImageBackground source={require("../assets/background.jpg")}  imageStyle={{opacity:0.5}} style={{width:600,height:600,alignItems:'center',justifyContent: 'center'}}>
      <View>
        <Form
              ref={c => _form = c}
              type={count}

        />

        <Button title="Proceed to Payment" onPress={handleSubmit} />
      </View>
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

export default TicketsScreen;