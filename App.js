import {
  createStackNavigator,
  createAppContainer,
	con
} from 'react-navigation';
import React from 'react';
import { ScrollView, Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
//import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Hello!</Text>
        <Text>Hello!</Text>
	  <View style={styles.overlay}>
            <Text>Overlay</Text>
	  </View>
	<Text>Seeya!</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
  overlay: {
    flex: 10,
    backgroundColor: 'red',
  }
});
