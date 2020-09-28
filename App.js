import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  let [latitude, setLatitude] = useState('');
  let [longitude, setLongitude] = useState('');
  let [country, setCountry] = useState(' Your Country here');

  let opencage = () => {
    fetch('https://api.opencagedata.com/geocode/v1/json?key=2e98cc940e59428184be10136e65bc1b&q='+latitude +'+'+longitude)
    .then((response) => { return response.json() })
    .then((json) => {
      console.log(json);
      console.log(setCountry(json.results[0].components.country));
    });
  }

  /*let show = (lat) =>{
      console.log(lat);
  }*/
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setLatitude}
        style={{ height: 40, borderColor: 'grey', borderWidth: 1 }}></TextInput>
      <TextInput
        onChangeText={setLongitude}
        style={{ height: 40, borderColor: 'grey', borderWidth: 1 }}></TextInput>
      <Button
        onPress={opencage}
        title="Find country" />
      <Text>Country:{country}</Text>
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
