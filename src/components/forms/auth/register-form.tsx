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
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { RegisterSchema } from '@/schemas/zod/register-schema'
import { Loader2Icon } from 'lucide-react'
import { RegisterUserServerAction } from '@/actions/server'
const RegisterForm = () => {
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver:zodResolver(RegisterSchema),
        defaultValues:{
            username: '',
            email: '',
            password: ''
        }
    });
    const  handelSubmit =async(data:z.infer<typeof RegisterSchema>)=>{
        await RegisterUserServerAction(data)
    }
  return (
    <>
    <Form {...form}>
        <form className='flex flex-col gap-2 w-full' onSubmit={form.handleSubmit(handelSubmit)}>
        <FormField
            control={form.control}
            name="username"
            render={({field})=>(
                <FormItem>
                    <FormLabel>
                        Username
                    </FormLabel>
                    <FormControl>
                        <Input placeholder='enter your username' type='text' {...field}/>
                    </FormControl>
                    <FormDescription>
                        This will be your public display name
                    </FormDescription>
                    <FormMessage/>
                </FormItem>
            )}
            />
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
               
               <Button
               disabled={form.formState.isSubmitting}
               className='bg-gradient-to-b from-gray-700 to-gray-900 cursor-pointer hover:to-gray-800'>
                {form.formState.isSubmitting ? <><Loader2Icon size={14} className='animate-spin'/></>: 'Login to Notifiy'}
            </Button>
        </form>
    </Form>
      

    </>
  )
}

export default RegisterForm