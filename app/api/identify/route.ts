// app/api/identify-plant/route.js
import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai'

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY)
const genAI = new GoogleGenerativeAI('AIzaSyCGkJ_Rz0rFsMZpoHRf5S_iC6qS3M3hPKY')

export async function POST(req: NextRequest) {
  console.log('Received request to /api/identify');
  try {
    const { image } = await req.json();

    if (!image) {
      console.log('No image provided in request');
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    console.log('Processing image data');
    // Remove the 'data:image/jpeg;base64,' or similar prefix from base64 string
    const base64Data = image.replace(/^data:image\/\w+;base64,/, '');

    console.log('Calling Google AI API');
    const model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });

    const prompt = "Identify this plant and provide its name, scientific name, family, a brief description, and basic care instructions including watering, light, and soil requirements.";

    const result = await model.generateContent([prompt, { inlineData: { data: base64Data, mimeType: 'image/jpeg' } }]);
    const response = await result.response;
    const text = response.text();

    console.log('Parsing AI response');
    // Parse the generated text to extract structured information
    const parsedResult = {
      name: text.match(/Name: (.*)/)?.[1] || 'Unknown',
      scientificName: text.match(/Scientific Name: (.*)/)?.[1] || 'Unknown',
      family: text.match(/Family: (.*)/)?.[1] || 'Unknown',
      description: text.match(/Description: (.*)/)?.[1] || 'No description available',
      careInstructions: {
        water: text.match(/Water: (.*)/)?.[1] || 'No information available',
        light: text.match(/Light: (.*)/)?.[1] || 'No information available',
        soil: text.match(/Soil: (.*)/)?.[1] || 'No information available',
      },
    };

    console.log('Sending successful response');
    return NextResponse.json(parsedResult);
  } catch (error) {
    console.error('Error in /api/identify:', error);
    return NextResponse.json({ error: 'Failed to identify plant' }, { status: 500 });
  }
}