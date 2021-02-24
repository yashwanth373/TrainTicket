import React, { useState,useRef } from 'react';
import { View, ImageBackground, Text, TouchableHighlight, StyleSheet, TextInput } from 'react-native'
// import { Field, Formik, Form } from 'formik'
import t from 'tcomb-form-native'
import moment from 'moment'
import { onChange } from 'react-native-reanimated';


function AvailScreen(props) {

  const navigation = props.navigation
  const Form = t.form.Form;

  var _form = null;

  const [formData,setFormData]=useState({value:null})




  const Avail = t.struct({
    from: t.String,
    to: t.String,
    date: t.Date
  });

  handleSubmit = () => {
    
    const value = _form.getValue(); // use that ref to get the form value
    setFormData({value:null})
    if(value){
      navigation.navigate('Trains',{from:value.from,to:value.to,date:moment(value.date).format("DD-MM-YYYY")});
    }
    
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/background.jpg")} imageStyle={{ opacity: 0.5 }} style={{ width: 600, height: 600, alignItems: 'center', justifyContent: 'center', }}>
        <View style={{ height: 400, width: 300, marginTop: 50, justifyContent: 'center'}}>
          <Form
            ref={c => _form = c}
            type={Avail}
            value={formData}
            options={{

              fields: {
                date: {
                  mode: 'date',
                  config:{
                    format: (date) => {
                      return moment(date).format('DD-MM-YYYY')
                    }
                  }
                }
              },
            }}

          />
          <TouchableHighlight style={{ marginTop: 30, width: 200, alignSelf: 'center', backgroundColor: '#2196F3',justifyContent:'center' }} onPress={handleSubmit} >
            <Text style={{ color: 'white', textAlign: 'center', padding: 15, fontWeight: 'bold' }}>
              Check Trains
            </Text>
          </TouchableHighlight>


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

export default AvailScreen;