import {BaseQueryFn, createApi} from "@reduxjs/toolkit/dist/query/react";
import {AuthDataType, Data, LoginPayloadType, TodoListItem} from "./types/types";
import axios, {AxiosError, AxiosRequestConfig} from "axios";


const axiosBaseQuery =
    (
        { baseUrl,withCredentials,headers}:
            {
                baseUrl: string,
                withCredentials?:boolean,
                headers?:AxiosRequestConfig["headers"]
            } = { baseUrl: '' }


    ): BaseQueryFn<
        {
            url: string
            method: AxiosRequestConfig['method']
            data?: AxiosRequestConfig['data']
            params?: AxiosRequestConfig['params']
        },
        unknown,
        unknown
        > =>
        async ({ url, method, data, params }) => {
        const instance=axios.create({
            baseURL:baseUrl,
            withCredentials:withCredentials,
            headers:headers
        })

            try {
                const result = await instance({ url: baseUrl + url, method, data, params })
                return { data: result.data }
            } catch (axiosError) {
                let err = axiosError as AxiosError
                console.log(err)
                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                    },
                }
            }
        }


export const authApi=createApi({
    reducerPath:"authApi",
    tagTypes:["Post","Delete"],
    baseQuery:axiosBaseQuery(
        {
            baseUrl:'https://social-network.samuraijs.com/api/1.1/',
            headers:{"API-KEY": "1fb0efe7-1c1f-46ce-bb74-74ed02f7875f"},
            withCredentials:true
        }
        ),
    endpoints:((build) => ({
        authMe:build.query<Data<AuthDataType>,void>({
            query:()=>({url:`/auth/me`,method:"get"}),
            providesTags:result => ["Post","Delete"]
        }),
        login:build.mutation<Data<{userId:string}>,LoginPayloadType>({
            query:(payload)=>(
                {url:`/auth/login`,method:"POST",body:payload}
            ),
            invalidatesTags:["Post"]
        }),
        logout:build.mutation<Data<{}>,void>({
            query:(payload)=>(
                {url:`/auth/login`,method:"DELETE",body:payload}
            ),
            invalidatesTags:["Delete"]
        }),
        todoList:build.query<TodoListItem[],void>({
            query:()=>({url:`/todo-lists`,method:"get"})
        }),
        postTodo:build.mutation({
            query:(title:string="New todo")=>(
                {
                  url:`/todo-lists`,method:`post`,data:{title}
                }
            )
        })
    }))
})
