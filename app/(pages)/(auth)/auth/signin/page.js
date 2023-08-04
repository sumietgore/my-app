"use client"
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useSearchParams } from 'next/navigation'
import Link from "next/link";

export default function SignIn() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const error = useSearchParams().get("error")
    let callbackUrl = useSearchParams().get("callbackUrl")

    if (!callbackUrl) callbackUrl = "http://localhost:3000/dashboard"

    return (
        <div className="min-h-screen grid grid-cols-2">
            <div className="max-w-3xl mx-auto flex flex-row justify-center min-h-screen">
                <div className="max-w-md flex flex-col px-4 py-4 border border-neutral-400 rounded-lg space-y-2 self-center">
                    {error ? <p className="text-red-600">Email and password do not match</p> : null}
                    <input type="email" className="border border-neutral-400 rounded-md px-3 py-2" placeholder="johndoe@example.com" onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" className="border border-neutral-400 rounded-md px-3 py-2" onChange={(e) => setPassword(e.target.value)} />
                    <Link href="/"><p className="text-sm">Forgot your password?</p></Link>
                    <button className="bg-neutral-900 hover:bg-neutral-900/90 text-white px-3 py-2 rounded-md" onClick={() => signIn("credentials", { username: username, password: password, callbackUrl: callbackUrl })}>Login</button>
                </div>
            </div>
        </div>
    )
}