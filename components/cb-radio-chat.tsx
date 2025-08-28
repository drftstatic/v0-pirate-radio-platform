"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Radio, Mic, MicOff, Pause, Play, Shield, AlertTriangle, MessageSquare, Users, Pin } from "lucide-react"

interface ChatMessage {
  id: string
  callSign: string
  message: string
  timestamp: string
  channel: string
  signalStrength: number
  isModerated?: boolean
}

interface BulletinPost {
  id: string
  title: string
  content: string
  author: string
  timestamp: string
  category: "announcement" | "event" | "trade" | "general"
  pinned: boolean
}

export function CBRadioChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      callSign: "SHADOW-7",
      message: "Breaker breaker, this is Shadow-7 coming to you live from the underground. Anyone copy?",
      timestamp: "14:23:45",
      channel: "19",
      signalStrength: 85,
    },
    {
      id: "2",
      callSign: "NEON-RIDER",
      message: "10-4 Shadow-7, Neon-Rider here. Signal coming in crystal clear. What's your 20?",
      timestamp: "14:24:12",
      channel: "19",
      signalStrength: 92,
    },
    {
      id: "3",
      callSign: "FREQUENCY-1",
      message:
        "This is Frequency-1 monitoring. All stations be advised - new underground track dropping at 1500 hours.",
      timestamp: "14:25:03",
      channel: "19",
      signalStrength: 78,
    },
  ])

  const [bulletinPosts, setBulletinPosts] = useState<BulletinPost[]>([
    {
      id: "1",
      title: "UNDERGROUND MUSIC FESTIVAL - NEXT WEEK",
      content: "Secret location will be broadcast on frequency 88.7 at midnight. Bring your own equipment.",
      author: "REBEL-COMMAND",
      timestamp: "2 hours ago",
      category: "event",
      pinned: true,
    },
    {
      id: "2",
      title: "TRADING: Vintage Radio Equipment",
      content: "Looking to trade my 1970s CB radio for modern streaming gear. Contact ANALOG-PROPHET on channel 12.",
      author: "ANALOG-PROPHET",
      timestamp: "4 hours ago",
      category: "trade",
      pinned: false,
    },
    {
      id: "3",
      title: "NEW PIRATE STATION DISCOVERED",
      content: "Found a new underground station broadcasting on 107.3 FM. Playing some serious underground beats.",
      author: "SIGNAL-HUNTER",
      timestamp: "6 hours ago",
      category: "announcement",
      pinned: false,
    },
  ])

  const [currentMessage, setCurrentMessage] = useState("")
  const [callSign, setCallSign] = useState("REBEL-1")
  const [currentChannel, setCurrentChannel] = useState("19")
  const [isMicOpen, setIsMicOpen] = useState(false)
  const [isDelayActive, setIsDelayActive] = useState(false)
  const [delayTime, setDelayTime] = useState(7)
  const [newBulletinTitle, setNewBulletinTitle] = useState("")
  const [newBulletinContent, setNewBulletinContent] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<BulletinPost["category"]>("general")

  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = () => {
    if (!currentMessage.trim()) return

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      callSign,
      message: currentMessage,
      timestamp: new Date().toLocaleTimeString("en-US", { hour12: false }),
      channel: currentChannel,
      signalStrength: Math.floor(Math.random() * 30) + 70,
    }

    if (isDelayActive) {
      setTimeout(() => {
        setMessages((prev) => [...prev, newMessage])
      }, delayTime * 1000)
    } else {
      setMessages((prev) => [...prev, newMessage])
    }

    setCurrentMessage("")
  }

  const moderateMessage = (messageId: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId ? { ...msg, isModerated: true, message: "[MESSAGE MODERATED BY BROADCAST CONTROL]" } : msg,
      ),
    )
  }

  const addBulletinPost = () => {
    if (!newBulletinTitle.trim() || !newBulletinContent.trim()) return

    const newPost: BulletinPost = {
      id: Date.now().toString(),
      title: newBulletinTitle,
      content: newBulletinContent,
      author: callSign,
      timestamp: "just now",
      category: selectedCategory,
      pinned: false,
    }

    setBulletinPosts((prev) => [newPost, ...prev])
    setNewBulletinTitle("")
    setNewBulletinContent("")
  }

  const togglePin = (postId: string) => {
    setBulletinPosts((prev) => prev.map((post) => (post.id === postId ? { ...post, pinned: !post.pinned } : post)))
  }

  const getSignalBars = (strength: number) => {
    const bars = Math.ceil(strength / 20)
    return [...Array(5)].map((_, i) => (
      <div key={i} className={`w-1 h-3 rounded-full ${i < bars ? "bg-blue-400" : "bg-gray-600"}`} />
    ))
  }

  const getCategoryColor = (category: BulletinPost["category"]) => {
    switch (category) {
      case "announcement":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "event":
        return "bg-pink-500/20 text-pink-400 border-pink-500/30"
      case "trade":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      default:
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-mono font-bold text-blue-400 glow-text">THE FREQUENCY</h1>
          <p className="text-gray-400 font-mono">CB Radio Traffic & Underground Bulletin Board</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-mono">CH {currentChannel}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-mono">{messages.length} TRANSMISSIONS</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* CB Radio Chat */}
        <div className="lg:col-span-2 space-y-4">
          {/* Broadcast Delay Controls */}
          <Card className="bg-slate-900/50 border-purple-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-purple-400 font-mono flex items-center gap-2">
                <Shield className="w-5 h-5" />
                BROADCAST DELAY SYSTEM
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button
                    onClick={() => setIsDelayActive(!isDelayActive)}
                    className={`font-mono ${
                      isDelayActive
                        ? "bg-purple-600 hover:bg-purple-700 text-white"
                        : "bg-gray-600 hover:bg-gray-700 text-gray-300"
                    }`}
                  >
                    {isDelayActive ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                    {isDelayActive ? "DELAY ACTIVE" : "DELAY OFF"}
                  </Button>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 font-mono text-sm">DELAY TIME:</span>
                    <select
                      value={delayTime}
                      onChange={(e) => setDelayTime(Number(e.target.value))}
                      className="bg-slate-800/50 border border-purple-500/30 text-purple-400 font-mono px-2 py-1 rounded text-sm"
                    >
                      <option value={3}>3s</option>
                      <option value={5}>5s</option>
                      <option value={7}>7s</option>
                      <option value={10}>10s</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {isDelayActive && (
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                      <span className="text-purple-400 font-mono text-sm">BUFFERING</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Chat Messages */}
          <Card className="bg-slate-900/50 border-blue-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-blue-400 font-mono flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                CB RADIO TRAFFIC - CHANNEL {currentChannel}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-black/50 border border-blue-500/30 rounded-lg p-4 h-96 overflow-y-auto font-mono text-sm">
                {messages.map((message) => (
                  <div key={message.id} className="mb-4 last:mb-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-400 font-bold">{message.callSign}</span>
                        <span className="text-gray-500 text-xs">{message.timestamp}</span>
                        <div className="flex gap-1">{getSignalBars(message.signalStrength)}</div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => moderateMessage(message.id)}
                        className="w-6 h-6 p-0 bg-transparent border-purple-500/30 text-purple-400 hover:bg-purple-500/20"
                      >
                        <Shield className="w-3 h-3" />
                      </Button>
                    </div>
                    <div className={`text-blue-400 ${message.isModerated ? "text-purple-400 italic" : ""}`}>
                      {message.isModerated && <AlertTriangle className="w-4 h-4 inline mr-1" />}
                      {message.message}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="mt-4 space-y-3">
                <div className="flex gap-2">
                  <Input
                    value={callSign}
                    onChange={(e) => setCallSign(e.target.value)}
                    placeholder="Call Sign"
                    className="bg-slate-800/50 border-blue-500/30 text-blue-400 font-mono w-32"
                  />
                  <select
                    value={currentChannel}
                    onChange={(e) => setCurrentChannel(e.target.value)}
                    className="bg-slate-800/50 border border-blue-500/30 text-blue-400 font-mono px-3 py-2 rounded-md w-20"
                  >
                    {[...Array(40)].map((_, i) => (
                      <option key={i + 1} value={i + 1} className="bg-slate-800">
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-2">
                  <Input
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="10-4, this is your message, over..."
                    className="bg-slate-800/50 border-blue-500/30 text-blue-400 font-mono flex-1"
                  />
                  <Button
                    onClick={() => setIsMicOpen(!isMicOpen)}
                    className={`w-12 h-10 p-0 ${
                      isMicOpen
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-600 hover:bg-gray-700 text-gray-300"
                    }`}
                  >
                    {isMicOpen ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                  </Button>
                  <Button
                    onClick={sendMessage}
                    disabled={!currentMessage.trim()}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-mono"
                  >
                    TRANSMIT
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Underground Bulletin Board */}
        <div className="space-y-4">
          <Card className="bg-slate-900/50 border-yellow-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-yellow-400 font-mono flex items-center gap-2">
                <Pin className="w-5 h-5" />
                UNDERGROUND BULLETIN
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* New Post Form */}
              <div className="space-y-3 p-3 bg-black/30 border border-yellow-500/30 rounded">
                <Input
                  value={newBulletinTitle}
                  onChange={(e) => setNewBulletinTitle(e.target.value)}
                  placeholder="Post title..."
                  className="bg-slate-800/50 border-yellow-500/30 text-yellow-400 font-mono text-sm"
                />
                <Textarea
                  value={newBulletinContent}
                  onChange={(e) => setNewBulletinContent(e.target.value)}
                  placeholder="Your message to the underground..."
                  className="bg-slate-800/50 border-yellow-500/30 text-yellow-400 font-mono text-sm min-h-[80px] resize-none"
                />
                <div className="flex gap-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value as BulletinPost["category"])}
                    className="bg-slate-800/50 border border-yellow-500/30 text-yellow-400 font-mono px-2 py-1 rounded text-sm flex-1"
                  >
                    <option value="general">GENERAL</option>
                    <option value="announcement">ANNOUNCEMENT</option>
                    <option value="event">EVENT</option>
                    <option value="trade">TRADE</option>
                  </select>
                  <Button
                    onClick={addBulletinPost}
                    disabled={!newBulletinTitle.trim() || !newBulletinContent.trim()}
                    size="sm"
                    className="bg-yellow-600 hover:bg-yellow-700 text-black font-mono"
                  >
                    POST
                  </Button>
                </div>
              </div>

              {/* Bulletin Posts */}
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {bulletinPosts
                  .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0))
                  .map((post) => (
                    <div
                      key={post.id}
                      className={`p-3 rounded border ${
                        post.pinned ? "bg-yellow-500/10 border-yellow-500/30" : "bg-black/30 border-gray-500/30"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {post.pinned && <Pin className="w-3 h-3 text-yellow-400" />}
                          <Badge className={getCategoryColor(post.category)} variant="outline">
                            {post.category.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => togglePin(post.id)}
                            className="w-6 h-6 p-0 bg-transparent border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/20"
                          >
                            <Pin className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                      <h4 className="text-yellow-400 font-mono font-bold text-sm mb-1">{post.title}</h4>
                      <p className="text-gray-300 font-mono text-xs mb-2 leading-relaxed">{post.content}</p>
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-blue-400">{post.author}</span>
                        <span className="text-gray-500">{post.timestamp}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
