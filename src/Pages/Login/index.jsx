import { Input } from "../../components/Input"
import { StyledLoginPage } from "./style"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schemaLogin } from "./validator"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"


export const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(schemaLogin),
    })

    const { userLogin } = useContext(UserContext);

    const submit = async (formData) => {
        await userLogin(formData)
    }

    return (

        <StyledLoginPage>
            <h1 className="logoKenzieHub">KenzieHub</h1>
            <div className="container__Form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit(submit)}>
                    <Input
                        type="email"
                        id="email"
                        label="Email"
                        placeholder="Digite seu email aqui"
                        error={errors.email?.message}
                        {...register("email")}
                    />
                    <Input 
                        type="password"
                        id="password"
                        label="Senha"
                        placeholder="Digite sua senha aqui"
                        error={errors.password?.message}
                        {...register("password")}
                    />
                    <button>Entrar</button>
                </form>
                <span>Ainda não possui uma conta?</span>
                <Link className="buttonRegister" to={"/register"}>Cadastre-se</Link>
            </div>
        </StyledLoginPage>

    )
}