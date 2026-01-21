"use client"

import React, { useState } from "react"
import { Award, Globe, Heart, Lightbulb, Rocket, Users, X, Code, Briefcase, Coffee } from "lucide-react"
import { Button } from "./button"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"

const PostWork: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<any | null>(null)

  const jobs = [
    {
      role: "Senior Full-Stack Developer",
      location: "Paris / Remote",
      type: "CDI",
      gradient: "from-blue-500 to-cyan-600",
      profile: "Nous recherchons un développeur Full-Stack senior passionné, capable de concevoir et d’implémenter des solutions robustes, scalables et maintenables. Vous travaillerez dans un environnement agile, au sein d’une équipe dynamique et pluridisciplinaire.",
      hours: "39 heures / semaine (flexibilité possible)",
      mission: [
        "Participer à la conception, au développement et à la maintenance d’applications web complexes (React + Node.js).",
        "Collaborer avec les designers UX/UI pour créer des interfaces fluides et modernes.",
        "Optimiser la performance et la sécurité du code sur toutes les plateformes.",
        "Accompagner les juniors dans leur montée en compétence."
      ],
      techs: ["React", "Node.js", "TypeScript", "MongoDB", "Docker", "GitLab CI/CD"],
      environment: "Équipe internationale, rituels agiles (daily, sprint review, rétro), environnement cloud moderne (AWS).",
      benefits: [
        "Télétravail flexible (3 jours/semaine)",
        "Budget de formation annuel",
        "Mutuelle premium 100%",
        "Équipements MacBook / UltraWide",
        "Café & snacks à volonté ☕"
      ],
      email: "recrutement@nexolia.com"
    },
    {
      role: "UX/UI Designer",
      location: "Tunis / Hybrid",
      type: "CDI",
      gradient: "from-purple-500 to-pink-600",
      profile: "Vous avez un sens esthétique fort et une compréhension profonde de l’expérience utilisateur ? Rejoignez notre équipe produit pour façonner des interfaces qui inspirent confiance et plaisir d’utilisation.",
      hours: "35 heures / semaine",
      mission: [
        "Concevoir des interfaces modernes et cohérentes en accord avec l’identité visuelle de NEXOLIA.",
        "Collaborer avec les développeurs pour garantir la faisabilité technique.",
        "Effectuer des tests utilisateurs et itérer sur les prototypes Figma.",
        "Créer des guidelines de design réutilisables (Design System)."
      ],
      techs: ["Figma", "Adobe XD", "Illustrator", "Miro", "Notion"],
      environment: "Travail en étroite collaboration avec les équipes produit et tech. Ambiance conviviale, ouverte à la créativité.",
      benefits: [
        "Horaires flexibles",
        "Possibilité de travail hybride",
        "Accès à des conférences de design internationales",
        "Espaces de détente et afterworks réguliers 🎨"
      ],
      email: "recrutement@nexolia.com"
    },
    {
      role: "DevOps Engineer",
      location: "Remote / Full Remote possible",
      type: "CDI",
      gradient: "from-green-500 to-teal-600",
      profile: "Vous êtes passionné par l’automatisation, la sécurité et la performance ? Vous intégrerez une équipe d’experts cloud pour concevoir et maintenir notre infrastructure scalable et fiable.",
      hours: "39 heures / semaine",
      mission: [
        "Déployer et maintenir les pipelines CI/CD.",
        "Assurer la supervision et la fiabilité des environnements cloud.",
        "Mettre en place des politiques de sécurité (IAM, réseau, monitoring).",
        "Collaborer avec les équipes backend pour l’intégration continue."
      ],
      techs: ["AWS", "Kubernetes", "Terraform", "Docker", "Jenkins", "Grafana"],
      environment: "Équipe 100% remote, culture DevOps solide, mindset open-source.",
      benefits: [
        "Télétravail total (full remote)",
        "Horaires flexibles",
        "Formations certifiantes AWS/GCP",
        "Prime de performance annuelle 💻"
      ],
      email: "recrutement@nexolia.com"
    },
    {
      role: "Business Developer",
      location: "Paris / Hybrid",
      type: "CDI",
      gradient: "from-orange-500 to-red-600",
      profile: "Nous cherchons un profil orienté résultats, motivé par les défis commerciaux et à l’aise dans l’univers digital. Vous serez l’ambassadeur de NEXOLIA auprès de nos clients et partenaires stratégiques.",
      hours: "35 heures / semaine",
      mission: [
        "Identifier et qualifier de nouvelles opportunités commerciales.",
        "Gérer le cycle de vente complet, de la prospection à la signature.",
        "Collaborer avec l’équipe marketing pour affiner les stratégies d’acquisition.",
        "Suivre les performances et établir des reportings hebdomadaires."
      ],
      techs: ["CRM HubSpot", "Excel", "Power BI", "LinkedIn Sales Navigator"],
      environment: "Travail collaboratif avec l’équipe marketing et produit. Objectifs clairs et atteignables.",
      benefits: [
        "Rémunération attractive (fixe + variable)",
        "Prime trimestrielle sur objectifs",
        "Carte déjeuner + mutuelle premium",
        "Événements d’équipe et séminaires à l’étranger 🌍"
      ],
      email: "recrutement@nexolia.com"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-[#53828a]/5 to-[#b05f76]/5 relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#53828a]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#b05f76]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative max-w-[1500px] lg:px-[5rem]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ---- Partie gauche ---- */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#53828a]/20 mb-6">
              <Rocket className="w-4 h-4 text-[#53828a] mr-2" />
              <span className="text-[#53828a] font-semibold text-sm">Rejoignez-Nous</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-6">Rejoignez Notre Équipe</h2>
            <p className="text-lg text-[#727683] mb-8 leading-relaxed">
              Chez <strong>NEXOLIA</strong>, nous valorisons la créativité, la performance et la collaboration. 
              Travailler chez nous, c’est rejoindre une entreprise moderne où vos idées comptent, vos efforts sont reconnus et vos ambitions encouragées.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "Work-Life Balance",
                  desc: "Flexibilité et télétravail pour un équilibre optimal",
                  gradient: "from-red-500 to-pink-600",
                },
                {
                  icon: <Lightbulb className="w-6 h-6" />,
                  title: "Innovation",
                  desc: "Projets cutting-edge et technologies émergentes",
                  gradient: "from-yellow-500 to-orange-600",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Équipe",
                  desc: "Collaboration internationale et diversité culturelle",
                  gradient: "from-blue-500 to-cyan-600",
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  title: "Évolution",
                  desc: "Formation continue et développement de carrière",
                  gradient: "from-green-500 to-teal-600",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#53828a] mb-1 group-hover:text-[#b05f76] transition-colors duration-300">
                      {benefit.title}
                    </h4>
                    <p className="text-[#727683] text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---- Partie droite ---- */}
          <div>
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm relative overflow-hidden">
              <CardHeader className="relative">
                <CardTitle className="text-2xl text-[#53828a] text-center flex items-center justify-center">
                  <Rocket className="w-6 h-6 mr-2" />
                  Postes Ouverts
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 relative">
                {jobs.map((job, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-[#53828a]/5 to-[#b05f76]/5 rounded-lg group hover:shadow-md transition-all duration-300 relative overflow-hidden"
                  >
                    <div
                      className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${job.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300`}
                    ></div>

                    <div className="relative">
                      <h4 className="font-semibold text-[#53828a] group-hover:text-[#b05f76] transition-colors duration-300">
                        {job.role}
                      </h4>
                      <p className="text-[#727683] text-sm flex items-center">
                        <Globe className="w-3 h-3 mr-1" />
                        {job.location}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Badge className={`bg-gradient-to-r ${job.gradient} text-white`}>{job.type}</Badge>
                      <Button
                        className="text-xs bg-[#53828a] hover:bg-[#b05f76] text-white px-3 py-1 rounded-full"
                        onClick={() => setSelectedJob(job)}
                      >
                        Voir Détails
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* ---- POPUP DÉTAILLÉE ---- */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative p-8">
            <button
              className="absolute top-4 right-4 text-[#53828a] hover:text-[#b05f76]"
              onClick={() => setSelectedJob(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-3xl font-bold text-[#53828a] mb-4">{selectedJob.role}</h3>
            <p className="text-sm text-[#727683] mb-3">📍 <strong>Lieu :</strong> {selectedJob.location}</p>
            <p className="text-sm text-[#727683] mb-3">💼 <strong>Type :</strong> {selectedJob.type}</p>
            <p className="text-sm text-[#727683] mb-5">⏰ <strong>Heures :</strong> {selectedJob.hours}</p>

            <div className="space-y-6">
              <div>
                <h4 className="text-[#b05f76] font-semibold mb-2">Profil recherché</h4>
                <p className="text-[#727683] leading-relaxed">{selectedJob.profile}</p>
              </div>

              <div>
                <h4 className="text-[#b05f76] font-semibold mb-2">Missions principales</h4>
                <ul className="list-disc list-inside text-[#727683] leading-relaxed">
                  {selectedJob.mission.map((m: string, i: number) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[#b05f76] font-semibold mb-2">Technologies / Outils</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.techs.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-[#53828a]/10 to-[#b05f76]/10 rounded-full text-sm text-[#53828a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[#b05f76] font-semibold mb-2">Environnement de travail</h4>
                <p className="text-[#727683] leading-relaxed">{selectedJob.environment}</p>
              </div>

              <div>
                <h4 className="text-[#b05f76] font-semibold mb-2">Avantages</h4>
                <ul className="list-disc list-inside text-[#727683] leading-relaxed">
                  {selectedJob.benefits.map((b: string, i: number) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href={`mailto:${selectedJob.email}?subject=Candidature - ${selectedJob.role}`}
                className="inline-block bg-gradient-to-r from-[#53828a] to-[#b05f76] text-white px-8 py-3 rounded-full shadow-md hover:opacity-90 transition-all"
              >
                Envoyer ma candidature
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default PostWork
