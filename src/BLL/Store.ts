import {configureStore} from "@reduxjs/toolkit";
import {todoSlice} from "./TodoReducer";
import {taskSlice} from "./TaskReducer";
import {authApi} from "../DAL/AuthAPI";

export const store=configureStore({
    reducer:{
        todoListState:todoSlice.reducer,
        tasksState:taskSlice.reducer,
        [authApi.reducerPath]:authApi.reducer
    },
    middleware:getDefaultMiddleware =>
        getDefaultMiddleware().concat(authApi.middleware)
})

export type RootStateType =ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch