import { TopNav } from "@/components/top-nav"
import { Sidebar } from "@/components/sidebar"
import { NetworkDiscovery } from "@/components/network-discovery"

export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <NetworkDiscovery />
        </main>
      </div>
    </div>
  )
}
