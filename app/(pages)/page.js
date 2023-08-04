import { getServerSession } from "next-auth"
import { redirect } from 'next/navigation'

export default async function Home() {
  redirect("/dashboard")
  return (
    <h1>Home Page</h1>
  )
}
