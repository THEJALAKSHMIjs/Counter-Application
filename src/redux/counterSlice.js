import { createSlice } from "@reduxjs/toolkit";

/*createSlice() - return automatically reducer as well as action*/
export const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    /*actions*/
    reducers:{
        Increment:(state)=>{
            state.value+=1
        },
        Decrement:(state)=>{
            state.value-=1
        },
        Reset:(state)=>{
            state.value=0
        },
        changeRange :(state,action)=>{
            state.value+=action.payload
        }
    }
})
/*actions are need to component*/
export const {Increment,Decrement,Reset,changeRange}=counterSlice.actions

/*reducer are need to store to update state*/
export default counterSlice.reducer