// lib/api/binance.ts

export type ChartPoint = {
  time: string;
  value: number;
};

export type BinanceTicker = {
  symbol: string;
  price: string;
};

export async function getBinancePrices(symbols: string[]): Promise<{ [key: string]: number }> {
  try {
    const res = await fetch("https://api.binance.com/api/v3/ticker/price");
    const allData: BinanceTicker[] = await res.json();

    const prices: { [key: string]: number } = {};
    symbols.forEach((coin) => {
      const symbol = `${coin}USDT`;
      const match = allData.find((d) => d.symbol === symbol);
      if (match) prices[symbol] = parseFloat(match.price);
    });

    return prices;
  } catch (error) {
    console.error("Error fetching prices", error);
    return {};
  }
}

export async function getChartData(symbol: string): Promise<ChartPoint[]> {
  try {
    const res = await fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=5m&limit=144`);
    const data: unknown = await res.json();

    return (data as (string | number)[][]).map((d) => ({
      time: new Date(d[0] as number).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      value: parseFloat(d[4] as string),
    }));
  } catch (error) {
    console.error(`Error fetching chart data for ${symbol}`, error);
    return [];
  }
}
