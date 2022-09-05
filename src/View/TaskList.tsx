import {TasksPropsType} from "../screens/types/types";
import {useAppDispatch, useAppSelector} from "../CustomHooks/CustomHooks";
import {taskSlice, TaskType} from "../BLL/TaskReducer";
import {Todo} from "./Todo";
import {Tasks} from "./Tasks";
import React, {useState} from "react";
import uuid from "react-native-uuid";

export const TaskList = ({route: {params: {todo}}}: TasksPropsType) => {
    const [todoTitle, setTodoTitle] = useState("")
    const tasks = useAppSelector(state => state.tasksState.tasksList)
    const dispatch = useAppDispatch()

    const onChangeTodoTitle = (value: string) => {
        setTodoTitle(value)
    }

    const addTaskHandler = () => {
        const newTaskId = uuid.v1().toString()
        dispatch(taskSlice.actions.addTask({
            taskTitle: todoTitle || "azaza",
            taskId: newTaskId,
            taskStatus: "0",
            todoId: todo.id
        }))
    }



    return (
        <Todo onChangeTodoTitle={onChangeTodoTitle} todo={todo} addTaskHandler={addTaskHandler}>
            <Tasks todo={todo} tasks={tasks[todo.id]}/>
        </Todo>
    )
}