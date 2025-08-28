import { Activity, Eye, Clock } from "lucide-react"

export function StreamMetrics() {
  return (
    <div className="bg-gray-900/50 border border-blue-400/30 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-white mb-4">SIGNAL ANALYSIS</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Eye className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-gray-300">LISTENERS</span>
          </div>
          <span className="text-lg font-bold text-blue-400">2,139</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="h-4 w-4 text-pink-400" />
            <span className="text-sm text-gray-300">SIGNAL STRENGTH</span>
          </div>
          <span className="text-lg font-bold text-pink-400">94%</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-yellow-400" />
            <span className="text-sm text-gray-300">UPTIME</span>
          </div>
          <span className="text-lg font-bold text-yellow-400">2:47:32</span>
        </div>

        {/* Signal strength meter */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>WEAK</span>
            <span>STRONG</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full w-[94%] bg-gradient-to-r from-purple-400 via-yellow-400 to-blue-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
