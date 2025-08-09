"use client";

import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/Fotter";
import MobileBottomNavbar from "@/components/MobileBottomNavbar";
import MobileTopNavbar from "@/components/MobileTopNavbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import FundCard from "./Fundcard";

interface Fund {
  basic_info: {
    fund_name: string;
    fund_size: number;
    risk_level: string;
  };
  nav_info: {
    current_nav: number;
  };
  returns: {
    cagr: {
      "5y": number;
    };
  };
  investment_info: {
    mini_additional_investment: number;
  };
}

const FundsPage = () => {
  const [funds, setFunds] = useState<Fund[]>([]);
  const mutuals = ["SBI Small Cap Fund", 
                    "Parag Parikh Flexi Cap Fund",
                    "Tata Small Cap Fund",
                    "Invesco India Smallcap Fund",
                    "Motilal Oswal Midcap Fund",
                    "Bandhan Small Cap Fund",
                    "Nippon India Multi Cap Fund"
                  ];

  useEffect(() => {
    const getFunds = async () => {
      try {
        const promises = mutuals.map(async (mutual) => {
          const url = `https://stock.indianapi.in/mutual_funds_details?stock_name=${encodeURIComponent(mutual)}`;
          const req = await fetch(url, {
            headers: {
              "X-Api-Key": process.env.NEXT_PUBLIC_MUTUAL_API || "",
            },
          });
          const data = await req.json();
          return data;
        });

        const results = await Promise.all(promises);
        console.log(results);
        setFunds(results);
      } catch (error) {
        console.error("Failed to fetch mutual fund data:", error);
      }
    };

    getFunds();
  }, );

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <MobileTopNavbar />
        {funds.map((fund, index) => (
          <FundCard
            key={index}
            basic_info={fund.basic_info}
            nav_info={fund.nav_info}
            returns={fund.returns}
            investment_info={fund.investment_info}
          />
        ))}
        <Footer />
        <MobileBottomNavbar />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default FundsPage;
