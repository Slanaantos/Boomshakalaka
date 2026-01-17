"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, PenTool, Code, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Descoberta & Estratégia",
    description: "Mergulhamos profundamente no seu negócio. Mapeamos processos, identificamos gargalos e traçamos objetivos claros.",
    duration: "1-2 semanas",
    deliverables: ["Análise de concorrência", "Definição de KPIs", "Roadmap técnico"]
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design & Prototipagem",
    description: "Criamos experiências que convertem. Design system completo, protótipos interativos e testes de usabilidade.",
    duration: "2-3 semanas",
    deliverables: ["Design system", "Protótipos hi-fi", "Guia de marca"]
  },
  {
    icon: Code,
    number: "03",
    title: "Desenvolvimento",
    description: "Código limpo, performático e escalável. Arquitetura moderna com as melhores práticas do mercado.",
    duration: "4-8 semanas",
    deliverables: ["MVP funcional", "Testes automatizados", "Documentação técnica"]
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Otimização",
    description: "Deploy estratégico e monitoramento contínuo. Análise de dados e otimizações baseadas em performance real.",
    duration: "Contínuo",
    deliverables: ["Deploy em produção", "Monitoring setup", "A/B testing"]
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
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Nosso Processo
            </span>
          </h2>
          <p className="text-xl text-white/60">
            Do conceito ao launch. Um processo refinado que entrega resultados previsíveis.
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
          <div className="space-y-32">
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
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-accent" />
                      </div>
                      <span className="text-6xl font-black text-white/5">{step.number}</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="text-lg text-white/60 leading-relaxed">
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
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/10 to-blue-500/10 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                    <step.icon className="w-24 h-24 text-accent/40" />
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
