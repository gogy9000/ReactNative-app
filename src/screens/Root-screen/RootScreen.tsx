import React from "react";
import {Login} from "../../View/Login";
import {RootScreenStackParamList} from "../types/types";
import {createStackNavigator} from "@react-navigation/stack";
import {TodoScreen} from "../Todo-Screen/TodoScreen";
import {ImageBackground, StyleSheet} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


export const RootScreen = () => {
    const Tab=createBottomTabNavigator<RootScreenStackParamList>()

    return(
      <Tab.Navigator
          tabBar={()=><></>}
          sceneContainerStyle={{backgroundColor:"rgba(5,5,5,0)"}}
          screenOptions={{headerShown:false,}}>
          <Tab.Screen
              name={"Login"}
              component={Login}
              />
          <Tab.Screen name={"TodoScreen"}
                      component={TodoScreen}
          />
      </Tab.Navigator>
  )
}
