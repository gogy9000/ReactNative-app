import {Button, Text, View} from "react-native";
import React from "react";
import {useAppNavigation} from "../types/Types";

 export function HomeScreen() {

     const nav=useAppNavigation()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
            <Text>azaz</Text>
            <Button title={"button"} onPress={
                ()=>{
                    // @ts-ignore
                    nav.navigate("Home")}
            }/>
        </View>
    );
}