import {TodoScreenStackParamList} from "../types/types";
import {TaskScreen} from "../TaskScreen/TaskScreen";
import {TodoList} from "../../View/TodoList";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator<TodoScreenStackParamList>()

export const TodoScreen = () => {
    return (
        <Tab.Navigator

            screenOptions={{headerShown: false,}}>
            <Tab.Screen name={"TodoList"} component={TodoList}/>
            <Tab.Screen name={"TaskScreen"} component={TaskScreen}/>
        </Tab.Navigator>
    )
}