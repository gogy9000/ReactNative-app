import {Provider} from 'react-redux'
import {store} from "./src/BLL/Store";
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {RootScreen} from "./src/screens/Root-screen/RootScreen";
import {StatusBar} from "expo-status-bar";

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar />
            <Provider store={store}>
                <RootScreen/>
            </Provider>
        </NavigationContainer>
    );
}


