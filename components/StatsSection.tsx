"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Users, Zap, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: TrendingUp,
    value: 300,
    suffix: "%",
    label: "Aumento médio em conversão",
    description: "Nossos clientes veem resultados reais"
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Projetos entregues",
    description: "De startups a empresas consolidadas"
  },
  {
    icon: Zap,
    value: 98,
    suffix: "%",
    label: "Performance Score",
    description: "Core Web Vitals perfeitos"
  },
  {
    icon: Award,
    value: 100,
    suffix: "%",
    label: "Satisfação dos clientes",
    description: "Parcerias de longo prazo"
  }
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    stats.forEach((stat, index) => {
      const element = section.querySelector(`#stat-${index}`);
      const counter = element?.querySelector('.counter');

      if (!counter) return;

      gsap.fromTo(
        counter,
        { innerHTML: 0 },
        {
          innerHTML: stat.value,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
          onUpdate: function() {
            const value = Math.ceil(this.targets()[0].innerHTML);
            counter.innerHTML = value.toString();
          }
        }
      );

      // Card entrance animation
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "top 60%",
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
    <section ref={sectionRef} className="py-32 px-4 bg-black relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Resultados que Falam
            </span>
          </h2>
          <p className="text-xl text-white/60">
            Números reais de projetos reais. Performance que impacta o bottom line.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              id={`stat-${index}`}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-accent/50 transition-all duration-300">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Number */}
                  <div className="space-y-2">
                    <div className="text-6xl font-black bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
                      <span className="counter">0</span>
                      <span>{stat.suffix}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {stat.label}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/50 text-sm">
                    {stat.description}
                  </p>
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-accent to-blue-500 text-white font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl shadow-accent/20"
          >
            Comece seu projeto
            <TrendingUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
