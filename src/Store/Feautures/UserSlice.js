import {createSlice} from '@reduxjs/toolkit'
import AppApi from '../../Generic/Query';

//AppApi 
const initialState = null

export const userSlice = createSlice({
    name:'user',

    initialState,
    
    reducers:{
        logout: ()=> initialState,      
    },
    
    extraReducers: (builder) => {
        builder.addMatcher(AppApi.endpoints.register.matchFulfilled, (_, { payload }) => payload);
        builder.addMatcher(AppApi.endpoints.login.matchFulfilled, (_, { payload }) => payload);
    
      },
    });


export const {logout} = userSlice.actions
export default userSlice.reducer