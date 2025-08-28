import { Sidebar } from "@/components/sidebar"
import { SignalAnalysis } from "@/components/signal-analysis"

export default function AnalyticsPage() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <SignalAnalysis />
      </main>
    </div>
  )
}
