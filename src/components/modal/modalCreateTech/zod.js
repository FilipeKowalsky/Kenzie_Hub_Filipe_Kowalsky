import { z } from "zod";

export const restriction = z.object({
  title: z.string().nonempty("Obrigatório preencher"),
  status: z.string().min(1, "Obrigatório preencher")
})
