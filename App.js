import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './Hello'
import { TextInput } from 'react-native-gesture-handler';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <TextInput style={styles.input}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input:{
    height: 40,
    width: '100%',
    borderColor: '#333',
    borderWidth: 1,
    padding: 5,
  }
});
