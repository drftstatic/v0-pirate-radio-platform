import { MissionControl } from "@/components/mission-control"
import { TopNav } from "@/components/top-nav"
import { Sidebar } from "@/components/sidebar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-blue-400 font-mono">
      {/* Subtle scan lines effect */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-pulse" />
      </div>

      <TopNav />

      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <MissionControl />
        </main>
      </div>
    </div>
  )
}
