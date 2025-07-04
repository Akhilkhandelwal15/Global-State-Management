import { useCart } from "./CartContext";

export default function ViewCart(){
    const {cart} = useCart();
    return (
        <>
            <div>
                <p>Cart Items: {cart}</p>
            </div>
        </>
    );
}