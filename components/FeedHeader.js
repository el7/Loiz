import React from 'react';

import { ScrollView, Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import PacificoText from './StyledText';

export default class FeedHeader extends React.Component {
  render() {
    return (
	<View style={styles.headerUnderlay}>
		<View style={styles.header}>
	    		<Text style={styles.headerText}> ~ A C T I V I T I E S ~ </Text>
		</View>
	</View>
    );
  }
}

const styles = StyleSheet.create({

  headerText: {
    fontFamily: 'Roboto',
    fontSize: 26,
  },
  header: {
    flex: 1,
    flexDirection : 'column',
    alignItems: 'center',
    backgroundColor: 'white', 
    margin: '10%',
    borderRadius: 10,
    borderWidth: 1,
  },
  headerUnderlay: {
    flex: 1,
    marginTop: 50,
	  borderRadius: 10,
	  borderWidth: 1,
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: 'rgba(0,0,200,.3)', // blue
  },

});


