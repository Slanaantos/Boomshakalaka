"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, UtensilsCrossed, Clock, MapPin, Phone, Wine, ChefHat, Heart, Star, Calendar } from "lucide-react";
import Link from "next/link";
import DemoBadge from "@/components/Demobadge";
import { useRef, useState } from "react";

const dishes = [
  {
    name: "Risotto ai Funghi Porcini",
    description: "Risoto cremoso com cogumelos porcini frescos e parmigiano reggiano",
    price: "R$ 89",
    category: "Primi Piatti",
    image: "https://images.unsplash.com/photo-1476124369491-c7addf2dd4a6?w=800&h=600&fit=crop"
  },
  {
    name: "Ossobuco alla Milanese",
    description: "Ossobuco lentamente cozido ao vinho branco com gremolata",
    price: "R$ 125",
    category: "Secondi Piatti",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop"
  },
  {
    name: "Fettuccine al Tartufo Nero",
    description: "Massa fresca com trufas negras e manteiga de sálvia",
    price: "R$ 145",
    category: "Primi Piatti",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop"
  },
  {
    name: "Branzino al Forno",
    description: "Robalo mediterrâneo assado com ervas frescas e limão siciliano",
    price: "R$ 135",
    category: "Secondi Piatti",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&h=600&fit=crop"
  },
  {
    name: "Tiramisu Classico",
    description: "Sobremesa tradicional com café espresso e mascarpone",
    price: "R$ 35",
    category: "Dolci",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&h=600&fit=crop"
  },
  {
    name: "Panna Cotta ai Frutti di Bosco",
    description: "Creme de baunilha com calda de frutas vermelhas",
    price: "R$ 32",
    category: "Dolci",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=600&fit=crop"
  },
];

const wines = [
  {
    name: "Chianti Classico DOCG",
    region: "Toscana",
    year: "2020",
    price: "R$ 185",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=600&fit=crop"
  },
  {
    name: "Barolo Riserva DOCG",
    region: "Piemonte",
    year: "2018",
    price: "R$ 425",
    image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=400&h=600&fit=crop"
  },
  {
    name: "Prosecco Superiore DOC",
    region: "Veneto",
    year: "2022",
    price: "R$ 145",
    image: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=400&h=600&fit=crop"
  },
];

const ambiance = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop",
];

const features = [
  {
    icon: ChefHat,
    title: "Chef Italiano",
    description: "Autêntica cozinha italiana por chef napolitano"
  },
  {
    icon: Wine,
    title: "Adega Selecionada",
    description: "Mais de 200 rótulos importados da Itália"
  },
  {
    icon: Heart,
    title: "Ambiente Romântico",
    description: "Perfeito para ocasiões especiais"
  },
  {
    icon: UtensilsCrossed,
    title: "Ingredientes Premium",
    description: "Produtos importados e frescos diariamente"
  },
];

const testimonials = [
  {
    name: "Julia Almeida",
    text: "Experiência gastronômica impecável! Me senti na Itália. O risotto estava divino!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=47"
  },
  {
    name: "Ricardo Fonseca",
    text: "Melhor restaurante italiano de São Paulo. Atendimento excepcional e pratos autênticos.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=13"
  },
  {
    name: "Mariana Costa",
    text: "Ambiente acolhedor e comida maravilhosa. O tiramisu é o melhor que já provei!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=23"
  },
];

