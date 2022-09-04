import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {AuthDataType, Data, LoginPayloadType} from "./types/types";


export const authApi=createApi({
    reducerPath:"authApi",
    tagTypes:["Post","Delete"],
    baseQuery:fetchBaseQuery(
        {baseUrl:"https://social-network.samuraijs.com/api/1.1/"}),
    endpoints:((build) => ({
        authMe:build.query<Data<AuthDataType>,void>({
            query:()=>({url:`/auth/me`}),
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
    }))
})
// export const {useAuthMeQuery,useLoginMutation}=authApi