"use server"

import { cookies } from "next/headers"

export const SubscribeNotification = async(sub:PushSubscription)=>{
    const token = (await cookies()).get("token")?.value
    const subscription = JSON.stringify(sub);
    const req_body = {
        sub :subscription
    }
    console.log('sent')
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}api/notification/subscribe`,{
        method: 'POST',
        body: JSON.stringify(req_body),
        credentials:'include',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    console.log(response)
}