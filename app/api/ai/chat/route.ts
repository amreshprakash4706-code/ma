import { NextRequest, NextResponse } from 'next/server'
import { OpenAI } from 'openai'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!process.env.OPENAI_API_KEY) {
      // Demo mode
      return NextResponse.json({
        reply: "Thanks for your question! In production this would be answered intelligently by GPT-4o using real-time real estate data. The area you're interested in currently shows strong buyer demand with limited inventory."
      })
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { 
          role: "system", 
          content: "You are Lumina AI, an expert real estate assistant. Be helpful, concise, and professional. Use current market knowledge." 
        },
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: 300,
    })

    return NextResponse.json({
      reply: completion.choices[0].message.content
    })
  } catch (error) {
    return NextResponse.json({
      reply: "I'm having trouble connecting right now. Please try again in a moment."
    })
  }
}
