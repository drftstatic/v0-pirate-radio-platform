"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import {
  Radio,
  Satellite,
  Users,
  MapPin,
  Signal,
  Heart,
  Search,
  Zap,
  Globe,
  Headphones,
  Wifi,
  Power as Tower,
} from "lucide-react"

interface Station {
  id: string
  name: string
  frequency: string
  location: string
  genre: string
  listeners: number
  signal: "strong" | "medium" | "weak"
  status: "live" | "offline" | "scheduled"
  description: string
  distance: string
  liked: boolean
}

export function NetworkDiscovery() {
  const [stations, setStations] = useState<Station[]>([
    {
      id: "1",
      name: "Neon Frequency",
      frequency: "107.7 FM",
      location: "Neo Tokyo",
      genre: "Synthwave",
      listeners: 2847,
      signal: "strong",
      status: "live",
      description: "Retro-futuristic beats from the underground",
      distance: "2.3 km",
      liked: true,
    },
    {
      id: "2",
      name: "Static Dreams",
      frequency: "94.1 FM",
      location: "Cyber District",
      genre: "Ambient",
      listeners: 1203,
      signal: "medium",
      status: "live",
      description: "Ethereal soundscapes for digital nomads",
      distance: "5.7 km",
      liked: false,
    },
    {
      id: "3",
      name: "Rebel Transmission",
      frequency: "88.5 FM",
      location: "Underground Base",
      genre: "Industrial",
      listeners: 3421,
      signal: "strong",
      status: "live",
      description: "Raw industrial beats from the resistance",
      distance: "1.2 km",
      liked: true,
    },
    {
      id: "4",
      name: "Ghost Protocol",
      frequency: "101.3 FM",
      location: "Shadow Zone",
      genre: "Dark Ambient",
      listeners: 892,
      signal: "weak",
      status: "scheduled",
      description: "Haunting frequencies from the void",
      distance: "12.8 km",
      liked: false,
    },
    {
      id: "5",
      name: "Digital Uprising",
      frequency: "96.9 FM",
      location: "Data Center Alpha",
      genre: "Breakbeat",
      listeners: 1876,
      signal: "medium",
      status: "live",
      description: "High-energy beats for the digital revolution",
      distance: "8.4 km",
      liked: false,
    },
  ])

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [scanProgress, setScanProgress] = useState(0)
  const [isScanning, setIsScanning] = useState(false)

  const genres = ["all", "synthwave", "ambient", "industrial", "dark ambient", "breakbeat"]

  const getSignalColor = (signal: string) => {
    switch (signal) {
      case "strong":
        return "text-blue-400"
      case "medium":
        return "text-yellow-400"
      case "weak":
        return "text-purple-400"
      default:
        return "text-gray-400"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "scheduled":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "offline":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const toggleLike = (id: string) => {
    setStations((stations) =>
      stations.map((station) => (station.id === id ? { ...station, liked: !station.liked } : station)),
    )
  }

  const startScan = () => {
    setIsScanning(true)
    setScanProgress(0)
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsScanning(false)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }

  const filteredStations = stations.filter((station) => {
    const matchesSearch =
      station.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      station.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      station.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesGenre = selectedGenre === "all" || station.genre.toLowerCase() === selectedGenre
    return matchesSearch && matchesGenre
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-mono font-bold text-blue-400 glow-text">NETWORK DISCOVERY</h1>
          <p className="text-gray-400 font-mono">Underground Station Scanner & Network Map</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Satellite className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-mono">{filteredStations.length} STATIONS</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-mono">NETWORK ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Scanner Controls */}
      <Card className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-blue-400 font-mono flex items-center gap-2">
            <Tower className="w-5 h-5" />
            FREQUENCY SCANNER
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search stations, genres, locations..."
                    className="bg-slate-800/50 border-blue-500/30 text-blue-400 font-mono pl-10"
                  />
                </div>
                <select
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                  className="bg-slate-800/50 border border-blue-500/30 text-blue-400 font-mono px-3 py-2 rounded-md"
                >
                  {genres.map((genre) => (
                    <option key={genre} value={genre} className="bg-slate-800">
                      {genre.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <Button
              onClick={startScan}
              disabled={isScanning}
              className="bg-blue-600 hover:bg-blue-700 text-white font-mono"
            >
              {isScanning ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  SCANNING...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4" />
                  SCAN NETWORK
                </div>
              )}
            </Button>
          </div>

          {isScanning && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-mono">
                <span className="text-gray-400">SCANNING FREQUENCIES</span>
                <span className="text-blue-400">{scanProgress}%</span>
              </div>
              <Progress value={scanProgress} className="h-2 bg-slate-800" />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Station Grid */}
      <div className="grid gap-4">
        {filteredStations.map((station) => (
          <Card key={station.id} className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Radio className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-blue-400 font-mono font-bold text-lg">{station.name}</h3>
                      <Badge className={getStatusColor(station.status)}>{station.status.toUpperCase()}</Badge>
                      <Badge variant="outline" className="text-purple-400 border-purple-500/30">
                        {station.genre.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-gray-400 font-mono text-sm mb-3">{station.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-mono">
                      <div className="flex items-center gap-2">
                        <Signal className={`w-4 h-4 ${getSignalColor(station.signal)}`} />
                        <span className="text-gray-400">FREQ:</span>
                        <span className="text-blue-400">{station.frequency}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">LOC:</span>
                        <span className="text-blue-400">{station.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">LISTENERS:</span>
                        <span className="text-green-400">{station.listeners.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">DIST:</span>
                        <span className="text-yellow-400">{station.distance}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => toggleLike(station.id)}
                    className={`w-10 h-10 p-0 ${
                      station.liked ? "bg-pink-500/20 border-pink-500/30 text-pink-400" : "bg-transparent"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${station.liked ? "fill-current" : ""}`} />
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 font-mono">
                    <Headphones className="w-4 h-4 mr-2" />
                    TUNE IN
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredStations.length === 0 && (
        <Card className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <Radio className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-gray-400 font-mono text-lg mb-2">NO STATIONS FOUND</h3>
            <p className="text-gray-500 font-mono text-sm">
              Try adjusting your search criteria or scan for new frequencies
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
