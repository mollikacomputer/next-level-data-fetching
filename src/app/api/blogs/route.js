import { NextResponse } from "next/server"

// get api
export const GET = () =>{
    return NextResponse.json({message:"Hello world from blog api route"});
};


//post api
export const POST = ()=>{};

//patch api
export const PATCH =()=>{};

// put api
export const PUT = ()=>{};

// delete api
export const DELETE = ()=>{};
