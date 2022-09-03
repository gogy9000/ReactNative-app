import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {LoginView} from "./screens/login-screen/LoginView";
import {TodoView} from "./screens/todo-screens/TodoView";
import {TEXTCOLOR} from "./common/Variables";

export const Main = () => {
    const Tab=createBottomTabNavigator()

    return(
      <Tab.Navigator
          initialRouteName={"Login"}
          tabBar={()=><></>}
          sceneContainerStyle={{backgroundColor:"rgba(5,5,5,0)"}}
      >
          {/*@ts-ignore*/}
          <Tab.Screen
              name={"Login"}
              component={LoginView}
              options={{headerShown:true,headerTransparent:true,headerTitleStyle:{color:TEXTCOLOR}}}
              />
          {/*@ts-ignore*/}
          <Tab.Screen name={"Todo"}
                      component={TodoView}
                      options={{headerShown:false,headerStyle:{backgroundColor:"rgba(5,5,5,0.2)"}}}
          />
      </Tab.Navigator>
  )
}