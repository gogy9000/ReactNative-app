import React from "react";
import {Login} from "../../View/Login";
import {RootScreenStackParamList} from "../types/types";
import {TodoScreen} from "../Todo-Screen/TodoScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator<RootScreenStackParamList>()

export const RootScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{headerShown: false,}}>
            <Tab.Screen name={"TodoScreen"} component={TodoScreen}/>
            <Tab.Screen name={"Login"} component={Login}/>
        </Tab.Navigator>
    )
}
