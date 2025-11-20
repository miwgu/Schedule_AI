// app/api/demo/list/route.ts
export async function GET() {
  try {

    const res = await fetch(
      `${process.env.TIMEFOLD_BASE_URL}`,
      {
        method: "GET",
        headers: {
          "accept": "application/json",
          "X-API-KEY": `${process.env.TIMEFOLD_API_KEY}`,
          
        },
      }
    );

    //loggomg status code
    console.error("Timefold status:", res.status);

    // if the status code is not 200, return an error
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Timefold error body:", errorText);
      return new Response(
        JSON.stringify({
          error: "Failed to fetch demo data",
          status: res.status,
          details: errorText,
        }),
        { status: 500 }
      );
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "Unexpected server error" }),
      { status: 500 }
    );
  }
}



/* import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(
      "https://app.timefold.ai/models/field-service-routing/v1/demo-data",
      {
        headers: {
          "Authorization": "Basic " + Buffer.from("tf_p_411fa75d-ffeb-40ec-b491-9d925bd1d1f3:").toString("base64")
        }
      }
    );

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: unknown) {
    return new Response(JSON.stringify({ error: (err as Error).message }), { status: 500 });
  }
} */





/* import axios from "axios";

export async function GET() {
  const API_URL = "https://app.timefold.ai/models/field-service-routing/v1/demo-data";
  const API_KEY = "tf_p_411fa75d-ffeb-40ec-b491-9d925bd1d1f3";

  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err: unknown) {
  let message = "Unknown error";
  if (err instanceof Error) {
    message = err.message;
  }

  return new Response(JSON.stringify({ error: message }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });
}
} */


/* import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const base = process.env.TIMEFOLD_BASE_URL!;
    const resp = await axios.get(`${base}/demo-data`, {
      headers: {
        Authorization: `Bearer ${process.env.TIMEFOLD_API_KEY}`
      }
    });
    console.log(resp.data);
    return NextResponse.json(resp.data);
  } catch (err: any) {
    console.error('Failed to fetch demo list:', err.response?.data || err.message);
    return NextResponse.json(
      { error: err.response?.data || err.message },
      { status: 500 }
    );
  }
} */