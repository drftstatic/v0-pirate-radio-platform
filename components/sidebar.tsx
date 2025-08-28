"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Radio, Users, Bot, MessageSquare, Radar, BarChart3, Settings, HelpCircle } from "lucide-react"

const navItems = [
  { icon: Radio, label: "MISSION CONTROL", href: "/" },
  { icon: Users, label: "GREEN ROOM", href: "/green-room" },
  { icon: Bot, label: "AI UNDERGROUND", href: "/ai-underground" },
  { icon: MessageSquare, label: "THE FREQUENCY", href: "/frequency" },
  { icon: Radar, label: "NETWORK DISCOVERY", href: "/network" },
  { icon: BarChart3, label: "SIGNAL ANALYSIS", href: "/analytics" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r border-blue-400/30 bg-black/50 backdrop-blur-sm">
      <div className="p-4">
        <nav className="space-y-2">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={index}
                href={item.href}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all ${
                  isActive
                    ? "bg-blue-400/20 border-l-4 border-blue-400 text-blue-400"
                    : "text-gray-400 hover:text-blue-400 hover:bg-blue-400/10"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-sm font-medium tracking-wide">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="mt-8 pt-8 border-t border-blue-400/30">
          <div className="space-y-2">
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all">
              <Settings className="h-5 w-5" />
              <span className="text-sm font-medium tracking-wide">ENGINEERING</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 text-left text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all">
              <HelpCircle className="h-5 w-5" />
              <span className="text-sm font-medium tracking-wide">BROADCAST MANUAL</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
