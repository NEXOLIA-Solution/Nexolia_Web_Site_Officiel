"use client"

import type React from "react"
import { useState } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Téléphone",
      details: ["+216 46 384 214", "+216 23 267 646"],
      description: "Lun-Ven 8h-17h",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email",
      details: ["contact@nexolia.com", "info@nexolia.com"],
      description: "Réponse sous 24h",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Bureaux",
      details: ["Tunis, Ariana, Pôle Technologique El Ghazala"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Horaires",
      details: ["Lun-Ven : 9h-18h"],
      description: "Support 24/7 disponible",
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="w-[95%] max-w-[1400px] mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#53828a] mb-6 sm:mb-8 text-center lg:text-left">
              Nos Coordonnées
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div
                        className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center text-white flex-shrink-0`}
                      >
                        {info.icon}
                      </div>
                      <div className="flex-1 text-sm sm:text-base">
                        <h3 className="font-semibold text-[#53828a] mb-1 sm:mb-2 text-base sm:text-lg">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-[#727683] font-medium leading-tight">
                            {detail}
                          </p>
                        ))}
                        {info.description && (
                          <p className="text-xs sm:text-sm text-[#916a7c] mt-1 sm:mt-2">
                            {info.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <Button className="w-full text-sm sm:text-base bg-gradient-to-r from-[#53828a] to-[#b05f76] text-white hover:opacity-90 py-2 sm:py-3">
                <Calendar className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                Consultation Gratuite 30 min
              </Button>
              <Button
                variant="outline"
                className="w-full text-sm sm:text-base border-[#53828a] text-[#53828a] hover:bg-[#53828a] hover:text-white py-2 sm:py-3"
              >
                Télécharger notre Brochure
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="pb-6 sm:pb-8 text-center lg:text-left">
                <CardTitle className="text-2xl sm:text-3xl text-[#53828a] mb-2">
                  Parlez-nous de votre projet
                </CardTitle>
                <p className="text-[#727683] text-sm sm:text-base">
                  Remplissez ce formulaire détaillé et recevez une réponse personnalisée sous 24h
                </p>
              </CardHeader>
              <CardContent className="px-4 sm:px-8 pb-6 sm:pb-8">
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-8 text-sm sm:text-base">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#53828a] mb-2">Prénom *</label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="h-10 sm:h-12 border-2 border-gray-200 focus:border-[#53828a]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#53828a] mb-2">Nom *</label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="h-10 sm:h-12 border-2 border-gray-200 focus:border-[#53828a]"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#53828a] mb-2">Email professionnel *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-10 sm:h-12 border-2 border-gray-200 focus:border-[#53828a]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#53828a] mb-2">Téléphone</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-10 sm:h-12 border-2 border-gray-200 focus:border-[#53828a]"
                        placeholder="+216 23 267 646"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#53828a] mb-2">Entreprise / Organisation</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="h-10 sm:h-12 border-2 border-gray-200 focus:border-[#53828a]"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#53828a] mb-2">Type de projet *</label>
                      <Select onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                        <SelectTrigger className="h-10 sm:h-12 border-2 border-gray-200 focus:border-[#53828a]">
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web">Site Web / E-commerce</SelectItem>
                          <SelectItem value="mobile">Application Mobile</SelectItem>
                          <SelectItem value="saas">Plateforme SaaS</SelectItem>
                          <SelectItem value="design">Design & UX/UI</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#53828a] mb-2">Budget estimé</label>
                      <Select onValueChange={(v) => setFormData({ ...formData, budget: v })}>
                        <SelectTrigger className="h-10 sm:h-12 border-2 border-gray-200 focus:border-[#53828a]">
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5k-15k">5k DT - 15k DT</SelectItem>
                          <SelectItem value="15k-50k">15k DT - 50k DT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#53828a] mb-2">Délai souhaité</label>
                      <Select onValueChange={(v) => setFormData({ ...formData, timeline: v })}>
                        <SelectTrigger className="h-10 sm:h-12 border-2 border-gray-200 focus:border-[#53828a]">
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent (moins d’un mois)</SelectItem>
                          <SelectItem value="1-3">1-3 mois</SelectItem>
                          <SelectItem value="5-12">5-12 mois</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#53828a] mb-2">
                      Description du projet *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez brièvement votre projet..."
                      className="min-h-[120px] sm:min-h-[150px] border-2 border-gray-200 focus:border-[#53828a]"
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(c) => setFormData({ ...formData, newsletter: c as boolean })}
                      className="mt-1"
                    />
                    <label htmlFor="newsletter" className="text-xs sm:text-sm text-[#727683] leading-relaxed">
                      Je souhaite recevoir la newsletter NEXOLIA.
                    </label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-sm sm:text-lg bg-gradient-to-r from-[#53828a] to-[#b05f76] text-white py-3 sm:py-4"
                  >
                    <Send className="mr-2 w-4 h-4 sm:w-6 sm:h-6" />
                    Envoyer ma demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
