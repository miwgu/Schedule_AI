// app/api/solve/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';
import { InputJson } from '@/types';

export async function POST(req: Request) {
  try {
    const body: InputJson = await req.json();
    const base = process.env.TIMEFOLD_BASE_URL!;
    const apiKey = process.env.TIMEFOLD_API_KEY!;

    // delete trailing slashes
    const normalizedBase = base.replace(/\/+$/, "");

    const url =
      `${normalizedBase}/route-plans` +
      `?operation=SOLVE&configurationId=${process.env.TIMEFOLD_CONFIG_ID}`;

    const resp = await axios.post(
      url,
      {
        modelInput: body
      },
      {
        headers: {
          'Content-Type': 'application/json',
          accept:  'application/json',
          'X-API-KEY': apiKey as string
        }
      }
    );

    return NextResponse.json(resp.data);
  } catch (err: any) {
    console.error('Failed to solve route:', err.response?.data || err.message);

    return NextResponse.json(
      { error: err.response?.data || err.message },
      { status: err.response?.status || 500 }
    );
  }
}