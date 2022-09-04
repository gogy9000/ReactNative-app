import {createStackNavigator} from "@react-navigation/stack";
import {TodoStackParamList} from "../types/types";
import React from "react";
import {TaskScreen, TodoEntity, TodoView} from "./TodoView";
const Stack = createStackNavigator<TodoStackParamList>()
export const TodoScreen = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"TodoView"} component={TodoView}/>
            <Stack.Screen name={"Todo"} component={TaskScreen}/>
        </Stack.Navigator>
    )
}