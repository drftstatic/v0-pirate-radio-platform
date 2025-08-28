"use client"

import { useState } from "react"

export function AudioMixer() {
  const [channels, setChannels] = useState([
    { label: "MIC 1", level: 75, active: true },
    { label: "MIC 2", level: 0, active: false },
    { label: "MUSIC", level: 45, active: true },
    { label: "SFX", level: 30, active: true },
  ])

  const handleLevelChange = (index: number, newLevel: number) => {
    setChannels((prev) => prev.map((channel, i) => (i === index ? { ...channel, level: newLevel } : channel)))
  }

  const toggleChannel = (index: number) => {
    setChannels((prev) => prev.map((channel, i) => (i === index ? { ...channel, active: !channel.active } : channel)))
  }

  return (
    <div className="bg-gray-900/50 border border-blue-400/30 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-white mb-4">AUDIO MIXER</h3>

      <div className="space-y-4">
        {channels.map((channel, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-300">{channel.label}</span>
              <button
                onClick={() => toggleChannel(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  channel.active ? "bg-blue-400 animate-pulse" : "bg-gray-600"
                }`}
              />
            </div>

            {/* VU Meter */}
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-gray-800 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    channel.level > 70 ? "bg-purple-400" : channel.level > 40 ? "bg-yellow-400" : "bg-blue-400"
                  }`}
                  style={{ width: `${channel.level}%` }}
                />
              </div>
              <span className="text-xs text-gray-400 w-8">{channel.level}%</span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={channel.level}
              onChange={(e) => handleLevelChange(index, Number.parseInt(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
