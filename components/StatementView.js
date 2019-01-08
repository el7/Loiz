import React from 'react';
import { AsyncStorage } from 'react-native';
import { ScrollView, Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

export default class StatementView extends React.Component {
  render() {
    return (
	    <View style={styles.statementUnder}>
		<View style={styles.statementView}>
	    	<Text style={styles.statementText}>{this.props.statement}</Text>
	    </View>
	    </View>
    );
  }
}



const cid = '123';

// set data example via async....
const saveUserId = async cid => {
  try {
    await AsyncStorage.setItem('cid', cid);
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
};

// retrieve data example via async....
const getUserId = async () => {
  let cid = '';
  try {
    cid = await AsyncStorage.getItem('cid') || 'none';
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }

  return cid;
}

// delete data example via async
/*
const deleteUserId = async () => {
  try {
    await AsyncStorage.removeItem('userId');
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
}
*/

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


