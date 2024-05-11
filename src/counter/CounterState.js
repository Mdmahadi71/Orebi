import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:JSON.parse(localStorage.getItem('count')) ? JSON.parse(localStorage.getItem('count')): 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
    increment: (state) => {
     let incer = state.value += 1
     localStorage.setItem('count',JSON.stringify(incer))
    },
    decrement: (state) => {
    let decr = state.value 
    if(decr > 0){
        state.value -= 1
        localStorage.setItem('count',JSON.stringify(decr))
    }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
