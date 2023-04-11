import { z } from "zod";

export const schemaRegister = z.object({
    name: z.string().min(2, "O nome é obrigatório"),
    email: z.string().min(1, "O email é obrigatório").email("O email deve estar no formato correto"),
    password: z.string()
    .min(8, {message: "A senha é obrigatória e precisa de no mínimo 8 caracteres"})
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
    .regex(/^(?=.*[!@#$])/, "É necessário pelo menos um símbolo"),
    confirm: z.string().min(1, "A confirmação é obrigatória"),
    bio: z.string().min(1, "É necessário falar sobre você"),
    contact: z.string().min(1, "É necessário informar um tipo de contato"),
    course_module: z.string().min(1, "Selecione uma opção")
}).refine(({password, confirm}) => password === confirm, {
    message: "A confirmação e a senha precisam correspoder",
    path: ["confirm"],
})