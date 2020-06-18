import React, {useEffect} from 'react';
import { 
  View, Text, 
  TextInput, StyleSheet, 
  TouchableOpacity, Keyboard, 
  TouchableWithoutFeedback, 
  SafeAreaView} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SET_NAME } from '../../store/actionType';
import {setName, setTrackingUserNewLogin} from '../../store/actions/user'
import Toast from 'react-native-tiny-toast'
import DefaultPreference from 'react-native-default-preference';

function HomeScreen({navigation}) {
  const state = useSelector(state => state.user);
  const dispatch = useDispatch();

  function toMainPage() {
    if (state.name.length < 1) {
      Toast.show("Name is required");
    } else {
      DefaultPreference.get(state.name).then(value => {
        if (value == null) {
          dispatch(setTrackingUserNewLogin([]))
        } else {
          dispatch(setTrackingUserNewLogin(value))
        }
      })
      .catch((error) => {
        console.log(error)
      });
      navigation.push('Main');
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={style.container}>
          <Text>Enter your name</Text>
          <TextInput 
          style={style.textInput} 
          value={state.name} 
          onChangeText={(text) => dispatch(setName(text))}
          placeholder="Your name"/>
          <TouchableOpacity style={style.button} onPress={() => toMainPage()}>
            <Text style={style.textStyle}>Submit</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    borderRadius: 10,
    margin: 10,
    height: 40,
    textAlign: "center"
  },
  button: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    backgroundColor:'#00BCD4',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 100
  },
  textStyle: {
    color: "white",
    textAlign: "center"
  }
});


export default HomeScreen;