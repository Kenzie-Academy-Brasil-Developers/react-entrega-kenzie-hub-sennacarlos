import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {

    const [techList, setTechList] = useState([])
    const [techSelected, setTechSelected] = useState({})
    const [ isOpen, setIsOpen ] = useState(false)
    const [ modalOpen, setModalOpen ] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("@kenzieHub:token")
        
        const getUserTechs = async() => {
            try {
                const response = await api.get("/profile", {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })

                setTechList(response.data.techs)

            } catch (error) {
                console.log(error)
            }
        }
        getUserTechs()
    }, [])

    const createTech = async (formData) => {

        const token = localStorage.getItem("@kenzieHub:token")

        try {
            const response = await api.post("/users/techs", formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            setTechList([...techList, response.data]) 

            toast.success("Tecnologia criada com sucesso!")
            
        } catch (error) {
            console.log(error)
            toast.error("Ops! Algo deu errado")
        }
    }

    const deleteTech = async () => {

        const token = localStorage.getItem("@kenzieHub:token")

        try {
            await api.delete(`/users/techs/${techSelected.id}`,  {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const newTechList = techList.filter(currentTech => currentTech.id !== techSelected.id)
            setTechList(newTechList)

            toast.success("Tecnologia excluída com sucesso!")

            setModalOpen(false)
        } catch (error) {
            console.log(error)
            toast.error("Ops! Algo deu errado")
        }
    }


    const editTech = async (formData) => {
        const token = localStorage.getItem("@kenzieHub:token") 

        try {
            const response = await api.put(`/users/techs/${techSelected.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const newTechList = techList.map(tech => tech.id === response.data.id ? response.data : tech)

            setTechList(newTechList)

            toast.success("Tecnologia editada com sucesso!")

            setModalOpen(false)

        } catch (error) {
            console.log(error)
            toast.error("Ops! Algo deu errado")
        }
    }

    return (
        <TechContext.Provider value={{techList, setTechList, createTech, techSelected, 
        setTechSelected, deleteTech, editTech, modalOpen, setModalOpen, isOpen, setIsOpen}}>
            {children}
        </TechContext.Provider>
    )
}