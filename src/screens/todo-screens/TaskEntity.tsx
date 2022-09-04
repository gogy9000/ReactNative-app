import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {commonBorderStyle} from "../../common/Styles";
import {CustomButton} from "../../common/CustomButton";
import React from "react";
import {BACKGROUNDCOLOR, FONTSIZEPrimary, HEIGHT, MARGIN, PADDING, TEXTCOLOR, WIDTH} from "../../common/Variables";
import {EntityTaskPropsType, TasksPropsType} from "../types/types";

export const TaskEntity = ({route:{params:{todo,task}}}:EntityTaskPropsType) => {

    return (
        <ImageBackground
            style={
                [styles.modalContainer, commonBorderStyle()]
            }
            source={todo.decKCover}
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