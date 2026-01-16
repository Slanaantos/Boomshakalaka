"use client";

import { motion } from "framer-motion";
import { Zap, Network, Database, Code, Workflow, Rocket } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Zap,
    title: "Web Performance",
    description: "Sites ultra-velozes com Next.js 15, otimizados para SEO e Core Web Vitals. 100% de score no PageSpeed.",
    features: ["Next.js & TypeScript", "SEO Técnico Avançado", "Core Web Vitals Otimizado"],
    gradient: "from-accent to-blue-500",
  },
  {
    icon: Network,
    title: "Inteligência n8n",
    description: "Conectamos suas ferramentas e automatizamos 90% das suas tarefas repetitivas com fluxos inteligentes.",
    features: ["Automação de Processos", "Integração Multi-Plataforma", "IA & Webhooks"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Database,
    title: "SaaS Development",
    description: "Dashboards, bancos de dados e sistemas escaláveis desenhados para crescer com seu negócio.",
    features: ["Arquitetura Escalável", "APIs RESTful", "Real-time Updates"],
    gradient: "from-emerald-500 to-teal-500",
  },
];

const features = [
  { icon: Code, text: "Código Limpo & Documentado" },
  { icon: Workflow, text: "Metodologia Ágil" },
  { icon: Rocket, text: "Deploy Otimizado" },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-24 px-4 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Serviços que Transformam
            </span>
          </h2>
          <p className="text-xl text-white/60">
            Soluções completas para elevar sua operação digital ao próximo nível
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-white/10 card-hover overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {features.map((feature, index) => (
            <div
              key={feature.text}
              className="flex items-center gap-3 p-4 rounded-xl glass-effect group hover:border-accent/50 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-200">
                <feature.icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-white/80 font-medium">{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
