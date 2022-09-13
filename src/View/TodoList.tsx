import {useActions, useAppNavigation} from "../CustomHooks/CustomHooks";
import {ActivityIndicator, FlatList, ListRenderItem, TouchableOpacity,} from 'react-native';
import {Header} from "./Header";
import {EmptyContent} from "./EmptyContent";
import {ViewModContainer} from "./ViewModContainer";
import React, {useCallback} from "react";
import {Api} from "../DAL/Api";
import {TodoListItem} from "../DAL/types/types";
import {TaskList} from "./TaskList";
import {TodoContainer} from "./TodoContainer";

export const TodoList = () => {
    const {data: todoList, isLoading} = Api.useGetTodoListQuery()
    const [createTodo] = Api.usePostTodoMutation()
    const navigation = useAppNavigation()
    const {changeCurrentTodo} = useActions()

    const createTodoHandler = useCallback((newTodoTitle: string) => {
        createTodo(newTodoTitle)
    }, [])

    const render: ListRenderItem<TodoListItem> = useCallback(({item}) => {
        const onNavigate = () => {
            changeCurrentTodo(item)
            navigation.navigate("TodoScreen", {screen: "TaskScreen", params: {screen: "TaskList"}})
        }

        return (
            <TouchableOpacity activeOpacity={1} onLongPress={onNavigate}>
                <ViewModContainer>
                    <TodoContainer todo={item}/>
                </ViewModContainer>
            </TouchableOpacity>
        )
    }, [todoList])

    if (isLoading) {
        return <ActivityIndicator/>
    }

    return (
        <FlatList
            data={todoList}
            keyExtractor={(item) => item.id}
            renderItem={render}
            ListHeaderComponent={<Header createTodoHandler={createTodoHandler}/>}
            ListEmptyComponent={<EmptyContent/>}
            listKey={"root"}
        />
    );
}
