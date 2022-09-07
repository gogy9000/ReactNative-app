import {useAppNavigation, useAppSelector} from "../CustomHooks/CustomHooks";
import {FlatList, ListRenderItem, TouchableOpacity,} from 'react-native';
import {Header} from "./Header";
import {EmptyContent} from "./EmptyContent";
import {ViewModContainer} from "./ViewModContainer";
import React, {useCallback, useEffect} from "react";
import {Tasks} from "./Tasks";
import {Todo} from "./Todo";
import {Api} from "../DAL/Api";
import {TodoListItem} from "../DAL/types/types";


export const TodoList = () => {
    const tasks = useAppSelector(state => state.tasksState.tasksList)
    const {data: todoList, error, isLoading} = Api.useGetTodoListQuery()
    const [createTodo] = Api.usePostTodoMutation()
    const [deleteTodo] = Api.useDeleteTodoMutation()
    const navigation = useAppNavigation()

    const createTodoHandler = useCallback((newTodoTitle: string) => {
        createTodo(newTodoTitle)
    }, [])
    const deleteTodoHandler = useCallback((todoId: string) => {
        deleteTodo(todoId)
    }, [])

    const render: ListRenderItem<TodoListItem> = ({item}) => {
        const onNavigate = () => {
            navigation.navigate("TodoScreen", {
                screen: "TaskScreen",
                params: {screen: "TaskList", params: {todo: item}}
            })
        }

        return (
            <TouchableOpacity activeOpacity={1} onPress={onNavigate}>
                <ViewModContainer>
                    <Todo deleteTodoHandler={deleteTodoHandler} viewMod todo={item}>
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
