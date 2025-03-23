
import { LoginSchema } from "@/schemas/zod/login-schema";
import { RegisterSchema } from "@/schemas/zod/register-schema"
import { cookies } from "next/headers";
import { z } from "zod"

export const RegisterUserServerAction = async(data:z.infer<typeof RegisterSchema>)=>{
     const verified_data =RegisterSchema.safeParse(data);
     if(verified_data.success){
      try {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND}api/sign-up`,{
            method: 'POST',
            body: JSON.stringify(data),
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
              },
        }).then(async(res)=>{
            const body = await res.json()
            console.log(body)
        })
      } catch (error) {
        console.log(error)
      }
     }
}
export const LoginUserServerAction = async(data:z.infer<typeof LoginSchema>)=>{
    const verified_data =LoginSchema.safeParse(data);
    if(verified_data.success){
     try {
      const result= await fetch(`${process.env.NEXT_PUBLIC_BACKEND}api/sign-in`,{
           method: 'POST',
           body: JSON.stringify(data),
           credentials: "include",
           headers: {
               "Content-Type": "application/json",
             },
       }).then(async(res)=>{
           const body = await res.json()
          if(body.success){
             return {success: true}
          }
          else{
            return {
                error: 'invalid password or email'
            }
          }
       });
       return result
     } catch (error) {
       console.log(error)
       return {
        error: 'invalid password or email'
    }
     }
    }
    else{
        return {
            error: 'invalid password or email'
        }
    }
}
