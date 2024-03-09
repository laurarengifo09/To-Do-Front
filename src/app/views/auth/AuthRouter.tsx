import {Route, Navigate } from "react-router-dom"
import { Login } from "./login/Login"
import { Register } from "./register/Register"


export function AuthRouter(){
    return(
        <>
            {/* <Route path="/login" element={< Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="*" element={<Navigate to="/login" replace />} /> */}
            <Route path="/login" {< Login/>} />
        </>
    )
}