"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Zap, Layers } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Code2,
    title: "Sites Ultra-Rápidos",
    description: "Seu site carrega instantaneamente. Visitantes não esperam, eles compram. Performance que realmente vende.",
    stat: "3x",
    label: "Mais conversões"
  },
  {
    icon: Zap,
    title: "Automatize Tudo",
    description: "Pare de fazer trabalho manual. Conecte seus sistemas e deixe a tecnologia trabalhar por você 24/7.",
    stat: "80%",
    label: "Menos trabalho repetitivo"
  },
  {
    icon: Layers,
    title: "Pronto Para Crescer",
    description: "Seu negócio vai explodir? Sua tecnologia está pronta. De 10 a 10.000 clientes sem reescrever tudo.",
    stat: "10x",
    label: "Capacidade de escala"
  }
];

export default function ScrollShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;

    if (!section || !image) return;

    // Pin the image while text scrolls
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      pin: image,
      pinSpacing: false,
    });

    // Animate each feature
    features.forEach((_, index) => {
      const featureElement = section.querySelector(`#feature-${index}`);

      gsap.timeline({
        scrollTrigger: {
          trigger: featureElement,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          onEnter: () => {
            // Change image opacity/scale based on active feature
            gsap.to(image, {
              scale: 1.05,
              duration: 0.6,
              ease: "power2.out"
            });
          },
          onLeave: () => {
            gsap.to(image, {
              scale: 1,
              duration: 0.6,
              ease: "power2.out"
            });
          }
        }
      })
      .fromTo(featureElement,
        { opacity: 0.3, x: -50 },
        { opacity: 1, x: 0, duration: 1 }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative lg:min-h-[300vh] bg-background py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Fixed Image Side */}
          <div
            ref={imageRef}
            className="lg:sticky lg:top-32 h-auto lg:h-screen flex items-center justify-center mb-12 lg:mb-0"
          >
            <div className="relative w-full max-w-lg">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent/20 to-blue-500/20 backdrop-blur-xl border border-white/10 flex items-center justify-center overflow-hidden">
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-blue-500/10 animate-pulse" />

                {/* Center Icon/Graphic */}
                <div className="relative z-10 text-center space-y-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center">
                    <Code2 className="w-16 h-16 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-white">SLAN Design</h3>
                    <p className="text-white/60">Código que Transforma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Content Side */}
          <div className="space-y-16 lg:space-y-[50vh] lg:py-32">
            {features.map((feature, index) => (
              <div
                key={index}
                id={`feature-${index}`}
                className="space-y-4 lg:space-y-6"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-blue-500/20 border border-white/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 lg:w-8 lg:h-8 text-accent" />
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {feature.title}
                </h3>

                <p className="text-lg lg:text-xl text-white/60 leading-relaxed">
                  {feature.description}
                </p>

                <div className="pt-4 lg:pt-6 border-t border-white/10">
                  <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
                    {feature.stat}
                  </div>
                  <p className="text-white/40 text-sm mt-2">{feature.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
