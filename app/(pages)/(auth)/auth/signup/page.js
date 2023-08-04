"use client"
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    return (
        <div className="max-w-3xl mx-auto">
            <div className="flex flex-col">
                <input type="email" placeholder="johndoe@example.com" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={() => signIn("credentials", { username: username, password: password, callbackUrl: 'http://localhost:3000/dashboard' })}>Login</button>
            </div>
        </div>
    )
}