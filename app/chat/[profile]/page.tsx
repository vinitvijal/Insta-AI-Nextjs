import { ChatInterface } from "@/components/chat-interface"

export default async function ChatPage({ params }: { params: Promise<{ profile: string }> }) {
  const decodedProfile = await (params as Promise<{ profile: string }>).then((p) => decodeURIComponent(p.profile))

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <header className="bg-gray-800 p-4 text-white">
        <h1 className="text-2xl font-bold">Chatting with {decodedProfile}</h1>
      </header>
      <ChatInterface profile={decodedProfile} />
    </div>
  )
}

