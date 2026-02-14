"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


// Mock Data
const gainers = [
    { symbol: "TATASTEEL", price: "156.70", change: "+4.5%" },
    { symbol: "ADANIENT", price: "3,250.00", change: "+3.2%" },
    { symbol: "INFY", price: "1,670.50", change: "+2.8%" },
    { symbol: "RELIANCE", price: "2,980.20", change: "+2.1%" },
    { symbol: "SBIN", price: "780.40", change: "+1.9%" },
];

const losers = [
    { symbol: "HDFCBANK", price: "1,420.00", change: "-2.1%" },
    { symbol: "ICICIBANK", price: "1,050.60", change: "-1.8%" },
    { symbol: "ITC", price: "410.20", change: "-1.5%" },
    { symbol: "AXISBANK", price: "1,100.00", change: "-1.2%" },
    { symbol: "KOTAKBANK", price: "1,750.50", change: "-0.9%" },
];

export function TopMovers() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle className="text-lg font-semibold">Top Movers</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div>
                        <h4 className="mb-3 text-sm font-medium text-muted-foreground uppercase tracking-wider">Top Gainers</h4>
                        <div className="space-y-2">
                            {gainers.map((stock) => (
                                <div key={stock.symbol} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                                    <div>
                                        <div className="font-medium text-sm">{stock.symbol}</div>
                                        <div className="text-xs text-muted-foreground">NSE</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-medium text-sm">₹{stock.price}</div>
                                        <div className="text-xs text-green-600 font-medium">{stock.change}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-3 text-sm font-medium text-muted-foreground uppercase tracking-wider">Top Losers</h4>
                        <div className="space-y-2">
                            {losers.map((stock) => (
                                <div key={stock.symbol} className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0">
                                    <div>
                                        <div className="font-medium text-sm">{stock.symbol}</div>
                                        <div className="text-xs text-muted-foreground">NSE</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-medium text-sm">₹{stock.price}</div>
                                        <div className="text-xs text-red-600 font-medium">{stock.change}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
