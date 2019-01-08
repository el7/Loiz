import React from 'react';
import Colors from '../constants/Colors';

import { ScrollView, 
	Platform, 
	StatusBar, 
	StyleSheet, 
	View, 
	Text } from 'react-native';
import ResponseButton, {ResponseButtonBig} from './ResponseButton';
import StatementView from './StatementView';

export default class CardView extends React.Component {

  render() {


	let new_cardID = this.props.cardID;
	// collect data using ID

	// read async data for a card

	let card_statement = "< Short Statement >";
	let button_color = ["red", "blue", "green", "purple"];
	let button_text = ["my message", "another message", "other messages", "yay messages!"];
	let button_value = "3";

	return (

	<View style={styles.cardUnderlay}>
	<StatementView statement={card_statement} />
	    <View style={styles.button_underlay_row}>
	    	<View style={styles.button_underlay_col}>
	    		<ResponseButton 
	    			message={button_text[0]} 
	    			color={button_color[0]} 
				bValue={button_value} />
				
			<ResponseButton 
	    			message={button_text[1]}
	    			color={button_color[1]} 
				bValue={button_value} />
	    	</View>
	    	<View style={styles.button_underlay_col}>
	    		<ResponseButton 
	    			message={button_text[2]}
	    			color={button_color[2]} 
				bValue={button_value} />
	    		<ResponseButton 
	    			message={button_text[3]}
	    			color={button_color[3]} 
				bValue={button_value} />
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
    backgroundColor: 'rgba(220,220,220,.50)', 
  },
  button_underlay_row: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,.3)', 
    margin: 15,
  },
  button_underlay_col: {
    flexDirection : 'column',
    backgroundColor: 'rgba(0,0,0,0)', 
    margin: 5,
  },
});


