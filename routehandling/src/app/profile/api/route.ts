import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";
export async function GET(request:NextRequest){
    const requestHeaders=new Headers(request.headers)
    console.log(requestHeaders.get("Authorization"));
    cookies().set("token","werwrwerw");
    console.log("token:",cookies().get('token'));
    
    const headerlist=headers()
    // console.log(headerlist.get("Authorization"));
    const theme=request.cookies.get("theme");
    // console.log(theme);
    
    return new Response("<h1>Profile data api</h1>",{
        headers:{
            "Content-Type":"text/html",
            "Set-Cookie":"theme=dark"
        }
    })
}