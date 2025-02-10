import { InstagramForm } from "@/components/insta-form"

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-white">Chat with Your Instagram</h1>
        <p className="text-center text-gray-300">Enter an Instagram profile to start chatting</p>
        <InstagramForm />
      </div>
    </div>
  )
}

