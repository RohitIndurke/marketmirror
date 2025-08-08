"use client"

import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/Fotter";
import MobileBottomNavbar from "@/components/MobileBottomNavbar";
import MobileTopNavbar from "@/components/MobileTopNavbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
const FundsPage = () => {

         
    return(
        <>
         <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
    <MobileTopNavbar />
     
   
    <Footer/>
    <MobileBottomNavbar />
    </SidebarInset>
    </SidebarProvider>
        </>
    )
}
export default FundsPage;