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
import React from "react";
import {Tasks} from "./Tasks";
import {Todo} from "./Todo";
import {authApi} from "../DAL/AuthAPI";
import {TodoListItem} from "../DAL/types/types";


export const TodoList = () => {

    const tasks = useAppSelector(state => state.tasksState.tasksList)
    const navigation = useAppNavigation()
    const dispatch = useAppDispatch()
    const {data:todoList,error,isLoading}=authApi.useTodoListQuery()
    const [createTodo]=authApi.usePostTodoMutation()

    const createTodoHandler = (newTodoTitle: string) => {
        // const todoTitle = !!newTodoTitle ? newTodoTitle : "new todo"
        // const newId = uuid.v1().toString()
        // dispatch(todoSlice.actions.createTodoList(
        //         {status: 0, title: todoTitle, id: newId}
        //     )
        // )
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
    // if(todoList){
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
    // }


}
