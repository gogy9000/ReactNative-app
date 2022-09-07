import {useAppDispatch, useAppNavigation, useAppSelector} from "../CustomHooks/CustomHooks";
import {
    FlatList,
    ListRenderItem, TouchableHighlight, TouchableOpacity,
    TouchableWithoutFeedback, TouchableWithoutFeedbackComponent,
} from 'react-native';
import {Header} from "./Header";
import {EmptyContent} from "./EmptyContent";
import {ViewModContainer} from "./ViewModContainer";
import uuid from 'react-native-uuid'
import {TodoItem, todoSlice} from "../BLL/TodoReducer";
import React, {useEffect} from "react";
import {Tasks} from "./Tasks";
import {Todo} from "./Todo";
import {Api} from "../DAL/Api";
import {TodoListItem} from "../DAL/types/types";


export const TodoList = () => {
    const tasks = useAppSelector(state => state.tasksState.tasksList)
    const navigation = useAppNavigation()
    const {data:todoList,error,isLoading}=Api.useGetTodoListQuery()
    const [createTodo]=Api.usePostTodoMutation()

    const createTodoHandler = (newTodoTitle: string) => {
        createTodo(newTodoTitle)
    }

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
