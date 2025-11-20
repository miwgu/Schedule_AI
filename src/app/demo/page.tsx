"use client";
import { useEffect, useState } from "react";

export default function Demo() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/demo/list") // 一旦 API ルート経由
      .then(async (res) => {
        const text = await res.text();
        try {
          return JSON.parse(text);
        } catch {
          throw new Error(`Invalid JSON: ${text}`);
        }
      })
      .then(setData)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <pre>Error: {error}</pre>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}


/* "use client";
import { useEffect, useState } from "react";

export default function Demo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://app.timefold.ai/api/models/field-service-routing/v1/demo-data", {
      headers: {
        "Authorization": "Bearer tf_p_411fa75d-ffeb-40ec-b491-9d925bd1d1f3",
      },
    })
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
} */


/* "use client";
import { useEffect, useState } from "react";

export default function Demo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/demo/list")
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
} */
