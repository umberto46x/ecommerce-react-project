


/* 
slices:

products ok
cart
profile
reviews
orders
auth

*/

import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


export const store = configureStore({
reducer: {
    productsReducer},

})

export type State = ReturnType<typeof store.getState>;
export type StateDispatch = typeof store.dispatch;
export type Store = typeof store;
export const useStateDispatcher = useDispatch.withTypes<StateDispatch>();
export const useStateSelector = useSelector.withTypes<State>();