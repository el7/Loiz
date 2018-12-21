import {
  createStackNavigator,
  createAppContainer,
	con
} from 'react-navigation';
import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import CardView from './CardView';
import FeedHeader from './FeedHeader';
import DividerView from './DividerView';

export default class CardFeed extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
	<FeedHeader />
	<CardView />
	<DividerView />
	<CardView />
	<DividerView />
	<CardView />
	<DividerView />
	<CardView />
	<DividerView />
	<CardView />
	<DividerView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'teal',
  },
});
