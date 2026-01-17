"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Mountain, Bike, Calendar, Shield, Users, MapPin, Clock, Trophy, Camera } from "lucide-react";
import Link from "next/link";
import PortfolioBanner from "@/components/PortfolioBanner";
import { useRef, useState } from "react";

const tours = [
  {
    title: "Aventura Buggy Extrema",
    duration: "3 horas",
    difficulty: "Médio/Alto",
    price: "R$ 450",
    image: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&h=600&fit=crop",
    description: "Trilhas off-road intensas pela Cuesta de Botucatu",
    highlights: ["12km de trilha", "Vistas panorâmicas", "Guia experiente"]
  },
  {
    title: "Passeio Quadriciclo",
    duration: "2 horas",
    difficulty: "Iniciante/Médio",
    price: "R$ 350",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    description: "Explore a natureza em um quadriciclo potente",
    highlights: ["8km de percurso", "Mata atlântica", "Fotos inclusas"]
  },
  {
    title: "Trilha de Moto Adventure",
    duration: "4 horas",
    difficulty: "Avançado",
    price: "R$ 550",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop",
    description: "Para pilotos experientes que buscam adrenalina",
    highlights: ["18km técnicos", "Terreno variado", "Café da manhã"]
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?w=600&h=600&fit=crop",
];

const features = [
  { icon: Shield, title: "Segurança Total", description: "Equipamentos de proteção completos" },
  { icon: Users, title: "Guias Experientes", description: "Mais de 10 anos de experiência" },
  { icon: MapPin, title: "Localização Privilegiada", description: "Melhor vista da Cuesta" },
  { icon: Camera, title: "Fotos Profissionais", description: "Registre cada momento" },
];

const testimonials = [
  {
    name: "Carlos Mendes",
    text: "Experiência incrível! A adrenalina foi indescritível. Voltarei com certeza!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Marina Silva",
    text: "Passeio seguro e emocionante. Os guias são muito atenciosos e profissionais.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Roberto Lima",
    text: "Paisagens de tirar o fôlego! Melhor passeio off-road que já fiz.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=33"
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-orange-500/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Mountain className="w-6 h-6 text-orange-500" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-white/70 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function CuestaAdventureShowcase() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <div className="min-h-screen bg-stone-950 text-white">
      <PortfolioBanner />

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-24 pb-6 relative z-40">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Voltar ao Portfolio</span>
        </Link>
      </div>

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?w=1920')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-stone-950" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Mountain className="w-20 h-20 mx-auto mb-6 text-orange-500" />
              <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
                CUESTA
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
                  ADVENTURE
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-3xl font-light mb-4 text-white/90"
            >
              Adrenalina e natureza na Cuesta de Botucatu
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl mb-12 text-white/70 flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Interior de São Paulo
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(249, 115, 22, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold text-lg uppercase tracking-wider hover:from-orange-700 hover:to-amber-600 transition-all duration-300 shadow-2xl"
            >
              Reserve Sua Aventura
            </motion.button>
          </motion.div>
        </div>

        {/* Animated particles */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-20 left-1/4 w-2 h-2 bg-orange-500 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute bottom-32 right-1/3 w-3 h-3 bg-amber-400 rounded-full"
        />
      </section>

      {/* Tours Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-stone-950 to-stone-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              NOSSOS <span className="text-orange-500">PASSEIOS</span>
            </h2>
            <p className="text-xl text-white/70">
              Escolha sua dose de adrenalina
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <motion.div
                key={tour.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)" }}
                className="bg-stone-900 rounded-2xl overflow-hidden border-2 border-stone-800 hover:border-orange-500 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-4 right-4 px-4 py-2 bg-orange-600 text-white font-bold rounded-full">
                    {tour.difficulty}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black mb-3 text-white">{tour.title}</h3>
                  <p className="text-white/70 mb-6">{tour.description}</p>

                  <div className="flex items-center gap-4 mb-6 text-white/80">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-orange-500" />
                      <span className="text-sm">{tour.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {tour.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-white/70">
                        <Bike className="w-4 h-4 text-orange-500" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm text-white/50 mb-1">Por pessoa</p>
                      <p className="text-3xl font-black text-orange-500">{tour.price}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold rounded-lg hover:from-orange-700 hover:to-amber-600 transition-all"
                    >
                      Reservar
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 bg-stone-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              POR QUE ESCOLHER A <span className="text-orange-500">CUESTA ADVENTURE</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <feature.icon className="w-16 h-16 mx-auto text-orange-500" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 px-4 bg-stone-950">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              GALERIA DE <span className="text-orange-500">AVENTURAS</span>
            </h2>
            <p className="text-xl text-white/70">
              Veja nossos clientes em ação
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="aspect-square overflow-hidden rounded-xl cursor-pointer relative group"
              >
                <img
                  src={image}
                  alt={`Adventure ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent flex items-end justify-center pb-6"
                >
                  <Camera className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 bg-stone-900">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              O QUE DIZEM <span className="text-orange-500">NOSSOS CLIENTES</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-stone-950 p-8 rounded-2xl border-2 border-stone-800 hover:border-orange-500 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Trophy key={i} className="w-4 h-4 text-orange-500 fill-orange-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-white/70 italic">&ldquo;{testimonial.text}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4 bg-stone-950">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              DÚVIDAS <span className="text-orange-500">FREQUENTES</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <FAQItem
              question="Preciso ter experiência prévia?"
              answer="Não! Oferecemos passeios para todos os níveis, de iniciantes a experientes. Nossos guias darão toda instrução necessária antes do passeio."
            />
            <FAQItem
              question="Qual a idade mínima?"
              answer="A idade mínima é 16 anos para pilotar e 8 anos para ir como passageiro (acompanhado de um adulto). Menores de 18 anos precisam de autorização dos pais."
            />
            <FAQItem
              question="O que está incluso no passeio?"
              answer="Todos os passeios incluem: equipamentos de segurança completos (capacete, luvas, joelheiras), guia especializado, seguro, água mineral e fotos profissionais."
            />
            <FAQItem
              question="Posso cancelar minha reserva?"
              answer="Sim! Cancelamentos com até 48h de antecedência têm reembolso total. Entre 24h e 48h, reembolso de 50%. Menos de 24h não há reembolso."
            />
            <FAQItem
              question="Qual a melhor época para visitar?"
              answer="Os passeios acontecem o ano todo! Porém, a época mais seca (abril a setembro) oferece trilhas em melhores condições. Sempre verificamos a previsão do tempo."
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-40 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/80 to-stone-950/90" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1920')"
          }}
        />

        <div className="relative z-10 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-white">
              PRONTO PARA A AVENTURA?
            </h2>
            <p className="text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
              Entre em contato pelo WhatsApp e garanta sua vaga nos melhores passeios off-road do interior de SP
            </p>
            <motion.a
              href="https://wa.me/5514999999999?text=Olá! Quero reservar um passeio na Cuesta Adventure!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(249, 115, 22, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-bold text-xl uppercase tracking-wider hover:from-orange-700 hover:to-amber-600 transition-all duration-300 shadow-2xl rounded-lg"
            >
              <Calendar className="w-6 h-6" />
              Agendar Agora
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-stone-950 border-t border-orange-500/20">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Mountain className="w-12 h-12 mx-auto mb-4 text-orange-500" />
            <h3 className="text-4xl font-black mb-2 text-white">
              CUESTA <span className="text-orange-500">ADVENTURE</span>
            </h3>
            <p className="text-white/50">Adrenalina e natureza na Cuesta de Botucatu</p>
          </div>

          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="text-white/70 hover:text-orange-500 transition-colors">Instagram</a>
            <a href="#" className="text-white/70 hover:text-orange-500 transition-colors">Facebook</a>
            <a href="#" className="text-white/70 hover:text-orange-500 transition-colors">YouTube</a>
            <a href="#" className="text-white/70 hover:text-orange-500 transition-colors">TripAdvisor</a>
          </div>

          <div className="text-sm text-white/50">
            <p>Projeto fictício demonstrativo por{" "}
              <Link href="/" className="text-orange-500 hover:underline">
                SLAN Design
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
