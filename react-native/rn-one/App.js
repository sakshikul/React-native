import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style= {{ padding: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
      <TextInput placeholder = "About Some Courses" style= {{ borderColor: 'black' , borderWidth: 1, padding : 10, width: 200 }}/>
      <Button title = "ADD" style={{ padding: 10}}/>
    </View>
     
  );
}

const styles = StyleSheet.create({
 
});
