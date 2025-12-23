import { Metadata } from "next";
import CoinDetails from "./coin-details";

type Props = {
  params: { symbol: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const symbol = params.symbol.toUpperCase();
  return {
    title: `${symbol} Price & Chart | MarketMirror`,
    description: `Track real-time price, chart, and market data for ${symbol} on MarketMirror.`,
    openGraph: {
      title: `${symbol} Price & Chart | MarketMirror`,
      description: `Track real-time price, chart, and market data for ${symbol} on MarketMirror.`,
    },
  };
}

export default function CoinPage({ params }: Props) {
  return <CoinDetails symbol={params.symbol} />;
}
