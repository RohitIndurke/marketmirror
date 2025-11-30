import HomePage from "@/app/_components/home-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | MarketMirror",
  description: "Track Markets in Real Time, Trade Smarter Invest Better. Stay Ahead of Every Move Your Mirror to the Global Market.",
};

export default function Page() {
  return <HomePage />;
}
