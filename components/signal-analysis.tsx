"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Radio, Activity, Globe, Zap, Network, Download, RefreshCw, Settings, BarChart3 } from "lucide-react"

export function SignalAnalysis() {
  const [timeRange, setTimeRange] = useState("24H")

  const timeRanges = [
    { label: "24H", value: "24H" },
    { label: "7D", value: "7D" },
    { label: "30D", value: "30D" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-mono font-bold text-blue-400 glow-text">SIGNAL ANALYSIS</h1>
          <p className="text-gray-400 font-mono">Transmission Monitoring & Network Metrics</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-mono">MONITORING ACTIVE</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-pink-600/20 border border-pink-500/30 rounded">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
            <span className="text-pink-400 font-mono text-sm font-bold">LIVE DATA</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex bg-slate-900/50 border border-blue-500/30 rounded-lg p-1">
          {timeRanges.map((range) => (
            <Button
              key={range.value}
              variant={timeRange === range.value ? "default" : "ghost"}
              size="sm"
              onClick={() => setTimeRange(range.value)}
              className={`font-mono text-xs ${
                timeRange === range.value
                  ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                  : "text-gray-400 hover:text-blue-400 bg-transparent"
              }`}
            >
              {range.label}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-pink-600 hover:bg-pink-700 text-white font-mono">
            <Download className="h-4 w-4 mr-2" />
            BACKUP TRANSMISSION DATA
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-mono">
            <RefreshCw className="h-4 w-4 mr-2" />
            REFRESH SIGNAL
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white font-mono">
            <Settings className="h-4 w-4 mr-2" />
            CALIBRATE MONITORS
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* TRANSMISSION METRICS */}
        <Card className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-blue-400 font-mono flex items-center gap-2">
              <Activity className="w-5 h-5" />
              TRANSMISSION METRICS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="text-2xl font-mono text-yellow-400">2,139</div>
              <div className="text-xs text-gray-500 font-mono">Live Listeners</div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-mono text-yellow-400">94%</span>
                <span className="text-xs text-blue-400 font-mono">STRONG</span>
              </div>
              <div className="text-xs text-gray-500 font-mono">Signal Strength</div>
            </div>
            <div>
              <div className="text-lg font-mono text-yellow-400">2:47:32</div>
              <div className="text-xs text-gray-500 font-mono">Uptime</div>
            </div>
            <div>
              <div className="text-lg font-mono text-yellow-400">98%</div>
              <div className="text-xs text-gray-500 font-mono">Quality Score</div>
            </div>
          </CardContent>
        </Card>

        {/* FREQUENCY DISTRIBUTION */}
        <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-purple-400 font-mono flex items-center gap-2">
              <Radio className="w-5 h-5" />
              FREQUENCY DISTRIBUTION
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-purple-400 font-mono">YouTube Live</span>
              <span className="text-lg text-yellow-400 font-mono">847</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-400 font-mono">Twitch</span>
              <span className="text-lg text-yellow-400 font-mono">623</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-pink-400 font-mono">Facebook</span>
              <span className="text-lg text-yellow-400 font-mono">295</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-400 font-mono">DCPN Direct</span>
              <span className="text-lg text-yellow-400 font-mono">374</span>
            </div>
          </CardContent>
        </Card>

        {/* UNDERGROUND NETWORK */}
        <Card className="bg-slate-900/50 border-pink-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-pink-400 font-mono flex items-center gap-2">
              <Network className="w-5 h-5" />
              UNDERGROUND NETWORK
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="text-2xl font-mono text-yellow-400">1,247</div>
              <div className="text-xs text-gray-500 font-mono">Network Stats</div>
            </div>
            <div>
              <div className="text-lg font-mono text-yellow-400">892</div>
              <div className="text-xs text-gray-500 font-mono">Cross-Show Views</div>
            </div>
            <div>
              <div className="text-lg font-mono text-yellow-400">23</div>
              <div className="text-xs text-gray-500 font-mono">Collaboration Requests</div>
            </div>
            <div>
              <div className="text-lg font-mono text-pink-400">+15%</div>
              <div className="text-xs text-gray-500 font-mono">Network Growth</div>
            </div>
          </CardContent>
        </Card>

        {/* BROADCAST HISTORY */}
        <Card className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-blue-400 font-mono flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              BROADCAST HISTORY
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="text-2xl font-mono text-yellow-400">3,481</div>
              <div className="text-xs text-gray-500 font-mono">Peak Listeners</div>
            </div>
            <div>
              <div className="text-lg font-mono text-yellow-400">47:23:15</div>
              <div className="text-xs text-gray-500 font-mono">Total Stream Time</div>
            </div>
            <div>
              <div className="text-lg font-mono text-yellow-400">18</div>
              <div className="text-xs text-gray-500 font-mono">Episodes Recorded</div>
            </div>
            <div>
              <div className="text-lg font-mono text-yellow-400">156</div>
              <div className="text-xs text-gray-500 font-mono">Clips Generated</div>
            </div>
          </CardContent>
        </Card>

        {/* AUDIENCE TERRITORY */}
        <Card className="bg-slate-900/50 border-yellow-500/30 backdrop-blur-sm md:col-span-2">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
              <Globe className="w-5 h-5" />
              AUDIENCE TERRITORY
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative h-32 bg-black/50 rounded border border-yellow-500/30 overflow-hidden">
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
            <div className="grid grid-cols-4 gap-4 text-xs">
              <div>
                <div className="text-yellow-400 font-mono text-lg">New York</div>
                <div className="text-gray-500 font-mono">847 listeners</div>
              </div>
              <div>
                <div className="text-yellow-400 font-mono text-lg">London</div>
                <div className="text-gray-500 font-mono">623 listeners</div>
              </div>
              <div>
                <div className="text-yellow-400 font-mono text-lg">Tokyo</div>
                <div className="text-gray-500 font-mono">445 listeners</div>
              </div>
              <div>
                <div className="text-yellow-400 font-mono text-lg">Berlin</div>
                <div className="text-gray-500 font-mono">224 listeners</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-xs pt-2 border-t border-yellow-500/30">
              <div>
                <div className="text-yellow-400 font-mono">EST: 34%</div>
                <div className="text-gray-500 font-mono">Eastern Time</div>
              </div>
              <div>
                <div className="text-yellow-400 font-mono">GMT: 28%</div>
                <div className="text-gray-500 font-mono">Greenwich Time</div>
              </div>
              <div>
                <div className="text-yellow-400 font-mono">JST: 22%</div>
                <div className="text-gray-500 font-mono">Japan Time</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SIGNAL QUALITY METRICS */}
        <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm md:col-span-2">
          <CardHeader>
            <CardTitle className="text-purple-400 font-mono flex items-center gap-2">
              <Zap className="w-5 h-5" />
              SIGNAL QUALITY METRICS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-mono text-yellow-400">98%</div>
                  <div className="text-xs text-gray-500 font-mono">Bitrate Stability</div>
                </div>
                <div>
                  <div className="text-2xl font-mono text-yellow-400">0.2%</div>
                  <div className="text-xs text-gray-500 font-mono">Frame Drops</div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono text-yellow-400">STRONG</span>
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                  </div>
                  <div className="text-xs text-gray-500 font-mono">Connection Quality</div>
                </div>
                <div>
                  <div className="text-2xl font-mono text-yellow-400">2.1s</div>
                  <div className="text-xs text-gray-500 font-mono">Latency</div>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-purple-500/30">
              <div className="space-y-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex space-x-1">
                    {[...Array(20)].map((_, j) => (
                      <div
                        key={j}
                        className={`h-1 w-2 ${
                          j < 16 + Math.sin(Date.now() / 1000 + i) * 2
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
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
