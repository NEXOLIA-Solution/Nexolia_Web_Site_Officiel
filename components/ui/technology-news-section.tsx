"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useState } from "react"

interface TechNews {
  id: string
  title: string
  description: string
  image?: string
  tags: string[]
}

const techNews: TechNews[] = [
  {
    id: "1",
    title: "Intelligence Artificielle & Machine Learning",
    description:
      "Nexolia intègre l'IA dernière génération pour optimiser vos processus métier et augmenter votre productivité.",
    image: "/artificial-intelligence-technology.jpg",
    tags: ["IA", "ML", "Innovation"],
  },
  {
    id: "2",
    title: "Cybersécurité Avancée",
    description: "Protection maximale de vos données avec nos solutions de sécurité de pointe.",
    image: "/cybersecurity-protection.jpg",
    tags: ["Sécurité", "Données", "Protection"],
  },
]

export default function TechnologyNewsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="relative pb-6 mb-8">
        <div className="absolute bottom-0 left-0 h-1.5 w-32 bg-gradient-to-r from-[#727683] to-[#53828a] rounded-full"></div>
        <h2 className="text-5xl font-bold text-[#727683] tracking-tight mb-2">TECHNOLOGIE</h2>
        <p className="text-base text-[#916a7c] font-light">Les dernières avancées</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {techNews.map((item, index) => (
          <div
            key={item.id}
            className="group animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Card
              className={`border-0 overflow-hidden shadow-md hover-lift transition-all duration-500 card-premium ${hoveredId === item.id ? "shadow-2xl shadow-[#727683]/20" : ""}`}
            >
              {item.image && (
                <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#727683]/10 to-[#53828a]/10">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#53828a] mb-4 group-hover:text-[#b05f76] transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                <div className="flex flex-wrap gap-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gradient-to-r from-[#727683] to-[#53828a] text-white text-xs px-4 py-2 rounded-full shadow-md hover-scale font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
