
  "use client"

  import { AppSidebar } from "@/components/app-sidebar";
  import Footer from "@/components/Fotter";
  import MobileBottomNavbar from "@/components/MobileBottomNavbar";
  import MobileTopNavbar from "@/components/MobileTopNavbar";
  import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
  import {useEffect,useState} from 'react'
import Fundcard from "./Fundcard";

interface Fund{
 meta :{
    fund_house:string;
isin_div_reinvestment:string | null;
isin_growth: string | null;
scheme_category: string;
scheme_code: number;
scheme_name:string;
scheme_type: string;

  },
  data:{
    nav:number | null;
    date:string;
  }[]
}

  const FundsPage = () => {
    const [funds, setFunds] = useState<Fund[]>([]);

    const ids = [149456,122639,149456,148750,152755,152844,148458];
    useEffect(() => {
      const get = async () => {
    const results = await Promise.all(
      ids.map(async (id) => {
        const res = await fetch(`https://api.mfapi.in/mf/${id}/latest`);
        return res.json();
      })
    );
    setFunds(results); // results will be an array of fund objects
  };

      get();
    }, []);

    return (
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <MobileTopNavbar />
           <h2 className="text-2xl font-bold mb-10 mt-17">Indian Top Mutual funs</h2>
          {Array.isArray(funds) && funds.map((fund:Fund,index:number)=>(
            
              <Fundcard
              key={index}
              meta={fund.meta} 
              data={fund.data}            />            
          ))}
          <Footer />
          <MobileBottomNavbar />
        </SidebarInset>
      </SidebarProvider>
    );
  };

  export default FundsPage;
