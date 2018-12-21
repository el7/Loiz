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
import FeedView from '../components/FeedView';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  render() {

    return (

      <View style={styles.master_container}>

    	<FeedView />

      </View>
      
    );
  }

}

const styles = StyleSheet.create({
  master_container: {
    flex: 1,
    backgroundColor: 'red',
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


