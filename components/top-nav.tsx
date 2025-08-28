import { Signal, Radio } from "lucide-react"

export function TopNav() {
  return (
    <nav className="border-b border-blue-400/30 bg-black/90 backdrop-blur-sm">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Radio className="h-8 w-8 text-pink-500 animate-pulse" />
              <div>
                <h1 className="text-xl font-bold text-white tracking-wider">DEATHSTEP UNDERGROUND</h1>
                <p className="text-xs text-blue-400 tracking-widest">BROADCASTING FROM THE UNDERGROUND</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Signal className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-blue-400">SIGNAL LOCKED</span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="text-sm text-purple-400">ON AIR</span>
            </div>

            <button className="px-4 py-2 bg-pink-500/20 border border-pink-500 text-pink-400 hover:bg-pink-500/30 transition-colors">
              UNDERGROUND PRO
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
