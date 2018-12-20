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
	    		<ResponseButton />
	    		<ResponseButtonBig />
	    	</View>
	    	<View style={styles.button_underlay_col}>
	    		<ResponseButtonBig />
	    		<ResponseButton />
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
    margin: 10,
    marginTop: 50,
    backgroundColor: 'rgba(250,0,0,1)', // red
  },
  button_underlay_row: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,330,1)', // blue
    margin: 20,
  },
  button_underlay_col: {
    flexDirection : 'column',
    backgroundColor: 'rgba(300,300,300,1)', // white
    margin: 20,
  },
});


