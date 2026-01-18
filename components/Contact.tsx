"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "5511970982930";
    const message = `Olá! Meu nome é ${formData.name}.\n\nEmail: ${formData.email}\n\nMensagem: ${formData.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="contato" className="py-24 px-4 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent" />

      <div className="container mx-auto relative z-10">
        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-12 lg:mb-16 p-6 lg:p-12 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-accent/20 to-purple-500/20 border border-white/10 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Chega de sites lentos e processos manuais
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-white/70 mb-6 lg:mb-8">
            Vamos elevar o nível da sua operação digital?
          </p>
          <div className="inline-flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 rounded-full glass-effect">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white/80 text-sm lg:text-base">Disponível para novos projetos</span>
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-8 lg:mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 lg:mb-4">
              Vamos conversar sobre seu projeto
            </h3>
            <p className="text-white/60 text-sm lg:text-base">
              Preencha o formulário e inicie uma conversa no WhatsApp
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5 lg:space-y-6 p-6 lg:p-8 rounded-2xl glass-effect"
          >
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-white/80 text-sm font-medium">
                Nome
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Seu nome"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-white/80 text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-white/80 text-sm font-medium">
                Mensagem
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/40" />
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-4 bg-accent hover:bg-accent/90 rounded-lg text-white font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Enviar para WhatsApp
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
