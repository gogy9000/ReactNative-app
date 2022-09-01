import { Provider } from 'react-redux'
import {Main} from "./src/Main";
import {store} from "./src/BLL/Store";



export default function App() {
    return (
        <Provider store={store}>
        <Main/>
        </Provider>
    );
}


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
