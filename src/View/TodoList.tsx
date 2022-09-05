import {useAppDispatch, useAppNavigation, useAppSelector} from "../CustomHooks/CustomHooks";
import {FlatList, ListRenderItem, Pressable, StyleSheet, TouchableOpacity, View,} from 'react-native';
// @ts-ignore
import realism from "../common/assets/realizm.jpg"
import {Header} from "./Header";
import {EmptyContent} from "./EmptyContent";
import {ViewModContainer} from "./ViewModContainer";
import {HEIGHT, MARGIN, PADDING, WIDTH} from "../common/Variables";
import uuid from 'react-native-uuid'
import {TodoItem, todoSlice} from "../BLL/TodoReducer";
import React from "react";
import {Tasks} from "./Tasks";
import {Todo} from "./Todo";


export const TodoList = () => {

    const todoList = useAppSelector(state => state.todoListState.todos)
    const tasks = useAppSelector(state => state.tasksState.tasksList)
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()

    const createTodoHandler = (newTodoTitle: string) => {
        const todoTitle = !!newTodoTitle ? newTodoTitle : "new todo"
        const newId = uuid.v1().toString()
        dispatch(todoSlice.actions.createTodoList(
                {decKCover: realism, status: 0, title: todoTitle, id: newId}
            )
        )
    }

    const render: ListRenderItem<TodoItem> = ({item}) => {
        const onNavigate = () => {
            navigation.navigate("TodoScreen", {
                screen: "TaskScreen",
                params: {screen: "TaskList", params: {todo: item}}
            })
        }

        return (
            <TouchableOpacity onPress={onNavigate}>
                <ViewModContainer>
                    <Todo viewMod todo={item}>
                        <Tasks viewMod todo={item} tasks={tasks[item.id]}/>
                    </Todo>
                </ViewModContainer>
            </TouchableOpacity>
        )
    }

    return (

        <FlatList
            data={todoList}
            extraData={tasks}
            keyExtractor={(item) => item.id}
            renderItem={render}
            ListHeaderComponent={<Header createTodoHandler={createTodoHandler}/>}
            ListEmptyComponent={<EmptyContent/>}
            listKey={"root"}
        />

    );
}
