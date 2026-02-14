import Footer from "@/components/Fotter";
import MobileBottomNavbar from "@/components/MobileBottomNavbar";
import MobileTopNavbar from "@/components/MobileTopNavbar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Metadata } from "next";
import { MarketStats } from "@/components/MarketStats";
import NiftyGraph from "@/components/NiftyGraph";
import SectorCard from "@/components/SectorCard";
import { TopMovers } from "@/components/TopMovers";

export const metadata: Metadata = {
  title: "Indian Market Overview | MarketMirror",
  description: "Explore sector-wise trends shaping India’s economy. Get detailed insights into the Indian stock market.",
};

export default function IndianPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col min-h-screen bg-gray-50/50 dark:bg-background font-sans">
          <MobileTopNavbar />

          <main className="flex-1 p-4 md:p-6 space-y-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Market Overview</h1>
              <p className="text-muted-foreground">
                Live updates on Indian indices, sector performance, and top movers.
              </p>
            </div>

            {/* Key Indices */}
            <section>
              <MarketStats />
            </section>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column (Charts & Analysis) */}
              <div className="lg:col-span-2 space-y-6">
                <div className="w-full">
                  <NiftyGraph />
                </div>
                <div className="w-full">
                  <SectorCard />
                </div>
              </div>

              {/* Right Column (Top Movers, Watchlist, etc.) */}
              <div className="space-y-6">
                <TopMovers />
                {/* Placeholder for future widgets like Market News or Upcoming IPOs */}
              </div>
            </div>
          </main>

          <Footer />
          <MobileBottomNavbar />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
