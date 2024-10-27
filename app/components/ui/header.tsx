
import Link from "next/link"
import { Button } from "./button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card"
import { Avatar, AvatarImage, AvatarFallback } from "./avatar"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
import { JSX, SVGProps } from "react"
import JoinFarmBuddy from "./join"
import OurImpact from "./ourImpact"
import ContactSection from "./contact"
import { SunIcon, ThermometerIcon, SearchIcon  } from "lucide-react"

function Header() {
  return (
    <>
        <header className="bg-gradient-to-r from-[#009051] to-[#017744] text-primary-foreground py-4 px-6 md:px-8 lg:px-10 flex items-center justify-between">
            <Link href="#" className="flex items-center gap-2 text-2xl text-[#fff]" prefetch={false}>
            <LeafIcon className="w-6 h-6" />
            <span className="text-xl font-bold">Farmbuddy AI</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-[#fff] text-md">
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                Features
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                Pricing
            </Link>
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                Testimonials
            </Link>
            {/* <Link href="/upload" className="hover:underline underline-offset-4" prefetch={false}>
                Upload
            </Link> */}
            <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
                Contact
            </Link>
            </nav>
            <Button className="bg-[#009051]">Get Started</Button>
        </header>
    </>
  )
}

export default Header

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }
  
  
  function ClipboardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      </svg>
    )
  }
  
  
  function DropletsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
        <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
      </svg>
    )
  }
  
  
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
  
  
  function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    )
  }