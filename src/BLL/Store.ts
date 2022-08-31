import {configureStore} from "@reduxjs/toolkit";
import {todoSlice} from "./TodoReducer";
import {taskSlice} from "./TaskReducer";

export const store=configureStore({
    reducer:{
        todoListState:todoSlice.reducer,
        tasksState:taskSlice.reducer
    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch