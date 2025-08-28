import { TopNav } from "@/components/top-nav"
import { Sidebar } from "@/components/sidebar"
import { AIUnderground } from "@/components/ai-underground"

export default function AIUndergroundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <AIUnderground />
        </main>
      </div>
    </div>
  )
}
