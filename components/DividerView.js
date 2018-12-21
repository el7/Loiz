import React from 'react';

import { ScrollView, Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

export default class DividerView extends React.Component {
  render() {
    return (
	<View style={styles.dividerUnderlay}>
		<View style={styles.divider}>
			<Text style={styles.dividerText}> * ~ * ~ * ~ * ~ * ~ * </Text>
		</View>
	</View>
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    flex: 1,
    flexDirection : 'column',
    alignItems: 'center',
    backgroundColor: 'teal', 
    margin: '1%',
  },
  dividerUnderlay: {
    flex: 1,
    marginTop: 10,
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: 'white', 
  },
  dividerText: {
    fontSize: 30,
    color: 'white',
  },
});


