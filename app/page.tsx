"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import MobileTopNavbar from "@/components/MobileTopNavbar"
import MobileBottomNavbar from "@/components/MobileBottomNavbar"
import Footer from "@/components/Fotter"



export default function Page() {

  return (
    <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
    <MobileTopNavbar />
    <div className="indian">
      app is under work <br></br>
      Where crypto ,news ,mutual fund are working
    </div>
    <Footer/>
    <MobileBottomNavbar />
    </SidebarInset>
    </SidebarProvider>
  )
}
