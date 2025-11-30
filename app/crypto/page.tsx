import CryptoClient from "@/app/crypto/crypto-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crypto Market | MarketMirror",
  description: "Live crypto prices and charts. Track Bitcoin, Ethereum, and other top cryptocurrencies.",
};

export default function Page() {
  return <CryptoClient />;
}
