import { z } from "zod"

export const RegisterSchema = z.object({
  username:z.string().min(3).max(64),
 email: z.string().min(2).max(50),
  password:z.string().min(6).max(64)
})
