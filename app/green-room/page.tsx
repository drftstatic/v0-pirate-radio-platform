import { TopNav } from "@/components/top-nav"
import { Sidebar } from "@/components/sidebar"
import { GreenRoom } from "@/components/green-room"

export default function GreenRoomPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <GreenRoom />
        </main>
      </div>
    </div>
  )
}
