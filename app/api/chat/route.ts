import { openai } from '@ai-sdk/openai';
import { streamText, convertToModelMessages, UIMessage } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        const { messages }: { messages: UIMessage[] } = await req.json();

        const result = streamText({
            model: openai('gpt-4o'),
            system: `You are a helpful and friendly AI assistant for "Forestry & Garden Care" (Tomoura Forest & Garden Care).
    You speak both English and Japanese comfortably. Detect the user's language and respond in the same language.
    
    Services we offer:
    - Garden Tree Cutting & Trimming (Pruning, shaping)
    - Mountain and Slope Tree Cutting (Difficult terrain, large scale)
    - Dangerous or Fallen Trees (Emergency removal)
    - Regular Care Plans
    
    Company Vibe: Professional, Safe, Reliable, and Nature-friendly.
    
    If asked for a quote, ask for their Name and Phone Number so a representative can contact them.
    `,
            messages: convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse();
    } catch (error) {
        console.error("Chat API Error:", error);
        return new Response(JSON.stringify({ error: "Failed to process chat request" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
