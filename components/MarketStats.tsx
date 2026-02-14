"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const indices = [
    {
        name: "NIFTY 50",
        value: "22,123.45",
        change: "+125.60",
        percent: "+0.57%",
        isPositive: true,
    },
    {
        name: "SENSEX",
        value: "73,057.80",
        change: "+345.15",
        percent: "+0.47%",
        isPositive: true,
    },
    {
        name: "BANK NIFTY",
        value: "46,580.90",
        change: "-120.50",
        percent: "-0.26%",
        isPositive: false,
    },
    {
        name: "NIFTY IT",
        value: "37,890.10",
        change: "+450.20",
        percent: "+1.20%",
        isPositive: true,
    },
];

export function MarketStats() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {indices.map((index) => (
                <Card key={index.name} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex flex-col gap-2">
                        <span className="text-sm font-medium text-muted-foreground">{index.name}</span>
                        <div className="flex items-end justify-between">
                            <span className="text-xl font-bold">{index.value}</span>
                            <div className={`flex items-center text-sm font-medium ${index.isPositive ? "text-green-600" : "text-red-600"}`}>
                                {index.isPositive ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
                                {index.change} ({index.percent})
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
