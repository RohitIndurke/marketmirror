
"use client"

import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/Fotter";
import MobileBottomNavbar from "@/components/MobileBottomNavbar";
import MobileTopNavbar from "@/components/MobileTopNavbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {useEffect,useState} from 'react'
import Fundcard from "./Fundcard";

interface Fund {
  fund_name: string;
  latest_nav: number;
  percentage_change: number;
  asset_size: number;
  star_rating?: number;
  "1_month_return"?: number;
  "3_month_return"?: number;
  "6_month_return"?: number;
  "1_year_return"?: number;
  "3_year_return"?: number;
  "5_year_return"?: number;
}


const FundsPage = () => {
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    const get = async () => {
      try {
            const req = await fetch('https://stock.indianapi.in/mutual_funds', {
                                    headers: {
                                        'X-Api-Key': process.env.NEXT_PUBLIC_MUTUAL_API || '',
                                    }
                                })
        const data = await req.json();
        console.log(data.Debt["Corporate Bond"]);
        setFunds(data.Debt["Corporate Bond"]);


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
        {funds.map((fund: Fund, index) => (
  <Fundcard
                key={index}
                fund_name={fund.fund_name}
                star_rating={fund.star_rating}
                latest_nav={fund.latest_nav}
                OneYearReturn={fund["1_year_return"]}
                asset_size={fund.asset_size} percentage_change={0}  />
))}

        <Footer />
        <MobileBottomNavbar />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default FundsPage;
