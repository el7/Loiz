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
import AppNavigator from '../navigation/AppNavigator';

export default class CardFeed extends React.Component {
  render() {
    return (
      <View>
        <ScrollView style={styles.scrollContainer}>
	  <FeedHeader />  
	  <CardView />
	  <DividerView />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'teal',
  },
});


