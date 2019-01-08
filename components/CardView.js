import React from 'react';
import Colors from '../constants/Colors';

import { ScrollView, Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import ResponseButton, {ResponseButtonBig} from './ResponseButton';
import StatementView from './StatementView';

export default class CardView extends React.Component {
  render() {
    return (

	// steps to creating a card view:
	    // Find ID of card data to be shown
	    // display the data from the card using ID

	// card data: 
	    // color, statement, a1-4, pv1-4

	<View style={styles.cardUnderlay}>
	<StatementView id="123" />
	    <View style={styles.button_underlay_row}>
	    	<View style={styles.button_underlay_col}>
	    		<ResponseButton 
	    			message="even more messages woohoo" 
	    			color="blue" />
	    		<ResponseButton 
	    			message="Happy New Year woohoo"
	    			color="red" />
	    	</View>
	    	<View style={styles.button_underlay_col}>
	    		<ResponseButton 
	    			message="new message woo"
	    			color="green" />
	    		<ResponseButton 
	    			message="even more messages woohoo"
	    			color="purple" />
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


