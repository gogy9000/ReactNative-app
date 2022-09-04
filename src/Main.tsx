import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {LoginView} from "./screens/login-screen/LoginView";
import {TodoView} from "./screens/todo-screens/TodoView";
import {TEXTCOLOR} from "./common/Variables";
import {RootStackParamList, useAppNavigation} from "./screens/types/types";
import {createStackNavigator} from "@react-navigation/stack";
import {authApi} from "./DAL/AuthAPI";


export const Main = () => {
    // const {data}=authApi.useAuthMeQuery()
    const Stack=createStackNavigator<RootStackParamList>()
    // const navigation=useAppNavigation()

    // if(data&&data.resultCode===0){
    //     navigation.navigate("Todo")
    // }else {
    //     navigation.navigate("Login")
    // }

    return(
      <Stack.Navigator>
          <Stack.Screen
              name={"Login"}
              component={LoginView}
              options={{headerShown:true,headerTransparent:true,headerTitleStyle:{color:TEXTCOLOR}}}
              />

          <Stack.Screen name={"Todo"}
                      component={TodoView}
                      options={{headerShown:false,headerStyle:{backgroundColor:"rgba(5,5,5,0.2)"}}}
          />
      </Stack.Navigator>
  )
}