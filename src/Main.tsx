import {
    FlatList,
    ImageBackground,
    ImageSourcePropType,
    ListRenderItem, Modal,
    StatusBar,
    StyleSheet,
    Text, View,
} from 'react-native';
// @ts-ignore
import realism from "./common/assets/realizm.jpg"
import {Header} from "./Header";
import {Footer} from "./Footer";
import {EmptyContent} from "./EmptyContent";
import {stylesTodo, Todo} from "./Todo";
import {AppBar} from "./AppBar";
import {HEIGHT, WIDTH} from "./common/Variables";
import {useReducer, useState} from "react";
import uuid from 'react-native-uuid'
import {initState, TodoItem, todoReducer} from "./TodoReducer";

export type TaskType = { todoId: string, taskId: string, taskTitle: string, taskStatus: string }

export type InitTaskType = {
    tasks: { [todoId: string]: TaskType[] }
}

const initTaskState: InitTaskType = {
    tasks: {}
}

const taskReducer = (state: InitTaskType, action: { type: string, task: TaskType }): InitTaskType => {
    switch (action.type) {
        case "CREATE-TODO":
            return {...state,
                tasks: {...state.tasks,[action.task.todoId]:[]}}
        case "ADD-TASK":
            return {
                ...state,
                tasks: {...state.tasks, [action.task.todoId]:[...state.tasks[action.task.todoId],action.task]}
            }
        case "CHANGE-TASK":
            return {
                ...state,
                tasks: {
                    ...state.tasks, [action.task.todoId]: state.tasks[action.task.todoId]
                        .map((task) => task.taskId === action.task.taskId ? action.task : task)
                }
            }
        case "DELETE-TASK":
            return {
                ...state,
                tasks: {
                    ...state.tasks, [action.task.todoId]: state.tasks[action.task.todoId]
                        .filter((task) => task.taskId !== action.task.taskId)
                }
            }
        default:
            return state
    }
}
StatusBar.setBarStyle("light-content")
export const Main = () => {

    const [stateTodo, dispatchTodo] = useReducer(todoReducer, initState)
    const [stateTask, dispatchTask] = useReducer(taskReducer, initTaskState)

    const addTaskHandler = (task:TaskType) => {
        dispatchTask({type:"ADD-TASK",task})
    }

    const render: ListRenderItem<TodoItem> = ({item}) => {

        return (
            <Todo addTaskHandler={addTaskHandler} todo={item}>
                <>
                    {stateTask.tasks[item.id]?.map((task)=><Text>{task.taskTitle}</Text>)}
                </>
            </Todo>

        )
    }

    const createTodoHandler = (newTodoTitle: string) => {
        const newId=uuid.v1().toString()
        dispatchTodo({
            type: "CREATE-TODO",
            todoItem: {decKCover: realism, status: 0, title: newTodoTitle, id:newId}
        })
        dispatchTask({type:"CREATE-TODO",task:{todoId: newId, taskId: "string", taskTitle: "string", taskStatus: "string"}})
    }


    return (

        <ImageBackground style={styles.imageBackground} source={realism} resizeMode={"cover"}>
            <FlatList
                columnWrapperStyle={styles.columnWrapperStyle}
                data={stateTodo.todos}
                extraData={stateTask.tasks}
                renderItem={render}
                numColumns={2}
                ListHeaderComponent={<Header createTodoHandler={createTodoHandler}/>}
                ListFooterComponent={<Footer/>}
                ListEmptyComponent={<EmptyContent/>}
            />
            <AppBar/>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: WIDTH,
        height: HEIGHT,
    },
    columnWrapperStyle: {
        justifyContent: "space-around"
    },
});

// const ARR: CardType[] = new Array(10).fill(null)
//     .map((_, i) => (
//             {
//                 id: i + "1",
//                 title: `Some product`,
//                 decKCover: realism,
//                 cardItemPrice: "100500$",
//                 grade: i,
//                 created: "20 августа, 22:32"
//             }
//         )
//     )