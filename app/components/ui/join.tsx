'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import { Label } from './label';
import { Input } from './input';
import { Button } from './button';
import supabase from '../../config/supabaseClient'

const JoinFarmBuddy = () => {
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-slideInLeft, .animate-slideInRight');
    animateElements.forEach((element) => {
      element.classList.remove('opacity-0');
    });
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false)

  console.log(supabase)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    // await formAction(formData)
    setIsSubmitting(false)
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-green-100 rounded-lg shadow-lg">
        <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row gap-10">
            <div className="max-w-md opacity-0 animate-slideInLeft">
                <h2 className="text-3xl font-bold mb-4">Join FarmBuddy Today</h2>
                <p className="text-lg mb-6">Take your farming to the next level with our AI-powered tools. Sign up now and start optimizing your crop yields.</p>
                {/* <a href="#" className="inline-block px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Start Free Trial &rarr;
                </a> */}
              <form action={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input type="text" id="fullName" name="fullName" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" name="email" required />
                </div>
                <Button type="submit" className="w-full bg-green-600 text-white rounded-md hover:bg-green-700" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
                </Button>
              </form>
            </div>
            {/*  */}
            <div className="max-w-lg opacity-0 animate-slideInRight">
              {/* <h2 className="text-2xl font-bold mb-6 text-center">Join Our Waitlist</h2> */}
            </div>

            {/* <div className="max-w-lg opacity-0 animate-slideInRight">
                <Image src={"https://images.pexels.com/photos/23947960/pexels-photo-23947960/free-photo-of-man-gathering-radishes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt="Farmer using AI tools in the field" className="w-full rounded-lg" width={400} height={400}/>
            </div> */}
        </div>

    </section>
  );
};

export default JoinFarmBuddy;
