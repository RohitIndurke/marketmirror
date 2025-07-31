export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const symbol = searchParams.get("symbol") || "RELIANCE";

  const response = await fetch(`https://www.nseindia.com/api/quote-equity?symbol=${symbol}`, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept": "*/*",
      "Referer": "https://www.nseindia.com/"
    },
    cache: "no-store" // to prevent stale results
  });

  const data = await response.json();
  return Response.json(data);
}
