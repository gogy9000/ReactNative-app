import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {LoginView} from "./screens/login-screen/LoginView";
import {TodoView} from "./screens/todo-screens/TodoView";
import {TEXTCOLOR} from "./common/Variables";
import {RootStackParamList, useAppNavigation} from "./screens/types/types";
import {createStackNavigator} from "@react-navigation/stack";
import {authApi} from "./DAL/AuthAPI";
import {TodoScreen} from "./screens/todo-screens/TodoScreen";


export const Main = () => {
    const Stack=createStackNavigator<RootStackParamList>()


    return(
      <Stack.Navigator>
          <Stack.Screen
              name={"LoginView"}
              component={LoginView}
              options={{headerShown:true,headerTransparent:true,headerTitleStyle:{color:TEXTCOLOR}}}
              />

          <Stack.Screen name={"TodoScreen"}
                      component={TodoScreen}
                      options={{headerShown:false,headerStyle:{backgroundColor:"rgba(5,5,5,0.2)"}}}
          />
      </Stack.Navigator>
  )
}