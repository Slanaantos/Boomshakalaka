"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Sites com 100/100 no PageSpeed",
  "Automações que economizam 20h/semana",
  "SaaS escalável e seguro",
  "Suporte técnico dedicado",
];

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 px-4 relative" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-purple-500/10" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-purple-600 opacity-90" />

            {/* Content */}
            <div className="relative p-12 md:p-16 space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Chega de Sites Lentos e Processos Manuais
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Vamos elevar o nível da sua operação digital. Transforme sua ideia em realidade com tecnologia de ponta.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3 text-white"
                  >
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center"
              >
                <a
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de iniciar um projeto com a SLAN Design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-5 bg-white text-accent rounded-xl font-bold text-lg hover:bg-white/90 transition-all duration-200 hover:scale-105 shadow-2xl"
                >
                  Iniciar Projeto Agora
                  <ArrowRight className="w-6 h-6" />
                </a>
                <p className="mt-4 text-white/80 text-sm">
                  Resposta em até 2 horas úteis
                </p>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 p-8 rounded-2xl glass-effect"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Ou preencha o formulário
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                const whatsappMessage = `Olá! Meu nome é ${name}.%0A%0AEmail: ${email}%0A%0AMensagem: ${message}`;
                window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, '_blank');
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  required
                  className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  required
                  className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <textarea
                name="message"
                placeholder="Conte sobre seu projeto"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent hover:bg-accent/90 rounded-lg text-white font-semibold transition-all duration-200 hover:scale-[1.02]"
              >
                Enviar via WhatsApp
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
