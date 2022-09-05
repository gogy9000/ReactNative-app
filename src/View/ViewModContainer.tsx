import {FC, memo, ReactElement} from "react";
import {StyleSheet, View} from "react-native";
import {commonBorderStyle} from "../common/Styles";
import {HEIGHT, MARGIN, PADDING,WIDTH} from "../common/Variables";
import React from "react";

type TodoContainerProps = {
    children?: ReactElement
}

export const ViewModContainer: FC<TodoContainerProps>  = memo( ({children}) => {

    return (
            <View style={[styles.todoContainer, commonBorderStyle()]}>
                {children}
            </View>
    )
})

export const styles = StyleSheet.create({
    todoContainer: {

        width: ((WIDTH - PADDING * 2)),
        minHeight: ((HEIGHT - PADDING * 2) / 4),
        marginVertical: MARGIN / 2,
        alignSelf:"center"
    },
})
