import React from 'react';
import Colors from '../constants/Colors';
import { ScrollView, 
	Platform, 
	StatusBar, 
	StyleSheet, 
	View, 
	Text, 
	TouchableOpacity,
	Button,
	Alert } from 'react-native';

export default class ResponseButton extends React.Component {
	

  selectButton() {
	  Alert.alert('pressed. This is where we save selection data. ');
//	  Alert.alert(nval);
	  // also think about changing button appearance... 
	  // maybe color inversion?
	  // maybe stop movement?
  };

  render() {
    return (
	<View style={styles.responseButton}>
	    <Button 
	    	onPress={this.selectButton} 
	    	title={this.props.message} 
	    	color={this.props.color} 
	    />
	</View>
    );
  };

}

const styles = StyleSheet.create({
  responseButton: {
    borderWidth: 2,
    borderColor: 'rgba(250,40,30,1)',
    alignItems: 'center',
    borderRadius: 0,
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    maxWidth: 100,
    backgroundColor: 'rgba(330,330,300,.95)',
  },
});

