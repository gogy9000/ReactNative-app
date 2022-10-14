import {FC, memo, ReactElement, useCallback} from "react";
import {Text, StyleSheet, View, StatusBar} from "react-native";
import {CustomButton} from "../common/CustomButton";
import {FONTSIZEPrimary, PADDING, TEXTCOLOR, WIDTH} from "../common/Variables";
import React from "react";
import {StyledInput} from "../styled-components/StyledInput";
import {TodoListItem} from "../DAL/types/types";

type TodoProps = {
    viewMod?: boolean
    todo: TodoListItem
    children?: ReactElement
    addTaskHandler?: () => void
    onChangeTaskTitle?: (value: string) => void
    currentTaskTitle?: string
    deleteTodoHandler?: (todoId: string) => void
}

export const Todo: FC<TodoProps> = memo((props) => {
    const {children, addTaskHandler, todo, viewMod, onChangeTaskTitle, currentTaskTitle, deleteTodoHandler} = props

    const onAddTask = useCallback(() => {
        addTaskHandler && addTaskHandler()
    }, [currentTaskTitle])

    const onDeleteTodo = useCallback(() => {
        deleteTodoHandler && deleteTodoHandler(todo._id)
    }, [todo._id,deleteTodoHandler])

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{todo.title}</Text>
                <CustomButton onPress={onDeleteTodo}>delete</CustomButton>
            </View>
            {
                !viewMod &&
                <View style={styles.inputAndButtonBox}>
                    <StyledInput
                        style={styles.input}
                        onChangeText={onChangeTaskTitle}
                        value={currentTaskTitle}
                        placeholderTextColor={TEXTCOLOR}
                        placeholder={"task name..."}
                        caretHidden
                    />
                    <CustomButton onPress={onAddTask}>add task</CustomButton>
                </View>
            }
            {children || null}
        </View>
    )

})

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight || 0,
        flex: 1,
        justifyContent: "flex-start",
        paddingHorizontal: PADDING / 3,
        paddingVertical: PADDING / 3,

    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: FONTSIZEPrimary,
        color: TEXTCOLOR,
        alignSelf: "center",
    },
    inputAndButtonBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: PADDING / 3
    },
    input: {
        width: (WIDTH - PADDING * 2) * 0.6
    }
})