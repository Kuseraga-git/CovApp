import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, Alert, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Styles} from './Style.js';
import StackNavigator from './StackNavigator.js';

// const Separator = () => (
// 	<View style={Styles.separator} />
//   );

export default function App() {

  	return (
		  <NavigationContainer>
			<StackNavigator />
			<StatusBar style='dark' />
		</NavigationContainer>
  	);
}