import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request:NextRequest){
    const searchParams=request.nextUrl.searchParams;
    const query=searchParams.get('query')

    const filteredComments=query ?
    comments.filter((cmt)=>cmt.text.includes(query))
    : comments

    return Response.json(filteredComments);
}

export async function POST(req:Request){
    const comment =await req.json();
    const newComment={
        id:comment.length +1,
        text:comment.text

    }
    return new Response(JSON.stringify(newComment),{
        headers:{
            "Content-Type":"application/json"
        },
        status:201
    })
}