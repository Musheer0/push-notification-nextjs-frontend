import LoginForm from '@/components/forms/auth/login-form'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full  flex-1  flex items-center justify-center'>
        <Card className=''>
            <CardHeader>
                <CardTitle className='font-bold text-xl leading-none'>
                    Welcome to notifiy
                </CardTitle>
                <CardDescription className='text-xs'>
                    Please Login to continue
                </CardDescription>
            </CardHeader>
           <CardContent className=''>
                <LoginForm/>
           <Link
            className='text-xs text-rose-500 hover:underline'
            href={'/sign-up'}
            >
            don&apos;t have an account? click here
            </Link>
           </CardContent>
           <CardFooter className='flex items-center gap-2'>
            <Link
            className='text-xs text-muted-foreground hover:underline'
            href={'/privacy'}
            >
            privacy policy
            </Link>
            <Link
            className='text-xs text-muted-foreground hover:underline'
            href={'/about'}
            >
            about us
            </Link>
            
           </CardFooter>
        </Card>
    </div>
  )
}

export default page