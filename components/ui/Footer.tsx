"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Shield, Mail, Phone, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import FooterWithMapAndNewsletter from "./FooterWithMapAndNewsletter"

const Footer: React.FC = () => {
  const router = useRouter()

  const handleNavigate = () => {
    router.push("/services")
  }

  return (
    <footer className="bg-[#53828a] text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="w-[90%] mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-start md:items-center justify-start text-left md:text-center">
            <div className="mb-6">
              {/* Logo à ajouter si besoin */}
            </div>
            <Link href="/" className="flex items-center space-x-2 bg-white rounded-full mb-4">
              <Image src="/logoNexo.png" alt="NEXOLIA" width={280} height={100} className="h-16 w-auto " />
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              Votre partenaire digital de confiance pour des solutions innovantes et performantes digitale.
            </p>
            <div className="flex space-x-4">
              <Badge variant="secondary" className="bg-white/10 text-white">
                <Shield className="w-4 h-4 mr-1" />
                RGPD
              </Badge>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col items-start md:items-center justify-start text-left md:text-center">
            <h4 className="font-semibold mb-6 text-lg">
              <span className="animated-line">Services</span>
            </h4>
            <ul className="space-y-3 text-white/80">
              {[
                "Développement Web",
                "Applications Mobile",
                "Solutions SaaS",
                "Design & UX/UI",
                "Conseil & Audit",
              ].map((service, index) => (
                <li
                  key={index}
                  onClick={handleNavigate}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div className="flex flex-col items-start md:items-center justify-start text-left md:text-center">
            <h4 className="font-semibold mb-6 text-lg">
              <span className="animated-line">Entreprise</span>
            </h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Carrières
                </Link>
              </li>
              <li>
                <Link href="/blog_news" className="hover:text-white transition-colors">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start md:items-center justify-start text-left md:text-center">
            <h4 className="font-semibold mb-6 text-lg">
              <span className="animated-line">Contact</span>
            </h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href="mailto:contact@nexolia.com"
                  className="hover:text-white transition-colors"
                >
                  contact@nexolia.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a
                  href="tel:+21646384214"
                  className="hover:text-white transition-colors"
                >
                  +216 46 384 214
                </a>
              </li>
              <li className="flex items-start mt-2">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>Pôle Technologique El Ghazela, Ariana, Tunisie</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map + Newsletter */}
        <FooterWithMapAndNewsletter />

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>
            &copy; {new Date().getFullYear()} NEXOLIA. Tous droits réservés. | Fait avec ❤️ à Tunis
          </p>
        </div>
      </div>

      {/* === Animation CSS améliorée === */}
      <style jsx>{`
        .animated-line {
          position: relative;
          display: inline-block;
          cursor: default;
        }

        .animated-line::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 50%;
          height: 2px;
          background: #c7c7c76b;
          border-radius: 3px;
          overflow: hidden;
    
        }

        .animated-line::before {
          content: "";
          position: absolute;
          left: -25%;
          bottom: -6px;
          width: 30%;
          height: 2px;
          background: #1c1765;
          border-radius: 3px;
          box-shadow: 0 0 8px #1c1765;
          animation: moveLine 2s ease-in-out infinite alternate;
        }

        .animated-line:hover::before {
          animation: moveLineHover 1s linear infinite;
        }

        @keyframes moveLine {
          0% {
            left: -30%;
          }
          100% {
            left: 100%;
          }
        }

        @keyframes moveLineHover {
          0% {
            left: -30%;
            width: 30%;
          }
          50% {
            left: 50%;
            width: 50%;
          }
          100% {
            left: 100%;
            width: 30%;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
