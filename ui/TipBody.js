import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Alert, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler'
import { Content }from 'native-base'
import Values from './Values'

export default class TipBody extends Component {
    constructor() {
        super();
        this.state = {
          inputValue: '',
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
            <View style={styles.container}>
            <Content style={{width: '100%'}}>
            <Button
              title='Alert'
              onPress={this.alert}
              />
              <Values 
              tipPercent = {this.state.tip}
              bill = {this.state.inputValue}/>
              <View style={styles.inputs}>
            <TextInput  
            underlineColorAndroid='#fff'
            placeholderTextColor='#fff' 
            value={this.state.inputValue} 
            style={styles.input}
            keyboardType='numeric'
            placeholder='0.00'
            onChangeText={(text) => this.setState({inputValue: text})}
            />
            <View style={styles.Button}>
              <Button
              title='10%'
              onPress={() => this.setState({tip: .1})}
              />
              <Button
              title='15%'
              onPress={() => this.setState({tip: .15})}
              />
              <Button
              title='20%'
              onPress={() => this.setState({tip: .2})}
              />
              <Button
              title='25%'
              onPress={() => this.setState({tip: .25})}
              />
              <TextInput
              underlineColorAndroid='#fff'
              placeholderTextColor='#fff' 
              value={(this.state.tip * 100).toString()}
              style={styles.customTip}
              keyboardType='numeric'
              placeholder='20%'
              onChangeText={customTip => this.updateCustomTip(customTip)}
              />
              </View>
              </View> 
              </Content>
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    container: {
        flex:1,
        backgroundColor: '#000',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      },
    inputs:{
        backgroundColor: '#212121',
        padding: 20,
      },
    input:{
      height: 40,
      width: '100%',
      padding: 5,
      color: '#fff',
      textAlign: 'center'
    },
    Button:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    customTip:{
      height: 40,
      width: 60,
      padding: 5,
      color: '#fff',
      textAlign: 'center',
    },
  });