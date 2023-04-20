import { z } from "zod";

export const schemaCreateTech = z.object({
    title: z.string().nonempty("Informe a tecnologia"),
    status: z.string().nonempty("Informe seu nível")
})