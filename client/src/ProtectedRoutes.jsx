import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import Signin from "./components/Signup"

const ProtectedRoutes = () => {
    const isAuth = useSelector(state => state.auth.isAuth)
    return (
        <div>
        {
            isAuth ? <Outlet /> : <Signin />
        }
        </div>
    )
    
}

export default ProtectedRoutes
