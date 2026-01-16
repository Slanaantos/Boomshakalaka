"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ShoppingBag, Star, Truck, Heart, Instagram, TrendingUp } from "lucide-react";
import Link from "next/link";
import DemoBadge from "@/components/Demobadge";
import { useRef } from "react";

const products = [
  {
    name: "Oversized Hoodie Black",
    price: "R$ 249,90",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop",
    badge: "Best Seller",
    category: "Hoodies"
  },
  {
    name: "Vintage Denim Jacket",
    price: "R$ 389,90",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
    badge: "New",
    category: "Jackets"
  },
  {
    name: "Cargo Pants Olive",
    price: "R$ 279,90",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop",
    badge: "",
    category: "Pants"
  },
  {
    name: "Graphic Tee White",
    price: "R$ 129,90",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
    badge: "Limited",
    category: "Tees"
  },
  {
    name: "High Top Sneakers",
    price: "R$ 549,90",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop",
    badge: "Hot",
    category: "Footwear"
  },
  {
    name: "Bucket Hat Black",
    price: "R$ 89,90",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop",
    badge: "",
    category: "Accessories"
  },
];

const collections = [
  {
    title: "Urban Essentials",
    description: "Peças clássicas do streetwear reimaginadas",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop"
  },
  {
    title: "Night Moves",
    description: "Looks ousados para a noite urbana",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea8f7e2d?w=800&h=1000&fit=crop"
  },
  {
    title: "Street Culture",
    description: "Inspiração nas ruas das grandes metrópoles",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=1000&fit=crop"
  },
];

const benefits = [
  { icon: Truck, text: "Frete Grátis", subtext: "Acima de R$ 299" },
  { icon: Star, text: "Qualidade Premium", subtext: "Tecidos importados" },
  { icon: Heart, text: "Satisfação Garantida", subtext: "30 dias para troca" },
  { icon: TrendingUp, text: "Drops Semanais", subtext: "Novas coleções" },
];

export default function UrbanStyleShowcase() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="min-h-screen bg-black text-white">
      <DemoBadge />

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6 relative z-50">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-white hover:text-yellow-400 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Voltar ao Portfolio</span>
        </Link>
      </div>

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, scale, opacity }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter">
              URBAN
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                STYLE
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl font-light mb-12 text-white/90"
          >
            Streetwear que define tendências
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 191, 36, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg uppercase tracking-wider hover:from-yellow-500 hover:to-orange-600 transition-all duration-300"
          >
            Shop Now
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Collections */}
      <section className="py-32 px-4 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              COLEÇÕES EM DESTAQUE
            </h2>
            <p className="text-xl text-white/70">
              Explore nossos drops mais recentes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <motion.img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
                  />
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="absolute bottom-0 left-0 right-0 p-8"
                >
                  <h3 className="text-2xl font-black mb-2">{collection.title}</h3>
                  <p className="text-white/80 mb-4">{collection.description}</p>
                  <button className="px-6 py-2 border-2 border-white text-white font-bold hover:bg-white hover:text-black transition-all">
                    EXPLORAR
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-32 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              BEST SELLERS
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-zinc-800 mb-4">
                  {product.badge && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold uppercase"
                    >
                      {product.badge}
                    </motion.div>
                  )}

                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-6"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-white text-black font-bold uppercase text-sm hover:bg-yellow-400 transition-colors"
                    >
                      <ShoppingBag className="w-4 h-4 inline mr-2" />
                      Add to Cart
                    </motion.button>
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-white/50 uppercase tracking-wider">{product.category}</p>
                  <h3 className="text-lg font-bold group-hover:text-yellow-400 transition-colors">{product.name}</h3>
                  <motion.p
                    whileHover={{ scale: 1.05, color: "#fbbf24" }}
                    className="text-xl font-black"
                  >
                    {product.price}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-32 px-4 bg-black">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Autenticidade
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  sem limites
                </span>
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Nascemos nas ruas, crescemos com a cultura urbana. Cada peça é desenhada
                para quem não tem medo de se expressar e criar seu próprio estilo.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                URBAN STYLE é mais que uma marca de roupas. É um movimento que celebra
                a individualidade, a criatividade e a liberdade de ser quem você é.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="aspect-square overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop"
                  alt="Urban culture"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="aspect-square overflow-hidden mt-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1495555961986-6d4c2c4c7b8b?w=400&h=400&fit=crop"
                  alt="Street style"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <benefit.icon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                </motion.div>
                <p className="text-white font-bold mb-1">{benefit.text}</p>
                <p className="text-white/50 text-sm">{benefit.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-32 px-4 bg-black">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Instagram className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              #URBANSTYLE
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Mostre seu estilo e seja destaque na nossa galeria
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-white text-white font-bold uppercase hover:bg-white hover:text-black transition-all"
            >
              Seguir no Instagram
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-4 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              FIQUE POR DENTRO
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Inscreva-se e ganhe 10% OFF na primeira compra + acesso antecipado aos drops
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-6 py-4 bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-yellow-400 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(251, 191, 36, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold uppercase hover:from-yellow-500 hover:to-orange-600 transition-all"
              >
                Inscrever
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-black border-t border-white/10">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-4xl font-black mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                URBAN STYLE
              </span>
            </h3>
            <p className="text-white/50">Streetwear que define tendências</p>
          </div>

          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors">Instagram</a>
            <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors">TikTok</a>
            <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors">Twitter</a>
            <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors">YouTube</a>
          </div>

          <div className="text-sm text-white/50">
            <p>Projeto fictício demonstrativo por{" "}
              <Link href="/" className="text-yellow-400 hover:underline">
                SLAN Design
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
