import { NextResponse } from "next/server"



export const GET = () =>{
    return NextResponse.json({message:"Hello world from blog api route"});
}