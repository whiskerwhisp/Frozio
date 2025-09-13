import {createSlice} from "@reduxjs/toolkit";

const initialState={
    items:[],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item = action.payload;
            const existingItem = state.items.find((i)=>i.id===item.id);
            if(existingItem){
                existingItem.quantity += 1;
            }else{
                state.items.push({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    image: item.image,
                    quantity: 1,
                });
            }
        },
        removeFromCart:(state, action)=>{
            state.items = state.items.filter((i)=> i.id !== action.payload);
        },
        incrementQuantity: (state, action)=>{
            const item = state.items.find((i)=> i.id=== action.payload);
            if(item) item.quantity +=1;
        },
        decrementQuantity:(state, action)=>{
            const item = state.items.find((i)=>i.id === action.payload);
            if(item && item.quantity > 1){
                item.quantity -= 1;
            }else {
                state.items =state.items.filter((i)=> i.id !== action.payload);
            }
        },
        cartClear: (state)=>{
            state.items = [];
        }
    }
});

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    cartClear,
} = cartSlice.actions;

export default cartSlice.reducer;