import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./slices/productSlice";

export const Products = ()=>{
    const dispatch = useDispatch();
    const {items, loading, error} = useSelector((state)=> state.product);

    // useEffect(()=>{
    //     dispatch(fetchProducts());
    // },[dispatch]);

    function handleClick(){
        dispatch(fetchProducts());
    }

    return (
        <div>
            <button onClick={handleClick}>Fetch Data</button>
            {loading && <p>Loading.....</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
                <>
                    <h2>Product List</h2>
                    <ul>
                        {items.map((item)=>(
                            <li key={item.id}>{item.title}- Rs.{item.price}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}