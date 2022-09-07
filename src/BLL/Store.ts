import {configureStore} from "@reduxjs/toolkit";
import {todoSlice} from "./TodoReducer";
import {taskSlice} from "./TaskReducer";
import {Api} from "../DAL/Api";

export const store=configureStore({
    reducer:{
        todoListState:todoSlice.reducer,
        tasksState:taskSlice.reducer,
        [Api.reducerPath]:Api.reducer
    },
    middleware:getDefaultMiddleware =>
        getDefaultMiddleware().concat(Api.middleware)
})

export type AppRootStateType =ReturnType<typeof store.getState>
export type AppDispatchType=typeof store.dispatch