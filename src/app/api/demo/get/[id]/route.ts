// app/api/demo/get/[id]/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(_req: Request, context: { params?: { id?: string } }) {
  try {
    const params = await context.params // when it is async, use await
    const id = params?.id || "BASIC"
    //const id = context.params?.id ?? "BASIC"; // default
    const base = process.env.TIMEFOLD_BASE_URL!;
    const apiKey = process.env.TIMEFOLD_API_KEY!;

    // delete trailing slashes
    const normalizedBase = base.replace(/\/+$/, "");

    const url = `${normalizedBase}/demo-data/${encodeURIComponent(id)}/input`;

    console.log("REQUEST URL:", url);

    const resp = await axios.get(url, {
      headers: {
        accept: "application/json",
        "X-API-KEY": apiKey,
      },
      timeout: 15000,
    });

    return NextResponse.json(resp.data);
  } catch (err: any) {
    const msg = err?.response?.data || err?.message || String(err);
    console.error("Failed to fetch demo input:", msg);
    return NextResponse.json({ error: msg }, { status: err?.response?.status || 500 });
  }
}