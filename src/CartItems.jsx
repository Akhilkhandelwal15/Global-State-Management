import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "./slices/cartSlice";

export default function CartItems(){
    const cartItems = useSelector((state)=> state.cart);
    const dispatch = useDispatch();
    return (
        <>
            <h2>Cart Items</h2>
            <button onClick={()=> dispatch(addCart({id:1, name:"shirt"}))}>Add Item</button>
            <ul>
                {cartItems.map((item)=>(
                    <li key={item.id}>
                        {item.name} <button onClick={()=>dispatch(removeCart(item.id))}>Remove Item</button>
                    </li>
                ))}
            </ul>
        </>
    );
}