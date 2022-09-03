import {Button, FlatList, Text, View, ListRenderItem, Pressable} from "react-native";
import React from "react";
import { useAppNavigation} from "../types/Types";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {arr, arrName, ItemArr} from "../../data/Data";



export function NoHomeScreen() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName={"noHome"}>
            {/*@ts-ignore*/}
            <Tab.Screen name={"Home1"} component={Sfdsdf}  />
            {/*@ts-ignore*/}
            <Tab.Screen name={"noHome2"} component={Sddsdgggg}  />
        </Tab.Navigator>

    );
}
const Sfdsdf = () => {
    const nav=useAppNavigation()

    const render:ListRenderItem<ItemArr> = (item) => {
        return(

                <Pressable onPress={()=>{ // @ts-ignore
                    nav.navigate("Home")}}>
            <Text>{item.item.id}</Text>
            <Text>{item.item.age}</Text>
            <Text>{item.item.name}</Text>
                </Pressable>

            )


    }



    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
            <FlatList
                data={arr}
                renderItem={render}
            />
        </View>
    )

}
const Sddsdgggg = () => {
    const nav=useAppNavigation()
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
            <Text>eeeeeeeee</Text>
            <Button title={"button"} onPress={
                ()=>{ // @ts-ignore
                    nav.navigate("Home")}}/>
        </View>
    )

}
// https://javascript.plainenglish.io/react-navigation-v6-with-typescript-nested-navigation-part-2-87844f643e37