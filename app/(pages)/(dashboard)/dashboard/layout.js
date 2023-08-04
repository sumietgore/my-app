import { getServerSession } from "next-auth"
import { redirect, useParams } from 'next/navigation'

export default async function DashboardLayout({ children }) {
    const session = await getServerSession()

    if (!session) redirect("/auth/signin")

    return children
}