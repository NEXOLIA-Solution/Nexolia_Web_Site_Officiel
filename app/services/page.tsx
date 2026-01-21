"use client"

import {
  ArrowRight,
  Code,
  Cloud,
  Palette,
  Settings,
  HeadphonesIcon,
  Zap,
  Menu,
  X,
  CheckCircle,
  Star,
  Users,
  Award,
  Sparkles,
  Cpu
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Footer from "@/components/ui/Footer"
import NavBar from "@/components/ui/NavBar"
import Approche from "@/components/ui/Approche"
import Process from "@/components/ui/Process"
import SurFooter from "@/components/ui/SurFooter"
import ServiceGrid from "@/components/ui/ServiceGrid"
import QuoteRequestButton from "@/components/ui/QuoteRequestButton"
import { useRouter } from "next/navigation"




export default function ServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const handleNavigate = () => {
    router.push("/portfolio")
  }

const mainServices = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Développement Web & Mobile",
    description: "Solutions digitales complètes pour web et mobile avec SEO optimale",
    features: [
      "Applications web responsives (React, Vue.js, Angular)",
      "Applications mobiles natives (iOS/Android)",
      "Progressive Web Apps (PWA)",
      "E-commerce & marketplaces",
      "Portails d'entreprise",
    ],
    technologies: [
      "React",
      "Vue.js",
      "React Native",
      "Flutter",
      "Next.js",
      "Android",
      "SQL",
      "MongoDB",
      "JAVA-ee",
      "Microsoft 365 et Power Platforme",
      "Sharepoint-SPFX",
      "Dataverse",
      "Sharepoint-Listes"
    ],
    gradient: "from-blue-500 to-cyan-500",
    popular: true,
    images: [
      "/mobile/m7.jpg",
      "/mobile/m3.jpg",
      "/mobile/m5.jpg",
      "/web/w1.webp",
      "/web/w2.webp",
      "/web/w3.webp"
    ],
  },
   {
    icon: <Cpu className="w-8 h-8" />,
    title: "Solutions Microsoft 365 & Power Platform",
    description: "Mise en place et développement d’écosystèmes Microsoft intelligents pour PME & PMI",
    features: [
      "Installation et configuration complète de l’écosystème Microsoft 365",
      "Développement de solutions personnalisées avec SharePoint et SPFx",
      "Automatisation des procédures avec Power Automate et Power Virtual Agent",
      "Création d’applications métiers collaboratives avec Power Apps",
      "Centralisation et modélisation des données via Dataverse",
      "Intégration entre Microsoft Teams, SharePoint et Power BI",
      "Support, maintenance et évolution continue de vos solutions Microsoft",
    ],
    technologies: [
      "Microsoft 365",
      "SharePoint Online",
      "SPFx (SharePoint Framework)",
      "Power Apps",
      "Power Automate",
      "Power Virtual Agent",
      "Dataverse",
      "Power BI",
      "Azure Active Directory",
      "Teams Integration"
    ],
    gradient: "from-blue-700 to-sky-500",
    popular: true,
    images: [
      "/microsoft/m1.webp",
      "/microsoft/m2.webp",
      "/microsoft/m3.webp",
      "/microsoft/m4.webp",
      "/microsoft/m5.webp",
    ],
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Solutions SaaS",
    description: "Plateformes SaaS scalables et sécurisées pour votre croissance",
    features: [
      "Architecture cloud-native",
      "Multi-tenant & scalabilité",
      "APIs & intégrations",
      "Tableaux de bord analytics",
      "Systèmes de facturation",
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "GraphQL"],
    gradient: "from-purple-500 to-pink-500",
    popular: false,
    images: [
      "/saas/saas.webp",
      "/saas/saas1.webp",
      "/saas/saas2.webp",
      "/saas/saas3.webp",
      "/saas/saas4.webp",
    ],
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design & Expérience",
    description: "Design exceptionnel et contenu visuel professionnel qui convertit",
    features: [
      "UX/UI Design & prototypage",
      "Design systems & guidelines",
      "Shooting photo professionnel",
      "Production vidéo & animation",
      "Identité visuelle digitale",
    ],
    technologies: ["Figma", "Adobe Suite", "Sketch", "Principle", "After Effects"],
    gradient: "from-orange-500 to-red-500",
    popular: false,
    images: [
      "/designe/d1.webp",
      "/designe/d2.webp",
      "/designe/d3.webp",
      "/designe/d6.jpg",
      "/designe/d5.webp"
    ],
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Solutions Personnalisées",
    description: "Développement sur mesure pour vos besoins spécifiques et uniques",
    features: [
      "CRM & ERP sur mesure",
      "Automatisation de processus",
      "Intégrations système complexes",
      "Migration de données",
      "Workflow personnalisés",
    ],
    technologies: [
      "Python",
      "Javascript",
      "Java",
      "C#",
      "Power BI",
      "Power Apps",
      "Power Automate",
      "Power Virtual Agent"
    ],
    gradient: "from-green-500 to-teal-500",
    popular: false,
    images: [
      "/solutionPerso/s1.jpg",
      "/solutionPerso/s2.png",
      "/solutionPerso/s3.jpg",
      "/solutionPerso/s5.jpg",
      "/solutionPerso/s6.png",
      "/solutionPerso/s.png",
    ],
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8" />,
    title: "Maintenance & Support",
    description: "Support technique et évolution continue pour votre tranquillité d'esprit",
    features: [
      "Support technique 24/7",
      "Monitoring proactif",
      "Mises à jour sécuritaires",
      "Optimisation performances",
      "Évolutions fonctionnelles",
    ],
    technologies: ["Monitoring", "DevOps", "CI/CD", "Testing", "Security"],
    gradient: "from-indigo-500 to-purple-500",
    popular: false,
    images: [
      "/support/s1.webp",
      "/support/s2.jpg",
      "/support/s3.webp",
      "/support/s5.webp"
    ],
  },
 
];


  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "200+", label: "Clients Satisfaits" },
    { icon: <Award className="w-6 h-6" />, value: "500+", label: "Projets Réalisés" },
    { icon: <Star className="w-6 h-6" />, value: "98%", label: "Taux de Satisfaction" },
    { icon: <Sparkles className="w-6 h-6" />, value: "5+", label: "Années d'Expérience" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#53828a]/5 via-white to-[#b05f76]/5 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-[#53828a]/10 to-[#b05f76]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-[#b05f76]/10 to-[#53828a]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] border-0 mb-6">
              <Cpu className="w-4 h-4 text-white mr-2" />
              <span className="text-white font-semibold">Services</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#53828a] to-[#b05f76] bg-clip-text text-transparent">
                Services Digitaux
              </span>
              <br />
              <span className="text-gray-900">de Nouvelle Génération</span>
            </h1>
            <p className="text-xl text-[#727683] mb-10 max-w-3xl mx-auto leading-relaxed">
              Des solutions complètes et innovantes pour accompagner votre transformation numérique. Nous combinons
              expertise technique, créativité et vision stratégique pour propulser votre entreprise vers le succès.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={handleNavigate}
                className="bg-gradient-to-r from-[#53828a] to-[#b05f76] hover:from-[#53828a]/90 hover:to-[#b05f76]/90 text-white transition-all duration-300 hover:scale-105"
              >
                Nos Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <QuoteRequestButton />
            </div>
          </div>
        </div>
      </section>


      <Approche />




      {/* Services Grid */}
      <ServiceGrid services={mainServices} />


      {/* Process Section */}
      <Process />

      {/* CTA Section */}
      <SurFooter />

      {/* Footer */}
      <Footer />
    </div>
  )
}
