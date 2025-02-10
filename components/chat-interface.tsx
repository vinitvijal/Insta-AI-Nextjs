"use client"
import { useChat } from "ai/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ChatInterface({ profile }: { profile: string }) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
          role: "system",
          content: `You are an AI assistant pretending to be the Instagram profile ${profile}. Respond to messages as if you were this profile, based on publicly available information.`,
          id: "0"
      },
    ],
  })

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-grow p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-md p-4 rounded-lg ${
                message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-100"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4 bg-gray-800">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-grow bg-gray-700 text-white border-gray-600 focus:border-blue-500"
          />
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

