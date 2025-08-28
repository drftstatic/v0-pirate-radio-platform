"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Cpu,
  HardDrive,
  Wifi,
  Monitor,
  Settings,
  RotateCcw,
  Play,
  AlertTriangle,
  CheckCircle,
  Activity,
} from "lucide-react"

export function EngineeringBay() {
  const [systemStatus, setSystemStatus] = useState("OPTIMAL")
  const [audioProcessing, setAudioProcessing] = useState({
    sampleRate: "48kHz",
    bitDepth: "24-bit",
    latency: "12.3ms",
    noiseGate: "-40dB",
    compressor: "3:1 RATIO",
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-mono font-bold text-blue-400 glow-text">ENGINEERING BAY</h1>
          <p className="text-gray-400 font-mono">Technical Control & System Monitoring</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-mono">SYSTEMS ONLINE</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-400 font-mono text-sm font-bold">OPTIMAL</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Transmission Hardware */}
        <Card className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-blue-400 font-mono flex items-center gap-2">
              <Cpu className="w-5 h-5" />
              TRANSMISSION HARDWARE
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">CPU Usage:</span>
              <span className="text-blue-400 font-mono">23%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">GPU Load:</span>
              <span className="text-purple-400 font-mono">67%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">RAM:</span>
              <span className="text-blue-400 font-mono">8.2GB / 16GB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Temperature:</span>
              <span className="text-yellow-400 font-mono">62°C</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-mono">Status:</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-400 font-mono">OPTIMAL</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Audio Processing Matrix */}
        <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-purple-400 font-mono flex items-center gap-2">
              <Activity className="w-5 h-5" />
              AUDIO PROCESSING MATRIX
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Sample Rate:</span>
              <span className="text-blue-400 font-mono">48kHz</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Bit Depth:</span>
              <span className="text-purple-400 font-mono">24-bit</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Latency:</span>
              <span className="text-blue-400 font-mono">12.3ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Noise Gate:</span>
              <span className="text-pink-400 font-mono">-40dB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Compressor:</span>
              <span className="text-yellow-400 font-mono">3:1 RATIO</span>
            </div>
          </CardContent>
        </Card>

        {/* Video Encoding Station */}
        <Card className="bg-slate-900/50 border-pink-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-pink-400 font-mono flex items-center gap-2">
              <Monitor className="w-5 h-5" />
              VIDEO ENCODING STATION
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Encoder:</span>
              <span className="text-blue-400 font-mono">H.264 HARDWARE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Preset:</span>
              <span className="text-purple-400 font-mono">ULTRAFAST</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">CRF:</span>
              <span className="text-blue-400 font-mono">18</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Keyframe:</span>
              <span className="text-pink-400 font-mono">2 SEC</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Profile:</span>
              <span className="text-yellow-400 font-mono">HIGH</span>
            </div>
          </CardContent>
        </Card>

        {/* Network Diagnostics */}
        <Card className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-blue-400 font-mono flex items-center gap-2">
              <Wifi className="w-5 h-5" />
              NETWORK DIAGNOSTICS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Bandwidth:</span>
              <span className="text-blue-400 font-mono">847 Mbps</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Packet Loss:</span>
              <span className="text-blue-400 font-mono">0.02%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Jitter:</span>
              <span className="text-purple-400 font-mono">1.2ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">RTT:</span>
              <span className="text-pink-400 font-mono">34ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-mono">Connection:</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-400 font-mono">STABLE</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Storage Operations */}
        <Card className="bg-slate-900/50 border-yellow-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
              <HardDrive className="w-5 h-5" />
              STORAGE OPERATIONS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Recording Drive:</span>
              <span className="text-blue-400 font-mono">2.3TB / 4TB</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-mono">Backup Status:</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-yellow-400 font-mono">SYNCING</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Last Backup:</span>
              <span className="text-purple-400 font-mono">23 MIN AGO</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Archive:</span>
              <span className="text-pink-400 font-mono">156 EPISODES</span>
            </div>
          </CardContent>
        </Card>

        {/* System Monitoring */}
        <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-purple-400 font-mono flex items-center gap-2">
              <Settings className="w-5 h-5" />
              SYSTEM MONITORING
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Uptime:</span>
              <span className="text-blue-400 font-mono">72:14:33</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Load Average:</span>
              <span className="text-purple-400 font-mono">1.47</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Processes:</span>
              <span className="text-blue-400 font-mono">284</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Memory Swap:</span>
              <span className="text-blue-400 font-mono">0%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Disk I/O:</span>
              <span className="text-pink-400 font-mono">23 MB/s</span>
            </div>
          </CardContent>
        </Card>

        {/* Broadcast Protocols */}
        <Card className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-blue-400 font-mono flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              BROADCAST PROTOCOLS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-mono">RTMP Primary:</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-400 font-mono">CONNECTED</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-mono">RTMP Backup:</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-yellow-400 font-mono">STANDBY</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">WebRTC:</span>
              <span className="text-purple-400 font-mono">12 PEERS</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-mono">SRT:</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-400 font-mono">ENABLED</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">NDI:</span>
              <span className="text-pink-400 font-mono">3 SOURCES</span>
            </div>
          </CardContent>
        </Card>

        {/* Calibration Controls */}
        <Card className="bg-slate-900/50 border-pink-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-pink-400 font-mono flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              CALIBRATION CONTROLS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-mono">Audio Levels:</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-400 font-mono">AUTO</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-mono">Color Correction:</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-yellow-400 font-mono">MANUAL</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">White Balance:</span>
              <span className="text-purple-400 font-mono">5600K</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-mono">Exposure:</span>
              <span className="text-pink-400 font-mono">-0.7 EV</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-mono">Focus:</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-blue-400 font-mono">CONTINUOUS</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-mono">
          <RotateCcw className="h-4 w-4 mr-2" />
          REBOOT TRANSMISSION
        </Button>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white font-mono">
          <Settings className="h-4 w-4 mr-2" />
          CONFIGURE HARDWARE
        </Button>
        <Button className="bg-pink-600 hover:bg-pink-700 text-white font-mono">
          <Play className="h-4 w-4 mr-2" />
          RUN SYSTEM CHECK
        </Button>
        <Button className="bg-yellow-600 hover:bg-yellow-700 text-white font-mono">
          <AlertTriangle className="h-4 w-4 mr-2" />
          EMERGENCY BACKUP
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-mono">
          <Monitor className="h-4 w-4 mr-2" />
          TRANSMISSION LOGS
        </Button>
      </div>
    </div>
  )
}
