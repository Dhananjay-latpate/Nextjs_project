import { z } from 'zod'

export const usernameValidation = z
    .string()
    .min(2, "user name must be at least 2 characters long")
    .max(20, "user name can not be more than 20 character long")

export const signUpschema = z.object({
    username: usernameValidation,
    email: z.string().email({message:"invalid email address"}),
    password: z.string().min(6, {message:"password shoud not be a 6 character long"}),
})