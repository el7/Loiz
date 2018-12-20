import React from 'react';

import { ScrollView, Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

export default class StatementView extends React.Component {
  render() {
    return (
	    <View style={styles.statementUnder}>
		<View style={styles.statementView}>
	    	<Text>This is a statement view.</Text>
	    </View>
	    </View>
    );
  }
}


const styles = StyleSheet.create({
  statementView: {
    flex: 1,
    margin: 30,
    backgroundColor: 'white',
  },
  statementUnder: {
    margin: 10,	
    backgroundColor: 'purple',
    flex: 1,
  },
});


