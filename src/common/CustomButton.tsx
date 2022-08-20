import {ColorValue, GestureResponderEvent, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {FC, memo} from "react";
import {HEIGHT, PADDING, WIDTH} from "./variables";

type CustomButtonPropsType = {
    onPress?: (event: GestureResponderEvent) => void
    title?: string
    styleButton?: Object
    styleTitle?: Object
    activeOpacity?:number
    underlayColor?:ColorValue
}
export const CustomButton: FC<CustomButtonPropsType> = memo((props) => {
    const {onPress, title="Button", styleButton, styleTitle,activeOpacity,underlayColor} = props
    const onPressHandler = (event: GestureResponderEvent) => {
        onPress && onPress(event)
    }

    return (
        <TouchableHighlight
            onPress={onPressHandler}
            activeOpacity={!!activeOpacity?activeOpacity:0.2}
            underlayColor={!!underlayColor?underlayColor:"rgba(5,5,5,0.2)"}
        >
            <View style={[styles.button, styleButton]}>
                <Text style={[styles.title, styleTitle]}>
                    {title}
                </Text>
            </View>
        </TouchableHighlight>
    )
})
const styles = StyleSheet.create({
    button: {
        height: (HEIGHT - PADDING * 2) / 19,
        width: (WIDTH - PADDING * 2) / 2,
        alignItems: "center",
        padding: 5,
        borderStyle: "solid",
        borderColor: "#DDDDDD",
        borderRadius: 3,
        borderWidth: 1
    },
    title: {
        color: "#DDDDDD",
        fontSize:22
    }
})