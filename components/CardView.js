import React from 'react';
import Colors from '../constants/Colors';

import { ScrollView, Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
//import { AppLoading, Asset, Font, Icon } from 'expo';
import ResponseButton, {ResponseButtonBig} from '../buttons/ResponseButton';

export default class CardView extends React.Component {
  render() {
    return (
	<View style={styles.question_underlay}>
	  <View style={styles.question_container}><Text>This is a bunch of text that would otherwise be a message from the passive user. Below are buttons for the active user.</Text></View>
	  <View style={styles.button_underlay_row}>
	    <View style={styles.button_underlay_col}>
	    <ResponseButtonBig />
	    <ResponseButton />
	    </View>
	    <View style={styles.button_underlay_col}>
	    <ResponseButtonBig />
	    <ResponseButton />
	  </View></View>
	    </View>
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
    height: 3000,
    margin: 10,
    marginTop: 50,
    backgroundColor: 'rgba(0,0,20,1)',
  },
  button_underlay_row: {
    flexDirection: 'row',
    backgroundColor: 'rgba(60,0,60,1)',
  },
  button_underlay_col: {
    flexDirection : 'column',
    backgroundColor: 'rgba(20,60,20,1)',
  },
  button_container: {
    maxWidth: '50%', 
    backgroundColor: 'rgba(200,0,0,1)',
    margin: 20,
  },
  question_container: {
    flexDirection : 'column',
  }
});


