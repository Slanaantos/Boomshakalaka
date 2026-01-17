"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Code2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-purple-500/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-sm"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-white/80">Sites Profissionais & Automação Inteligente</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Transforme Visitantes
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
              em Clientes Fiéis
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto text-balance"
          >
            Sites que carregam em 1 segundo e vendem 24 horas por dia. Automatize seu negócio e cresça sem limites.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#contato"
              className="group px-8 py-4 bg-accent hover:bg-accent/90 rounded-lg text-white font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2 animate-pulse-slow"
            >
              Iniciar Projeto no WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 glass-effect rounded-lg text-white font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2"
            >
              Ver Portfolio
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 pt-12 lg:pt-16 max-w-3xl mx-auto"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
                <span className="text-2xl lg:text-3xl font-bold text-white">100</span>
              </div>
              <p className="text-white/60 text-xs lg:text-sm">Sites Ultra-Rápidos</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Code2 className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
                <span className="text-2xl lg:text-3xl font-bold text-white">90%</span>
              </div>
              <p className="text-white/60 text-xs lg:text-sm">Economia de Tempo</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
                <span className="text-2xl lg:text-3xl font-bold text-white">47+</span>
              </div>
              <p className="text-white/60 text-xs lg:text-sm">Clientes Felizes</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-accent rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}
