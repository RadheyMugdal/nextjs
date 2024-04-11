import { NextRequest, NextResponse } from "next/server";

 export function middleware(request:NextRequest){
    const responce=NextResponse.next()
    const themePreference=request.cookies.get("theme")
    if(!themePreference){
        responce.cookies.set("theme","dark")
    }
    responce.headers.set("new-header","custom=header")
    return responce
    if(request.nextUrl.pathname === "/profile"){
        return NextResponse.rewrite(new URL("/",request.url))
    }
    // return NextResponse.redirect(new URL("/",request.url))
 }
//  export const config={
//     matcher:"/profile"
//  }