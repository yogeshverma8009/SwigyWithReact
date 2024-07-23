import { createSlice } from "@reduxjs/toolkit";

//createslice return an object of this cartslice
const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: []
    },
    reducers:{
        addItem : (state, action) =>{

            //Vanialla(older) Redux Says => Dont't mutate state
            //const newSatte = [... state];
            //newState.items.push(action.payload);
            //return newState;

            //Redux Toolkit uses immer behind the sences
            //muttating (directly modifying)the state over here
            state.items.push(action.payload);
        },
        removeItem: (state,action) =>{
            state.items.pop();
        },
        //basicalyitems of array is empty

        //originalState = {items: ["pizza"]}
        clearCart: (state,action) =>{
            //RTK - either Mutate the existing state or return a new state
            
            //state.items.length = 0; // original state =[]

            return {items: [] }; // this new object will be replaced inside original state ={items:[]}
        },
    },
});
//two export action and reducer
export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;