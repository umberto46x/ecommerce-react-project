import axios from "axios"
import type { Product } from "../models/Product";
import { useStateDispatcher } from "../store/store";
import { setLoading, setProducts, setStatus } from "../store/slices/productsSlice";



export const useGetProductsByAPI =  () => {
    const dispatch = useStateDispatcher()


    try{
        
        (async()=>{
            dispatch(setLoading(true));
            const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
             if(response.data.length>0){
                dispatch(setProducts(response.data));
                 dispatch(setLoading(false));
               dispatch(setStatus("Retrieved"));
            } else{
                dispatch(setLoading(false));
                dispatch(setStatus("Empty API Response"));
            }
        })();
            
        }catch(err){
        console.log("An Error Occurred:",err);
        dispatch(setLoading(false));
        dispatch(setStatus("Error"));


    }

  
        

}