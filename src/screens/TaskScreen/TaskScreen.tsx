import {TasksScreenStackParamList} from "../types/types";
import {TaskView} from "../../View/TaskView";
import React from "react";
import {TaskList} from "../../View/TaskList";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator<TasksScreenStackParamList>()

export const TaskScreen = () => {
    return (
        <Tab.Navigator
            tabBar={() => <></>}
            sceneContainerStyle={{backgroundColor: "rgba(5,5,5,0)"}}
            screenOptions={{headerShown: false,}}
        >
            <Tab.Screen name={"TaskList"} component={TaskList}/>
            <Tab.Screen name={"TaskView"} component={TaskView}/>
        </Tab.Navigator>
    )
}