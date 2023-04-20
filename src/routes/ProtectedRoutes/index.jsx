import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRouter = () => {
    const token = localStorage.getItem("@kenzieHub:token")

    return token ? <Outlet/> : <Navigate to="/"/>
}