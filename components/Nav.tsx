"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-semibold text-gray-900">
            <Link href="/">Your logo goes here</Link>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/jobs" className="text-gray-700 hover:text-gray-900">
              Jobs
            </Link>
            <Link
              href="/companies"
              className="text-gray-700 hover:text-gray-900"
            >
              Companies
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-gray-900">
              Blog
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/signin"
              className="text-gray-700 hover:text-gray-900 px-3 py-2"
            >
              Sign in
            </Link>
            <Link
              href="/post-job"
              className="bg-purple-900 text-white px-4 py-2 rounded-full hover:bg-purple-800"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
