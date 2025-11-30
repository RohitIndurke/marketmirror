import { NextResponse } from "next/server";
import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL || "redis://127.0.0.1:6379");

const mutuals = [
  "SBI Small Cap Fund",
  "Parag Parikh Flexi Cap Fund",
  "Tata Small Cap Fund",
  "Invesco India Smallcap Fund",
  "Motilal Oswal Midcap Fund",
  "Bandhan Small Cap Fund",
  "Nippon India Multi Cap Fund",
];

export async function GET() {
  const today = new Date();
  const day = today.getDay(); // 0=Sunday, 6=Saturday
  const results: any[] = [];

  for (const fund of mutuals) {
    const cacheKey = `mutualfund:${fund}`;
    const cached = await redis.get(cacheKey);

    if (cached) {
      try {
        results.push(JSON.parse(cached));
      } catch {
        results.push({});
      }
      continue;
    }

    if (day === 0 || day === 6) {
      results.push({});
      continue;
    }

    if (!process.env.NEXT_PUBLIC_MUTUAL_API) {
      return NextResponse.json({ error: "API key missing" }, { status: 500 });
    }

    console.log("Fetching fund:", fund);
    const url = `https://stock.indianapi.in/mutual_funds_details?stock_name=${encodeURIComponent(
      fund
    )}`;
    const response = await fetch(url, {
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_MUTUAL_API,
      },
    });

    if (!response.ok) {
      console.error("API error:", await response.text());
      results.push({});
      continue;
    }

    const data = await response.json();
    results.push(data);

    // Cache until midnight
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const secondsUntilTomorrow = Math.floor(
      (tomorrow.getTime() - today.getTime()) / 1000
    );

    await redis.set(cacheKey, JSON.stringify(data), "EX", secondsUntilTomorrow);
  }

  return NextResponse.json(results);
}
