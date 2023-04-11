import * as z from "zod"

export const schemaLogin = z.object({
    email: z.string().nonempty("Informe seu email"),
    password: z.string().nonempty("Informe sua senha")
})