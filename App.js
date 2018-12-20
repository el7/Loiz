import {
  createStackNavigator,
  createAppContainer,
	con
} from 'react-navigation';
import React from 'react';
import { ScrollView, Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
//import AppNavigator from './navigation/AppNavigator';
import CardView from './components/CardView';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
	<CardView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: 'teal',
    height: 300
  },
  question_underlay: {
    flex: 1,
    flexDirection : 'column',
    alignItems: 'center',
    height: 500,
    margin: 10,
    backgroundColor: 'rgba(0,0,20,.5)',
  },
  button_underlay_row: {
    flexDirection: 'row'
  },
  button_underlay_col: {
    flexDirection : 'column',
  },
  button_container: {
    maxWidth: '50%', 
    backgroundColor: 'rgba(200,0,0,.5)',
    margin: 20,
  },
  question_container: {
    flexDirection : 'column',
  }

});
