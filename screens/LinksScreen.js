//import * as d3 from "d3";
import { Button, Alert, TextInput } from 'react-native';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/robot-dev.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>
	    <View><Text>
	Hey, this is a calculator I made.
	Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description  
	</Text></View>

	<View style={styles.calcBase}>
	<View style={styles.calcLive}>
	    <Text>
	    View Live Speed
	    </Text>
	    <Button
	    	onPress={() => {
			Alert.alert('Speed data is now Live');
		}}
		title="Live"
		color="rgba(0,9,0,0.05)"
		accessibilityLabel="Learn"
		buttonStyle={{
		  width: 300,
		  height: 45
		}}
	    />

	    </View>
	<View style={styles.calcUser}>
	    <Text>
	      Speed (km/h):
	    </Text>
	    <TextInput style={{backgroundColor: "red", width: 30}}
	    placeholder="60"
	    onChangeText={
		    function(text){

			Alert.alert('setState');
			//    return this.setState({text})
		    }
	    }
		   // (text) => this.setState({text})
	    />

	    <Text>
	      Distance (m):
	    </Text>
	    <TextInput style={{backgroundColor: "red", width: 30}}
	    placeholder="60"
	    onChangeText={(text) => this.setState({text})}
	    />
	

	    </View>


	<View style={styles.calcVisual}>
	    <Text>
	    Visual of data:
	    </Text>
	    </View>
	
	</View>

	</ScrollView>
      </View>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#688',
  },
 contentContainer: {
    paddingTop: 15,
 backgroundColor: '#f25',
 },
  welcomeContainer: {
    alignItems: 'center',
    backgroundColor: '#aaa',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,9,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  calcBase: {
    backgroundColor: 'blue',
  },
  calcLive: {
    width: 150,
    height:80,
    margin: 10,
    backgroundColor: '#ccc',
  },
  calcUser: {
    width: 150,
    height: 180,
    margin: 10,
    backgroundColor: '#f8f',
  },
  calcVisual: {
    width: 150,
    height: 80,
    padding: 0,
    margin: 10,
    backgroundColor: '#999',
    color: '#345667',
  },
});


/* Internet Research:
 * "2 seconds min, 4 is better" - safety flier
 * The word "Safe distance" is used rather than actual seconds - safety flier
 * 
 * Driving Manual: 
 * 	2-4 seconds. 4 seconds when driving faster than 30mph
 *	Increase istance when:
 *		wet/slipprey roads
 *		driver behind wants to pass
 *		when following bikes/motos
 *		following drivers who cants see you
 *		pulling trailer or heavy load
 *		hard for you to see
 *		when stopped on a hill (??)
 *			"the vehicle ahead may roll back"
 *		when learning to drive
 *		when approaching/in work zone
 *
 * MPH	KPH	mPH	mPS	2sec	4sec	ND (Dist from notice to stop in ft)
 * 20	32.2	32200	8.9	17.9	35.8	69
 * 30	48.3	48300	13.4	26.8	53.7	123
 * 40	64.4	64400			71.6	189
 * 50	80.5	80500			89.4	268
 * 60	96.6	96600	26.8	53.7	107.3	359
 * 
 * How to calculate FD (Following Distance in m):
 *	get MPH
 *	convert to KmPH
 *	convert to mPH
 *	convert to mPS, divide by 60 twice (this is meters per second of travel)
 *	multiply by 2-4 seconds		(this is meters of travel over 2-4 seconds)
 *	add addnl constants		(e.g. wet roads. see above)
 *	convert to KmPH/MPH if needed
 *
 *	(((mPH/60)/6)*2)*2
 *
 */


