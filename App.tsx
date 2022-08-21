import {
    FlatList,
    ImageBackground,
    ImageSourcePropType,
    ListRenderItem,
    StatusBar,
    StyleSheet, Text,
    View
} from 'react-native';
// @ts-ignore
import realism from './assets/realizm.jpg'
import {Header} from "./src/Header";
import {Footer} from "./src/Footer";
import {EmptyContent} from "./src/EmptyContent";
import {HEIGHT, WIDTH} from "./src/common/Variables";
import {Card} from "./src/Card";
import {AppBar} from "./src/AppBar";

export type CardType = {
    id: string
    title: string
    cardItemPrice: string
    grade: number
    created: string
    decKCover: ImageSourcePropType
}
const ARR: CardType[] = new Array(10).fill(null)
    .map((_, i) => (
            {
                id: i + "1",
                title: `Some product`,
                decKCover: realism,
                cardItemPrice: "100500$",
                grade: i,
                created: "20 августа, 22:32"
            }
        )
    )

StatusBar.setBarStyle("light-content")


export default function App() {

    const render: ListRenderItem<CardType> = ({item}) => {
        return (
            <Card card={item}/>
        )
    }

    return (

        <ImageBackground style={styles.imageBackground} source={realism} resizeMode={"cover"}>
            <FlatList
                columnWrapperStyle={styles.columnWrapperStyle}
                data={ARR}
                renderItem={render}
                numColumns={2}
                ListHeaderComponent={<Header/>}
                ListFooterComponent={<Footer/>}
                ListEmptyComponent={<EmptyContent/>}
            />
            <AppBar/>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    imageBackground:{
        flex: 1,
        width: WIDTH,
        height: HEIGHT,
    },
    columnWrapperStyle: {
        justifyContent: "space-around"
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
