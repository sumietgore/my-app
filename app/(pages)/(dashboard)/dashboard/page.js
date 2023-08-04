import SignOut from "@/app/components/signoutButton"
import { getServerSession } from "next-auth"

export const runtime = 'edge';

export default async function Dashboard() {
  return (
    <div className="flex flex-row h-20 py-4 border border-neutral-400">
      <div className="flex-1 flex flex-row max-w-5xl mx-auto justify-between">
        <h1 className="self-center">Dashboard</h1>
        <SignOut />
      </div>
    </div>
  )
}
