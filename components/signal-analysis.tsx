"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Radio, Activity, Globe, Users, TrendingUp, Zap, Network, DollarSign, Download, Play } from "lucide-react"

export function SignalAnalysis() {
  const [timeRange, setTimeRange] = useState("24h")

  const timeRanges = [
    { label: "24H", value: "24h" },
    { label: "7D", value: "7d" },
    { label: "30D", value: "30d" },
  ]

  return (
    <div className="p-6 space-y-6 min-h-screen bg-black/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue-400/5 via-transparent to-purple-400/5"></div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Radio className="h-8 w-8 text-blue-400" />
            <h1 className="text-3xl font-bold text-blue-400 font-mono tracking-wider">SIGNAL ANALYSIS</h1>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
            <span className="text-xs text-pink-400 font-mono">ON AIR</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex bg-black/50 border border-blue-400/30 rounded-lg p-1">
            {timeRanges.map((range) => (
              <Button
                key={range.value}
                variant={timeRange === range.value ? "default" : "ghost"}
                size="sm"
                onClick={() => setTimeRange(range.value)}
                className={`font-mono text-xs ${
                  timeRange === range.value
                    ? "bg-blue-400/20 text-blue-400 border border-blue-400/50"
                    : "text-gray-400 hover:text-blue-400"
                }`}
              >
                {range.label}
              </Button>
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="border-pink-400/50 text-pink-400 hover:bg-pink-400/10 font-mono bg-transparent"
          >
            <Download className="h-4 w-4 mr-2" />
            RECORD SIGNAL
          </Button>
        </div>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Live Signal Strength */}
        <Card className="bg-black/50 border-blue-400/30 p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wide">LIVE SIGNAL</h3>
            <Activity className="h-5 w-5 text-blue-400" />
          </div>
          <div className="space-y-4">
            <div className="text-3xl font-mono text-yellow-400">2,847</div>
            <div className="text-xs text-gray-500">Active Listeners</div>
            <div className="space-y-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex space-x-1">
                  {[...Array(20)].map((_, j) => (
                    <div
                      key={j}
                      className={`h-1 w-2 ${
                        j < 12 + Math.sin(Date.now() / 1000 + i) * 4
                          ? j < 14
                            ? "bg-blue-400"
                            : j < 17
                              ? "bg-yellow-400"
                              : "bg-pink-400"
                          : "bg-gray-800"
                      }`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Transmission Quality */}
        <Card className="bg-black/50 border-purple-400/30 p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wide">TRANSMISSION</h3>
            <Zap className="h-5 w-5 text-purple-400" />
          </div>
          <div className="space-y-4">
            <div className="text-3xl font-mono text-yellow-400">98.7%</div>
            <div className="text-xs text-gray-500">Stream Health</div>
            <div className="relative w-20 h-20 mx-auto">
              <div className="absolute inset-0 border-2 border-purple-400/30 rounded-full" />
              <div className="absolute inset-2 border border-purple-400/20 rounded-full" />
              <div className="absolute inset-4 border border-purple-400/10 rounded-full" />
              <div className="absolute top-1/2 left-1/2 w-1 h-8 bg-purple-400 origin-bottom transform -translate-x-1/2 -translate-y-full rotate-45 animate-pulse" />
            </div>
            <div className="text-xs text-purple-400 font-mono">1080p • 6000kbps</div>
          </div>
        </Card>

        {/* Frequency Distribution */}
        <Card className="bg-black/50 border-pink-400/30 p-6 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wide">FREQUENCY</h3>
            <Radio className="h-5 w-5 text-pink-400" />
          </div>
          <div className="space-y-4">
            <div className="text-3xl font-mono text-yellow-400">4</div>
            <div className="text-xs text-gray-500">Active Channels</div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs text-pink-400 font-mono">TWITCH</span>
                <span className="text-xs text-yellow-400 font-mono">1,247</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-blue-400 font-mono">YOUTUBE</span>
                <span className="text-xs text-yellow-400 font-mono">892</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-purple-400 font-mono">DISCORD</span>
                <span className="text-xs text-yellow-400 font-mono">708</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Underground Network */}
        <Card className="bg-black/50 border-blue-400/30 p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wide">NETWORK</h3>
            <Network className="h-5 w-5 text-blue-400" />
          </div>
          <div className="space-y-4">
            <div className="text-3xl font-mono text-yellow-400">12</div>
            <div className="text-xs text-gray-500">Connected Stations</div>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i < 6 ? "bg-blue-400 animate-pulse" : "bg-gray-700"}`}
                />
              ))}
            </div>
            <div className="text-xs text-blue-400 font-mono">Cross-show: +23%</div>
          </div>
        </Card>

        {/* Audience Territory */}
        <Card className="bg-black/50 border-yellow-400/30 p-6 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wide">TERRITORY</h3>
            <Globe className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="space-y-4">
            <div className="flex items-end space-x-4">
              <div className="text-3xl font-mono text-yellow-400">47</div>
              <div className="text-sm text-gray-500">Countries</div>
            </div>
            <div className="relative h-32 bg-gray-900/50 rounded border border-yellow-400/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent animate-pulse" />
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
                  style={{
                    left: `${Math.random() * 90 + 5}%`,
                    top: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div>
                <div className="text-yellow-400 font-mono">US: 34%</div>
                <div className="text-gray-500">North America</div>
              </div>
              <div>
                <div className="text-yellow-400 font-mono">EU: 28%</div>
                <div className="text-gray-500">Europe</div>
              </div>
              <div>
                <div className="text-yellow-400 font-mono">AS: 22%</div>
                <div className="text-gray-500">Asia Pacific</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Content Performance */}
        <Card className="bg-black/50 border-pink-400/30 p-6 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/20 md:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wide">TOP SIGNALS</h3>
            <TrendingUp className="h-5 w-5 text-pink-400" />
          </div>
          <div className="space-y-3">
            {[
              { title: "Underground Tech Talk #47", plays: "12.4K", duration: "2:34:12" },
              { title: "Pirate Music Hour: Synthwave", plays: "8.9K", duration: "1:45:33" },
              { title: "Rebel News Broadcast", plays: "6.7K", duration: "0:58:21" },
            ].map((clip, i) => (
              <div key={i} className="flex items-center space-x-3 p-3 bg-gray-900/50 rounded border border-pink-400/20">
                <div className="w-8 h-6 bg-pink-400/20 border border-pink-400/40 rounded flex items-center justify-center">
                  <Play className="h-3 w-3 text-pink-400" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-pink-400 font-mono">{clip.title}</div>
                  <div className="text-xs text-gray-500">{clip.duration}</div>
                </div>
                <div className="text-sm text-yellow-400 font-mono">{clip.plays}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Revenue Underground */}
        <Card className="bg-black/50 border-purple-400/30 p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wide">REVENUE</h3>
            <DollarSign className="h-5 w-5 text-purple-400" />
          </div>
          <div className="space-y-4">
            <div className="text-3xl font-mono text-yellow-400">$2,847</div>
            <div className="text-xs text-gray-500">This Month</div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-xs text-purple-400 font-mono">SUBS</span>
                <span className="text-xs text-yellow-400 font-mono">$1,890</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-blue-400 font-mono">TIPS</span>
                <span className="text-xs text-yellow-400 font-mono">$657</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-pink-400 font-mono">MERCH</span>
                <span className="text-xs text-yellow-400 font-mono">$300</span>
              </div>
            </div>
            <div className="text-xs text-purple-400 font-mono">↑ +18% vs last month</div>
          </div>
        </Card>

        {/* Community Signal */}
        <Card className="bg-black/50 border-blue-400/30 p-6 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wide">COMMUNITY</h3>
            <Users className="h-5 w-5 text-blue-400" />
          </div>
          <div className="space-y-4">
            <div className="text-3xl font-mono text-yellow-400">89%</div>
            <div className="text-xs text-gray-500">Engagement Rate</div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-xs text-blue-400 font-mono w-12">CHAT</span>
                <div className="flex-1 flex space-x-1">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className={`h-2 flex-1 ${i < 8 ? "bg-blue-400" : "bg-gray-700"}`} />
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-pink-400 font-mono w-12">LIKES</span>
                <div className="flex-1 flex space-x-1">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className={`h-2 flex-1 ${i < 6 ? "bg-pink-400" : "bg-gray-700"}`} />
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-purple-400 font-mono w-12">SHARE</span>
                <div className="flex-1 flex space-x-1">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className={`h-2 flex-1 ${i < 4 ? "bg-purple-400" : "bg-gray-700"}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
