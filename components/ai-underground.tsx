"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  Zap,
  Mic,
  Music,
  MessageSquare,
  TrendingUp,
  Eye,
  Shield,
  Cpu,
  Activity,
  Radio,
  AudioWaveform as Waveform,
  Terminal,
  Scissors,
  Flame,
  BarChart3,
} from "lucide-react"

interface AIFeature {
  id: string
  name: string
  status: "active" | "inactive" | "processing"
  description: string
  usage: number
  icon: React.ReactNode
}

export function AIUnderground() {
  const [aiFeatures, setAIFeatures] = useState<AIFeature[]>([
    {
      id: "voice-enhance",
      name: "Voice Enhancement",
      status: "active",
      description: "Real-time audio processing and noise reduction",
      usage: 78,
      icon: <Mic className="w-5 h-5" />,
    },
    {
      id: "music-gen",
      name: "Beat Generator",
      status: "inactive",
      description: "AI-powered underground beats and transitions",
      usage: 0,
      icon: <Music className="w-5 h-5" />,
    },
    {
      id: "chat-mod",
      name: "Chat Moderation",
      status: "active",
      description: "Intelligent content filtering and spam detection",
      usage: 45,
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      id: "trend-analysis",
      name: "Trend Scanner",
      status: "processing",
      description: "Underground music trend analysis and predictions",
      usage: 92,
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      id: "content-vision",
      name: "Content Vision",
      status: "active",
      description: "Visual content analysis and auto-tagging",
      usage: 34,
      icon: <Eye className="w-5 h-5" />,
    },
    {
      id: "security-ai",
      name: "Security Protocol",
      status: "active",
      description: "AI-powered threat detection and privacy protection",
      usage: 67,
      icon: <Shield className="w-5 h-5" />,
    },
  ])

  const [aiPrompt, setAiPrompt] = useState("")
  const [aiResponse, setAiResponse] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [transcription, setTranscription] = useState("")
  const [isTranscribing, setIsTranscribing] = useState(false)
  const [viralClips, setViralClips] = useState([
    { id: 1, timestamp: "02:34", content: "That underground beat drop", viralScore: 87, signal: 92 },
    { id: 2, timestamp: "15:22", content: "Raw authentic storytelling", viralScore: 94, signal: 88 },
    { id: 3, timestamp: "28:45", content: "Unexpected guest appearance", viralScore: 76, signal: 95 },
  ])
  const [contentSuggestions] = useState([
    { title: "UNDERGROUND MANIFESTO", type: "Editorial", urgency: "HIGH" },
    { title: "Pirate Radio History", type: "Feature", urgency: "MED" },
    { title: "DIY Equipment Guide", type: "Tutorial", urgency: "LOW" },
    { title: "Artist Spotlight", type: "Interview", urgency: "HIGH" },
  ])

  useEffect(() => {
    if (isTranscribing) {
      const interval = setInterval(() => {
        const phrases = [
          "Welcome to the underground...",
          "This is where authentic voices rise...",
          "Breaking through the static...",
          "Raw, unfiltered truth...",
          "The revolution will be broadcasted...",
        ]
        setTranscription((prev) => prev + phrases[Math.floor(Math.random() * phrases.length)] + " ")
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isTranscribing])

  const toggleFeature = (id: string) => {
    setAIFeatures((features) =>
      features.map((feature) =>
        feature.id === id ? { ...feature, status: feature.status === "active" ? "inactive" : "active" } : feature,
      ),
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "processing":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "inactive":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const handleAIQuery = async () => {
    if (!aiPrompt.trim()) return

    setIsProcessing(true)
    // Simulate AI processing
    setTimeout(() => {
      setAiResponse(
        `[AI UNDERGROUND RESPONSE]\n\nAnalyzing: "${aiPrompt}"\n\nBased on underground radio patterns and current trends, I recommend:\n\n• Increase bass frequencies by 15% for that raw underground feel\n• Add subtle vinyl crackle at 0.3% intensity\n• Consider transitioning to breakbeat patterns around 2:30\n• Current vibe matches 90s pirate radio aesthetic\n\nSignal strength: MAXIMUM\nUnderground credibility: AUTHENTIC`,
      )
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-mono font-bold text-blue-400 glow-text">AI UNDERGROUND</h1>
          <p className="text-gray-400 font-mono">Artificial Intelligence for Authentic Broadcasting</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-mono">NEURAL ACTIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-mono">PROCESSING</span>
          </div>
        </div>
      </div>

      {/* AI Command Center */}
      <Card className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-blue-400 font-mono flex items-center gap-2">
            <Cpu className="w-5 h-5" />
            AI COMMAND CENTER
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-gray-400 font-mono">NEURAL QUERY INPUT</label>
            <Textarea
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="Ask the AI Underground anything about your broadcast..."
              className="bg-slate-800/50 border-blue-500/30 text-blue-400 font-mono min-h-[100px] resize-none"
            />
          </div>
          <Button
            onClick={handleAIQuery}
            disabled={isProcessing || !aiPrompt.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-mono w-full"
          >
            {isProcessing ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                PROCESSING...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                QUERY AI UNDERGROUND
              </div>
            )}
          </Button>

          {aiResponse && (
            <div className="mt-4 p-4 bg-slate-800/50 border border-blue-500/30 rounded-lg">
              <pre className="text-blue-400 font-mono text-sm whitespace-pre-wrap">{aiResponse}</pre>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Real-time Transcription Window */}
      <Card className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-blue-400 font-mono flex items-center gap-2">
            <Terminal className="w-5 h-5" />
            REAL-TIME TRANSCRIPTION
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isTranscribing ? "bg-blue-400 animate-pulse" : "bg-gray-500"}`} />
              <span className="text-gray-400 font-mono text-sm">{isTranscribing ? "TRANSCRIBING..." : "STANDBY"}</span>
            </div>
            <Button
              onClick={() => {
                setIsTranscribing(!isTranscribing)
                if (!isTranscribing) setTranscription("")
              }}
              variant="outline"
              size="sm"
              className="border-blue-500/30 text-blue-400 hover:bg-blue-500/20 font-mono"
            >
              {isTranscribing ? "STOP" : "START"}
            </Button>
          </div>
          <div className="bg-black/50 border border-blue-500/30 rounded-lg p-4 min-h-[120px] font-mono text-sm">
            <div className="text-blue-400 mb-2">$ pirate-radio-transcribe --live --underground</div>
            <div className="text-green-400">
              {transcription || "Waiting for audio input..."}
              {isTranscribing && <span className="animate-pulse">█</span>}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Content Suggestions as Underground Zine Layouts */}
      <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-purple-400 font-mono flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            UNDERGROUND ZINE SUGGESTIONS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contentSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="bg-black/30 border border-purple-500/30 p-4 rounded-lg transform rotate-1 hover:rotate-0 transition-transform"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-purple-400 font-mono font-bold text-sm uppercase tracking-wider">
                    {suggestion.title}
                  </h3>
                  <Badge
                    className={`text-xs font-mono ${
                      suggestion.urgency === "HIGH"
                        ? "bg-pink-500/20 text-pink-400 border-pink-500/30"
                        : suggestion.urgency === "MED"
                          ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                          : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                    }`}
                  >
                    {suggestion.urgency}
                  </Badge>
                </div>
                <div className="text-gray-400 font-mono text-xs mb-3">{suggestion.type}</div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 bg-purple-500/30 rounded-full">
                    <div className="h-full bg-purple-400 rounded-full" style={{ width: `${Math.random() * 100}%` }} />
                  </div>
                  <span className="text-purple-400 font-mono text-xs">READY</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Viral Clip Detector */}
      <Card className="bg-slate-900/50 border-pink-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-pink-400 font-mono flex items-center gap-2">
            <Flame className="w-5 h-5" />
            VIRAL CLIP DETECTOR
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-pink-400">3</div>
              <div className="text-xs text-gray-400 font-mono">CLIPS DETECTED</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-yellow-400">94%</div>
              <div className="text-xs text-gray-400 font-mono">AVG VIRAL SCORE</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-mono font-bold text-blue-400">LIVE</div>
              <div className="text-xs text-gray-400 font-mono">SCANNING</div>
            </div>
          </div>

          <div className="space-y-3">
            {viralClips.map((clip) => (
              <div key={clip.id} className="bg-black/30 border border-pink-500/30 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Scissors className="w-4 h-4 text-pink-400" />
                    <span className="text-pink-400 font-mono text-sm font-bold">{clip.timestamp}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400 font-mono text-sm">{clip.viralScore}%</span>
                  </div>
                </div>
                <p className="text-gray-300 font-mono text-sm mb-3">{clip.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 font-mono text-xs">SIGNAL STRENGTH</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1 h-4 rounded-full ${
                            i < Math.floor(clip.signal / 20) ? "bg-pink-400" : "bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-pink-400 font-mono text-xs">{clip.signal}%</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-pink-500/30 text-pink-400 hover:bg-pink-500/20 font-mono text-xs bg-transparent"
                  >
                    EXTRACT
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {aiFeatures.map((feature) => (
          <Card key={feature.id} className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-600/20 rounded-lg text-blue-400">{feature.icon}</div>
                  <div>
                    <h3 className="text-blue-400 font-mono font-bold text-sm">{feature.name}</h3>
                    <Badge className={`${getStatusColor(feature.status)} text-xs mt-1`}>
                      {feature.status.toUpperCase()}
                    </Badge>
                  </div>
                </div>
                <Switch
                  checked={feature.status === "active"}
                  onCheckedChange={() => toggleFeature(feature.id)}
                  disabled={feature.status === "processing"}
                />
              </div>

              <p className="text-gray-400 text-xs font-mono mb-4">{feature.description}</p>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-gray-400">USAGE</span>
                  <span className="text-blue-400">{feature.usage}%</span>
                </div>
                <Progress value={feature.usage} className="h-2 bg-slate-800" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-blue-400 font-mono flex items-center gap-2">
              <Radio className="w-5 h-5" />
              NEURAL PERFORMANCE
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-blue-400">98.7%</div>
                <div className="text-xs text-gray-400 font-mono">ACCURACY</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-blue-400">2.3ms</div>
                <div className="text-xs text-gray-400 font-mono">LATENCY</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-purple-400">847</div>
                <div className="text-xs text-gray-400 font-mono">QUERIES/HR</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono font-bold text-yellow-400">94%</div>
                <div className="text-xs text-gray-400 font-mono">UPTIME</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-blue-400 font-mono flex items-center gap-2">
              <Waveform className="w-5 h-5" />
              SIGNAL ANALYSIS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-mono text-sm">AUDIO QUALITY</span>
                <span className="text-green-400 font-mono text-sm">EXCELLENT</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-mono text-sm">NOISE REDUCTION</span>
                <span className="text-blue-400 font-mono text-sm">-42dB</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-mono text-sm">ENHANCEMENT</span>
                <span className="text-purple-400 font-mono text-sm">ACTIVE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 font-mono text-sm">UNDERGROUND VIBE</span>
                <span className="text-yellow-400 font-mono text-sm">MAXIMUM</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
