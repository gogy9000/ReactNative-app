import {
    FlatList,
    ImageBackground,
    ImageSourcePropType,
    ListRenderItem,
    StatusBar,
    StyleSheet,
    Text,
} from 'react-native';
// @ts-ignore
import realism from "./common/assets/realizm.jpg"
import {Header} from "./Header";
import {Footer} from "./Footer";
import {EmptyContent} from "./EmptyContent";
import {Todo} from "./Todo";
import {AppBar} from "./AppBar";
import {HEIGHT, WIDTH} from "./common/Variables";
import {useReducer} from "react";
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
        case "ADD-TASK":
            return {
                ...state,
                tasks: {...state.tasks, [action.task.todoId]: [action.task, ...state.tasks[action.task.todoId]]}
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

export const Main = () => {
    StatusBar.setBarStyle("light-content")
    const [stateTodo, dispatchTodo] = useReducer(todoReducer, initState)
    const [stateTask, dispatchTask] = useReducer(taskReducer, initTaskState)

    const render: ListRenderItem<TodoItem> = ({item}) => {
        return (
            <Todo todo={item}>
                <Text>azaza</Text>
            </Todo>
        )
    }

    const createTodoHandler = (newTodoTitle: string) => {
        dispatchTodo({type: "CREATE-TODO", todoItem: {decKCover: realism, status: 0, title: newTodoTitle, id: uuid.v1()}})
    }


    return (

        <ImageBackground style={styles.imageBackground} source={realism} resizeMode={"cover"}>
            <FlatList
                columnWrapperStyle={styles.columnWrapperStyle}
                data={stateTodo.todos}
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