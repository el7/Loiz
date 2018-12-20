import {
  createStackNavigator,
  createAppContainer,
	con
} from 'react-navigation';
import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import CardView from './CardView';

export default class CardFeed extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
	<CardView />
	<CardView />
	<CardView />
	<CardView />
	<CardView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'teal',
  },
});
