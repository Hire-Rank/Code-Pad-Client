import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        "message": "Password is required"
    })
}) 

export const SignupSchema = z.object({
    first_name: z.string().min(1, {
        message: "First Name is required"
    }),
    last_name: z.string().min(1, {
        message: "Last Name is required"
    }),
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        "message": "Password is required"
    })
}) 