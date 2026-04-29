"use client"

import { useState } from "react"
import { supabase } from "@/utils/supabase"
import { useRouter } from "next/navigation"

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      router.push("/dashboard")
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-white pb-48">
      <div className="flex flex-col gap-4 w-full max-w-sm p-8 border border-gray-200 rounded-lg">
        <h1 className="text-2xl font-bold text-black">Sign In</h1>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-200 rounded px-4 py-2 text-sm outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-200 rounded px-4 py-2 text-sm outline-none"
        />
        <button
          onClick={handleLogin}
          className="bg-black text-white rounded px-4 py-2 text-sm hover:bg-gray-800 transition"
        >
          Sign In
        </button>
      </div>
    </div>
  )
}