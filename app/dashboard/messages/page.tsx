'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const demoMessages = [
  { from: 'Elena Rodriguez (Agent)', message: 'Hi Alex! The seller is flexible on the closing date. Would you like to make an offer?', time: '2h ago', isAgent: true },
  { from: 'You', message: 'Thanks Elena. I\'m very interested. Can we schedule another viewing this weekend?', time: '1h ago', isAgent: false },
]

export default function MessagesPage() {
  const [newMessage, setNewMessage] = useState('')

  const sendMessage = () => {
    if (!newMessage.trim()) return
    alert('Message sent! (Demo - would save to database in production)')
    setNewMessage('')
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-semibold tracking-tight mb-8">Messages</h1>

      <div className="card h-[520px] flex flex-col">
        <div className="flex-1 p-6 overflow-auto space-y-6">
          {demoMessages.map((msg, i) => (
            <div key={i} className={`flex ${msg.isAgent ? '' : 'justify-end'}`}>
              <div className={`max-w-[75%] rounded-3xl px-5 py-3 ${msg.isAgent ? 'bg-zinc-100 dark:bg-zinc-900' : 'bg-blue-600 text-white'}`}>
                <div className="text-xs opacity-70 mb-1">{msg.from} • {msg.time}</div>
                {msg.message}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t p-4 flex gap-3">
          <Input 
            value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your message to the agent..."
            className="flex-1"
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </div>

      <p className="text-xs text-zinc-400 mt-4 text-center">All conversations are private and encrypted.</p>
    </div>
  )
}
