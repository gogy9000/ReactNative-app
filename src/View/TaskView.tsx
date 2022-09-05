import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {CustomButton} from "../common/CustomButton";
import React from "react";
import {BACKGROUNDCOLOR, FONTSIZEPrimary, PADDING, TEXTCOLOR} from "../common/Variables";
import {EntityTaskPropsType} from "../screens/types/types";
// @ts-ignore
import realizm from "../common/assets/realizm.jpg"

export const TaskView = ({route:{params:{todo,task}}}:EntityTaskPropsType) => {

    return (
        <ImageBackground
            style={[styles.modalContainer]}
            source={realizm}
            borderRadius={10}
            resizeMode={"cover"}>
            <Text style={[styles.title]}>{task.taskTitle}</Text>
            <View style={[styles.taskBar]}>
                <CustomButton>check</CustomButton>
                <CustomButton>delete</CustomButton>
                <CustomButton>edit</CustomButton>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({

    checkedTask:{
        backgroundColor:BACKGROUNDCOLOR
    },
    modalContainer: {
        paddingHorizontal: PADDING / 4,
        flex: 1,
        justifyContent: "space-between"
    },
    title: {
        color: TEXTCOLOR,
        fontSize: FONTSIZEPrimary
    },
    taskBar: {
        flexDirection: "row",
        justifyContent: "space-around",
    }
})