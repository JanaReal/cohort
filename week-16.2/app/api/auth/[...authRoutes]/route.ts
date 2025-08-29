
import { NextRequest, NextResponse } from "next/server"; 
export function GET(req: NextRequest, {params: { authRoutes } } :{
    params: {
        authRoutes: string[]
    }
} ){
    console.log(authRoutes)
    return NextResponse.json({
        message: `reached in /api/auth/${authRoutes}`
    })
}