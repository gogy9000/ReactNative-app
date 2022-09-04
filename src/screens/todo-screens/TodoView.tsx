import {FlatList, ListRenderItem, Pressable, StyleSheet,} from 'react-native';
// @ts-ignore
import realism from "../../common/assets/realizm.jpg"
import {Header} from "./Header";
import {EmptyContent} from "./EmptyContent";
import {TodoContainer} from "./TodoContainer";
import {HEIGHT, WIDTH} from "../../common/Variables";
import uuid from 'react-native-uuid'
import {TodoItem, todoSlice} from "../../BLL/TodoReducer";
import {taskSlice, TaskType} from "../../BLL/TaskReducer";
import {useDispatch} from "react-redux";
import React from "react";
import {Tasks} from "./Tasks";
import {TasksPropsType, TasksStackParamList, useAppNavigation} from "../types/types";
import {Todo} from "./Todo";
import {useAppDispatch, useAppSelector} from "../../CustomHooks/CustomHooks";
import {createStackNavigator} from "@react-navigation/stack";
import {TaskEntity} from "./TaskEntity";


export const TodoView = () => {

    const todoList = useAppSelector(state => state.todoListState.todos)
    const tasks = useAppSelector(state => state.tasksState.tasksList)
    const navigation=useAppNavigation()
    const dispatch = useDispatch()

    const addTaskHandler = (task: TaskType) => {
        dispatch(taskSlice.actions.addTask(task))
    }

    const createTodoHandler = (newTodoTitle: string) => {
        const todoTitle=!!newTodoTitle?newTodoTitle:"new todo"
        const newId = uuid.v1().toString()
        dispatch(todoSlice.actions.createTodoList(
                {decKCover: realism, status: 0, title: todoTitle, id: newId}
            )
        )
    }

    const render: ListRenderItem<TodoItem> = ({item}) => {
        const onNavigate = () => {
            navigation.navigate("TodoScreen",{screen:"Todo",params:{screen:"TaskList",params:{todo:item}}})
        }
        return (
            <Pressable onPress={onNavigate}>
            <TodoContainer addTaskHandler={addTaskHandler} tasks={tasks[item.id]} todo={item} >
                <Tasks todo={item} tasks={tasks[item.id]}/>
            </TodoContainer>
            </Pressable>
        )
    }


    return (
            <FlatList
                columnWrapperStyle={styles.columnWrapperStyle}
                data={todoList}
                extraData={tasks}
                keyExtractor={(item)=>item.id}
                renderItem={render}
                numColumns={2}
                ListHeaderComponent={<Header createTodoHandler={createTodoHandler}/>}
                ListEmptyComponent={<EmptyContent/>}
            />
    );
}


export const TodoEntity = ({route:{params:{todo}}}:TasksPropsType) => {
    const tasks=useAppSelector(state => state.tasksState.tasksList)
    const dispatch=useAppDispatch()
    const addTaskHandler = (task: TaskType) => {
        dispatch(taskSlice.actions.addTask(task))
    }

  return(
      <Todo todo={todo} addTaskHandler={addTaskHandler}>
          <Tasks todo={todo} tasks={tasks[todo.id]}/>
      </Todo>
  )
}

export const TaskScreen = () => {
    const Stack=createStackNavigator<TasksStackParamList>()
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={"TaskList"} component={TodoEntity} />
            <Stack.Screen name={"Task"} component={TaskEntity} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: WIDTH,
        height: HEIGHT,
    },
    columnWrapperStyle: {
        justifyContent: "space-around",
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