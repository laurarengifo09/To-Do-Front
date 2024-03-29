import { Routes, Route, Navigate } from "react-router-dom"
import { Login } from "./login/Login"
import { Register } from "./register/Register"
import { RecoverPassword } from "./recover-password/RecoverPassword"


export function AuthRouter(){
    return(
        <Routes>
            <Route path="/login" element={< Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/recoverPassword" element={<RecoverPassword/>} />
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    )
}