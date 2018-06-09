import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Alert, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler'
import { Content }from 'native-base'
import Values from './Values'

export default class TipBody extends Component {
    constructor() {
        super();
        this.state = {
          inputValue: "",
          tip: 0.2,
        }
      }
      alert(){ 
        Alert.alert(
          'Hi How Are You?',
          'This alert is to make sure you dont spend a lot',
          [
            {
              text: 'OK',
              onPress: () => console.log('hit ok'),
            },
            {
              text: 'Waka',
              onPress: () => console.log('all up in that bulls****'),
            }
          ]
        )
      }
    render(){
        return(
            <Content padder>
            <View style={styles.container}>
            <Button
              title="Alert"
              onPress={this.alert}
              />
              <Values 
              tipPercent = {this.state.tip}
              bill = {this.state.inputValue}/>
            <TextInput 
            value={this.state.inputValue} 
            style={styles.input}
            keyboardType="numeric"
            placeholder="0.00"
            onChangeText={(text) => this.setState({inputValue: text})}
            />
            <View style={styles.Button}>
              <Button
              title="10%"
              onPress={() => this.setState({tip: .1})}
              />
              <Button
              title="15%"
              onPress={() => this.setState({tip: .15})}
              />
              <Button
              title="20%"
              onPress={() => this.setState({tip: .2})}
              />
              <Button
              title="25%"
              onPress={() => this.setState({tip: .25})}
              />
              <TextInput
              value={(this.state.tip * 100).toString()}
              style={styles.customTip}
              keyboardType="numeric"
              placeholder="20%"
              onChangeText={customTip => this.updateCustomTip(customTip)}
              />
              </View>
            </View>
        </Content>
        )
    }
}

const styles = StyleSheet.create({ 
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
    input:{
      height: 40,
      width: '100%',
      borderColor: '#333',
      borderWidth: 1,
      padding: 5,
    },
    Button:{
      flexDirection: 'row',
    },
    customTip:{
      height: 30,
      width: 60,
      borderColor: '#333',
      borderWidth: 1,
      padding: 5,
    },
  });