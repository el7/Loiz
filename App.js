import React from 'react';
import { StyleSheet } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
	// Creates the navigation menu
	<AppNavigator />
    );
  }
}

const styles = StyleSheet.create({

});
