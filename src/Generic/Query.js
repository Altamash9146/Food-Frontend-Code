import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const AppApi = createApi({
    reducerPath:'AppApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:8080'}),
    endpoints:(builder)=>({
        register:builder.mutation({
            query:(user)=>({
                url:'/user/register',
                method:'POST',
                body:user,
            }),
        }),
        login:builder.mutation({
            query:(user)=>({
                url:'/user/login',
                method:'POST',
                body:user
            })
        })
    })
})

export const {useRegisterMutation,useLoginMutation} = AppApi

export default AppApi