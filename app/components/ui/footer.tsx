import React, { JSX, SVGProps } from 'react'
import Link from "next/link"

function Footer() {
  return (
    <>
    <footer className="bg-gradient-to-r from-[#009051] to-[#017744] text-[#fff] py-8 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <LeafIcon className="w-6 h-6" />
            <span className="text-xl font-bold">Farmbuddy AI</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </>
  )
}

export default Footer


function LeafIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    )
  }
  