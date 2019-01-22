import React from 'react';
import { StyleSheet } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
	// create the navigation menu, and present their screens
	<AppNavigator />
    );
  }
}

const styles = StyleSheet.create({

});
