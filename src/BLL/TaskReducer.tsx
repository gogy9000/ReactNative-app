import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type TaskType = { todoId: string, taskId: string, taskTitle: string, taskStatus: string }
export type InitTaskType = {
    tasksList: { [todoId: string]: TaskType[] }
}
export const initialState: InitTaskType = {
    tasksList: {}
}
export const taskSlice=createSlice({
    name:"tasks",
    initialState,
    reducers:{
        addTask:(state,action:PayloadAction<TaskType>)=>{
            if(Object.keys(state.tasksList).length===0||!state.tasksList.hasOwnProperty(action.payload.todoId)){
                state.tasksList[action.payload.todoId]=[]
            }
            state.tasksList[action.payload.todoId].push(action.payload)
        },
        updateTask:(state,action:PayloadAction<TaskType>)=>{
            state.tasksList[action.payload.todoId].map((task)=>task.taskId===action.payload.taskId?action.payload:task)
        },
        deleteTask:(state,action:PayloadAction<TaskType>)=>{
            state.tasksList[action.payload.todoId].filter(task=>task.taskId!==action.payload.taskId)
        }
    }
})

