// app/api/solve/[id]/route.ts
import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
   // In Next.js 13.5+, params may come as a Promise, so await it
  const paramsResolved = await context.params
  const id = paramsResolved.id
  const base = process.env.TIMEFOLD_BASE_URL!;
  const apiKey = process.env.TIMEFOLD_API_KEY!;

  // delete trailing slashes
  const normalizedBase = base.replace(/\/+$/, "");

  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 })
  }

  try {
    const resp = await axios.get(
      `${normalizedBase}/route-plans/${id}`,
      {
        headers: {
          Accept: 'application/json',
          'X-API-KEY': apiKey as string
        }
      }
    )
    return NextResponse.json(resp.data)
  } catch (err: any) {
    console.error('Failed to get route-plan status:', err.response?.data || err.message)
    return NextResponse.json(
      { error: err.response?.data || err.message },
      { status: err.response?.status || 500 }
    )
  }
}