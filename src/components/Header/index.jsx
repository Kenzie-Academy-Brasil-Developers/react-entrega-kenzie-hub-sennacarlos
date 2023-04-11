import { StyledHeader } from "./style"
import { useNavigate } from "react-router-dom"

export const Header = ({setUser}) => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate("/")
        setUser(null)
    }

    return (
        <StyledHeader>
            <nav>
                <h1 className="logoKenzieHub">KenzieHub</h1>
                <button onClick={logout}>Sair</button>
            </nav>
        </StyledHeader>
    )
}