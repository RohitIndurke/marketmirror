"use client"
import Footer from "@/components/Fotter";
import MobileBottomNavbar from "@/components/MobileBottomNavbar";
import MobileTopNavbar from "@/components/MobileTopNavbar";
import Slider from "@/components/Slider";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SignInButton,useUser } from "@clerk/nextjs";
import NiftyCard from "@/components/NiftyCard"
import SectorCard from "@/components/SectorCard";
import InvestmentCard from "@/components/InvestmentCard";

export default function Page() {
  const {isSignedIn,user} = useUser();

  let session;
  if(!isSignedIn){
    session=(
      <div className="flex justify-center">
  <div className="bg-white text-gray-900 w-80 h-10 flex items-center justify-center rounded-xl">
    <SignInButton />
  </div>
</div>


    );
  }
  else{
    session=(
      <div className="text-lg font-bold text-white mt-2 text-left">
        👋🏻 Hello, {user?.firstName || "User"}
      </div>
    );
  }

  return (
    <div >
           <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
    <MobileTopNavbar />
    <div className="text-center p-4 ">
    <div className=" text-2xl pt-1 pb-1 text-white-900 font-serif">Track Markets in Real🔥<br/> Time,
    Trade Smarter Invest Better.🚀
      </div>
    <div className="text-center text-sm pt-0 pb-4 font-sans text-gray-400">
      Stay Ahead of Every Move Your Mirror to the <br/>  Global Market.🎯
      <br/>
    </div>
    {/* khali session function call kely for jr user login asel tr nav desel nytr sign button */}
    {session}
    
<div className="flex justify-center items-center py-16">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <NiftyCard />
    <SectorCard />
    <InvestmentCard />
  </div>
</div>
      </div>
    <Slider/> 
      <Footer/>
    <MobileBottomNavbar />
    </SidebarInset>
    </SidebarProvider>


    </div>
  
  )
}
