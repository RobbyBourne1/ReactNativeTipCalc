import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './Hello'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.View1}></View>
        <View style={styles.View2}></View>
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
    // flexDirection: 'row',
  },
  View1:{
    backgroundColor: '#ff00ff',
    flex: 3, 
    height: 100,
    width: '100%',
  },
  View2:{
    backgroundColor: '#00ffff',
    flex: 1,
    height: 100,
    width: '100%',
  }
});
