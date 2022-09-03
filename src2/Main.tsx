import {Text, StyleSheet, View, Button} from "react-native";
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from "./screens/home/HomeScreen";
import {NoHomeScreen} from "./screens/nohome/NohomeScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {RootStackParamList} from "./screens/types/Types";
import {createDrawerNavigator} from "@react-navigation/drawer";

export const Main2 = () => {
    // const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator<RootStackParamList>();
    // const Drawer = createDrawerNavigator();

  return(
      <Tab.Navigator initialRouteName={"noHome"}>
          <Tab.Screen name={"Home"} component={HomeScreen}  />
          <Tab.Screen name={"noHome"} component={NoHomeScreen}  />
      </Tab.Navigator>
  )
}
