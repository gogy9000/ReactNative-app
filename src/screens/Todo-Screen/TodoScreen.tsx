import {TodoScreenStackParamList} from "../types/types";
import {TaskScreen} from "../TaskScreen/TaskScreen";
import {TodoList} from "../../View/TodoList";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Stack = createBottomTabNavigator<TodoScreenStackParamList>()

export const TodoScreen = () => {
    return (
        <Stack.Navigator
            tabBar={() => <></>}
            sceneContainerStyle={{backgroundColor: "rgba(5,5,5,0)"}}
            screenOptions={{headerShown: false,}}>
            <Stack.Screen name={"TodoList"} component={TodoList}/>
            <Stack.Screen name={"TaskScreen"} component={TaskScreen}/>
        </Stack.Navigator>
    )
}