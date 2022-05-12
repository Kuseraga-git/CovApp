import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import RPBlacklist from "./Screens/RPBlacklist";
import Reservation from "./Screens/Reservation";

const Stack = createNativeStackNavigator();

export default function StackNavigator(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Group>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Reservation" component={Reservation}/>
                <Stack.Screen name="RPBlacklist" component={RPBlacklist}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}