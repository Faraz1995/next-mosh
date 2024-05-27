import { NextRequest, NextResponse } from 'next/server'
import schema from '../schema'
interface Props {
  params: {
    id: number
  }
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  if(id>10){
    return NextResponse.json({error:'product not found'},{status:404})
  }
  return NextResponse.json({id:1,name:'cheese'})
}


export async function PUT(request:NextRequest, { params: { id } }: Props){
  const body = await request.json()
  const validation = schema.safeParse(body)
  if(!validation.success){
    return NextResponse.json(validation.error.errors,{status:400})
  }
  if(id>10){
    return NextResponse.json({error:'product not found'},{status:404})
  }
  return NextResponse.json({id:10,name:body.name,price:body.price},{status:201})
}


export async function DELETE(request:NextRequest, { params: { id } }: Props){
  const body = await request.json()
  if(id>10){
    return NextResponse.json({error:'product not found'},{status:404})
  }
  return NextResponse.json({})
}
