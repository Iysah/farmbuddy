'use client';

import { useState, JSX, SVGProps } from "react"
import { SunIcon, ThermometerIcon, SearchIcon  } from "lucide-react"
import Image from 'next/image';
import { Camera } from 'lucide-react';
import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
// import ''

// Define types for result object
interface PlantResult {
  name: string;
  scientificName: string;
  family: string;
  description: string;
  careInstructions: {
    water: string;
    light: string;
    soil: string;
  };
}

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<PlantResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result as string;
        setImage(base64Image); // This will include the image format
      };
      reader.readAsDataURL(file); // Ensure this reads as Data URL
    }
  };
  
  const handleCameraCapture = async (): Promise<void> => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement('video');
      video.srcObject = stream;
      await video.play();

      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');

      if (context) {
        context.drawImage(video, 0, 0);
        const capturedImage = canvas.toDataURL('image/jpeg');
        setImage(capturedImage);
      }

      stream.getTracks().forEach(track => track.stop());
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const identifyPlant = async (): Promise<void> => {
    if (!image) {
      console.error('No image selected');
      setError('Please select an image first');
      return;
    }
  
    setLoading(true);
    setError('');
    try {
      console.log('Sending request to /api/identify');
      const response = await fetch('/api/identify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image }),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API returned an error:', response.status, response.statusText, errorText);
        throw new Error(`API error: ${response.status} ${response.statusText} - ${errorText}`);
      }
  
      console.log('Parsing response');
      const data: PlantResult = await response.json();
      setResult(data);
      console.log('Plant identified successfully', data);
    } catch (error) {
      console.error('Error identifying plant:', error);
      setError('Failed to identify plant. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex flex-col items-center justify-center p-24">
      {/* <h1 className="text-4xl font-bold mb-8">Plant Identifier</h1> */}

      <div className="flex space-x-4 mb-8">
        <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Upload Image
          <input
            type="file"
            className="hidden"
            onChange={handleImageUpload}
            accept="image/*"
          />
        </label>

        <button
          onClick={handleCameraCapture}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <Camera className="mr-2" /> Take Photo
        </button>
      </div>

      {image && (
        <div className="mb-8">
          <Image
            src={image}
            alt="Captured plant"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <button
            onClick={identifyPlant}
            className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? 'Identifying...' : 'Identify Plant'}
          </button>
        </div>
      )}

      {result && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{result.name}</h2>
          <p className="mb-2">
            <strong>Scientific Name:</strong> {result.scientificName}
          </p>
          <p className="mb-2">
            <strong>Family:</strong> {result.family}
          </p>
          <p className="mb-4">
            <strong>Description:</strong> {result.description}
          </p>
          <h3 className="text-xl font-semibold mb-2">Care Instructions:</h3>
          <ul className="list-disc list-inside">
            <li>Water: {result.careInstructions.water}</li>
            <li>Light: {result.careInstructions.light}</li>
            <li>Soil: {result.careInstructions.soil}</li>
          </ul>
        </div>
      )}

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
            <div className="bg-card p-6 rounded-lg shadow-md">
              <SearchIcon className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Accurate Plant Recognition</h3>
              <p className="text-muted-foreground">
                With 95% recognition accuracy and identification of over 10,000 plant species, our system offers unlimited identifications along with a personalized care guide.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <SunIcon className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Light Requirement Analysis</h3>
              <p className="text-muted-foreground">
                Discover the ideal light conditions for each plant species, ensuring they thrive with the right amount of sunlight or shade.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md">
              <ThermometerIcon className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Temperature and Humidity Monitoring</h3>
              <p className="text-muted-foreground">
                Monitor and adjust temperature and humidity levels to create the perfect environment for your plants to grow healthily.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>

    {/* ======== footer  ========== */}
    <Footer />
    </div>
  );
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