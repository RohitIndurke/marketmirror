"use client"

import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/Fotter";
import Fundcard from "@/components/Fundcard";
import MobileBottomNavbar from "@/components/MobileBottomNavbar";
import MobileTopNavbar from "@/components/MobileTopNavbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";


const fundData =[
  {
    "key": 1,
    "logo": "",
    "title": "ICICI Prudential Mutual Fund",
    "risk": "very high",
    "nav": "₹ 118.05",
    "fundsize": "₹ 1,818.00 Cr",
    "fundreturn": "140.18%",
    "min": "₹ 100.00"
  },
  {
    "id": 2,
    "logo": "",
    "title": "Aditya Birla Sun Life Mutual Fund",
    "risk": "high",
    "nav": "₹ 52.10",
    "fundsize": "₹ 950.50 Cr",
    "fundreturn": "85.25%",
    "min": "₹ 500.00"
  },
  {
    "id": 3,
    "logo": "",
    "title": "SBI Mutual Fund",
    "risk": "moderately high",
    "nav": "₹ 75.80",
    "fundsize": "₹ 2,500.00 Cr",
    "fundreturn": "110.00%",
    "min": "₹ 500.00"
  },
  {
    "id": 4,
    "logo": "",
    "title": "HDFC Mutual Fund",
    "risk": "moderate",
    "nav": "₹ 35.45",
    "fundsize": "₹ 1,200.75 Cr",
    "fundreturn": "60.70%",
    "min": "₹ 1,000.00"
  },
  {
    "id": 5,
    "logo": "",
    "title": "",
    "risk": "very high",
    "nav": "₹ 98.60",
    "fundsize": "₹ 750.20 Cr",
    "fundreturn": "130.50%",
    "min": "₹ 500.00"
  },
  {
    "id": 6,
    "logo": "",
    "title": "UTI Mutual Fund",
    "risk": "moderately low",
    "nav": "₹ 28.90",
    "fundsize": "₹ 1,500.00 Cr",
    "fundreturn": "45.15%",
    "min": "₹ 100.00"
  },
  {
    "key": 7,
    "logo": "",
    "title": "Kotak Mahindra Mutual Fund",
    "risk": "high",
    "nav": "₹ 62.30",
    "fundsize": "₹ 1,050.00 Cr",
    "fundreturn": "95.80%",
    "min": "₹ 500.00"
  }
]
const FundsPage = () => {

    return(
        <>
        <div key="index">
                  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
    <MobileTopNavbar />
    {fundData.map((fund, idx) => (
        <Fundcard
            key={String(fund.id ?? fund.key ?? idx)}
            fundreturn={fund.fundreturn}
            logo={fund.logo}
            title={fund.title}
            nav={fund.nav}
            risk={fund.risk}
            fundsize={fund.fundsize}
            min={fund.min} />
    
    ))}
   
    <Footer/>
    <MobileBottomNavbar />
    </SidebarInset>
    </SidebarProvider>
        </div>
        </>
    )
}
export default FundsPage;