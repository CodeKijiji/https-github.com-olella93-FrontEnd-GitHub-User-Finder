import {Navigate, useLocation} from "react-router-dom";

function AuthRoute ({children}){
    const token = llocalStorage.getitem("token");
    const location = useLocation();

    if(!token){
        return<Navigate to ="/login"state={{from:location}}replace/>
    }
    
    if
}