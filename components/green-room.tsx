"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Mic, MicOff, Video, VideoOff, PhoneOff, Users, Clock, Signal } from "lucide-react"

interface Guest {
  id: string
  name: string
  status: "waiting" | "connected" | "live" | "disconnected"
  audioEnabled: boolean
  videoEnabled: boolean
  connectionQuality: "excellent" | "good" | "poor"
  waitTime: string
}

export function GreenRoom() {
  const [guests, setGuests] = useState<Guest[]>([
    {
      id: "1",
      name: "DJ Shadowcast",
      status: "waiting",
      audioEnabled: true,
      videoEnabled: false,
      connectionQuality: "excellent",
      waitTime: "2:34",
    },
    {
      id: "2",
      name: "MC Frequency",
      status: "connected",
      audioEnabled: true,
      videoEnabled: true,
      connectionQuality: "good",
      waitTime: "0:45",
    },
    {
      id: "3",
      name: "The Analog Prophet",
      status: "live",
      audioEnabled: true,
      videoEnabled: false,
      connectionQuality: "excellent",
      waitTime: "0:00",
    },
  ])

  const [inviteCode, setInviteCode] = useState("UNDERGROUND-7734")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "waiting":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "connected":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "live":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "disconnected":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case "excellent":
        return "text-blue-400"
      case "good":
        return "text-yellow-400"
      case "poor":
        return "text-purple-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-mono font-bold text-blue-400 glow-text">THE GREEN ROOM</h1>
          <p className="text-gray-400 font-mono">Guest Management & Pre-Show Staging</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-mono">{guests.length} GUESTS</span>
          </div>
        </div>
      </div>

      {/* Invite Section */}
      <Card className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-blue-400 font-mono flex items-center gap-2">
            <Signal className="w-5 h-5" />
            GUEST INVITE PORTAL
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-sm text-gray-400 font-mono">INVITE CODE</label>
              <Input
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                className="bg-slate-800/50 border-blue-500/30 text-blue-400 font-mono"
              />
            </div>
            <div className="flex items-end">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-mono">GENERATE NEW</Button>
            </div>
          </div>
          <p className="text-xs text-gray-500 font-mono">Share this code with guests to join the green room queue</p>
        </CardContent>
      </Card>

      {/* Guest Queue */}
      <div className="grid gap-4">
        {guests.map((guest) => (
          <Card key={guest.id} className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex gap-6">
                <div className="w-48 h-32 bg-black rounded-lg border-2 border-blue-500/30 relative overflow-hidden flex-shrink-0">
                  {guest.videoEnabled ? (
                    <div className="w-full h-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center relative">
                      {/* Simulated video feed with scan lines */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-pulse" />
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-mono font-bold text-lg">
                          {guest.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      {/* Video quality indicator */}
                      <div className="absolute top-2 right-2">
                        <div
                          className={`w-2 h-2 rounded-full ${getQualityColor(guest.connectionQuality)} animate-pulse`}
                        />
                      </div>
                      {/* Audio level indicator */}
                      {guest.audioEnabled && (
                        <div className="absolute bottom-2 left-2 flex gap-1">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1 h-3 bg-blue-400 rounded-full ${
                                Math.random() > 0.5 ? "opacity-100" : "opacity-30"
                              }`}
                              style={{ animationDelay: `${i * 0.1}s` }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gray-800/50 flex items-center justify-center">
                      <VideoOff className="w-8 h-8 text-gray-500" />
                    </div>
                  )}
                  {/* Video window glow effect */}
                  <div className="absolute -inset-1 bg-blue-400/20 rounded-lg blur-sm -z-10" />
                </div>

                <div className="flex-1 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="text-blue-400 font-mono font-bold">{guest.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className={getStatusColor(guest.status)}>{guest.status.toUpperCase()}</Badge>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-400 font-mono">{guest.waitTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {/* Connection Quality */}
                    <div className="flex items-center gap-2">
                      <Signal className={`w-4 h-4 ${getQualityColor(guest.connectionQuality)}`} />
                      <span className={`text-xs font-mono ${getQualityColor(guest.connectionQuality)}`}>
                        {guest.connectionQuality.toUpperCase()}
                      </span>
                    </div>

                    {/* Audio/Video Controls */}
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant={guest.audioEnabled ? "default" : "outline"} className="w-8 h-8 p-0">
                        {guest.audioEnabled ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                      </Button>
                      <Button size="sm" variant={guest.videoEnabled ? "default" : "outline"} className="w-8 h-8 p-0">
                        {guest.videoEnabled ? <Video className="w-4 h-4" /> : <VideoOff className="w-4 h-4" />}
                      </Button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {guest.status === "waiting" && (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-mono">
                          ADMIT
                        </Button>
                      )}
                      {guest.status === "connected" && (
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 font-mono">
                          GO LIVE
                        </Button>
                      )}
                      {guest.status === "live" && (
                        <Button size="sm" variant="outline" className="font-mono bg-transparent">
                          END LIVE
                        </Button>
                      )}
                      <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-transparent">
                        <PhoneOff className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
