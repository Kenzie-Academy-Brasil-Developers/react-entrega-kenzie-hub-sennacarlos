import { useContext } from "react"
import { ModalContainer } from "../../styles/globalStyles"
import { StyledEditAndDeleteTech } from "./style"
import { TechContext } from "../../providers/TechContext"
import { useForm } from "react-hook-form"


export const EditAndDeleteTech = () => {
    const { techSelected, deleteTech, editTech, setModalOpen } = useContext(TechContext)

    const { register, handleSubmit } = useForm({})

    const submit = async (formData) => {
        await editTech(formData)
    }


    return (
        <>
            <ModalContainer>
                <StyledEditAndDeleteTech role="dialog">
                    <header>
                        <h3>Tecnologia Detalhes</h3>
                        <p onClick={() => setModalOpen(false)}>x</p>
                    </header>
                    <div className="container__EditAndDelete">
                        <form>
                            <label>Nome do projeto</label>
                            <input value={techSelected.title} disabled />
                            <label htmlFor="">Status</label>
                            <select id="status"
                            {...register("status")}
                            >
                                <option value="" hidden>Selecionar status</option>
                                <option value="Iniciante">Iniciante</option>
                                <option value="Intermediário">Intermediário</option>
                                <option value="Avançado">Avançado</option>
                            </select>
                            <div>
                                <button className="saveTech" onClick={handleSubmit(submit)}>Salvar alterações</button>
                                <button className="delTech" onClick={handleSubmit(deleteTech)}>Excluir</button>
                            </div>
                        </form>
                    </div>
                </StyledEditAndDeleteTech>
            </ModalContainer>

        </>
    )
}