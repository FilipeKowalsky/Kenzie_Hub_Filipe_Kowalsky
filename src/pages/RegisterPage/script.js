import { z } from "zod";

export const restriction = z.object({
  name: z.string().min(3, "Nome é obrigatorio (minimo 3 caracteres.)"),
  bio: z.string().min(10, "Nome é obrigatorio (minimo 10 caracteres.)"),
  contact: z.string().min(3, "Nome é obrigatorio (minimo 3 caracteres.)"),
  email: z.string().min(1, "O e-mail é obrigatorio").email("Forneça um e-mail válido."),
  course_module: z.string().min(1, ""),
  password: z.string().min(8, "A senha precisar contar pelo menos 8 caracteres.")
  .regex(/(?=.*?[A-Z])/, "É necessario pelo menos uma letra maiúscula.")
  .regex(/(?=.*?[a-z])/, "É necessario pelo menos uma letra minúscula.")
  .regex(/(?=.*?[0-9])/, "É necessario pelo menos um numero.")
  .regex(/(?=.*?[#?!@$%¨&*.-])/, "É necessario pelo menos um desses [#?!@$%¨&*.-] caracteres"),
  confirm: z.string().min(1, "Confirmar a senha é obrigatorio!")
}).refine(({password, confirm}) => confirm === password, {
  message: "Está diferente da senha!",
  path: ["confirm"],
})