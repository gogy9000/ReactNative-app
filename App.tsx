import {Provider} from 'react-redux'
import {store} from "./src/BLL/Store";
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {RootScreen} from "./src/screens/Root-screen/RootScreen";
import {StatusBar} from "expo-status-bar";
import {NativeBaseProvider} from  "native-base"


export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <StatusBar/>
                <Provider store={store}>
                    <RootScreen/>
                </Provider>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}


