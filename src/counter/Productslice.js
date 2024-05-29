import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const Productslice = createSlice({
  name: 'Product',
  initialState :{
    cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  },
  
  reducers: {
   addtoCart:(state , action)=>{
    let findProduct = state.cartItem.findIndex((item)=>item.id == action.payload.id)
    if(findProduct !== -1){
      state.cartItem[findProduct].qun += 1
      console.log( state.cartItem[findProduct].qun += 1);
      localStorage.setItem('cart',JSON.stringify(state.cartItem))
    }else{
      state.cartItem=[...state.cartItem , action.payload]
      console.log(state.cartItem=[...state.cartItem , action.payload]);
      localStorage.setItem('cart',JSON.stringify(state.cartItem))
     
    }
   },
      
   productIncerment:(state,action)=> {
    state.cartItem[action.payload].qun += 1
    localStorage.setItem('cart',JSON.stringify(state.cartItem))
   },
   productDecrement:(state,action)=>{
    if(state.cartItem[action.payload].qun > 1){
      state.cartItem[action.payload].qun -=1
      localStorage.setItem('cart',JSON.stringify(state.cartItem))
    }

   }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,addtoCart,productIncerment,productDecrement } = Productslice.actions

export default Productslice.reducer
