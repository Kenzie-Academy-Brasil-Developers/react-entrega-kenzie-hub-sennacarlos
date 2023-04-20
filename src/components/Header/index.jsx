import { useContext } from "react"
import { StyledHeader } from "./style"
import { UserContext } from "../../providers/UserContext"

export const Header = () => {
    const { userLogout } = useContext(UserContext)

    return (
        <StyledHeader>
            <nav>
                <h1 className="logoKenzieHub">KenzieHub</h1>
                <button onClick={() => userLogout()}>Sair</button>
            </nav>
        </StyledHeader>
    )
}