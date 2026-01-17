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
    label: "Mais vendas",
    description: "Clientes vendem 3x mais depois do redesign"
  },
  {
    icon: Users,
    value: 50,
    suffix: "+",
    label: "Empresas atendidas",
    description: "De startups a empresas consolidadas"
  },
  {
    icon: Zap,
    value: 98,
    suffix: "%",
    label: "Sites ultra-rápidos",
    description: "Velocidade que impressiona e converte"
  },
  {
    icon: Award,
    value: 100,
    suffix: "%",
    label: "Clientes satisfeitos",
    description: "Parcerias que duram anos"
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
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Números Que Provam
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-white/60">
            Resultados reais de clientes reais. Seu negócio pode ser o próximo.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              id={`stat-${index}`}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card */}
              <div className="relative h-full p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-accent/50 transition-all duration-300">
                <div className="space-y-4 lg:space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 lg:w-7 lg:h-7 text-accent" />
                  </div>

                  {/* Number */}
                  <div className="space-y-1 lg:space-y-2">
                    <div className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
                      <span className="counter">0</span>
                      <span>{stat.suffix}</span>
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-white">
                      {stat.label}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed">
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
