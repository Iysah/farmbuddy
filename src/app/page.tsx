/**
 * v0 by Vercel.
 * @see https://v0.dev/t/X6xKqsTBhfi
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-[#a8cf45] text-primary-foreground py-4 px-6 md:px-8 lg:px-10 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 text-2xl text-[#017744]" prefetch={false}>
          <LeafIcon className="w-6 h-6" />
          <span className="text-xl font-bold">Farmbuddy AI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-[#017744] text-md">
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Testimonials
          </Link>
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button className="bg-[#009051]">Sign Up</Button>
      </header>
      <main className="flex-1">

        <section className="bg-gradient-to-r from-[#009051] to-[#017744] text-primary-foreground py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Revolutionize Your Farming with AI-Powered Plant Care
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">
              Farmbuddy AI provides intelligent solutions to help farmers optimize their crop yields and reduce waste.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-[#a8cf45]">Learn More</Button>
              <Button variant="outline" className="text-[#017744]">Sign Up</Button>
            </div>
          </div>
        </section>

        {/*  */}
        <section id="features" className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Intelligent Features for Smarter Farming
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-md">
                <LeafIcon className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">AI-Powered Disease and Pest Detection</h3>
                <p className="text-muted-foreground">
                  Our advanced AI algorithms can quickly identify and diagnose plant diseases and pests, allowing you to
                  take immediate action.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <DropletsIcon className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Personalized Watering Reminders</h3>
                <p className="text-muted-foreground">
                  Get tailored watering recommendations based on your plants&apos; needs, weather conditions, and soil
                  moisture levels.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md">
                <ClipboardIcon className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Comprehensive Plantation Management</h3>
                <p className="text-muted-foreground">
                  Streamline your farming operations with our intuitive plantation management tools, including crop
                  scheduling, inventory tracking, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  */}
        <section id="pricing" className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Affordable Pricing for Every Farmer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card p-6 rounded-lg shadow-md">
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Perfect for small farms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">$19</div>
                  <div className="text-muted-foreground mb-4">per month</div>
                  <ul className="space-y-2 text-left">
                    <li className="">
                      <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                      AI-powered disease and pest detection
                    </li>
                    <li>
                      <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                      Personalized watering reminders
                    </li>
                    <li>
                      <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                      Basic plantation management tools
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="bg-[#017744]">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="bg-card p-6 rounded-lg shadow-md">
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>Ideal for medium-sized farms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">$49</div>
                  <div className="text-muted-foreground mb-4">per month</div>
                  <ul className="space-y-2 text-left">
                    <li>
                      <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                      Advanced AI-powered disease and pest detection
                    </li>
                    <li>
                      <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                      Personalized watering and fertilization reminders
                    </li>
                    <li>
                      <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                      Comprehensive plantation management tools
                    </li>
                    <li>
                      <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                      Detailed analytics and reporting
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="bg-[#017744]">Get Started</Button>
                </CardFooter>
              </Card>
              <Card className="bg-card p-6 rounded-lg shadow-md">
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Tailored for large-scale farms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-2">Custom</div>
                  <div className="text-muted-foreground mb-4">Contact us for pricing</div>
                  <ul className="space-y-2 text-left">
                    <li>
                      <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                      Dedicated account manager
                    </li>
                    <li>
                      <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                      Customized AI models and algorithms
                    </li>
                    <li>
                      <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                      Advanced plantation optimization tools
                    </li>
                    <li>
                      <CheckIcon className="w-5 h-5 mr-2 text-primary" />
                      Comprehensive data analysis and reporting
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="bg-[#017744]">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/*  */}
        <section id="testimonials" className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card p-6 rounded-lg shadow-md">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <Avatar className="mr-4">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold">John Doe</div>
                      <div className="text-muted-foreground">Farmer, Acme Farm</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                  &quot;Farmbuddy AI has been a game-changer for my farm. The\n disease detection and watering reminders
                    have helped me\n increase my crop yields and reduce waste.&quot;
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card p-6 rounded-lg shadow-md">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <Avatar className="mr-4">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold">Jane Appleseed</div>
                      <div className="text-muted-foreground">Farm Manager, Greenfield Farms</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                  &quot;The plantation management tools in Farmbuddy AI have\n streamlined our operations and helped us
                    make more informed\n decisions. Highly recommended!&quot;
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card p-6 rounded-lg shadow-md">
                <CardContent>
                  <div className="flex items-center mb-4">
                    <Avatar className="mr-4">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>TM</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold">Tom Marvolo</div>
                      <div className="text-muted-foreground">Owner, Marvolo Organic Farm</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                  &quot;As a small organic farm, Farmbuddy AI has been essential\n in helping us optimize our operations
                    and reduce our\n environmental impact. Highly recommended for any farmer!&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/*  */}
        <section id="contact" className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Get in Touch</h2>
            <Card className="bg-card p-6 rounded-lg shadow-md">
              <CardContent>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="grid gap-2 col-span-1 md:col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" rows={5} placeholder="Enter your message" />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="bg-[#017744]">Submit</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>

      {/*  */}
      <footer className="bg-muted text-muted-foreground py-8 px-4 md:px-6 lg:px-8">
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
    </div>
  )
}

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