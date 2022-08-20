import {FC} from "react";
import {ImageBackground, Text, View,StyleSheet} from "react-native";
import {commonBorderStyle} from "./common/Styles";
import {CardType} from "../App";
import {HEIGHT, MARGIN, PADDING, WIDTH} from "./common/variables";

type CardPropsType = {
    card: CardType
}
export const Card: FC<CardPropsType> = (props) => {
    return (
        <View style={[styles.card, commonBorderStyle(5)]}>
            <ImageBackground
                style={styles.deckCover}
                source={props.card.decKCover}
                resizeMode={"cover"}>
                <Text style={{color: "white"}}>{props.card.title}</Text>
            </ImageBackground>
        </View>
    )
}

const styles=StyleSheet.create({
    card: {
        flex: 1,
        width: ((WIDTH - PADDING * 2) / 2) - 2,
        height: ((HEIGHT - PADDING * 2) / 4),
        marginVertical: MARGIN / 2,
        marginHorizontal: MARGIN / 2,
    },
    deckCover: {
        flex: 1
    }
})