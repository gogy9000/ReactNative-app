import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";


export const authApi=createApi({
    reducerPath:"authApi",
    tagTypes:["Post"],
    baseQuery:fetchBaseQuery(
        {baseUrl:"https://social-network.samuraijs.com/api/1.1/"}),
    endpoints:((build) => ({
        authMe:build.query({
            query:()=>({url:`me`}),
            providesTags:result => ["Post"]
        }),
        login:build.mutation<any,{email:string,password:string}>({
            query:(payload)=>(
                {url:"login",method:"POST",body:payload}
            ),
            invalidatesTags:["Post"]
        })

    }))
})
export const {useAuthMeQuery,useLoginMutation}=authApi