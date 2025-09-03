"use client"

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Home, Coins, Calendar, Newspaper, User } from "lucide-react"
import Link from "next/link"

export default function MobileBottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background backdrop-blur border-t shadow md:hidden flex items-center justify-around h-14 px-4">
      
      <Link href="/" className="flex flex-col items-center text-xs">
        <Home className="w-5 h-5" />
        Home
      </Link>
      <Link href="/crypto" className="flex flex-col items-center text-xs">
        <Coins className="w-5 h-5" />
        Crypto
      </Link>
      <Link href="/mutual-fund" className="flex flex-col items-center text-xs">
        <Calendar className="w-5 h-5" />
        Mutual fund
      </Link>
      <Link href="/news" className="flex flex-col items-center text-xs">
        <Newspaper className="w-5 h-5" />
        News
      </Link>

      {/* Profile section */}
      <div className="flex flex-col items-center text-xs">
        <SignedOut>
          <SignInButton mode="modal">
            <div className="flex flex-col items-center cursor-pointer">
              <User className="w-5 h-5" />
              Sign in
            </div>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <div className="flex flex-col items-center">
            <UserButton />
            profile
          </div>
        </SignedIn>
      </div>
    </nav>
  )
}
