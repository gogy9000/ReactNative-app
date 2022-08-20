import {ColorValue, GestureResponderEvent, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {FC, memo} from "react";
import {FONTSIZEPrimary, FONTSIZESecondary, HEIGHT, PADDING, WIDTH} from "./variables";
import {commonBorderStyle} from "./Styles";

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
            <View style={[styles.button,commonBorderStyle(), styleButton]}>
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
        justifyContent:"center",
        alignItems: "center",

    },
    title: {
        color: "#DDDDDD",
        fontSize:FONTSIZEPrimary
    }
})