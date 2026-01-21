"use client"

import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Code,
  Palette,
  Cloud,
  Settings,
  HeadphonesIcon,
  Menu,
  X,
  Zap,
  Target,
  Heart,
  Globe,
  Shield,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import NavBar from "@/components/ui/NavBar"
import Stats from "@/components/ui/Stats"
import Testimonials from "@/components/ui/Testimonials"
import WhyChoose from "@/components/ui/WhyChoose"
import Footer from "@/components/ui/Footer"
import SurFooter from "@/components/ui/SurFooter"
import { useRouter } from "next/navigation"
import QuoteRequestButton from "@/components/ui/QuoteRequestButton"


export default function HomePage() {

  const router = useRouter()

  const handleNavigate = () => {
    router.push("/portfolio")
  }



  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Développement Web & Mobile",
      description: "Applications web responsives et mobiles natives pour tous vos besoins digitaux",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Solutions SaaS",
      description: "Plateformes SaaS scalables et sécurisées pour votre croissance",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & UX/UI",
      description: "Expériences utilisateur exceptionnelles et shooting professionnel",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Solutions Personnalisées",
      description: "Développement sur mesure adapté à vos processus métier",
    },
  ]




  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NavBar />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-15 bg-gradient-to-br from-[#53828a]/5 to-[#b05f76]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#53828a] mb-6">
              Transformez votre vision en
              <span className="bg-gradient-to-r from-[#53828a] to-[#b05f76] bg-clip-text text-transparent">
                {" "}
                solutions digitales
              </span>
            </h1>
            <p className="text-xl text-[#727683] mb-8 max-w-2xl mx-auto">
              NEXOLIA accompagne les entreprises dans leur transformation numérique avec des solutions web, mobile et
              SaaS sur mesure
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

            {/* Stats */}
            <Stats />
          </div>
        </div>
      </section>


      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white px-10">
        <div className="container mx-auto px-0.5">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#53828a]/10 to-[#b05f76]/10 border border-[#53828a]/20 mb-6">
                <Target className="w-4 h-4 text-[#53828a] mr-2" />
                <span className="text-[#53828a] font-semibold text-sm">Notre Mission</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-6">Notre Mission</h2>
              <p className="text-lg text-[#727683] mb-6 leading-relaxed">
                Démocratiser l'innovation digitale en rendant les technologies de pointe accessibles à toutes les
                entreprises, des startups aux grandes corporations.
              </p>
              <p className="text-lg text-[#727683] mb-8 leading-relaxed">
                Nous croyons que chaque entreprise mérite des solutions technologiques exceptionnelles qui l'aident à
                atteindre ses objectifs et à créer de la valeur pour ses clients.
              </p>
              <div className="space-y-4">
                {[
                  { text: "Excellence technique et innovation continue", icon: <Code className="w-4 h-4" /> },
                  { text: "Partenariat à long terme avec nos clients", icon: <Heart className="w-4 h-4" /> },
                  { text: "Impact positif sur les entreprises et la société", icon: <Globe className="w-4 h-4" /> },
                  { text: "Développement durable et responsable", icon: <Shield className="w-4 h-4" /> },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#53828a] to-[#b05f76] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-[#727683] group-hover:text-[#53828a] transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-[#53828a]/5 to-[#b05f76]/5 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-4 w-24 h-24 bg-[#53828a]/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 right-4 w-32 h-32 bg-[#b05f76]/10 rounded-full blur-xl"></div>
                </div>

                <CardContent className="p-8 relative">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] flex items-center justify-center text-white">
                      <Zap className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#53828a]">Notre Vision</h3>
                  </div>
                  <p className="text-[#727683] text-center text-lg leading-relaxed">
                    Devenir le partenaire technologique de référence qui transforme les défis business en opportunités
                    de croissance grâce à l'innovation digitale.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-4">Nos Services d'Excellence</h2>
            <p className="text-xl text-[#727683] max-w-2xl mx-auto">
              Des solutions complètes pour accompagner votre croissance digitale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#53828a] mb-4">{service.title}</h3>
                  <p className="text-[#727683]">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChoose />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <SurFooter />

      {/* Footer */}
      <Footer />
    </div>
  )
}
