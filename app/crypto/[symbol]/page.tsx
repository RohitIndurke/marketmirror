import { Metadata } from "next";
import CoinDetails from "./coin-details";

type Props = {
  params: Promise<{ symbol: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { symbol } = await params;
  const upperSymbol = symbol.toUpperCase();
  return {
    title: `${upperSymbol} Price & Chart | MarketMirror`,
    description: `Track real-time price, chart, and market data for ${upperSymbol} on MarketMirror.`,
    openGraph: {
      title: `${upperSymbol} Price & Chart | MarketMirror`,
      description: `Track real-time price, chart, and market data for ${upperSymbol} on MarketMirror.`,
    },
  };
}

export default async function CoinPage({ params }: Props) {
  const { symbol } = await params;
  return <CoinDetails symbol={symbol} />;
}
