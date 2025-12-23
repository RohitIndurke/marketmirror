import { Metadata } from "next";
import FundDetails from "./fund-details";

type Props = {
    params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: `Mutual Fund ${params.id} | MarketMirror`,
        description: `Detailed performance and risk analysis for Mutual Fund ${params.id} on MarketMirror.`,
    };
}

export default function Page({ params }: Props) {
    return <FundDetails id={params.id} />;
}
