import {Provider} from 'react-redux'
import {store} from "./src/BLL/Store";
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {ImageBackground, StatusBar, StyleSheet} from "react-native";
// @ts-ignore
import realism from "./src/common/assets/realizm.jpg";
import {HEIGHT, WIDTH} from "./src/common/Variables";
import {RootScreen} from "./src/screens/Root-screen/RootScreen";


export default function App() {
    StatusBar.setBarStyle("light-content")

    return (
        <ImageBackground style={styles.imageBackground} source={realism} resizeMode={"cover"}>
        <NavigationContainer>
            <Provider store={store}>
                    <RootScreen/>
            </Provider>
        </NavigationContainer>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: WIDTH,
        height: HEIGHT,
    }

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
