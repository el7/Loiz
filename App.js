import {
  createStackNavigator,
  createAppContainer,
	con
} from 'react-navigation';
import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import CardView from './components/CardView';
import CardFeed from './components/CardFeed';

export default class App extends React.Component {
  render() {
    return (
    	<CardFeed />
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'teal',
  },
});
