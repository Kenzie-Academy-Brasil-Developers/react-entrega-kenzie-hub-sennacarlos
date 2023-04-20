import { useContext, useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { StyledDashboardPage } from "./style"
import { UserContext } from "../../providers/UserContext"
import { TechList } from "../../components/TechList"
import { CreateTech } from "../../components/CreateTech"
import { EditAndDeleteTech } from "../../components/EditAndDeleteTech"
import { TechContext } from "../../providers/TechContext"


export const DashboardPage = () => {
    const { user } = useContext(UserContext)
    const { isOpen, setIsOpen} = useContext(TechContext)
    const { modalOpen, setModalOpen } = useContext(TechContext)

    return (
        <>
            {modalOpen ? <EditAndDeleteTech /> : null}
            {isOpen ? <CreateTech /> : null}
        <Header />
        <StyledDashboardPage>
            <section className="user__container">
                <div>
                    {user? <h3>Olá, {user.name}!</h3> : <h3>Carregando...</h3>}
                    {user? <p>{user.course_module}</p> : null}
                </div>
            </section>
            <section className="user__tasks">
                <div>
                    <h3>Tecnologias</h3>
                    <button onClick={() => setIsOpen(true)}>+</button> 
                </div>
                <TechList setModalOpen={setModalOpen} />
            </section>
        </StyledDashboardPage>
        </>
    )
}