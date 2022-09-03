import React, {memo, useState} from "react";
import {Text, View, StyleSheet, Modal, ImageBackground, Pressable} from "react-native";
import {taskSlice, TaskType} from "../../BLL/TaskReducer";
import {commonBorderStyle} from "../../common/Styles";
import {CustomButton} from "../../common/CustomButton";
import {BACKGROUNDCOLOR, FONTSIZEPrimary, HEIGHT, MARGIN, PADDING, TEXTCOLOR, WIDTH} from "../../common/Variables";
import {TodoItem} from "../../BLL/TodoReducer";
import {useDispatch} from "react-redux";

type TaskProps = {
    task: TaskType
    todo: TodoItem
}
export const Task: React.FC<TaskProps> = memo(({task, todo}) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const dispatch = useDispatch()
    const doubleTap = () => {
        let tapCount = 0
        return () => {
            tapCount++
            setTimeout(() => {
                tapCount = 0
            }, 300)
            if (tapCount === 2) {
                setIsModalVisible(true)
            } else {
            }
        }
    }

    const checkTask = () => {
        dispatch(taskSlice.actions.updateTask({...task, taskStatus: "completed"}))
    }
    console.log(task.taskStatus)
    return (
        <Pressable onLongPress={() => {
            setIsModalVisible(true)
        }}
                   onPress={doubleTap()}>
            <View style={[styles.taskContainer, commonBorderStyle(),task.taskStatus==="completed"&&styles.checkedTask]}>
                <Text style={[styles.title]}>{task.taskTitle}</Text>
                <Modal
                    visible={isModalVisible}
                    transparent={true}
                    onRequestClose={() => {
                        setIsModalVisible(false)
                    }}
                    animationType={"fade"}
                >
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
                </Modal>
                <CustomButton onPress={checkTask}>check</CustomButton>
            </View>
        </Pressable>
    )
})

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: MARGIN / 3,
        paddingVertical: PADDING / 4,
        paddingHorizontal: PADDING / 4,
        position: "relative",
    },
    checkedTask:{
       backgroundColor:BACKGROUNDCOLOR
    },
    modalContainer: {
        width: ((WIDTH - PADDING * 2)) - 2,
        height: ((HEIGHT - PADDING * 2) / 1.3),
        marginHorizontal: MARGIN,
        paddingVertical: PADDING / 4,
        paddingHorizontal: PADDING / 4,
        alignSelf: "center",
        position: "absolute",
        top: ((HEIGHT - PADDING * 2) / 11),
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