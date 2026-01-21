import { Code, Palette, Rocket, Star, Users } from 'lucide-react'
import React from 'react'
import { Card, CardContent } from './card'

const Process: React.FC = () => {
    const process = [
              {
                icon: <Users className="w-8 h-8" />,
                title: "Discovery",
                description: "Analyse approfondie des besoins et objectifs business",
                gradient: "from-blue-500 to-cyan-600",
                number: "01",
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Strategy",
                description: "Définition de la stratégie et architecture technique optimale",
                gradient: "from-purple-500 to-pink-600",
                number: "02",
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Execution",
                description: "Développement agile avec tests continus et qualité premium",
                gradient: "from-orange-500 to-red-600",
                number: "03",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Success",
                description: "Déploiement et optimisation continue pour la performance",
                gradient: "from-green-500 to-teal-600",
                number: "04",
              },
            ]




  return (
    <section className="py-20 bg-gradient-to-br from-[#53828a]/5 to-[#b05f76]/5 relative overflow-hidden px-10">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#53828a]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#b05f76]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#53828a]/20 mb-6">
              <Rocket className="w-4 h-4 text-[#53828a] mr-2" />
              <span className="text-[#53828a] font-semibold text-sm">Notre Processus</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#53828a] mb-4">Notre Processus de Réussite</h2>
            <p className="text-xl text-[#727683] max-w-2xl mx-auto">
              Une méthodologie éprouvée qui garantit des résultats exceptionnels
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#53828a] to-[#b05f76] transform -translate-y-1/2 z-0"></div>

            {process.map((step, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg text-center group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm relative z-10"
              >
                {/* Background Effect */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${step.gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                <CardContent className="p-8 relative">
                  {/* Step Number */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-[#53828a] to-[#b05f76] flex items-center justify-center text-white text-sm font-bold">
                    {step.number}
                  </div>

                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg relative`}
                  >
                    {step.icon}
                    {/* Overlay Icon */}
                    
                  </div>
                  <h3 className="text-xl font-semibold text-[#53828a] mb-4 group-hover:text-[#b05f76] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#727683] leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Process
