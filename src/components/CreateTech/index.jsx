import { useForm } from "react-hook-form"
import { Input } from "../Input"
import { StyledCreateTech } from "./style"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"
import { schemaCreateTech } from "./validator"
import { ModalContainer } from "../../styles/globalStyles"

export const CreateTech = () => {

    const { register, handleSubmit, formState: { errors } }
        = useForm({ resolver: zodResolver(schemaCreateTech) })

    const { createTech, setIsOpen } = useContext(TechContext)

    const submit = async (formData) => {
        await createTech(formData)
        setIsOpen(false)
    }

    return (
        <>
            <ModalContainer>
                <StyledCreateTech role="dialog">
                    <header>
                        <h3>Cadastrar Tecnologia</h3>
                        <p onClick={() => setIsOpen(false)}>x</p>
                    </header>
                    <div className="container__createTech">
                        <form onSubmit={handleSubmit(submit)}>
                            <Input
                                type="text"
                                id="title"
                                label="Nome"
                                error={errors.title?.message}
                                {...register("title")}
                            />
                            <label>Status</label>
                            <select id="status"
                                error={errors.status?.message}
                                {...register("status")}
                            >
                                <option value="" hidden>Selecionar status</option>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </select>
                            <button type="submit">Cadastrar Tecnologia</button>
                        </form>
                    </div>
                </StyledCreateTech>
            </ModalContainer>
        </>
    )
}