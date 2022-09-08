import {ColorValue, GestureResponderEvent, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {FC, memo, ReactElement, useCallback} from "react";
import {BACKGROUNDCOLOR, FONTSIZEPrimary, PADDING, TEXTCOLOR, WIDTH} from "./Variables";
import {commonBorderStyle} from "./Styles";
import React from "react";
type CustomButtonPropsType = {
    onPress?: (event: GestureResponderEvent) => void
    title?: string
    styleButton?: Object
    styleTitle?: Object
    activeOpacity?: number
    underlayColor?: ColorValue
    children?: ReactElement|string
    disabled?:boolean
}
export const CustomButton: FC<CustomButtonPropsType> = memo((props) => {
    const {children, onPress, title = "Button", styleButton, styleTitle, activeOpacity, underlayColor,disabled} = props

    const onPressHandler = useCallback( (event: GestureResponderEvent) => {
        onPress && onPress(event)
    },[onPress])

    return (
        <TouchableHighlight
            onPress={onPressHandler}
            disabled={disabled}
            activeOpacity={!!activeOpacity ? activeOpacity : 0.2}
            style={[styles.button, commonBorderStyle(), styleButton]}
            underlayColor={!!underlayColor ? underlayColor : BACKGROUNDCOLOR}
        >
            <Text style={[styles.title, styleTitle]}>
                {children || title}
            </Text>
        </TouchableHighlight>
    )
})
const styles = StyleSheet.create({
    button: {
        minWidth: (WIDTH - PADDING * 2) / 7,
        flexWrap:"nowrap",
        paddingHorizontal: 5,
        justifyContent: "center",
        alignItems: "center",

    },
    title: {
        color: TEXTCOLOR,
        fontSize: FONTSIZEPrimary
    }
})