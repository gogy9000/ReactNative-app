import {TodoItem} from "../BLL/TodoReducer";
import {FC, memo, ReactElement, useCallback} from "react";
import {ImageBackground, Text, StyleSheet, View} from "react-native";
import {CustomButton} from "../common/CustomButton";
import {FONTSIZEPrimary, PADDING, TEXTCOLOR, WIDTH} from "../common/Variables";
import React from "react";
import {StyledInput} from "../styled-components/StyledInput";
// @ts-ignore
import realizm from "../common/assets/realizm.jpg"
import {TodoListItem} from "../DAL/types/types";

type TodoProps = {
    viewMod?: boolean
    todo: TodoListItem
    children?: ReactElement
    addTaskHandler?: () => void
    onChangeTodoTitle?:(value: string)=>void
    currentTodoTitle?:string
    deleteTodoHandler?:(todoId:string)=>void
}
export const Todo: FC<TodoProps> = memo((props) => {
    const {children, addTaskHandler, todo, viewMod,onChangeTodoTitle,currentTodoTitle,deleteTodoHandler} = props

    const onAddTask = useCallback( () => {
        addTaskHandler&&addTaskHandler()
    },[])
    const onDeleteTodo = useCallback( () => {
        deleteTodoHandler&&deleteTodoHandler(todo.id)
    },[])

    return (
        <ImageBackground
            style={styles.deckCover}
            source={realizm}
            borderRadius={viewMod?10:0}
            resizeMode={"cover"}>
            <View>
                <Text style={styles.title}>{todo.title}</Text>
                <CustomButton onPress={onDeleteTodo}>del</CustomButton>
            </View>

            {
                !viewMod &&
                <View style={[styles.inputAndButtonBox]}>
                    <StyledInput
                        style={[styles.input]}
                        onChangeText={onChangeTodoTitle}
                        value={currentTodoTitle}
                        placeholderTextColor={TEXTCOLOR}
                        placeholder={"task name..."}
                        caretHidden
                    />
                    <CustomButton onPress={onAddTask}>add task</CustomButton>
                </View>
            }
            {children || null}
        </ImageBackground>
    )

})

const styles = StyleSheet.create({
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
    inputAndButtonBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: PADDING / 3
    },
    input: {
        width: (WIDTH - PADDING * 2) * 0.6
    }
})