"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, Monitor, Grid3X3, PictureInPicture2, Settings, Zap } from "lucide-react"

export function VideoControls() {
  const [activeLayout, setActiveLayout] = useState("picture-in-picture")
  const [recording, setRecording] = useState(false)

  const layouts = [
    { id: "single", name: "Single View", icon: Monitor },
    { id: "picture-in-picture", name: "PiP", icon: PictureInPicture2 },
    { id: "grid", name: "Grid View", icon: Grid3X3 },
    { id: "interview", name: "Interview", icon: Camera },
  ]

  const videoSettings = [
    { label: "RESOLUTION", value: "1080p", color: "blue" },
    { label: "FRAMERATE", value: "30fps", color: "purple" },
    { label: "BITRATE", value: "6000k", color: "pink" },
    { label: "CODEC", value: "H.264", color: "yellow" },
  ]

  return (
    <Card className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-blue-400 font-mono flex items-center gap-2">
          <Camera className="w-5 h-5" />
          VIDEO CONTROL MATRIX
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Layout Switcher */}
        <div>
          <h4 className="text-sm text-gray-400 font-mono mb-3">SCENE LAYOUTS</h4>
          <div className="grid grid-cols-2 gap-2">
            {layouts.map((layout) => (
              <Button
                key={layout.id}
                variant={activeLayout === layout.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveLayout(layout.id)}
                className={`font-mono ${
                  activeLayout === layout.id
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-transparent border-blue-500/30 hover:border-blue-500"
                }`}
              >
                <layout.icon className="w-4 h-4 mr-2" />
                {layout.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Video Quality Settings */}
        <div>
          <h4 className="text-sm text-gray-400 font-mono mb-3">STREAM QUALITY</h4>
          <div className="grid grid-cols-2 gap-3">
            {videoSettings.map((setting) => (
              <div
                key={setting.label}
                className="flex items-center justify-between p-2 bg-slate-800/50 rounded border border-blue-500/20"
              >
                <span className="text-xs text-gray-400 font-mono">{setting.label}</span>
                <Badge
                  className={`bg-${setting.color}-500/20 text-${setting.color}-400 border-${setting.color}-500/30`}
                >
                  {setting.value}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Recording Controls */}
        <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded border border-blue-500/20">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${recording ? "bg-purple-500 animate-pulse" : "bg-gray-500"}`} />
            <span className="text-sm text-gray-400 font-mono">RECORDING</span>
          </div>
          <Button
            size="sm"
            onClick={() => setRecording(!recording)}
            className={`font-mono ${
              recording
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-transparent border-purple-500/30 hover:border-purple-500"
            }`}
          >
            {recording ? "STOP REC" : "START REC"}
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button size="sm" className="flex-1 bg-pink-600 hover:bg-pink-700 font-mono">
            <Zap className="w-4 h-4 mr-2" />
            AUTO FOCUS
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="bg-transparent border-blue-500/30 hover:border-blue-500 font-mono"
          >
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
