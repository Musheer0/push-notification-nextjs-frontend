"use server"

import { cookies } from "next/headers"
import jwt from 'jsonwebtoken'
export const DecodeSession = async()=>{
    const token = (await cookies()).get("token")?.value
    const decoded_token = await jwt.verify(token!, process.env.VAPID_PRIVATE_KEY!)
    console.log(decoded_token)
    return decoded_token
}