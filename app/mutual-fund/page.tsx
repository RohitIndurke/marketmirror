
"use client"

import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/Fotter";
import MobileBottomNavbar from "@/components/MobileBottomNavbar";
import MobileTopNavbar from "@/components/MobileTopNavbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {useEffect,useState} from 'react'
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
      '5y': number;
    };
  };
  investment_info: {
    mini_additional_investment: number;
  };
}

const FundsPage = () => {
  const [funds, setFunds] = useState<Fund[]>([]);

  useEffect(() => {
    const get = async () => {
      try {
        const req = await fetch(
          "https://stock.indianapi.in/mutual_funds_details?stock_name=",
          {
            headers: {
              "X-Api-Key": process.env.NEXT_PUBLIC_MUTUAL_API || '',
            },
          }
        );
        const data = await req.json();
        console.log("API response:", data); 
        setFunds([data]);

      } catch (error) {
        console.error("Failed to fetch mutual fund data:", error);
      }
    };

    get();
  }, []);

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
