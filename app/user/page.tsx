"use client";

import Footer from "@/components/Fotter";
import MobileBottomNavbar from "@/components/MobileBottomNavbar";
import MobileTopNavbar from "@/components/MobileTopNavbar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { LogIn } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const Indian = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <MobileTopNavbar />

          <div className="flex items-center justify-center min-h-screen px-4">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle className="text-center">Login</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <form className="space-y-4">
            <SignedOut>
                  <div className="space-y-2">
                    <Label htmlFor="email">Sign in</Label>
                    <Button variant="outline" className="w-full flex items-center gap-2">
                         <SignInButton />
                      <LogIn />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Sign up</Label>
                    <Button variant="outline" className="w-full flex items-center gap-2">
                        <SignUpButton></SignUpButton>
                      <LogIn />
                    </Button>
                  </div>
                </SignedOut>
                </form>
              </CardContent>
            </Card>
          </div>

          <Footer />
          <MobileBottomNavbar />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};

export default Indian;
