import React from 'react';

import { ScrollView, Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

export default class FeedHeader extends React.Component {
  render() {
    return (
	<View style={styles.headerUnderlay}>
		<View style={styles.header}>
			<Text> ~~ Activities ~~ </Text>
		</View>
	</View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection : 'column',
    alignItems: 'center',
    backgroundColor: 'white', 
    margin: '10%',
  },
  headerUnderlay: {
    flex: 1,
    marginTop: 50,
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: 'rgba(0,0,200,1)', // blue
  },

});


