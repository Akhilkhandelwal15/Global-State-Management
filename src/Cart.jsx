import { useCart } from "./CartContext";

export default function Cart(){
    const {cart, addCart, removeCart} = useCart();
    return(
        <>
            <button onClick={removeCart}>-</button>
            <p>cart: {cart}</p>
            <button onClick={addCart}>+</button>
        </>
    );
}