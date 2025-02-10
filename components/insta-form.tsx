"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InstagramForm() {
  const [profile, setProfile] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (profile.trim()) {
      router.push(`/chat/${encodeURIComponent(profile)}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        placeholder="Enter Instagram profile"
        value={profile}
        onChange={(e) => setProfile(e.target.value)}
        className="bg-gray-700 text-white border-gray-600 focus:border-blue-500"
      />
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        Start Chatting
      </Button>
    </form>
  )
}

