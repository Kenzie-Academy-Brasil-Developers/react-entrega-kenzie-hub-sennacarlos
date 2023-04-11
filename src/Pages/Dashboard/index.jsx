import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { StyledDashboardPage } from "./style"
import { api } from "../../services/api"


export const DashboardPage = () => {
    const [user, setUser] = useState(null)

    useEffect(() =>  {
        async function loadUser() {
            
            const token = localStorage.getItem("@kenzieHub:token")
            const response = await api.get("/profile", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }) 
            setUser(response.data)

        }
        loadUser()
    }, [])

    return (
        <>
        <Header setUser={setUser}/>
        <StyledDashboardPage>
            <section className="user__container">
                <div>
                    {user? <h3>Olá, {user.name}!</h3> : <h3>Carregando...</h3>}
                    {user? <p>{user.course_module}</p> : null}
                </div>
            </section>
            <section className="user__tasks">
                <h3>Que pena! Estamos em desenvolvimento :(</h3>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </section>
        </StyledDashboardPage>
        
        </>
    )
}