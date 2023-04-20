import { useContext, useState } from "react"
import { StyledTechList } from "./style"
import { TechContext } from "../../providers/TechContext"
import { EditAndDeleteTech } from "../EditAndDeleteTech"

export const TechList = ({ setModalOpen }) => {
    const { techList, setTechSelected } = useContext(TechContext)
    
    return (
        <StyledTechList>
            {techList.map(tech => 
                <li onClick={() => (setTechSelected(tech), setModalOpen(true))}
                    key={tech.id}>
                    <h3>{tech.title}</h3>
                    <p>{tech.status}</p>
                </li>
            )}
        </StyledTechList>
    )
}