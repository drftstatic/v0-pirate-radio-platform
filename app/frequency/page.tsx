import { Sidebar } from "@/components/sidebar"
import { TopNav } from "@/components/top-nav"
import { CBRadioChat } from "@/components/cb-radio-chat"

export default function FrequencyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
      <TopNav />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <CBRadioChat />
        </main>
      </div>
    </div>
  )
}
