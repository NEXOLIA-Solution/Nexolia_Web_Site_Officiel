import { Badge, Clock, Shield, TrendingUp, Users } from 'lucide-react'
import React from 'react'

const Approche: React.FC = () => {
      const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "ROI Garanti",
      description: "Retour sur investissement mesurable dès les premiers mois avec métriques détaillées",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurité Maximale",
      description: "Standards de sécurité les plus élevés du marché avec certifications internationales",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Livraison Rapide",
      description: "Méthodologie agile pour des résultats en temps record avec qualité premium",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Support Expert",
      description: "Équipe dédiée d'experts techniques disponible 24/7 avec SLA garanti",
    },
  ]
  return (
    <section className="py-20 bg-gradient-to-br from-[#53828a]/5 to-[#b05f76]/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#53828a]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#b05f76]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            
            <h2 className="text-4xl lg:text-5xl font-bold text-[#53828a] mb-6">L'Excellence à Votre Service</h2>
            <p className="text-xl text-[#727683] max-w-3xl mx-auto leading-relaxed">
              Notre expertise et notre approche innovante garantissent le succès de vos projets digitaux avec des
              résultats mesurables et durables.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group bg-white/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#53828a] mb-3 group-hover:text-[#b05f76] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-[#727683] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Approche
