import Footer from "@/components/Fotter";
import MobileBottomNavbar from "@/components/MobileBottomNavbar";
import MobileTopNavbar from "@/components/MobileTopNavbar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const indian =()=>{
    
    return(<>
     <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
    <MobileTopNavbar />
    <div className="indian">
        here is indian market 
        
    </div>
    <Footer/>
    <MobileBottomNavbar />
    </SidebarInset>
    </SidebarProvider>
    </>)
}
export default indian;