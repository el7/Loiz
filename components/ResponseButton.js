import React from 'react';
import Colors from '../constants/Colors';
import { ScrollView, 
	Platform, 
	StatusBar, 
	StyleSheet, 
	View, 
	Text 
	TouchableOpacity } from 'react-native';

export default class ResponseButton extends React.Component {
render() {
    return (
	<View style={styles.responseButton}>
	    <TouchableOpacity onPress={this.saveData}>
	    <Text>{this.props.message}</Text>
	    </TouchableOpacity>
	</View>
    );
  }

  saveData() {
  
  }
}


const styles = StyleSheet.create({
  responseButton: {
    borderWidth: 2,
    borderColor: 'rgba(250,0,0,1)',
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    maxWidth: 100,
    backgroundColor: 'rgba(330,330,300,1)',
  },
});



