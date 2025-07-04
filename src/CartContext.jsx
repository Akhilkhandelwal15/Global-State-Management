import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){
    const [cart, setCart] = useState(0);

    const addCart = ()=>{
        setCart((prev)=> (prev+1));
    }

    const removeCart = ()=>{
        // setCart((prev)=>{
        //     if(prev==0){
        //         return 0;
        //     }
        //     else{
        //         return prev-1;
        //     }
        // });
        setCart((prev)=> prev!==0 ? prev-1 : 0);
    }

    return (
     <CartContext.Provider value={{cart, addCart, removeCart}}>
        {children}
     </CartContext.Provider>   
    );
}

export function useCart(){
    return useContext(CartContext);
}