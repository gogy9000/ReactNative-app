import {TodoItem} from "./BLL/TodoReducer";
import {FC, ReactElement, useState} from "react";
import {TaskType} from "./BLL/TaskReducer";
import uuid from "react-native-uuid";
import {ImageBackground, Text, StyleSheet, TextInput} from "react-native";
import {CustomButton} from "./common/CustomButton";
import {FONTSIZEPrimary, PADDING, TEXTCOLOR} from "./common/Variables";
import {commonBorderStyle, commonStyles} from "./common/Styles";

type TaskProps = {
    todo: TodoItem
    children?: ReactElement
    addTaskHandler: (task: TaskType) => void
}
export const Todo: FC<TaskProps> = (props) => {
    const {children, addTaskHandler, todo} = props
    const [todoTitle,setTodoTitle]=useState("")

    const onChangeTodoTitle = (value:string) => {
        setTodoTitle(value)
    }

    const onAddTask = () => {
        const newTaskId = uuid.v1().toString()
        addTaskHandler({taskTitle: "azaza", taskId: newTaskId, taskStatus: "0", todoId: todo.id})
    }
    return (
        <ImageBackground
            style={styles.deckCover}
            source={todo.decKCover}
            borderRadius={10}
            resizeMode={"cover"}>
            <Text style={styles.title}>{todo.title}</Text>
            <TextInput
                style={[commonStyles.modalInputStyle, commonBorderStyle()]}
                onChangeText={onChangeTodoTitle}
                value={todoTitle}
                placeholderTextColor={TEXTCOLOR}
                placeholder={"todo name..."}
                caretHidden
            />
            <CustomButton onPress={onAddTask}>add task</CustomButton>
            {children || null}
        </ImageBackground>
    )

}
const styles=StyleSheet.create({
    deckCover: {
        flex: 1,
        justifyContent: "flex-start",
        paddingHorizontal: PADDING / 3,
        paddingVertical: PADDING / 3
    },
    title: {
        fontSize: FONTSIZEPrimary,
        color: TEXTCOLOR,
        alignSelf: "center",
    },
})