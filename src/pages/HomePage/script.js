import { z } from "zod";

export const restriction = z.object({
  email: z.string().nonempty("O e-mail é obrigatorio").email("Forneça um e-mail válido."),
  password: z.string().nonempty("A senha está incorreta.")
})