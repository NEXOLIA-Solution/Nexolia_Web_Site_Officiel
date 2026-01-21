"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useState } from "react"

interface NewsItem {
  id: string
  title: string
  excerpt: string
  image?: string
  date: string
  category: string
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Nexolia Lance Ses Nouveaux Services Cloud",
    excerpt: "Découvrez notre nouvelle plateforme cloud révolutionnaire conçue pour transformer votre entreprise...",
    image: "https://via.placeholder.com/400x300?text=Cloud+Services", // image publique
    date: "22 Octobre 2025",
    category: "Services",
  },
  {
    id: "2",
    title: "Expansion Internationale de Nexolia",
    excerpt: "Nexolia annonce son expansion dans 5 nouveaux pays avec des partenariats stratégiques...",
    image: "https://via.placeholder.com/400x300?text=International+Expansion", // image publique
    date: "20 Octobre 2025",
    category: "Actualités",
  },
]

export default function NewsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="relative pb-6 mb-8">
        <div className="absolute bottom-0 left-0 h-1.5 w-32 bg-gradient-to-r from-[#b05f76] via-[#916a7c] to-transparent rounded-full"></div>
        <h2 className="text-5xl font-bold text-[#53828a] tracking-tight mb-2">ACTUALITÉS</h2>
        <p className="text-base text-[#727683] font-light">Services & Innovations</p>
      </div>

      {newsItems.map((item, index) => (
        <div
          key={item.id}
          className="group animate-fade-in-up"
          style={{ animationDelay: `${index * 100}ms` }}
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <Card
            className={`overflow-hidden border-0 shadow-md hover-lift transition-all duration-500 card-premium ${hoveredId === item.id ? "shadow-2xl shadow-[#53828a]/20" : ""}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {item.image && (
                <div className="md:col-span-1 relative h-48 md:h-full overflow-hidden bg-gradient-to-br from-[#53828a]/10 to-[#b05f76]/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              )}
              <div className={`${item.image ? "md:col-span-2" : "col-span-1"} p-8 flex flex-col justify-between`}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gradient-to-r from-[#53828a] to-[#727683] text-white text-xs font-bold px-4 py-2 rounded-full shadow-md hover-scale">
                      {item.category}
                    </span>
                    <span className="text-xs text-[#727683] font-light">{item.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#53828a] mb-4 group-hover:text-[#b05f76] transition-colors duration-300 line-clamp-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">{item.excerpt}</p>
                </div>
                <button className="mt-6 inline-flex items-center gap-2 text-[#53828a] font-semibold text-sm hover:text-[#b05f76] transition-all duration-300 group/btn">
                  Lire plus
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-2">→</span>
                </button>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}
