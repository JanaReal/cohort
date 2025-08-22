import { NextRequest } from "next/server";

export async function POST(req:NextRequest){
    //extract body
    const body = await req.json();
    //store in DB
    console.log(body);

    return Response.json({
        message: "you are logged in!"
    })
}