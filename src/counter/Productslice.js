import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const Productslice = createSlice({
  name: 'Product',
  initialState :{
    cartItem: [],
  },
  
  reducers: {
    addtoCart: (state,action) => {
      let findProduct = state.cartItem.findIndex((item)=> item.id == 
        action.payload.id)
        if(findProduct !== 1){
          state.cartItem[findProduct].qun +=1
        }else{
            state.cartItem = [...state.cartItem , action.payload]
        }
      
        
    },

   
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,addtoCart } = Productslice.actions

export default Productslice.reducer
