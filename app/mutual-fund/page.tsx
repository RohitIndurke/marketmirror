import FundsPageClient from "@/app/mutual-fund/mutual-fund-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mutual Funds | MarketMirror",
  description: "Compare returns, risks, and allocation of top Indian mutual funds. Get insights into fund performance.",
};

export default function Page() {
  return <FundsPageClient />;
}
