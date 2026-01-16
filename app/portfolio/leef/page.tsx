"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ShoppingBag, Package, Leaf, Sparkles } from "lucide-react";
import Link from "next/link";
import DemoBadge from "@/components/Demobadge";
import { useRef } from "react";

const products = [
  {
    name: "Be Leef College Hat",
    price: "R$ 89,90",
    image: "https://leefalive.com/wp-content/uploads/2025/09/BONE-PRETO.png",
  },
  {
    name: "Gorro Pescador Basic",
    price: "R$ 79,90",
    image: "https://leefalive.com/wp-content/uploads/2023/12/GORRO-PESCADOR.png",
  },
  {
    name: "Camiseta Basic Black",
    price: "R$ 69,90",
    image: "https://leefalive.com/wp-content/uploads/2025/09/CAMISETA-PRETA.png",
  },
  {
    name: "Camiseta Basic Off-White",
    price: "R$ 69,90",
    image: "https://leefalive.com/wp-content/uploads/2025/09/CAMISETA-OFF-WHITE.png",
  },
  {
    name: "Bermuda Basic Off-White",
    price: "R$ 129,90",
    image: "https://leefalive.com/wp-content/uploads/2025/09/BERMUDA-OFF-768x1024.jpg",
  },
  {
    name: "Bermuda Basic Black",
    price: "R$ 129,90",
    image: "https://leefalive.com/wp-content/uploads/2025/09/BERMUDA-PRETA-768x1024.jpg",
  },
];

const benefits = [
  { icon: Package, text: "Frete Grátis" },
  { icon: ShoppingBag, text: "3x Sem Juros" },
  { icon: Leaf, text: "Meio Ambiente" },
  { icon: Sparkles, text: "Embalagem Especial" },
];

export default function LeefShowcase() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <div className="min-h-screen bg-[#F9F5EE]">
      <DemoBadge />

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-black hover:text-[#1A4242] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Voltar ao Portfolio</span>
        </Link>
      </div>

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-[url('https://leefalive.com/wp-content/uploads/2025/09/banner-site.jpg')] bg-cover bg-center"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            Verão 2025
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8">Coleção Basics</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#1A4242] text-white font-semibold text-lg rounded-none hover:bg-[#143535] transition-colors"
          >
            SHOP NOW
          </motion.button>
        </motion.div>
      </section>

      {/* Manifesto */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Conforto Diante Do Espelho
            </h2>
            <p className="text-lg text-black/70 leading-relaxed">
              Um sonho de criança que se tornou realidade. Em 2015, nasceu a ideia,
              e em 2021, o LEEF ganhou vida. Moda básica, atemporal e sustentável
              para quem valoriza conforto e estilo sem abrir mão da consciência ambiental.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-black text-center mb-16"
          >
            Coleção Atual
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#F9F5EE] mb-4 rounded-lg shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-[#1A4242] transition-colors">{product.name}</h3>
                <motion.p
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                  className="text-xl font-bold text-[#1A4242]"
                >
                  {product.price}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Basics Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Comece pelo Básico
              </h2>
              <p className="text-lg text-black/70 mb-8 leading-relaxed">
                Versáteis, atemporais e indispensáveis. Nossas peças básicas são
                o alicerce de qualquer guarda-roupa. Conforto e estilo que
                acompanham você em todos os momentos.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-[#1A4242] text-white font-semibold text-lg rounded-none hover:bg-[#143535] transition-colors"
              >
                SHOP NOW
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-square bg-gray-200 rounded-none overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800"
                alt="Basics Collection"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 px-4 bg-[#1A4242] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Leaf className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Um Meio de Cuidar
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Nossos processos são pensados para minimizar o impacto ambiental.
              Usamos materiais sustentáveis, embalagens recicláveis e práticas
              conscientes em toda a cadeia de produção. Moda que cuida de você
              e do planeta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              PARTICIPE DO MOVIMENTO
            </h2>
            <p className="text-lg text-black/70 mb-8">
              Cadastre-se e ganhe desconto na primeira compra
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-6 py-4 border-2 border-black text-black placeholder:text-black/40 focus:outline-none focus:border-[#1A4242]"
              />
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full px-6 py-4 border-2 border-black text-black placeholder:text-black/40 focus:outline-none focus:border-[#1A4242]"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-10 py-4 bg-[#1A4242] text-white font-semibold text-lg hover:bg-[#143535] transition-colors"
              >
                QUERO MEU DESCONTO!
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-[#F9F5EE]">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-[#1A4242]" />
                <p className="text-black font-semibold">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-2">leef</h3>
            <p className="text-white/70">Conforto Diante Do Espelho</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Facebook
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              Spotify
            </a>
          </div>
          <div className="text-sm text-white/50">
            <p>Um sonho que se tornou realidade</p>
            <p className="mt-2">
              Redesign demonstrativo por{" "}
              <Link href="/" className="text-[#3b82f6] hover:underline">
                SLAN Design
              </Link>
            </p>
            <p className="mt-2">
              <a href="https://leefalive.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                Ver site original →
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
