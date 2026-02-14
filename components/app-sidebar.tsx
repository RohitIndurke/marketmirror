"use client"

import { Calendar, Home, Inbox, Newspaper, User } from "lucide-react"
import Image from 'next/image'
import marketMirror from '@/public/marketMirror.png'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

const items = [
  {
    title: "Home",
    url: "./",
    icon: Home,
  },
  {
    title: "Crypto Market",
    url: "./crypto",
    icon: Inbox,
  },
  {
    title: "Mutual funds",
    url: "/mutual-fund",
    icon: Calendar,
  },
  {
    title: "News",
    url: "/news",
    icon: Newspaper,
  }

]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex flex-row items-center justify-between p-4 group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:justify-center">
        <Link href="/" className="group-data-[collapsible=icon]:hidden">
          <Image
            src={marketMirror}
            alt="Market Mirror Logo"
            width={140}
            height={40}
            className="object-contain"
          />
        </Link>
        <SidebarTrigger className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Sign In / Profile">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <div className="flex items-center gap-2 cursor-pointer w-full">
                        <User className="w-4 h-4" />
                        <span>Sign in</span>
                      </div>
                    </SignInButton>
                  </SignedOut>

                  <SignedIn>
                    <div className="flex items-center gap-2 w-full">
                      <UserButton />
                      <span>Profile</span>
                    </div>
                  </SignedIn>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
