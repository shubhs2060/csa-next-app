import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest,{params}:{params: {id: number}}){
    return NextResponse.json({"id":2,"name":"dwelling"})
}

export async function PUT(request: NextRequest){
    const body = await request.json()
    return NextResponse.json(body)
}
