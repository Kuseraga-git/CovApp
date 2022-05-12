import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, Alert, SafeAreaView } from 'react-native';
import {styles} from './Style.js'

const Separator = () => (
	<View style={styles.separator} />
  );

export default function App() {
  	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.fixToText}>
				<Text style={styles.title}>
					Hello World
				</Text>
				<Button
					style={styles.fixToText}
					title="Reservation List"
					onPress={() => Alert.alert('Simple Button pressed')}
				/>
			</View>
			<Separator />
			<View style={styles.fixToText}>
				<Text style={styles.title}>
					Hello World
				</Text>
				<StatusBar style="auto" />
				<Button
					title="RP Chat Restrict List"
					style={styles.fixToText}
					color="#f194ff"
					onPress={() => Alert.alert('Button with adjusted color pressed')}
				/>
			</View>
		</SafeAreaView>
  	);
}

// const styles = StyleSheet.create({
//   	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center',
//   	},
// 	title: {
// 		textAlign: 'center',
// 		marginVertical: 8,
// 	},
// 	fixToText: {
// 		alignSelf: 'stretch',
// 		justifyContent: 'space-between',
// 		marginHorizontal: 16,
// 	},
// 	separator: {
// 		marginVertical: 8,
// 		borderBottomColor: '#737373',
// 		borderBottomWidth: StyleSheet.hairlineWidth,
// 	},
// });
