import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export  async function middleware(req: NextRequest) {
    const response = NextResponse.next();
    const isLoggedIn = (await cookies()).get("token")?.value
    const {nextUrl}= req
    if(!!isLoggedIn){
         if(nextUrl.pathname==='/sign-up'|| nextUrl.pathname==='/sign-in'){
           return NextResponse.redirect(new URL("/", req.url))
         }
    }
    else{
        
        if(nextUrl.pathname==='/'){
            return NextResponse.redirect(new URL("/sign-in", req.url))
        }
    }
    return response;
}