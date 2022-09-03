import {Provider} from 'react-redux'
import {store} from "./src/BLL/Store";
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {ImageBackground, StatusBar, StyleSheet} from "react-native";
import {TodoView} from "./src/screens/todo-screens/TodoView";
// @ts-ignore
import realism from "./src/common/assets/realizm.jpg";
import {HEIGHT, WIDTH} from "./src/common/Variables";
import {Main} from "./src/Main";


export default function App() {
    StatusBar.setBarStyle("light-content")

    return (

        <NavigationContainer>
            <Provider store={store}>
                <ImageBackground style={styles.imageBackground} source={realism} resizeMode={"cover"}>
                    <Main/>
                </ImageBackground>
            </Provider>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: WIDTH,
        height: HEIGHT,
    },
    columnWrapperStyle: {
        justifyContent: "space-around",
    },
});

{/*<Text style={{color: "white"}}>ololo</Text>*/
}
{/*<ActivityIndicator size="large"/>*/
}
{/*<Button onPress={() => {*/
}
{/*}} title={"button"}/>*/
}
{/*<Image*/
}
{/*    style={{width: 100, height: 100}}*/
}
{/*    source={{*/
}
{/*        uri: 'https://reactnative.dev/img/tiny_logo.png'*/
}
{/*    }}/>*/
}
{/*<TextInput*/
}
{/*    style={styles.input}*/
}
{/*    onChangeText={() => {*/
}
{/*    }}*/
}
{/*    value={"number"}*/
}
{/*/>*/
}
{/*<TouchableOpacity>*/
}
{/*<Text style={{color: "white"}}>azza</Text>*/
}
{/*</TouchableOpacity>*/
}
{/*<Pressable style={styles.pressable}>*/
}
{/*    <Text style={{color: "white"}}>azza</Text>*/
}
{/*</Pressable>*/
}
{/*<Pressable style={[styles.pressable,{backgroundColor: "orange"},{borderWidth: 5}]*/
}
{/*}>*/
}
{/*    <Text style={{color: "white"}}>azza</Text>*/
}
{/*</Pressable>*/
}
{/*<StatusBar style="auto"/>*/
}
