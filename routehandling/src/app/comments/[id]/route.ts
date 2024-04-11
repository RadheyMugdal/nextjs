import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(req:Request,{params}:{params:{id:string}}){
    if(parseInt(params.id )>comments.length){
        redirect("/comments");
    }
    const comment=comments.find((cmt)=>cmt.id===parseInt(params.id))
    
    return  Response.json(comment)
}
export async function PATCH(request:Request,{params}:{params:{id:string}}){
    const body=await request.json()
    const {text}=body
    const index=comments.findIndex((cmt)=>cmt.id === parseInt(params.id))
    comments[index]['text']=text;

    return  Response.json(comments[index])
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const deletedComment = await comments.filter((cmt) => cmt.id != parseInt(params.id));
    return Response.json(deletedComment);
}
