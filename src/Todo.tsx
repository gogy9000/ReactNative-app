import {TodoItem} from "./BLL/TodoReducer";
import {FC, ReactElement, useState} from "react";
import {TaskType} from "./BLL/TaskReducer";
import uuid from "react-native-uuid";
import {ImageBackground, Text, StyleSheet, TextInput, View} from "react-native";
import {CustomButton} from "./common/CustomButton";
import {FONTSIZEPrimary, PADDING, TEXTCOLOR, WIDTH} from "./common/Variables";
import {commonBorderStyle, commonStyles} from "./common/Styles";
import React from "react";
import {StyledInput} from "./styled-components/StyledInput";


type TaskProps = {
    viewMod?:boolean
    todo: TodoItem
    children?: ReactElement
    addTaskHandler: (task: TaskType) => void
}
export const Todo: FC<TaskProps> = (props) => {
    const {children, addTaskHandler, todo,viewMod} = props
    const [todoTitle,setTodoTitle]=useState("")

    const onChangeTodoTitle = (value:string) => {
        setTodoTitle(value)
    }

    const onAddTask = () => {
        if(!!todoTitle.trim()) {
            const newTaskId = uuid.v1().toString()
            addTaskHandler({taskTitle: todoTitle, taskId: newTaskId, taskStatus: "0", todoId: todo.id})
            setTodoTitle("")
        }
    }

    return (
        <ImageBackground
            style={styles.deckCover}
            source={todo.decKCover}
            borderRadius={10}
            resizeMode={"cover"}>
            <Text style={styles.title}>{todo.title}</Text>
            {!viewMod&&<View style={[styles.inputAndButtonBox]}>
                <StyledInput
                    style={[styles.input]}
                    onChangeText={onChangeTodoTitle}
                    value={todoTitle}
                    placeholderTextColor={TEXTCOLOR}
                    placeholder={"task name..."}
                    caretHidden
                />
                <CustomButton onPress={onAddTask}>add task</CustomButton>
            </View>}
            {children || null}
        </ImageBackground>
    )

}
const styles=StyleSheet.create({
    deckCover: {
        flex: 1,
        justifyContent: "flex-start",
        paddingHorizontal: PADDING / 3,
        paddingVertical: PADDING / 3,

    },
    title: {
        fontSize: FONTSIZEPrimary,
        color: TEXTCOLOR,
        alignSelf: "center",
    },
    inputAndButtonBox:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:PADDING / 3
    },
    input:{
        width:(WIDTH-PADDING*2)*0.6
    }
})