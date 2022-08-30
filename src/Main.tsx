import {
    FlatList,
    ImageBackground,
    ImageSourcePropType,
    ListRenderItem,
    StatusBar,
    StyleSheet,
} from 'react-native';
// @ts-ignore
import realism from "./common/assets/realizm.jpg"
import {Header} from "./Header";
import {Footer} from "./Footer";
import {EmptyContent} from "./EmptyContent";
import {Card} from "./Card";
import {AppBar} from "./AppBar";
import {HEIGHT, WIDTH} from "./common/Variables";
import {useReducer} from "react";

export type CardType = {
    id: string
    title: string
    cardItemPrice: string
    grade: number
    created: string
    decKCover: ImageSourcePropType
}
const ARR: CardType[] = new Array(10).fill(null)
    .map((_, i) => (
            {
                id: i + "1",
                title: `Some product`,
                decKCover: realism,
                cardItemPrice: "100500$",
                grade: i,
                created: "20 августа, 22:32"
            }
        )
    )
export type TodoItem = {
    id: string|Uint8Array,
    title: string,
    decKCover: ImageSourcePropType,
    status: number
}
 export type InitStateType = {
    todos: TodoItem[]
}
const initState: InitStateType = {
    todos: []
}
const todoReducer = (state: InitStateType, action: { type: string,  todoItem:TodoItem }): InitStateType => {
    switch (action.type) {
        case "CREATE-TODO":
        return {...state,
            todos:[...state.todos,action.todoItem]
        }
        case "CHANGE-TODO":
            return {
                ...state,
                todos: state.todos.map((todo:TodoItem) =>
                    todo.id === action.todoItem.id ? {
                        id: action.todoItem.id,
                        title: action.todoItem.title,
                        status: action.todoItem.status,
                        decKCover: realism
                    } : todo
                )
            }
        case "DELETE-TODO":
            return {...state,
               todos: state.todos.filter((todo)=>todo.id!==action.todoItem.id)
            }
        default:
            return state
    }

}


export const Main = () => {
    StatusBar.setBarStyle("light-content")
    const [stateTodo, dispatch] = useReducer(todoReducer, initState)

    const render: ListRenderItem<TodoItem> = ({item}) => {
        return (
            <Card todo={item}/>
        )
    }

    const createTodoHandler = (newTodoTitle: string) => {
        dispatch({type:"CREATE-TODO",todoItem:{decKCover:realism,status:0,title:newTodoTitle,id:"uuid.v1()"}})
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