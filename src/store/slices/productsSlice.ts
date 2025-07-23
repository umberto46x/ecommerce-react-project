import {createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../models/Product";
import type { Status } from "../../models/Status";


interface initialProductsState{
    products:Product[]|[],
    status:Status,
    loading:boolean
    
}


const productSlice = createSlice({
    name:"products",
    initialState: {
    products:[],
    loading:false,
    status:"Idle"
    } as initialProductsState ,
    reducers:{

        setProducts: (state,action:PayloadAction<Product[]>)=> {
                if(action.payload.length>0 && state.products.length === 0){
                        state.products=[...action.payload]
                }
                
        },
        setLoading: (state,action:PayloadAction<boolean>)=> {
                    state.loading= action.payload;
                
        },
        setStatus: (state,action:PayloadAction<Status>)=>{
                    state.status=action.payload;

        }
        

    },
    selectors:{
        getProducts: (state)=>{
        if( state.products.length>0 ){
            return state.products
        }
        },
        getHottestProducts: (state)=>{
            if( state.products.length>0 ){
                console.log("started retrieving hottest products")
                const averageRatingCount = state.products.reduce((sum,product) => product.rating.count + sum,0) / state.products.length;
                console.log("averageRatingCount",averageRatingCount)
                const averageRating = state.products.reduce((sum,product)=> product.rating.rate + sum  ,0)  / state.products.length;
                console.log("averageRating",averageRating)
                const filteredProducts = state.products.filter(p => p.rating.count > averageRatingCount && p.rating.rate > averageRating);
                console.log("filteredProducts",filteredProducts)
                const sortedProducts = filteredProducts.sort((a,b)=>{
                    if(a.rating.rate>b.rating.rate){
                        return 1
                    }else if(a.rating.rate<b.rating.rate){
                        return -1
                    }else{
                        return 0
                    }
                   
               
                });
                
                if(sortedProducts.length <6){
                    return sortedProducts;

                }else{
                    console.log("sortedProducts before",sortedProducts)
                    sortedProducts.splice(6);
                    console.log("sortedProducts after",sortedProducts)
                    return sortedProducts;
                }
                    
            }
        }       
        ,
        getProductById:(state,action:PayloadAction<Pick<Product,"id">>)=>{
                
            if( state.products.length>0 ){
                const filteredProducts = state.products.find(p => p.id === action.payload.id);
                if(filteredProducts){
                    return filteredProducts
                }
            }
        },
        getProductsByCategory: (state,action:PayloadAction<Pick<Product,"category">>)=>{
                if(state.products.length>0 ){
                                const filteredProducts = state.products.filter(p => p.category === action.payload.category)
                                if(filteredProducts){
                                    return filteredProducts
                                }
                            }
        },
        getProductsByQuery: (state,action:PayloadAction<string>)=>{
              if(state.products.length>0 ){
                                const filteredProducts = state.products.filter(p => p.title.includes(action.payload))
                                if(filteredProducts){
                                    return filteredProducts
                                }
                            }
        },
        getProductsByPriceRange: (state,action:PayloadAction<{min:number,max:number}>)=> {

                       
                     if(state.products.length>0 && action.payload.min > 0 && action.payload.max < 10000  ){
                                const filteredProducts = state.products.filter(p => p.price >= action.payload.min && p.price <= action.payload.max)
                                if(filteredProducts){
                                    return filteredProducts
                                }
                            }

        },
        getProductsByMinimumPrice: (state,action:PayloadAction<{min:number}>)=> {
                 if(state.products.length>0 && action.payload.min > 0    ){
                                const filteredProducts = state.products.filter(p => p.price >= action.payload.min)
                                if(filteredProducts){
                                    return filteredProducts
                                }
                            }
        },
        getProductsByMaximumPrice: (state,action:PayloadAction<{max:number}>)=> {
                 if(state.products.length>0 &&  action.payload.max > 0     ){
                                const filteredProducts = state.products.filter(p => p.price <= action.payload.max)
                                if(filteredProducts){
                                    return filteredProducts
                                }
                            }
        }
        
    }


})


export const {setProducts,setLoading,setStatus} = productSlice.actions;
export const {getProductById,getProductsByCategory,
    getProductsByMaximumPrice,getProductsByMinimumPrice,
    getProductsByPriceRange,getProductsByQuery,getProducts,getHottestProducts} = productSlice.selectors;
export const productsReducer = productSlice.reducer;