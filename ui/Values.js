import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Alert, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler'
import { Content }from 'native-base'

const Values = ({ tipPercent, bill }) => {
    let tip = 0.00
    if (bill) {
      tip = parseFloat(bill) * tipPercent
      tip = (Math.round(tip * 100)/ 100).toFixed(2)
    }
    return(
        <View>
            <Text>${tip}</Text>
        </View>
    )
}

export default Values