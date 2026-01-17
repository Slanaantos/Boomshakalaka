"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  {
    name: "Next.js",
    category: "Sites",
    color: "from-white to-gray-400",
    description: "Tecnologia para sites ultra-rápidos"
  },
  {
    name: "TypeScript",
    category: "Código",
    color: "from-blue-500 to-blue-700",
    description: "Código mais seguro e confiável"
  },
  {
    name: "Tailwind CSS",
    category: "Design",
    color: "from-cyan-400 to-blue-500",
    description: "Design moderno e responsivo"
  },
  {
    name: "Framer Motion",
    category: "Animações",
    color: "from-pink-500 to-purple-600",
    description: "Animações suaves e profissionais"
  },
  {
    name: "GSAP",
    category: "Interações",
    color: "from-green-500 to-emerald-600",
    description: "Efeitos avançados tipo Apple"
  },
  {
    name: "n8n",
    category: "Automação",
    color: "from-orange-500 to-red-500",
    description: "Automatiza processos repetitivos"
  },
  {
    name: "PostgreSQL",
    category: "Banco de Dados",
    color: "from-blue-600 to-indigo-700",
    description: "Armazena dados com segurança"
  },
  {
    name: "Vercel",
    category: "Hospedagem",
    color: "from-black to-gray-800",
    description: "Site sempre rápido e online"
  }
];

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;

    if (!section || !grid) return;

    // Parallax effect for tech cards
    const cards = grid.querySelectorAll('.tech-card');

    cards.forEach((card, index) => {
      const yOffset = (index % 2 === 0 ? -30 : 30) + (Math.random() * 20 - 10);

      gsap.fromTo(
        card,
        {
          y: yOffset,
          opacity: 0,
          scale: 0.9,
          rotateY: -15
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            scrub: 1,
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-4 bg-gradient-to-b from-black via-background to-black relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Tecnologias Que Usamos
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-white/60">
              As melhores ferramentas do mercado. Seu projeto merece o que há de mais moderno.
            </p>
          </motion.div>
        </div>

        {/* Tech Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 perspective-1000"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="tech-card group"
              whileHover={{ scale: 1.03, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-full p-4 lg:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                {/* Glow on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative space-y-2 lg:space-y-3">
                  {/* Icon placeholder */}
                  <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br ${tech.color} opacity-20 group-hover:opacity-30 transition-opacity`} />

                  {/* Name */}
                  <div>
                    <h3 className="text-base lg:text-lg font-bold text-white mb-1">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-white/40 uppercase tracking-wider">
                      {tech.category}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs lg:text-sm text-white/60 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tech.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 lg:mt-16"
        >
          <p className="text-white/40 text-sm">
            E muito mais... Escolhemos a melhor ferramenta para cada projeto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
