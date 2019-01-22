import {
  createStackNavigator,
  createAppContainer,
	con
} from 'react-navigation';
import React from 'react';
import { ScrollView, 
	StyleSheet, 
	View, 
	Text,
	AsyncStorage, Alert } from 'react-native';
import CardView from './CardView';
import FeedHeader from './FeedHeader';
import DividerView from './DividerView';
import AppNavigator from '../navigation/AppNavigator';

export default class CardFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        myKey: null,
	aUserID: "1",
	pUserID: "999"
    }
  }

  async getKey() {
    try {
      const ASvalue = await AsyncStorage.getItem('@MySuperStore:key');
      this.setState({pUserID: ASvalue});
    } catch (error) {
      console.log("Error retrieving data: " + error);
    }
  }

  async saveKey(value) {
    try {
      await AsyncStorage.setItem('@MySuperStore:key', value);
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  async resetKey() {
    try {
      await AsyncStorage.removeItem('@MySuperStore:key');
      const value = await AsyncStorage.getItem('@MySuperStore:key');
      this.setState({myKey: value});
    } catch (error) {
      console.log("Error resetting data" + error);
    }
  }


  render() {

    let cards = ["1", "2", "3"];

//		  this.getKey();
    let pUserID = this.state.pUserID;

    return (
      <View>
	<Text> ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- Some Text-- {this.pUserID} --More Text </Text>
        <ScrollView style={styles.scrollContainer}>
	  <FeedHeader />  
	  <CardView cardID={cards[0]} />
	  <DividerView />
	  <CardView cardID={cards[1]}/>
	  <DividerView />
	  <CardView cardID={cards[2]}/>
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


