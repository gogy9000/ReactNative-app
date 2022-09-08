

import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type TodoItem = {
    id: string,
    title: string,
    status: number
}
export type InitStateType = {
    todos: TodoItem[]
}
export const initialState: InitStateType = {
    todos: []
}
 const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        createTodoList:(state,action:PayloadAction<TodoItem>)=>{
           state.todos.push(action.payload)
        },
        updateTodoList:(state,action:PayloadAction<TodoItem>)=>{
            state.todos=state.todos.map((todo)=>todo.id===action.payload.id?action.payload:todo)
        },
        deleteTodoList:(state,action:PayloadAction<TodoItem>)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload.id)
        }
    }
})
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