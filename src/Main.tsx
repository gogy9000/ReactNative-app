import {FlatList, ImageBackground, ListRenderItem, StatusBar, StyleSheet, Text,} from 'react-native';
// @ts-ignore
import realism from "./common/assets/realizm.jpg"
import {Header} from "./Header";
import {Footer} from "./Footer";
import {EmptyContent} from "./EmptyContent";
import {TodoContainer} from "./TodoContainer";
import {AppBar} from "./AppBar";
import {HEIGHT, PADDING, WIDTH} from "./common/Variables";
import uuid from 'react-native-uuid'
import {TodoItem, todoSlice} from "./BLL/TodoReducer";
import {taskSlice, TaskType} from "./BLL/TaskReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./BLL/Store";

StatusBar.setBarStyle("light-content")
export const Main = () => {

    const todoList = useSelector((state: RootState) => state.todoListState.todos)
    const tasks = useSelector((state: RootState) => state.tasksState.tasksList)

    const dispatch = useDispatch()

    const addTaskHandler = (task: TaskType) => {
        dispatch(taskSlice.actions.addTask(task))
    }

    const render: ListRenderItem<TodoItem> = ({item}) => {
        return (
            <TodoContainer addTaskHandler={addTaskHandler} todo={item}>
                <>
                    {tasks[item.id]?.map((task) => <Text key={task.taskId}>{task.taskTitle}</Text>)}
                </>
            </TodoContainer>

        )
    }

    const createTodoHandler = (newTodoTitle: string) => {
        const newId = uuid.v1().toString()
        dispatch(todoSlice.actions.createTodoList(
                {decKCover: realism, status: 0, title: newTodoTitle, id: newId}
            )
        )
    }


    return (

        <ImageBackground style={styles.imageBackground} source={realism} resizeMode={"cover"}>
            <FlatList

                columnWrapperStyle={styles.columnWrapperStyle}
                data={todoList}
                extraData={tasks}
                renderItem={render}
                numColumns={2}
                ListHeaderComponent={<Header createTodoHandler={createTodoHandler}/>}
                // ListFooterComponent={<Footer/>}
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
        justifyContent: "space-around",
        // height: ((HEIGHT-PADDING*2)*0.79),


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