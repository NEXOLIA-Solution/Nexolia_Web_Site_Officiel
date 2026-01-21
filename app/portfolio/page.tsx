"use client"

import { useState } from "react"
import {
  ArrowRight,
  ExternalLink,
  Play,
  Star,
  Users,
  Zap,
  Target,
  Eye,
  Code,
  Rocket,
  Folder,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Footer from "@/components/ui/Footer"
import NavBar from "@/components/ui/NavBar"
import Process from "@/components/ui/Process"
import SurFooter from "@/components/ui/SurFooter"
import QuoteRequestButton from "@/components/ui/QuoteRequestButton"
import { useRouter } from "next/navigation"
import PortfolioContent from "@/components/ui/PortfolioContent"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const router = useRouter()

  const handleNavigate = () => {
    router.push("/portfolio")
  }

  const filters = [
    { id: "all", label: "Tous les Projets", icon: <Target className="w-4 h-4" /> },
    { id: "web", label: "Applications Web", icon: <Code className="w-4 h-4" /> },
    { id: "mobile", label: "Apps Mobile", icon: <Zap className="w-4 h-4" /> },
    { id: "saas", label: "Solutions SaaS", icon: <Rocket className="w-4 h-4" /> },
    { id: "ecommerce", label: "E-commerce", icon: <ExternalLink className="w-4 h-4" /> },
    { id: "enterprise", label: "Enterprise", icon: <Users className="w-4 h-4" /> },
  ]

  // data/projects.ts
   interface Project {
    id: string;
    title: string;
    category: string;
    client: string;
    description: string;
    image: string;
    popular?: boolean;
    gradient: string;
    features: string[];
    technologies: string[];
    results: {
      metric1: { value: string; label: string };
      metric2: { value: string; label: string };
      metric3: { value: string; label: string };
    };
    captures?: { src: string; description: string }[];
  }

  const projects: Project[] = [
    {
      id: "geld-pilot",
      title: "Geld Pilot",
      category: "erp",
      client: "TenStep",
      description:
        "ERP complet pour gérer les activités financières des PME/PMI via Power Apps, Power Automate, SPFx, Dataverse, Node.js et Flask Python. Gestion clients, factures, charges fixes et variables, revenus mensuels/annuels, résultats financiers et prédictions via IA. Inclut chatbots techniques et d'analyse de données, ainsi qu’un dashboard Power BI pour visualisation temps réel.",
      image: "/geld-pilot.png",
      popular: true,
      gradient: "from-green-500 to-blue-500",
      features: [
        "Gestion complète des finances",
        "Prévision IA des résultats financiers",
        "Chatbot technique et analytique",
        "Dashboard Power BI temps réel"
      ],
      technologies: [
        "Power Apps",
        "Power Automate",
        "SPFx",
        "Dataverse",
        "Node.js",
        "Flask Python",
        "Power BI",
        "IA"
      ],
      results: {
        metric1: { value: "100%", label: "Gestion automatisée" },
        metric2: { value: "10k+", label: "Transactions traitées" },
        metric3: { value: "99.9%", label: "Disponibilité système" }
      },
      captures: [
        { src: "/geld-pilot-1.png", description: "Dashboard principal temps réel" },
        { src: "/geld-pilot-2.png", description: "Chatbot pour assistance technique" },
        { src: "/geld-pilot-3.png", description: "Visualisation complète des revenus et charges" }
      ]
    },
    {
      id: "erp-medical",
      title: "ERP Gestion Cabinet Médical",
      category: "erp",
      client: "Clinique Santé",
      description:
        "ERP pour cabinets médicaux, couvrant la gestion des patients, rendez-vous, médicaments, matériels et personnel. Solution sécurisée avec dashboard pour responsables afin d’avoir une vue complète des activités et ressources.",
      image: "/erp-medical.png",
      gradient: "from-purple-500 to-pink-500",
      features: ["Gestion patients et rendez-vous", "Stocks médicaux", "Gestion du personnel", "Dashboard analytique sécurisé"],
      technologies: ["React", "Node.js", "PostgreSQL", "TailwindCSS", "Power BI"],
      results: {
        metric1: { value: "200%", label: "Efficacité améliorée" },
        metric2: { value: "500+", label: "Patients gérés" },
        metric3: { value: "98%", label: "Satisfaction client" }
      },
      captures: [
        { src: "/erp-medical-1.png", description: "Tableau de bord des rendez-vous" },
        { src: "/erp-medical-2.png", description: "Gestion des stocks médicaux" },
        { src: "/erp-medical-3.png", description: "Suivi du personnel et des performances" }
      ]
    },
    {
      id: "salon-coiffure",
      title: "Solution Salon de Coiffure",
      category: "saas",
      client: "Beauté & Style",
      description:
        "Solution web responsive pour salons de coiffure avec système de réservation, gestion clients, personnel, produits, matériels, revenus et charges. Dashboard sécurisé pour la responsable permettant un contrôle total des activités.",
      image: "/salon-coiffure.png",
      gradient: "from-yellow-500 to-orange-500",
      features: ["Page web responsive", "Système de réservation", "Gestion du personnel", "Dashboard analytique sécurisé"],
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "Power BI"],
      results: {
        metric1: { value: "150%", label: "Efficacité opérationnelle" },
        metric2: { value: "200+", label: "Clients actifs" },
        metric3: { value: "95%", label: "Satisfaction client" }
      },
      captures: [
        { src: "/salon-1.png", description: "Page de réservation en ligne" },
        { src: "/salon-2.png", description: "Dashboard gestion personnel et revenus" }
      ]
    },
    {
      id: "saas-finances",
      title: "SaaS Gestion Financière PME",
      category: "saas",
      client: "PME & PMI",
      description:
        "Solution SaaS pour gérer les activités financières des PME et PMI, incluant la visualisation des données via dashboard et prédictions IA pour anticiper les résultats futurs.",
      image: "/saas-finances.png",
      gradient: "from-blue-500 to-purple-500",
      features: ["Dashboard analytique", "Prédiction IA", "Gestion multi-sociétés", "Reporting financier avancé"],
      technologies: ["React", "Node.js", "PostgreSQL", "Power BI", "Python IA"],
      results: {
        metric1: { value: "120%", label: "Gain temps gestion financière" },
        metric2: { value: "50+", label: "PME connectées" },
        metric3: { value: "99%", label: "Disponibilité service" }
      },
      captures: [
        { src: "/saas-finances-1.png", description: "Dashboard analytique" },
        { src: "/saas-finances-2.png", description: "Prédiction résultats via IA" }
      ]
    },
    {
      id: "edu-app",
      title: "Application Mobile Université",
      category: "mobile",
      client: "Université Digital Academy",
      description:
        "Application mobile pour la gestion universitaire, incluant cours, classes, départements, projets étudiants, résultats d’exercices, et suivi personnalisé via IA pour améliorer la réussite des étudiants.",
      image: "/edu-app.png",
      gradient: "from-red-500 to-pink-500",
      features: ["Gestion des cours et classes", "Suivi personnalisé via IA", "Projets étudiants", "Analyse performance"],
      technologies: ["React Native", "Firebase", "Node.js", "Python IA", "TailwindCSS"],
      results: {
        metric1: { value: "300%", label: "Suivi académique amélioré" },
        metric2: { value: "1k+", label: "Étudiants actifs" },
        metric3: { value: "4.9/5", label: "Satisfaction utilisateurs" }
      },
      captures: [
        { src: "/edu-app-1.png", description: "Page accueil étudiants" },
        { src: "/edu-app-2.png", description: "Suivi performance et résultats" }
      ]
    },
    {
      id: "shop-ecommerce",
      title: "ShopSphere - E-commerce",
      category: "ecommerce",
      client: "Fashion Forward",
      description:
        "Plateforme e-commerce omnicanale avec IA de recommandation et expérience d'achat immersive pour les clients.",
      image: "/shop-sphere.png",
      gradient: "from-green-500 to-teal-500",
      features: ["IA Recommandation", "AR Try-On", "Omnichannel", "Analytics"],
      technologies: ["Next.js", "Shopify Plus", "AI/ML", "Stripe", "TailwindCSS"],
      results: {
        metric1: { value: "150%", label: "Ventes" },
        metric2: { value: "45%", label: "Conversion" },
        metric3: { value: "2.3s", label: "Temps chargement" }
      },
      captures: [
        { src: "/shop-1.png", description: "Page vitrine produits" },
        { src: "/shop-2.png", description: "Page panier et paiement" }
      ]
    },
    {
      id: "web-design",
      title: "Solutions Web et Vitrine",
      category: "web",
      client: "Divers clients",
      description:
        "Solutions web sur mesure pour différents projets incluant sites vitrines, pages web responsives, et applications interactives selon les besoins clients.",
      image: "/web-design.png",
      gradient: "from-indigo-500 to-purple-500",
      features: ["Sites vitrines", "Web responsive", "Intégration API", "Animations interactives"],
      technologies: ["React", "Next.js", "Node.js", "TailwindCSS", "Framer Motion"],
      results: {
        metric1: { value: "80+", label: "Sites livrés" },
        metric2: { value: "95%", label: "Clients satisfaits" },
        metric3: { value: "99%", label: "Disponibilité web" }
      },
      captures: [
        { src: "/web-1.png", description: "Page vitrine responsive" },
        { src: "/web-2.png", description: "Intégration API et formulaire" }
      ]
    }
  ];


  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#53828a]/5 to-[#b05f76]/5 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#53828a]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b05f76]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] mb-6">
              <Folder className="w-4 h-4 text-white mr-2" />
              <span className="text-white font-semibold">Portfolio d'Excellence</span>
            </div>

            <h1 className="text-4xl lg:text-7xl font-bold text-[#53828a] mb-6">
              Portfolio de{" "}
              <span className="bg-gradient-to-r from-[#53828a] via-[#b05f76] to-[#53828a] bg-clip-text text-transparent block">
                Réalisations
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-[#727683] mb-8 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos projets les plus{" "}
              <span className="font-semibold text-[#53828a]">innovants</span> et les résultats
              exceptionnels obtenus pour nos clients.
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

      {/* Portfolio Section */}
      <PortfolioContent
        filters={filters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filteredProjects={filteredProjects}
      />

      {/* Process */}
      <Process />

      {/* CTA */}
      <SurFooter />

      {/* Footer */}
      <Footer />
    </div>
  )
}
