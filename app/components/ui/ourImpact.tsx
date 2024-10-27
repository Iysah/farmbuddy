'use client'
import { useEffect } from 'react';
import CountUp from 'react-countup';
import 'tailwindcss/tailwind.css';

const OurImpact = () => {
  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate-fadeIn');
    animateElements.forEach((element) => {
      element.classList.remove('opacity-0');
    });
  }, []);

  return (
    <section className="p-8 bg-green-100 rounded-lg py-[60px]">
        <div className="flex justify-center items-center flex-col md:flex-row lg:flex-row gap-6">
            <div className="opacity-0 animate-fadeIn">
                <h2 className="text-5xl font-bold mb-4">Our Impact</h2>
                <p className="text-lg mb-6">See the difference FarmBuddy makes in numbers.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col justify-start items-center opacity-0 animate-fadeIn">
                <CountUp end={10} duration={2.5} suffix="K+" className="text-6xl font-bold text-green-600" />
                <p className="text-lg">Farmers Supported</p>
                </div>
                <div className="flex flex-col justify-start items-center opacity-0 animate-fadeIn">
                <CountUp end={95} duration={2.5} suffix="%" className="text-6xl font-bold text-green-600" />
                <p className="text-lg">Disease Detection Accuracy</p>
                </div>
                <div className="flex flex-col justify-start items-center opacity-0 animate-fadeIn">
                <CountUp end={20} duration={2.5} suffix="%" className="text-6xl font-bold text-green-600" />
                <p className="text-lg">Increase in Crop Yields</p>
                </div>
                <div className="flex flex-col justify-start items-center opacity-0 animate-fadeIn">
                <CountUp end={50} duration={2.5} suffix="%" className="text-6xl font-bold text-green-600" />
                <p className="text-lg">Reduction in Water Waste</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default OurImpact;
