import {ImageSourcePropType} from "react-native";
// @ts-ignore
import realism from "./common/assets/realizm.jpg";

export type TodoItem = {
    id: string,
    title: string,
    decKCover: ImageSourcePropType,
    status: number
}
export type InitStateType = {
    todos: TodoItem[]
}
export const initState: InitStateType = {
    todos: []
}
export const todoReducer = (state: InitStateType, action: { type: string, todoItem: TodoItem }): InitStateType => {
    switch (action.type) {
        case "CREATE-TODO":
            return {
                ...state,
                todos: [...state.todos, action.todoItem]
            }
        case "CHANGE-TODO":
            return {
                ...state,
                todos: state.todos.map((todo: TodoItem) =>
                    todo.id === action.todoItem.id ? {
                        id: action.todoItem.id,
                        title: action.todoItem.title,
                        status: action.todoItem.status,
                        decKCover: realism
                    } : todo
                )
            }
        case "DELETE-TODO":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.todoItem.id)
            }
        default:
            return state
    }

}