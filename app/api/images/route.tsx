import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest){
    return NextResponse.json([{
        name:"John",email:"test@2.com"
    },{
        name:"Doe",email:"test@2.com"
    }])
}

export async function POST(request: NextRequest){
    const body = await request.json()
    return NextResponse.json(body)
}

export async function PUT(request: NextRequest){
    const body = await request.json()
    return NextResponse.json(body)
}

export async function DELETE(request: NextRequest){
    const body = await request.json()
    return NextResponse.json(body)
}