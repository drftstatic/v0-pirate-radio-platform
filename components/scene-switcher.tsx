import { Monitor, Mic, Music, ImageIcon, Users, Camera } from "lucide-react"

export function SceneSwitcher() {
  const scenes = [
    { name: "MAIN BROADCAST", icon: Monitor, active: true },
    { name: "INTERVIEW SETUP", icon: Mic, active: false },
    { name: "GUEST SPOTLIGHT", icon: Camera, active: false },
    { name: "MULTI-GUEST GRID", icon: Users, active: false },
    { name: "MUSIC ONLY", icon: Music, active: false },
    { name: "STANDBY SCREEN", icon: ImageIcon, active: false },
  ]

  return (
    <div className="bg-gray-900/50 border border-blue-400/30 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-white mb-4">SCENE PRESETS</h3>

      <div className="grid grid-cols-3 gap-3">
        {scenes.map((scene, index) => (
          <button
            key={index}
            className={`flex flex-col items-center space-y-2 p-4 rounded border-2 transition-all ${
              scene.active
                ? "border-blue-400 bg-blue-400/20 text-blue-400"
                : "border-gray-600 bg-black/30 text-gray-400 hover:border-blue-400/50 hover:text-blue-400"
            }`}
          >
            <scene.icon className="h-6 w-6" />
            <span className="text-xs font-medium text-center font-mono">{scene.name}</span>
            {scene.active && <div className="h-1 w-1 bg-blue-400 rounded-full animate-pulse" />}
          </button>
        ))}
      </div>
    </div>
  )
}
