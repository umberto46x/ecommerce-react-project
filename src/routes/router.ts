import { createBrowserRouter } from "react-router-dom";
import { Products } from "../features/products/Products";
import { Profile } from "../features/profile/Profile";
import { Cart } from "../features/cart/Cart";
import { Checkout } from "../features/checkout/Checkout";
import { Auth } from "../features/auth/Auth";
import App from "../App";


export const router = createBrowserRouter([
    {
        path:"/",Component:App
    },
    {
        path:"/products",Component:Products
    },
    {
        path:"/products:id",Component:Products
    },
    {
        path:"/profile:id",Component:Profile
    },
    {
        path:"/cart",Component:Cart
    },
    {
        path:"/checkout",Component:Checkout
    },
    {
        path:"/auth",Component:Auth
    }
]);