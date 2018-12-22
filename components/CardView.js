import React from 'react';
import Colors from '../constants/Colors';

import { ScrollView, Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import ResponseButton, {ResponseButtonBig} from './ResponseButton';
import StatementView from './StatementView';

export default class CardView extends React.Component {
  render() {
    return (
	<View style={styles.cardUnderlay}>
	<StatementView />
	    <View style={styles.button_underlay_row}>
	    	<View style={styles.button_underlay_col}>
	    		<ResponseButton message="even more messages woohoo"/>
	    		<ResponseButton message="even more messages woohoo"/>
	    	</View>
	    	<View style={styles.button_underlay_col}>
	    		<ResponseButton message="new message woo"/>
	    		<ResponseButton message="even more messages woohoo"/>
	  	</View>
	    </View>
	</View>
    );
  }
}

const styles = StyleSheet.create({
  cardUnderlay: {
    flex: 1,
    flexDirection : 'column',
    alignItems: 'center',
    height: '100%',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: 10,
    backgroundColor: 'rgba(0,0,0,.40)', 
  },
  button_underlay_row: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,.4)', 
    margin: 5,
  },
  button_underlay_col: {
    flexDirection : 'column',
    backgroundColor: 'rgba(0,0,0,0)', 
    margin: 5,
  },
});


