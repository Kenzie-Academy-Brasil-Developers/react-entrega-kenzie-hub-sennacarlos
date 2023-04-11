import { useNavigate } from "react-router-dom"
import { Input } from "../../components/Input"
import { StyledRegiserPage } from "./style"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaRegister } from "./validator";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const RegisterPage = () => {
    const navigate = useNavigate();
    const backPage = () => navigate(-1)

    const {register, handleSubmit, formState: { errors }} = useForm({resolver: zodResolver(schemaRegister)})
 
    const handleRegister = async (data) => {
        try {
            await api.post("/users", data)

            toast.success("Contra criada com sucesso!")
            
            navigate("/")
        } catch (error) {
            toast.error("Ops! Algo deu errado")
        }
    }

    return (
        <StyledRegiserPage>
            <header>
                <h1 className="logoKenzieHub">KenzieHub</h1>
                <button onClick={backPage}>Voltar</button>
            </header>
            <div className="container__Form--register">
                <h3>Crie sua conta</h3>
                <span>Rápido e grátis, vamos nessa!</span>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <Input
                        type="text"
                        id="name"
                        label="Nome"
                        placeholder="Digite aqui seu nome"
                        error={errors.name?.message}
                        {...register("name")}
                    />

                    <Input
                        type="emailt"
                        id="email"
                        label="Email"
                        placeholder="Digite aqui seu email"
                        error={errors.email?.message}
                        {...register("email")}
                    />

                    <Input
                        type="password"
                        id="password"
                        label="Senha"
                        placeholder="Digite aqui sua senha"
                        error={errors.password?.message}
                        {...register("password")}
                    />

                    <Input
                        type="password"
                        id="confirm"
                        label="Confirmar senha"
                        placeholder="Digite novamente sua senha"
                        error={errors.confirm?.message}
                        {...register("confirm")}
                    />

                    <Input
                        type="text"
                        id="bio"
                        label="Bio"
                        placeholder="Fale sobre você"
                        error={errors.bio?.message}
                        {...register("bio")}
                    />

                    <Input
                        type="text"
                        id="contact"
                        label="Contato"
                        placeholder="Opção de contato"
                        error={errors.contact?.message}
                        {...register("contact")}
                    />

                    <label>Seleciontar módulo</label>
                    <select id="course_module" 
                    error={errors.course_module?.message} 
                    {...register("course_module")}
                    >
                        <option value="" hidden>Selecionar módulo</option>
                        <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
                        <option value="Segundo módulo (Frontend Avançado)">Segundo módulo</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
                    </select>
                    {errors.course_module ? <p className="errorMessage">{errors.course_module.message}</p> : null}
                    <button>Cadastrar</button>
                </form>
            </div>
        </StyledRegiserPage>
    )
}