import React from 'react';
import Colors from '../constants/Colors';
import { ScrollView, Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

export default class ResponseButton extends React.Component {
  render() {
    return (
	<View style={styles.responseButton}>
	    <Text>This seems great!</Text>
	</View>
    );
  }
}


export class ResponseButtonBig extends React.Component {
  render() {
    return (
	<View style={styles.responseButton}>
	    <Text>This seems big! ~~~ long ~~~ long message ~~~~ very big</Text>
	</View>
    );
  }
}


const styles = StyleSheet.create({
  responseButton: {
    alignItems: 'center',
    padding: 5,
    maxWidth: 100,
    backgroundColor: 'rgba(200,0,20,1)',
  },
});



