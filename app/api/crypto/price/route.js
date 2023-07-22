import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd', {
    method: 'GET',
    headers: {
      'accept': 'application/json'
    }
  })
 
  const data = await res.json()
 
  return NextResponse.json(data)
}