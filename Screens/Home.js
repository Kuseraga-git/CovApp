import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {Styles} from '../Style.js';

export default function Home(){
    const navigation = useNavigation();

    return (
        <SafeAreaView style={Styles.container}>
			<View style={Styles.homeButton}>
				<Button
					title="Reservation List"
					onPress={() => navigation.navigate("Reservation")}
                />
			</View>
			<View style={Styles.homeButton}>
				<Button
					title="RP Chat Restrict List"
					color="#f194ff"
					onPress={() => navigation.navigate("RPBlacklist")}
				/>
			</View>
		</SafeAreaView>
    )
}