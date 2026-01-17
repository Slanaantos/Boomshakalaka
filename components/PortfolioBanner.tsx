"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PortfolioBanner() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-accent/95 to-blue-500/95 backdrop-blur-md border-b border-white/10 shadow-2xl"
    >
      <div className="container mx-auto px-4 py-3 lg:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Left Side - Info */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="hidden sm:flex w-10 h-10 rounded-full bg-white/10 items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-white font-bold text-sm lg:text-base">
                  Preview de Projeto
                </span>
              </div>
              <p className="text-white/80 text-xs lg:text-sm mt-0.5">
                Este é um exemplo do nosso trabalho. Seu projeto pode ser o próximo!
              </p>
            </div>
          </div>

          {/* Right Side - CTA */}
          <Link
            href="/#contato"
            className="group px-6 py-2.5 bg-white hover:bg-white/90 rounded-lg text-accent font-bold text-sm lg:text-base transition-all duration-200 hover:scale-105 flex items-center gap-2 shadow-xl whitespace-nowrap"
          >
            Criar Meu Site
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
