import {FlatList, ImageBackground, ListRenderItem, StatusBar, StyleSheet, Text, View} from 'react-native';

import realism from './assets/realizm.jpg'
import {Header} from "./src/Header";
import {Footer} from "./src/Footer";
import {EmptyContent} from "./src/EmptyContent";
import {HEIGHT, PADDING, WIDTH} from "./src/common/variables";


const ARR=new Array(50).fill(null)
    .map((_,i)=>({id:i+"1",title:"title"+i}))

export default function App() {


    const render:ListRenderItem<{ id: string; title: string; }> = (props) => {
      return <View style={styles.item}>
          <Text style={{color:"white"}}>{props.item.title}</Text>
      </View>
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={realism} resizeMode={"cover"}>
            <FlatList style={styles.flatList}
                      columnWrapperStyle={styles.columnWrapperStyle}
                      data={ARR}
                      renderItem={render}
                      numColumns={2}
                      ListHeaderComponent={()=><Header/>}
                      ListFooterComponent={()=><Footer/>}
                      ListEmptyComponent={()=><EmptyContent/>}
            />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:WIDTH,
        height:HEIGHT,
        marginTop:StatusBar.currentHeight||0,


    },
    backgroundImage:{
        flex:1,
        justifyContent:"center"
    },
    flatList:{},
    columnWrapperStyle:{
        justifyContent:"space-around"
    },

    input: {
        width: 100,
        height: 50,
        backgroundColor: 'white'
    },
    pressable:{
        backgroundColor:"black",
        borderStyle:"solid",
        borderColor:"white",
        borderWidth:1

    },
    item:{
        width:((WIDTH-PADDING*2)/2)-2,
        height:((HEIGHT-PADDING*2)/4),
        marginVertical:15,
        marginHorizontal:15,
        borderStyle:"solid",
        borderColor:"white",
        borderWidth:1

    }
});
{/*<Text style={{color: "white"}}>ololo</Text>*/}
{/*<ActivityIndicator size="large"/>*/}
{/*<Button onPress={() => {*/}
{/*}} title={"button"}/>*/}
{/*<Image*/}
{/*    style={{width: 100, height: 100}}*/}
{/*    source={{*/}
{/*        uri: 'https://reactnative.dev/img/tiny_logo.png'*/}
{/*    }}/>*/}
{/*<TextInput*/}
{/*    style={styles.input}*/}
{/*    onChangeText={() => {*/}
{/*    }}*/}
{/*    value={"number"}*/}
{/*/>*/}
{/*<TouchableOpacity>*/}
{/*<Text style={{color: "white"}}>azza</Text>*/}
{/*</TouchableOpacity>*/}
{/*<Pressable style={styles.pressable}>*/}
{/*    <Text style={{color: "white"}}>azza</Text>*/}
{/*</Pressable>*/}
{/*<Pressable style={[styles.pressable,{backgroundColor: "orange"},{borderWidth: 5}]*/}
{/*}>*/}
{/*    <Text style={{color: "white"}}>azza</Text>*/}
{/*</Pressable>*/}
{/*<StatusBar style="auto"/>*/}
