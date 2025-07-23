import axios from "axios"
import { useState } from "react"
import type { Product } from "../models/Product";
import { useStateDispatcher } from "../store/store";
import { setProducts } from "../store/slices/productsSlice";



export const useGetProductsByAPI = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading,setLoading] = useState<boolean>(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [status,setStatus] = useState<"Idle"|"Error"|"Retrieved">("Idle")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useStateDispatcher()


    try{
        setLoading(true);
        const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
        
        if(response.data.length>0){
            dispatch(setProducts(response.data));
            setLoading(false);
            setStatus("Retrieved");
        }
    }catch(err){
        console.log("An Error Occurred:",err);
        setLoading(false);
        setStatus("Error")

    }

    return [loading,status];
        

}