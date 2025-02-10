import { ChatInterface } from "@/components/chat-interface"

export default function ChatPage({ params }: { params: { profile: string } }) {
  const decodedProfile = decodeURIComponent(params.profile)

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <header className="bg-gray-800 p-4 text-white">
        <h1 className="text-2xl font-bold">Chatting with {decodedProfile}</h1>
      </header>
      <ChatInterface profile={decodedProfile} />
    </div>
  )
}

