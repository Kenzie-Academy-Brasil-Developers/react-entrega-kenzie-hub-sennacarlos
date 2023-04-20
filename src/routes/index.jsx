import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../Pages/Login"
import { RegisterPage } from "../Pages/Register"
import { DashboardPage } from "../Pages/Dashboard"
import { ProtectedRouter } from "./ProtectedRoutes"
import { TechProvider } from "../providers/TechContext"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<ProtectedRouter />}>
                    <Route index element={<TechProvider> <DashboardPage/> </TechProvider>} />
                </Route>
        </Routes>
    )
}