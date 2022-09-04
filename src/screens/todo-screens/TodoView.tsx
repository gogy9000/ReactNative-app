import {FlatList, ListRenderItem, Pressable, StyleSheet, TouchableOpacity, View,} from 'react-native';
// @ts-ignore
import realism from "../../common/assets/realizm.jpg"
import {Header} from "./Header";
import {EmptyContent} from "./EmptyContent";
import {TodoContainer} from "./TodoContainer";
import {HEIGHT, WIDTH} from "../../common/Variables";
import uuid from 'react-native-uuid'
import {TodoItem, todoSlice} from "../../BLL/TodoReducer";
import {taskSlice, TaskType} from "../../BLL/TaskReducer";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {Tasks} from "./Tasks";
import {BottomTabBarHeightContext} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import {ParamPropsTypes, TodoStackParamList, useAppNavigation} from "../types/types";
import {Todo} from "./Todo";
import {useAppSelector} from "../../CustomHooks/CustomHooks";



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
        return (
            <TouchableOpacity onPress={()=>{
                console.log(item.id)
                navigation.navigate("TodoScreen",{screen:"Todo",params:{todoId:item.id}})
            }}>
            <TodoContainer addTaskHandler={addTaskHandler} tasks={tasks[item.id]} todo={item} >
                <Tasks todo={item} tasks={tasks[item.id]}/>
            </TodoContainer>
            </TouchableOpacity>
        )
    }


    return (

        // <ImageBackground style={styles.imageBackground} source={realism} resizeMode={"cover"}>
            <FlatList
                columnWrapperStyle={styles.columnWrapperStyle}
                data={todoList}
                extraData={tasks}
                keyExtractor={(item)=>item.id}
                renderItem={render}
                numColumns={2}
                ListHeaderComponent={<Header createTodoHandler={createTodoHandler}/>}
                // ListFooterComponent={<Footer/>}
                ListEmptyComponent={<EmptyContent/>}
            />

        // </ImageBackground>

    );
}

export const TodoEntity = ({route:{params}}:ParamPropsTypes) => {
    console.log(params)
    const TodoItem=useAppSelector(state => state.todoListState.todos[0])
    const addTaskHandler = (task: TaskType) => {
        // dispatch(taskSlice.actions.addTask(task))
    }
  return(
      <Todo todo={TodoItem} addTaskHandler={addTaskHandler}/>
  )
}

export const TodoScreen = () => {
    const Stack=createStackNavigator<TodoStackParamList>()

    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name={"TodoView"} component={TodoView}/>
            <Stack.Screen name={"Todo"} component={TodoEntity}/>
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