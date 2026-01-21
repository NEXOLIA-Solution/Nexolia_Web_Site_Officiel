"use client"
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Award,
  Target,
  Users,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Zap,
  Building2,
  Code,
  Rocket,
  TrendingUp,
  Heart,
  Lightbulb,
  Eye,

} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Footer from "@/components/ui/Footer"
import NavBar from "@/components/ui/NavBar"
import PostWork from "@/components/ui/PostWork"
import Certifications from "@/components/ui/Certifications"
import Timeline from "@/components/ui/Timeline"
import Values from "@/components/ui/Values"
import Team from "@/components/ui/Team"
import SurFooter from "@/components/ui/SurFooter"
import { useRouter } from "next/navigation"
import QuoteRequestButton from "@/components/ui/QuoteRequestButton"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const router = useRouter()

  const handleNavigate = () => {
    router.push("/portfolio")
  }



  const team = [
    {
      name: "Alexandre Dubois",
      role: "CEO & Co-Fondateur",
      bio: "15+ années d'expérience en transformation digitale. Ancien consultant chez McKinsey Digital avec une passion pour l'innovation.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["Strategy", "Leadership", "Digital Transformation"],
      linkedin: "#",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      name: "Sarah Ben Ahmed",
      role: "CTO & Co-Fondatrice",
      bio: "Architecte logiciel passionnée, experte en solutions cloud et intelligence artificielle avec 12+ ans d'expérience.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["Cloud Architecture", "AI/ML", "DevOps"],
      linkedin: "#",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      name: "Marc Leroy",
      role: "Head of Engineering",
      bio: "Lead développeur full-stack avec 12+ ans d'expérience en développement d'applications complexes et scalables.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["Full-Stack", "Microservices", "Team Leadership"],
      linkedin: "#",
      gradient: "from-green-500 to-teal-600",
    },
    {
      name: "Amina Kassem",
      role: "Head of Design",
      bio: "Designer UX/UI primée, spécialisée dans la création d'expériences utilisateur exceptionnelles et innovantes.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["UX/UI Design", "Design Systems", "User Research"],
      linkedin: "#",
      gradient: "from-pink-500 to-red-600",
    },
    {
      name: "Thomas Martin",
      role: "Head of Sales",
      bio: "Expert en développement commercial B2B avec un track record de croissance exceptionnelle et 10+ ans d'expérience.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["Business Development", "Client Relations", "Growth Strategy"],
      linkedin: "#",
      gradient: "from-orange-500 to-yellow-600",
    },
    {
      name: "Fatima El Mansouri",
      role: "Head of Operations",
      bio: "Spécialiste en gestion de projet agile et optimisation des processus opérationnels avec une approche data-driven.",
      image: "/placeholder.svg?height=300&width=300",
      expertise: ["Project Management", "Agile", "Operations"],
      linkedin: "#",
      gradient: "from-cyan-500 to-blue-600",
    },
  ]




  const stats = [
    { number: "8+", label: "Projets Livrés", icon: <Rocket className="w-6 h-6" /> },
    { number: "10+", label: "Experts", icon: <Users className="w-6 h-6" /> },
    { number: "2+", label: "Solution SAAS", icon: <Globe className="w-6 h-6" /> },
    { number: "98%", label: "Satisfaction Client", icon: <Star className="w-6 h-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#53828a]/5 to-[#b05f76]/5 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#53828a]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b05f76]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#53828a]/5 to-[#b05f76]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] border-0 mb-6">
              <Award className="w-4 h-4 text-white mr-2" />
              <span className="text-white font-semibold ">Equipe d'excellence</span>
            </div>


            <h1 className="text-4xl lg:text-7xl font-bold text-[#53828a] mb-6">
              À Propos de
              <span className="bg-gradient-to-r from-[#53828a] via-[#b05f76] to-[#53828a] bg-clip-text text-transparent block">
                NEXOLIA
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-[#727683] mb-8 max-w-3xl mx-auto leading-relaxed">
              Depuis 2016, nous transformons les idées en{" "}
              <span className="font-semibold text-[#53828a]">solutions digitales exceptionnelles</span> qui propulsent
              les entreprises vers le succès
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={handleNavigate}
                className="bg-gradient-to-r from-[#53828a] to-[#b05f76] hover:from-[#53828a]/90 hover:to-[#b05f76]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Eye className="mr-2 w-5 h-5" />
                Explorer Nos Projets
              </Button>

              <QuoteRequestButton />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-2">{stat.number}</div>
                <div className="text-[#727683] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Timeline */}
      <Timeline />

      {/* Values */}
      <Values />

      {/* Team */}
      <Team />

      {/* Certifications */}
      <Certifications />

      {/* Culture & Benefits */}
      <PostWork />


      {/* CTA Section */}
      <SurFooter />

      {/* Footer */}
      <Footer />
    </div>
  )
}
