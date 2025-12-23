import Footer from "@/components/Fotter";
import MobileBottomNavbar from "@/components/MobileBottomNavbar";
import MobileTopNavbar from "@/components/MobileTopNavbar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Market Overview | MarketMirror",
  description: "Explore sector-wise trends shaping India’s economy. Get detailed insights into the Indian stock market.",
};

const indian = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <MobileTopNavbar />
          <div className="items-center mb-5 ">
            <a className="text-white-500 text-center text-2xl text-green-400 font-sans font-xl tracking-tight">
              Indian Market Overview
            </a>
            <br />
            <a className="text-white-500 text-center text-small font-semibold">
              Explore sector-wise trends shaping India’s economy
            </a>
          </div>
          <Footer />
          <MobileBottomNavbar />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};
export default indian;