"use client"
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { LoginSchema } from '@/schemas/zod/login-schema'
import { LoginUserServerAction } from '@/actions/server'
import { MailWarning } from 'lucide-react'
const LoginForm = () => {
    const [error ,setError] = useState('')
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver:zodResolver(LoginSchema),
        defaultValues:{
            email: '',
            password: ''
        }
    });
    const  handleonSubmit =async(data:z.infer<typeof LoginSchema>)=>{
    await LoginUserServerAction(data).then((res)=>{
        console.log(res)                                
        if(res?.error){
            setError(res.error)
        }
        else{
            window.location.reload()
        }
    })
    }
  return (
    <>
    <Form {...form}>
        <form className='flex flex-col gap-2 w-full' onSubmit={form.handleSubmit(handleonSubmit)}>
            <FormField
            control={form.control}
            name="email"
            render={({field})=>(
                <FormItem>
                    <FormLabel>
                        Email
                    </FormLabel>
                    <FormControl>
                        <Input placeholder='enter your email' type='email' {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
            />
              <FormField
            control={form.control}
            name="password"
            render={({field})=>(
                <FormItem>
                    <FormLabel>
                        Password
                    </FormLabel>
                    <FormControl>
                        <Input placeholder='enter your password' type='password' {...field}/>
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
            />
             {error &&
               <p className='bg-destructive/10 text-sm p-2 rounded-md flex items-center gap-1 text-red-500'>
               <MailWarning size={14}/>
                Invalid Password or email
               </p>
             }
               <Button className='bg-gradient-to-b from-gray-700 to-gray-900 cursor-pointer hover:to-gray-800'>
                Login to Notifiy
            </Button>
        </form>
    </Form>
      

    </>
  )
}

export default LoginForm