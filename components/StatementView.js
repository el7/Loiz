import React from 'react';

import { ScrollView, Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

export default class StatementView extends React.Component {
  render() {
    return (
	    <View style={styles.statementUnder}>
		<View style={styles.statementView}>
	    	<Text style={styles.statementText}>This is a longer, more beautiful statement view.</Text>
	    </View>
	    </View>
    );
  }
}
export class StatementViewBig extends React.Component {
  render() {
    return (
	    <View style={styles.statementUnder}>
		<View style={styles.statementView}>
	    	<Text style={styles.statementText}>This is a statement view. With lots of text, lots and lots of text.</Text>
	    </View>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
  statementView: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
	  borderWidth: 1,
  },
  statementUnder: {
    margin: 20,	
    backgroundColor: 'coral',
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
  },
  statementText: {
    fontSize: 25, 
    textAlign: 'center',
  },
});


