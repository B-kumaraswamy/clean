import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const Authprovider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    console.log("loggedIn value from context.js " , loggedIn)
    const values = {loggedIn, setLoggedIn, products, setProducts, cart,setCart}
  
    return (
        <AuthContext.Provider value={values} >
            {children}
        </AuthContext.Provider>
    )

    
} 

