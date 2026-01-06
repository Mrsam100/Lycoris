
import { GoogleGenAI, Type } from "@google/genai";
import { SparkResult } from "../types";

// SECURITY: API key should be in backend, not client-side
// For now, validate it exists
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error('CRITICAL: VITE_GEMINI_API_KEY environment variable is not set');
}

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// Sanitize user input to prevent injection attacks
const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim()
    .slice(0, 200); // Limit length
};

export const getCreativeSpark = async (industry: string, vibe: string): Promise<SparkResult> => {
  if (!ai) {
    throw new Error("API key not configured. Please set VITE_GEMINI_API_KEY environment variable.");
  }

  // Validate inputs
  if (!industry || !vibe) {
    throw new Error("Industry and vibe are required");
  }

  // Sanitize inputs to prevent injection
  const sanitizedIndustry = sanitizeInput(industry);
  const sanitizedVibe = sanitizeInput(vibe);

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a bold brand name, tagline, and color strategy for a company in the ${sanitizedIndustry} industry with a ${sanitizedVibe} vibe. Output strictly in JSON.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            brandName: { type: Type.STRING },
            tagline: { type: Type.STRING },
            primaryColor: { type: Type.STRING, description: 'A hex code or CSS color name' },
            reasoning: { type: Type.STRING }
          },
          required: ["brandName", "tagline", "primaryColor", "reasoning"]
        }
      }
    });

    if (!response || !response.text) {
      throw new Error("Empty response from AI service");
    }

    const result = JSON.parse(response.text);

    // Validate response structure
    if (!result.brandName || !result.tagline || !result.primaryColor || !result.reasoning) {
      throw new Error("Invalid response structure from AI service");
    }

    return result;
  } catch (error) {
    console.error("Error generating creative spark:", error);
    if (error instanceof Error) {
      throw new Error(`Failed to generate creative spark: ${error.message}`);
    }
    throw new Error("Failed to generate creative spark: Unknown error");
  }
};
