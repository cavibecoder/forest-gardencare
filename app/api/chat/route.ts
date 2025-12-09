import { openai } from '@ai-sdk/openai';
import { streamText, convertToModelMessages, UIMessage } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        const { messages }: { messages: UIMessage[] } = await req.json();

        const result = streamText({
            model: openai('gpt-4o'),
            system: `You are a helpful and friendly AI assistant for "Forestry & Garden Care" (Tomoura Forest & Garden Care / 友浦フォレスト＆ガーデンケア).
    You speak both English and Japanese comfortably. Detect the user's language and respond in the same language.
    
    Company Information:
    - Location: Based in Imabari City, Aichi Prefecture (愛知県今治市に拠点を置いています)
    - Service Area: Primarily serving Aichi Prefecture and surrounding areas (主に愛知県を中心にサービスを提供しています)
    - Note: Some specific areas may be difficult to serve, so encourage customers to contact us for detailed service area confirmation
    
    Services we offer:
    - Garden Tree Cutting & Trimming (Pruning, shaping) / 庭木の伐採・剪定
    - Mountain and Slope Tree Cutting (Difficult terrain, large scale) / 山林・斜面の伐採
    - Dangerous or Fallen Trees (Emergency removal) / 危険木・倒木の処理
    - Regular Care Plans / 定期管理プラン
    
    Company Vibe: Professional, Safe, Reliable, and Nature-friendly.
    
    If asked for a quote or service area details, ask for their Name, Phone Number, and Location so a representative can contact them and confirm service availability.
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
