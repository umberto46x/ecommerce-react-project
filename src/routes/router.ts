import { createBrowserRouter } from "react-router-dom";
import { Home } from "../features/home/Home";
import { Products } from "../features/products/Products";
import { Profile } from "../features/profile/Profile";
import { Cart } from "../features/cart/Cart";
import { Signup } from "../features/signup/Signup";
import { Login } from "../features/login/Login";
import { Checkout } from "../features/checkout/Checkout";


export const router = createBrowserRouter([
    {
        path:"/",Component:Home
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
        path:"/signup",Component:Signup
    },
    {
        path:"/login",Component:Login
    }
]);