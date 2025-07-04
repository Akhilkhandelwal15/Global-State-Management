import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./slices/counterSlice";

export default function Counter(){
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <p>Items in store: {count}</p>
            <button onClick={()=> dispatch(increment())}>Add Item</button>
            <button onClick={()=> dispatch(decrement())}>Remove Item</button>
            <button onClick={()=> dispatch(reset())}>Delete All Items</button>
        </>
    );
}