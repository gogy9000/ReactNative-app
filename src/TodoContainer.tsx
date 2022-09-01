import {FC, ReactElement, useState} from "react";
import {Modal, Pressable, StyleSheet, View} from "react-native";
import {commonBorderStyle} from "./common/Styles";
import {HEIGHT, MARGIN, PADDING, WIDTH} from "./common/Variables";
import {TodoItem} from "./BLL/TodoReducer";
import {TaskType} from "./BLL/TaskReducer";
import {Todo} from "./Todo";
import React from "react";

type TodoContainerProps = {
    todo: TodoItem
    children?: ReactElement
    onPressHandler?: () => void
    addTaskHandler:(task:TaskType)=>void
}

export const TodoContainer: FC<TodoContainerProps> = (props) => {
    const {addTaskHandler}=props

    const [isModalVisible, setIsModalVisible]=useState(false)

    return (
        <Pressable onPress={() => {
            setIsModalVisible(!isModalVisible)
        }}>
            <View style={[styles.todoContainer, commonBorderStyle(10)]}>
                <Todo viewMod addTaskHandler={addTaskHandler} todo={props.todo}>
                    {props.children}
                </Todo>
            </View>

            <Modal
                visible={isModalVisible}
                transparent={true}
                onRequestClose={()=>{setIsModalVisible(false)}}
                animationType={"fade"}
            >
                <View style={[styles.modal, commonBorderStyle(10)]}>
                    <Todo addTaskHandler={addTaskHandler} todo={props.todo}>
                        {props.children}
                    </Todo>
                </View>
            </Modal>
        </Pressable>
    )
}

export const styles = StyleSheet.create({
    modal:{
        width: ((WIDTH - PADDING * 2)) - 2,
        minHeight: ((HEIGHT - PADDING * 2)/1.3 ),
        marginHorizontal: MARGIN,
        alignSelf:"center",
        position:"absolute",
        top:((HEIGHT - PADDING * 2)/11 ),
    },
    todoContainer: {
        flex: 1,
        width: ((WIDTH - PADDING * 2) / 2) - 2,
        height: ((HEIGHT - PADDING * 2) / 4),
        marginVertical: MARGIN / 2,
        marginHorizontal: MARGIN / 2,
    },

})