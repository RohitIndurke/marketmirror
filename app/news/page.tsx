"use client"
import MobileTopNavbar from "@/components/MobileTopNavbar"
import MobileBottomNavbar from "@/components/MobileBottomNavbar"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import Footer from "@/components/Fotter"
import Newsbox from "@/app/news/Newsbox"






const News = () =>{

    return(
        <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <MobileTopNavbar  />
           
          <div className="row">
          <Newsbox/>
          </div>
      <Footer/>
      <MobileBottomNavbar />
        </SidebarInset>
      </SidebarProvider>
    )
}
export default News;