import { Play, Square, Maximize2, Users, Settings } from "lucide-react"

export function StreamPreview() {
  return (
    <div className="bg-gray-900/50 border border-blue-400/30 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">MAIN TRANSMISSION</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-mono">3 LIVE</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-purple-400 text-sm">LIVE</span>
          </div>
        </div>
      </div>

      {/* Main video preview with multi-guest layout */}
      <div className="relative bg-black rounded-lg border-4 border-gray-700 p-2 mb-4">
        <div className="aspect-video bg-gray-800 rounded relative overflow-hidden">
          {/* Main host video */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30">
            {/* Subtle scan lines */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent animate-pulse" />

            {/* Host video area */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-mono font-bold text-xl">HOST</span>
              </div>
            </div>

            {/* Picture-in-picture guest windows */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <div className="w-24 h-16 bg-black/70 border border-blue-500/50 rounded flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-mono text-xs">G1</span>
                </div>
              </div>
              <div className="w-24 h-16 bg-black/70 border border-blue-500/50 rounded flex items-center justify-center">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-mono text-xs">G2</span>
                </div>
              </div>
            </div>

            {/* Live indicators */}
            <div className="absolute bottom-4 left-4 flex gap-2">
              <div className="px-2 py-1 bg-purple-500/80 rounded text-xs text-white font-mono">LIVE</div>
              <div className="px-2 py-1 bg-blue-500/80 rounded text-xs text-white font-mono">1080p</div>
            </div>
          </div>
        </div>

        {/* TV monitor glow effect */}
        <div className="absolute -inset-1 bg-blue-400/20 rounded-lg blur-sm -z-10" />
      </div>

      {/* Enhanced controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 border border-blue-500 text-blue-400 hover:bg-blue-500/30 transition-colors rounded font-mono">
            <Maximize2 className="h-4 w-4" />
            <span>FULLSCREEN</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-pink-500/20 border border-pink-500 text-pink-400 hover:bg-pink-500/30 transition-colors rounded font-mono">
            <Settings className="h-4 w-4" />
            <span>LAYOUT</span>
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-6 py-3 bg-purple-500/20 border border-purple-500 text-purple-400 hover:bg-purple-500/30 transition-colors rounded">
            <Square className="h-4 w-4" />
            <span>CUT SIGNAL</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 bg-blue-500/20 border border-blue-500 text-blue-400 hover:bg-blue-500/30 transition-colors rounded">
            <Play className="h-4 w-4" />
            <span>GO LIVE</span>
          </button>
        </div>
      </div>
    </div>
  )
}
