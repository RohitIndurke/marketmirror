"use client";

import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/Fotter";
import MobileBottomNavbar from "@/components/MobileBottomNavbar";
import MobileTopNavbar from "@/components/MobileTopNavbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

interface FundDetailsProps {
    id: string;
}

const FundDetails = ({ id }: FundDetailsProps) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <MobileTopNavbar />
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Mutual Fund Details: {id}</h1>
                    <p>Details for this fund coming soon.</p>
                </div>
                <Footer />
                <MobileBottomNavbar />
            </SidebarInset>
        </SidebarProvider>
    );
};

export default FundDetails;
