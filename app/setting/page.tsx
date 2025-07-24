"use client";

import MobileTopNavbar from "@/components/MobileTopNavbar";
import MobileBottomNavbar from "@/components/MobileBottomNavbar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Footer from "@/components/Fotter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";

const profileFields = [
  { label: "Name", value: "null", editable: true },
  { label: "Country", value: "null", editable: true },
  { label: "Timezone", value: "null", editable: true },
  { label: "About", value: "Hey, it's me :)", editable: true },
  { label: "Phone number", value: "N/A", editable: true },
  { label: "Pronouns", value: "N/A", editable: true },
  { label: "Languages spoken", value: "null", editable: true },
  { label: "Industry", value: "N/A", editable: true },
  { label: "Interests", value: "N/A", editable: true },
];

const Setting = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <MobileTopNavbar />

        <main className=" mt-6 px-4 pb-20">
          <Card className="rounded-xl shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/logo.svg" alt="@marketmirror" />
                  <AvatarFallback>MM</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold">MarketMirror Profile</h2>
                  <p className="text-muted-foreground text-sm">
                    Customize your preferences
                  </p>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-6">
                {profileFields.map((field, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b pb-4"
                  >
                    <div>
                      <Label className="text-sm text-muted-foreground">
                        {field.label}
                      </Label>
                      <p className="text-md">{field.value}</p>
                    </div>
                    {field.editable && (
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="mt-4">
                <Label className="text-sm text-muted-foreground">
                  Profile Cover Photo
                </Label>
                <div className="mt-2 w-full h-[120px] bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">
                    You can upload images up to 1MB (1440x180 min)
                  </span>
                </div>
                <Button className="mt-3" variant="outline">
                  Change cover photo
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>

        <Footer />
        <MobileBottomNavbar />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Setting;
