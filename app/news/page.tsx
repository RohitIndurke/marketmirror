import NewsClient from "@/app/news/news-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market News | MarketMirror",
  description: "Latest market news and updates. Stay informed with real-time financial news.",
};

export default function Page() {
  return <NewsClient />;
}