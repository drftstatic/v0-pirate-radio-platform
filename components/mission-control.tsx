import { StreamPreview } from "./stream-preview"
import { AudioMixer } from "./audio-mixer"
import { StreamControls } from "./stream-controls"
import { StreamMetrics } from "./stream-metrics"
import { SceneSwitcher } from "./scene-switcher"
import { VideoControls } from "./video-controls"

export function MissionControl() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white tracking-wider">MISSION CONTROL</h2>
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 bg-blue-400 rounded-full animate-pulse" />
          <span className="text-blue-400 text-sm">TRANSMISSION READY</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <StreamPreview />
          <SceneSwitcher />
        </div>

        <div className="space-y-6">
          <StreamControls />
          <VideoControls />
          <AudioMixer />
          <StreamMetrics />
        </div>
      </div>
    </div>
  )
}
