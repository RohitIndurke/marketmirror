"use client"
import MobileTopNavbar from "@/components/MobileTopNavbar"
import MobileBottomNavbar from "@/components/MobileBottomNavbar"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import Footer from "@/components/Fotter"
import Newsbox from "@/components/Newsbox"




const News = () =>{

    return(
        <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <MobileTopNavbar />
            <Newsbox/>
            <Newsbox/>
            <Newsbox/>
      <Footer/>
      <MobileBottomNavbar />
        </SidebarInset>
      </SidebarProvider>
    )
}
export default News;