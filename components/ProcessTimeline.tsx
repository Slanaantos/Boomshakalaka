"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop&q=80",
    number: "01",
    title: "Entender Seu Negócio",
    description: "Conversamos, ouvimos e entendemos o que você precisa. Mapeamos seus objetivos e criamos uma estratégia clara.",
    duration: "1-2 semanas",
    deliverables: ["Análise do mercado", "Plano de ação", "Proposta personalizada"]
  },
  {
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop&q=80",
    number: "02",
    title: "Criar o Design",
    description: "Desenhamos telas bonitas e fáceis de usar. Você vê como vai ficar antes de construir qualquer coisa.",
    duration: "2-3 semanas",
    deliverables: ["Protótipos visuais", "Testes com usuários", "Identidade visual"]
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop&q=80",
    number: "03",
    title: "Construir o Projeto",
    description: "Transformamos o design em realidade. Site rápido, seguro e preparado para crescer junto com você.",
    duration: "4-8 semanas",
    deliverables: ["Site funcionando", "Testes de qualidade", "Treinamento da equipe"]
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=600&fit=crop&q=80",
    number: "04",
    title: "Lançar e Melhorar",
    description: "Colocamos no ar e acompanhamos os resultados. Ajustamos o que for necessário para você vender mais.",
    duration: "Sempre",
    deliverables: ["Site no ar", "Suporte contínuo", "Melhorias baseadas em dados"]
  }
];

export default function ProcessTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const line = lineRef.current;

    if (!timeline || !line) return;

    // Animate the vertical line
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timeline,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      }
    );

    // Animate each step
    steps.forEach((_, index) => {
      const step = timeline.querySelector(`#step-${index}`);

      gsap.fromTo(
        step,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
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
    <section className="py-32 px-4 bg-gradient-to-b from-background to-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-blue-500/5 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Como Trabalhamos
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-white/60">
            Do primeiro contato ao site no ar. Passo a passo transparente e sem surpresas.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 hidden lg:block">
            <div
              ref={lineRef}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent to-blue-500 origin-top"
              style={{ height: "100%" }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 lg:space-y-32">
            {steps.map((step, index) => (
              <div
                key={index}
                id={`step-${index}`}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? "" : "lg:text-right"
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 0 ? "lg:pr-16" : "lg:pl-16 lg:order-2"}>
                  <div className="space-y-4 lg:space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-5xl lg:text-6xl font-black text-white/5">{step.number}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-base lg:text-lg text-white/60 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="flex items-center gap-2 text-accent text-sm">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span>{step.duration}</span>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-white/40 mb-3">Entregas:</p>
                      <ul className="space-y-2">
                        {step.deliverables.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-white/60">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-accent border-4 border-background" />
                </div>

                {/* Visual Element */}
                <div className={index % 2 === 0 ? "lg:pl-16 lg:order-2" : "lg:pr-16"}>
                  <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
