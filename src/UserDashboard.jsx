import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./slices/userSlice";

export default function UserDashboard(){
    const {isLoggedIn, userInfo} = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    return (
        <>
            {isLoggedIn ? (
                <>
                    <p>name:{userInfo.name}</p>
                    <p>Age:{userInfo.age}</p>
                    <button onClick={()=>dispatch(logout())}>Logout</button>
                </>
            ) : (
                <button onClick={()=>dispatch(login({name: 'John', age:50}))}>Login</button>
            )
            }
        </>
    );
}