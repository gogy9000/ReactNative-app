import {TasksScreenStackParamList} from "../types/types";
import {TaskView} from "../../View/TaskView";
import React from "react";
import {TaskList} from "../../View/TaskList";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator<TasksScreenStackParamList>()

export const TaskScreen = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{backgroundColor: "rgb(100,101,101)"}}
            screenOptions={{headerShown: false,}}
        >
            <Tab.Screen name={"TaskList"} component={TaskList}/>
            <Tab.Screen name={"TaskView"} component={TaskView}/>
        </Tab.Navigator>
    )
}