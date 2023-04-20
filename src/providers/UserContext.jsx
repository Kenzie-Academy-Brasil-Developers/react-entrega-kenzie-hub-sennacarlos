import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { api } from "../services/api";
import { TechContext } from "./TechContext";


export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("@kenzieHub:token")
        
        const userAutoLogin = async() => {
            try {
                const response = await api.get("/profile", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }) 
                setUser(response.data)
                
                if (window.location.pathname !== "/dashboard") {
                    navigate("/dashboard")
                }

            } catch (error) {
                console.log(error)
                localStorage.removeItem("@kenzieHub:token")
                localStorage.removeItem("@kenzieHub:userId")
            }
        }

        if (token) {
            userAutoLogin()
        }
    }, [])

    const userLogin = async (formData) => {
        try {
            const response = await api.post("/sessions", formData)
            
            localStorage.setItem("@kenzieHub:userId", response.data.user.id)
            localStorage.setItem("@kenzieHub:token", response.data.token)

            setUser(response.data.user)

            navigate('/dashboard')
            
        } catch (error) {
            toast.error("Email ou senha inválidos")
        }
    }

    const userRegister = async (formData) => {
        try {
            await api.post("/users", formData)

            toast.success("Contra criada com sucesso!")
            
            navigate("/")
        } catch (error) {
            toast.error("Ops! Algo deu errado")
        }
    }

    const userLogout = () => {
        localStorage.removeItem("@kenzieHub:token")
        localStorage.removeItem("@kenzieHub:userId")
        setUser(null)
        navigate("/")
    }

    return (
        <UserContext.Provider value={{ user, setUser, userLogin, userRegister, userLogout}}>
            {children}
        </UserContext.Provider>
    )
}