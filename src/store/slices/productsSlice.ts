import {createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../models/Product";




const productSlice = createSlice({
    name:"products",
    initialState: [] as Product[] ,
    reducers:{

        setProducts: (state,action)=> {
                if((action.payload as Product[]).length>0){
                        state = [];
                        state.push(action.payload)
                }
                
        }
        

    },
    selectors:{
        getProductById:(state,action:PayloadAction<Pick<Product,"id">>)=>{
                
            if(typeof action.payload === "number" ){
                const filteredProducts = state.find(p => p.id === action.payload.id);
                if(filteredProducts){
                    return filteredProducts
                }
            }
        },
        getProductsByCategory: (state,action:PayloadAction<Pick<Product,"category">>)=>{
                if(typeof action.payload === "string" ){
                                const filteredProducts = state.filter(p => p.category === action.payload.category)
                                if(filteredProducts){
                                    return filteredProducts
                                }
                            }
        },
        getProductsByQuery: (state,action:PayloadAction<string>)=>{
              if(typeof action.payload === "string" ){
                                const filteredProducts = state.filter(p => p.title.includes(action.payload))
                                if(filteredProducts){
                                    return filteredProducts
                                }
                            }
        },
        getProductsByPriceRange: (state,action:PayloadAction<{min:number,max:number}>)=> {

                       
                     if( action.payload.min > 0 && action.payload.max < 10000  ){
                                const filteredProducts = state.filter(p => p.price >= action.payload.min && p.price <= action.payload.max)
                                if(filteredProducts){
                                    return filteredProducts
                                }
                            }

        },
        getProductsByMinimumPrice: (state,action:PayloadAction<{min:number}>)=> {
                 if( action.payload.min > 0    ){
                                const filteredProducts = state.filter(p => p.price >= action.payload.min)
                                if(filteredProducts){
                                    return filteredProducts
                                }
                            }
        },
        getProductsByMaximumPrice: (state,action:PayloadAction<{max:number}>)=> {
                 if( action.payload.max > 0     ){
                                const filteredProducts = state.filter(p => p.price <= action.payload.max)
                                if(filteredProducts){
                                    return filteredProducts
                                }
                            }
        }
    }


})


export const {setProducts} = productSlice.actions;
export const {getProductById,getProductsByCategory,
    getProductsByMaximumPrice,getProductsByMinimumPrice,
    getProductsByPriceRange,getProductsByQuery} = productSlice.selectors;
export const productsReducer = productSlice.reducer;