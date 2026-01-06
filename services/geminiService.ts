
import { GoogleGenAI, Type } from "@google/genai";
import { SparkResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getCreativeSpark = async (industry: string, vibe: string): Promise<SparkResult> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate a bold brand name, tagline, and color strategy for a company in the ${industry} industry with a ${vibe} vibe. Output strictly in JSON.`,
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

  try {
    return JSON.parse(response.text || '{}');
  } catch (e) {
    throw new Error("Failed to parse creative spark response");
  }
};
