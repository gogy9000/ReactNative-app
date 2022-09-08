import {ImageBackground, StatusBar, StyleSheet, Text, View} from "react-native";
import {CustomButton} from "../common/CustomButton";
import React from "react";
import {BACKGROUNDCOLOR, FONTSIZEPrimary, PADDING, TEXTCOLOR} from "../common/Variables";
// @ts-ignore
import realizm from "../common/assets/realizm.jpg"
import {useAppSelector} from "../CustomHooks/CustomHooks";

export const TaskView = () => {
    const task = useAppSelector(state => state.navigateParamsState.currentTask)

    return (
        <ImageBackground
            style={[styles.modalContainer]}
            source={realizm}
            borderRadius={10}
            resizeMode={"cover"}>
            <Text style={[styles.title]}>{task.title}</Text>
            <View style={[styles.taskBar]}>
                <CustomButton>check</CustomButton>
                <CustomButton>delete</CustomButton>
                <CustomButton>edit</CustomButton>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    checkedTask: {
        backgroundColor: BACKGROUNDCOLOR
    },
    modalContainer: {
        paddingTop: StatusBar.currentHeight || 0,
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