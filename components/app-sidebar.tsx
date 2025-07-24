import { Calendar, Home, Inbox, LineChart, Newspaper, Settings } from "lucide-react"
import Image from 'next/image';
import marketMirror from '@/public/marketMirror.png';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from 'next/link';
// Menu items.
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
    title: "Indian Market",
    url: "/indian",
    icon: LineChart,
  },
  {
    title: "News",
    url: "/news",
    icon: Newspaper,
  },
  {
    title: "Settings",
    url: "/setting",
    icon: Settings,
  }
  
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
        <SidebarGroupLabel className="flex justify-center mb-4">
          <Link href="/">
          <Image
            src={marketMirror}
            alt="Market Mirror Logo"
            width={160}
            height={44}
            className="object-contain"
          /></Link>
        </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}