function MenuCategory({ category, items }: { category: string; items: typeof dishes }) {
  return (
    <div className="mb-16">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-amber-600 mb-8 font-serif"
      >
        {category}
      </motion.h3>
      <div className="space-y-6">
        {items.map((dish, index) => (
          <motion.div
            key={dish.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ x: 10 }}
            className="border-b border-amber-600/20 pb-6"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold text-stone-800">{dish.name}</h4>
              <span className="text-xl font-bold text-amber-700">{dish.price}</span>
            </div>
            <p className="text-stone-600 italic">{dish.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function BellaTavolaShowcase() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <div className="min-h-screen bg-amber-50">
      <DemoBadge />

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6 relative z-50">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-stone-800 hover:text-amber-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Voltar ao Portfolio</span>
        </Link>
      </div>

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-amber-50" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <UtensilsCrossed className="w-16 h-16 mx-auto mb-6 text-amber-400" />
              <h1 className="text-6xl md:text-8xl font-bold mb-6 font-serif tracking-wide">
                Bella Tavola
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl md:text-3xl font-light mb-4 italic"
            >
              Cucina Italiana Autentica
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl mb-12 text-white/90 flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Jardins, São Paulo
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(217, 119, 6, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-amber-600 text-white font-semibold text-lg tracking-wider hover:bg-amber-700 transition-all duration-300 shadow-2xl"
            >
              Reservar Mesa
            </motion.button>
          </motion.div>
        </div>

        {/* Decorative floating elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-20 opacity-20"
        >
          <Wine className="w-24 h-24 text-white" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-20 opacity-20"
        >
          <ChefHat className="w-20 h-20 text-white" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6 font-serif">
                Uma Viagem à
                <br />
                <span className="text-amber-600">Toscana</span>
              </h2>
              <p className="text-xl text-stone-600 mb-6 leading-relaxed">
                No Bella Tavola, cada prato conta uma história. Nossa cozinha celebra
                a tradição italiana com ingredientes cuidadosamente selecionados e
                receitas passadas de geração em geração.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Sob o comando do Chef Giovanni Rossi, direto de Nápoles, oferecemos
                uma experiência gastronômica autêntica que transporta você para o
                coração da Itália.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=800&fit=crop"
                  alt="Chef preparando pasta"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-8 rounded-xl shadow-xl"
              >
                <p className="text-4xl font-bold mb-1">15+</p>
                <p className="text-sm">Anos de Tradição</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-32 px-4 bg-stone-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-stone-800 mb-6 font-serif">
              Nossos <span className="text-amber-600">Pratos Especiais</span>
            </h2>
            <p className="text-xl text-stone-600">
              Sabores autênticos que conquistam paladares
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dishes.map((dish, index) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-amber-600 text-white text-sm font-semibold rounded-full">
                    {dish.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-800 mb-2">{dish.name}</h3>
                  <p className="text-stone-600 mb-4 italic text-sm">{dish.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-700">{dish.price}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-amber-600 text-white text-sm font-semibold rounded-lg hover:bg-amber-700 transition-colors"
                    >
                      Pedir
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Selection */}
      <section className="py-32 px-4 bg-gradient-to-b from-stone-900 to-stone-800 text-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <Wine className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
              Carta de <span className="text-amber-400">Vinhos</span>
            </h2>
            <p className="text-xl text-white/80">
              Seleção exclusiva de vinhedos italianos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {wines.map((wine, index) => (
              <motion.div
                key={wine.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-stone-950 p-8 rounded-2xl border-2 border-amber-600/30 hover:border-amber-600 transition-all"
              >
                <div className="aspect-[2/3] mb-6 overflow-hidden rounded-lg">
                  <img
                    src={wine.image}
                    alt={wine.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-amber-400">{wine.name}</h3>
                <p className="text-white/70 mb-1">{wine.region} • {wine.year}</p>
                <p className="text-3xl font-bold text-white mt-4">{wine.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-4 bg-white">
        <div className="container mx-auto">
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
                  <feature.icon className="w-16 h-16 mx-auto text-amber-600" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-stone-800">{feature.title}</h3>
                <p className="text-stone-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance Gallery */}
      <section className="py-32 px-4 bg-stone-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6 font-serif">
              Nosso <span className="text-amber-600">Ambiente</span>
            </h2>
            <p className="text-xl text-stone-600">
              Um espaço acolhedor para momentos inesquecíveis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {ambiance.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Ambiente ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6 font-serif">
              O Que Dizem <span className="text-amber-600">Nossos Clientes</span>
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
                className="bg-amber-50 p-8 rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-stone-800">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-stone-700 italic">&ldquo;{testimonial.text}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="relative py-40 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/90 to-stone-800/95" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920')"
          }}
        />

        <div className="relative z-10 container mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 font-serif">
              Reserve Sua Mesa
            </h2>
            <p className="text-2xl mb-4">
              <Clock className="w-6 h-6 inline mr-2" />
              Terça a Domingo, 18h às 23h
            </p>
            <p className="text-xl mb-12 text-white/80">
              <Phone className="w-5 h-5 inline mr-2" />
              (11) 3456-7890
            </p>
            <motion.a
              href="https://wa.me/5511987654321?text=Olá! Gostaria de fazer uma reserva no Bella Tavola"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(217, 119, 6, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-12 py-6 bg-amber-600 text-white font-bold text-xl tracking-wider hover:bg-amber-700 transition-all duration-300 shadow-2xl rounded-lg"
            >
              <Calendar className="w-6 h-6" />
              Fazer Reserva
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-stone-950 text-white">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <UtensilsCrossed className="w-12 h-12 mx-auto mb-4 text-amber-400" />
            <h3 className="text-4xl font-bold mb-2 font-serif">
              Bella Tavola
            </h3>
            <p className="text-white/70">Cucina Italiana Autentica</p>
          </div>

          <div className="mb-8">
            <p className="text-white/80 mb-2">Rua Haddock Lobo, 1234 - Jardins, São Paulo</p>
            <p className="text-white/80">Terça a Domingo, 18h às 23h</p>
          </div>

          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="text-white/70 hover:text-amber-400 transition-colors">Instagram</a>
            <a href="#" className="text-white/70 hover:text-amber-400 transition-colors">Facebook</a>
            <a href="#" className="text-white/70 hover:text-amber-400 transition-colors">TripAdvisor</a>
          </div>

          <div className="text-sm text-white/50">
            <p>Projeto fictício demonstrativo por{" "}
              <Link href="/" className="text-amber-400 hover:underline">
                SLAN Design
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
