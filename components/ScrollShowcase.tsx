"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&q=80",
    title: "Sites Ultra-Rápidos",
    description: "Seu site carrega instantaneamente. Visitantes não esperam, eles compram. Performance que realmente vende.",
    stat: "3x",
    label: "Mais conversões"
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&q=80",
    title: "Automatize Tudo",
    description: "Pare de fazer trabalho manual. Conecte seus sistemas e deixe a tecnologia trabalhar por você 24/7.",
    stat: "80%",
    label: "Menos trabalho repetitivo"
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&q=80",
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

    // Only pin on desktop (lg breakpoint = 1024px)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Pin the image while text scrolls (desktop only)
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
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative lg:min-h-[300vh] bg-background py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Fixed Image Side - Hidden on mobile */}
          <div
            ref={imageRef}
            className="hidden lg:flex lg:sticky lg:top-32 h-auto lg:h-screen items-center justify-center"
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
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
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
