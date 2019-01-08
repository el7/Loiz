import React from 'react';
import Colors from '../constants/Colors';

import { ScrollView, Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import ResponseButton, {ResponseButtonBig} from './ResponseButton';
import StatementView from './StatementView';

export default class CardView extends React.Component {

  render() {

	// steps to creating a card view:
	    // Find ID of card data to be shown
	    // display the data from the card using ID

	let card_statement = "< Short Statement >";
	let button_color = ["red", "blue", "green", "purple"];
	let button_text = ["my message", "another message", "other messages", "yay messages!"];

	return (

	<View style={styles.cardUnderlay}>
	<StatementView statement={card_statement} />
	    <View style={styles.button_underlay_row}>
	    	<View style={styles.button_underlay_col}>
	    		<ResponseButton 
	    			message={button_text[0]} 
	    			color={button_color[0]} />
	    		<ResponseButton 
	    			message={button_text[1]}
	    			color={button_color[1]} />
	    	</View>
	    	<View style={styles.button_underlay_col}>
	    		<ResponseButton 
	    			message={button_text[2]}
	    			color={button_color[2]} />
	    		<ResponseButton 
	    			message={button_text[3]}
	    			color={button_color[3]} />
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


