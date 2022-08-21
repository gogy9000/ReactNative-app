import {
    FlatList,
    ImageBackground,
    ImageSourcePropType,
    ListRenderItem,
    StatusBar,
    StyleSheet,
    View
} from 'react-native';
// @ts-ignore
import realism from './assets/realizm.jpg'
import {Header} from "./src/Header";
import {Footer} from "./src/Footer";
import {EmptyContent} from "./src/EmptyContent";
import {HEIGHT,WIDTH} from "./src/common/variables";
import {Card} from "./src/Card";

export type CardType = {
    id: string
    title: string
    cardItemPrice: string
    grade: number
    created:string
    decKCover: ImageSourcePropType
}
const ARR: CardType[] = new Array(10).fill(null)
    .map((_, i) => (
            {
                id: i + "1",
                title: `Some product`,
                decKCover: realism,
                cardItemPrice:"100500$",
                grade:i,
                created:"20 августа, 22:32"
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
        <View style={styles.container}>
            <ImageBackground source={realism} resizeMode={"cover"}>

                <FlatList style={styles.flatList}
                          columnWrapperStyle={styles.columnWrapperStyle}
                          data={ARR}
                          renderItem={render}
                          numColumns={2}
                          ListHeaderComponent={<Header/>}
                          ListFooterComponent={<Footer/>}
                          ListEmptyComponent={<EmptyContent/>}
                />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: WIDTH,
        height: HEIGHT,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center",
    },
    flatList: {

    },
    columnWrapperStyle: {
        justifyContent: "space-around"
    },
});

// input: {
//     width: 100,
//         height: 50,
//         backgroundColor: 'white'
// },
// pressable:{
//     backgroundColor:"black",
//         borderStyle:"solid",
//         borderColor:"white",
//         borderWidth:1
//
// },


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
