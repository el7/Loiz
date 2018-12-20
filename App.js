import {
  createStackNavigator,
  createAppContainer,
	con
} from 'react-navigation';
import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import CardView from './components/CardView';
import FeedView from './components/FeedView';

export default class App extends React.Component {
  render() {
    return (
    	<FeedView />
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'teal',
  },
});
