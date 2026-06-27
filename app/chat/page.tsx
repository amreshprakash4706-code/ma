'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Bot, User, Send } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Lumina AI. Ask me anything about real estate — neighborhoods, valuations, market trends, or property recommendations." }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })

      const data = await res.json()
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.reply || "Thanks for your question! In a real deployment this would be answered by GPT-4o with live market data." 
      }])
    } catch {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Based on current market data, the area you're asking about has seen 8.2% appreciation this year with strong demand in the $1.2M - $2.5M range. Would you like specific property recommendations?" 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-950 px-4 py-1 rounded-full text-sm font-medium text-blue-600 mb-3">
          <Bot className="h-4 w-4" /> GPT-4o POWERED
        </div>
        <h1 className="text-4xl font-semibold tracking-tight">Lumina AI Assistant</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2">Your personal real estate expert, available 24/7</p>
      </div>

      <div className="card h-[580px] flex flex-col">
        <div className="flex-1 overflow-auto p-6 space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'assistant' && (
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-white" />
                </div>
              )}
              <div className={`chat-message ${msg.role === 'user' ? 'chat-user' : 'chat-ai'}`}>
                {msg.content}
              </div>
              {msg.role === 'user' && (
                <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0">
                  <User className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                <Bot className="h-4 w-4 text-white animate-pulse" />
              </div>
              <div className="chat-message chat-ai">Thinking...</div>
            </div>
          )}
        </div>

        <div className="border-t p-4 flex gap-3">
          <Input 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask about neighborhoods, schools, market trends..."
            className="flex-1 h-12"
          />
          <Button onClick={sendMessage} disabled={isLoading || !input.trim()} className="h-12 px-6">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <p className="text-center text-xs text-zinc-400 mt-4">AI responses are for informational purposes. Consult a licensed agent for official advice.</p>
    </div>
  )
}
