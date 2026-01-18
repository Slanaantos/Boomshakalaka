"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { SyntheticEvent } from "react";
import { ExternalLink } from "lucide-react";
import { fallbackImage } from "@/lib/fallbackImage";

const projects = [
  {
    title: "Urban Style",
    category: "E-commerce Streetwear",
    description: "Loja virtual moderna com foco em streetwear premium, animações impactantes e experiência de compra fluida.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=400&fit=crop",
    stack: ["Next.js 15", "Framer Motion", "Tailwind CSS"],
    gradient: "from-yellow-500 to-orange-500",
    link: "/portfolio/urban/",
    github: null,
  },
  {
    title: "Cuesta Adventure",
    category: "Turismo & Aventura",
    description: "Landing page dinâmica para passeios off-road na Cuesta de Botucatu com galeria interativa e sistema de reservas.",
    image: "https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?w=800&h=400&fit=crop",
    stack: ["Next.js 15", "TypeScript", "Framer Motion"],
    gradient: "from-orange-600 to-amber-500",
    link: "/portfolio/cuesta/",
    github: null,
  },
  {
    title: "Bella Tavola",
    category: "Gastronomia Premium",
    description: "Website elegante para restaurante italiano autêntico, destacando menu gourmet e ambiente sofisticado.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop",
    stack: ["Next.js 15", "Framer Motion", "Tailwind CSS"],
    gradient: "from-amber-600 to-yellow-500",
    link: "/portfolio/bella/",
    github: null,
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = fallbackImage;
  };

  return (
    <section id="portfolio" className="py-24 px-4 relative" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Projetos que Inspiram
            </span>
          </h2>
          <p className="text-xl text-white/60">
            Soluções reais que geraram resultados extraordinários para nossos clientes
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-white/10 card-hover cursor-pointer block"
            >
              {/* Hero Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/60 transition-all duration-300" />

                {/* View Project Button (visible on hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold flex items-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    Ver Projeto
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full glass-effect text-sm text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-white/60">{project.description}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${project.gradient} blur-2xl -z-10`}
                style={{ transform: 'scale(0.8)' }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
