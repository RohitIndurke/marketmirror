import { Metadata } from "next";
import FundDetails from "./fund-details";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    return {
        title: `Mutual Fund ${id} | MarketMirror`,
        description: `Detailed performance and risk analysis for Mutual Fund ${id} on MarketMirror.`,
    };
}

export default async function Page({ params }: Props) {
    const { id } = await params;
    return <FundDetails id={id} />;
}
