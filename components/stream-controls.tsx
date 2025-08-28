import { Wifi, WifiOff, Settings, Users } from "lucide-react"

export function StreamControls() {
  const destinations = [
    { name: "DCPN NETWORK", status: "connected", viewers: 1247 },
    { name: "BACKUP RELAY", status: "standby", viewers: 0 },
    { name: "UNDERGROUND HUB", status: "connected", viewers: 892 },
  ]

  return (
    <div className="bg-gray-900/50 border border-blue-400/30 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-white mb-4">TRANSMISSION TOWERS</h3>

      <div className="space-y-3">
        {destinations.map((dest, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-black/30 rounded border border-gray-700">
            <div className="flex items-center space-x-3">
              {dest.status === "connected" ? (
                <Wifi className="h-4 w-4 text-blue-400" />
              ) : (
                <WifiOff className="h-4 w-4 text-gray-500" />
              )}
              <span className="text-sm text-white">{dest.name}</span>
            </div>

            <div className="flex items-center space-x-2">
              {dest.viewers > 0 && (
                <div className="flex items-center space-x-1">
                  <Users className="h-3 w-3 text-blue-400" />
                  <span className="text-xs text-blue-400">{dest.viewers}</span>
                </div>
              )}
              <div
                className={`h-2 w-2 rounded-full ${
                  dest.status === "connected" ? "bg-blue-400 animate-pulse" : "bg-gray-500"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-pink-500/20 border border-pink-500 text-pink-400 hover:bg-pink-500/30 transition-colors rounded">
        <Settings className="h-4 w-4" />
        <span>PATCH THROUGH</span>
      </button>
    </div>
  )
}
