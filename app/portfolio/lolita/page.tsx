"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Package, MessageCircle, ChevronDown, Sparkles } from "lucide-react";
import Link from "next/link";
import DemoBadge from "@/components/Demobadge";
import { useState } from "react";

const categories = [
  {
    name: "Linha Office",
    description: "Elegância no trabalho",
    image: "https://lolitacriativa.com.br/wp-content/uploads/2025/07/office-cat.jpg",
  },
  {
    name: "Utilitários",
    description: "Praticidade com estilo",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600",
  },
  {
    name: "Linha Saúde",
    description: "Profissionais da saúde",
    image: "https://lolitacriativa.com.br/wp-content/uploads/2025/07/saude-cat.jpg",
  },
  {
    name: "Kits",
    description: "Conjuntos especiais",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600",
  },
];

const products = [
  {
    name: "Porta Jaleco",
    price: "R$ 189,90",
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600",
  },
  {
    name: "Porta Jaleco Pasta",
    price: "R$ 249,90",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
  },
  {
    name: "Kit Porta Jaleco",
    price: "R$ 329,90",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600",
  },
  {
    name: "Case de Tablet",
    price: "R$ 149,90",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600",
  },
];

const benefits = [
  { icon: ShoppingBag, title: "Compre Online", description: "Fácil e seguro" },
  { icon: Package, title: "Envio Personalizado", description: "Com carinho" },
  { icon: MessageCircle, title: "Dúvidas? WhatsApp", description: "Estamos aqui" },
];

const faqItems = [
  {
    question: "Como funciona a personalização?",
    answer: "Você escolhe o produto, adiciona ao carrinho e, no checkout, nos informa o nome ou iniciais para bordado. Trabalhamos com fontes elegantes e cores que combinam com cada peça.",
  },
  {
    question: "Vocês têm produtos em pronta-entrega?",
    answer: "Sim! Temos uma linha de produtos prontos para envio imediato. Os produtos personalizados levam de 7 a 15 dias úteis para produção.",
  },
  {
    question: "Qual o prazo de produção?",
    answer: "Produtos personalizados: 7 a 15 dias úteis. Produtos em estoque: envio em até 2 dias úteis após confirmação do pagamento.",
  },
  {
    question: "Quais os métodos de envio?",
    answer: "Enviamos via Correios (PAC e SEDEX) para todo o Brasil. Você escolhe a opção no checkout. Frete grátis para compras acima de R$ 300.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#62544C]/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-[#62544C] group-hover:text-[#E9C4B6] transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-6 h-6 text-[#E9C4B6] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-[#62544C]/70 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function LolitaShowcase() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
      <DemoBadge />

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-[#62544C] hover:text-[#E9C4B6] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Voltar ao Portfolio</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-[#FDF5F2]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-[#E9C4B6]" />
                <span className="text-[#62544C]/70 uppercase text-sm tracking-wider">
                  Acessórios Personalizados
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#62544C] mb-6 leading-tight">
                SEU TOQUE DE{" "}
                <span className="text-[#E9C4B6]">EXCLUSIVIDADE</span>
              </h1>
              <p className="text-xl text-[#62544C]/70 mb-8 leading-relaxed">
                Personalizamos cada peça com carinho e sofisticação. Acessórios
                únicos que refletem sua personalidade e profissionalismo.
              </p>
              <motion.a
                href="#categorias"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-4 bg-[#E9C4B6] text-[#62544C] font-semibold text-lg rounded-full hover:bg-[#d9b4a6] transition-colors shadow-lg"
              >
                COMPRE AGORA
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800"
                  alt="Produtos Personalizados"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categorias" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#62544C] mb-4">
              Nossas <span className="text-[#E9C4B6]">Coleções</span>
            </h2>
            <p className="text-xl text-[#62544C]/70">
              Escolha a linha perfeita para você
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#62544C]/20 group-hover:bg-[#62544C]/10 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#62544C] mb-1">{category.name}</h3>
                <p className="text-[#62544C]/60">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-4 bg-[#FDF5F2]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#62544C] mb-4">
              Mais <span className="text-[#E9C4B6]">Vendidos</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#62544C] mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-[#E9C4B6] mb-4">{product.price}</p>
                  <button className="w-full py-3 bg-[#E9C4B6] text-[#62544C] font-semibold rounded-full hover:bg-[#d9b4a6] transition-colors">
                    Ver Opções
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coupon Banner */}
      <section className="py-16 px-4 bg-[#E9C4B6]">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-[#62544C] mb-4">
              Cupom de 1ª Compra
            </h3>
            <div className="inline-block px-8 py-4 bg-white rounded-full">
              <code className="text-2xl font-bold text-[#E9C4B6]">BEM-VINDO5</code>
            </div>
            <p className="mt-4 text-[#62544C]/80">5% de desconto na sua primeira compra</p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#62544C] mb-6">
              Quem <span className="text-[#E9C4B6]">Somos</span>
            </h2>
            <p className="text-lg text-[#62544C]/70 leading-relaxed mb-8">
              A Lolita Criativa nasceu em 2018 do sonho de criar acessórios que
              combinassem elegância, funcionalidade e personalização. Cada peça é
              desenvolvida com carinho para profissionais que valorizam sofisticação
              e exclusividade no dia a dia.
            </p>
            <div className="space-y-6">
              <div className="p-6 bg-[#FDF5F2] rounded-2xl">
                <p className="text-[#62544C]/80 italic">
                  &ldquo;Produtos de qualidade excepcional! A personalização ficou perfeita
                  e o acabamento é impecável.&rdquo;
                </p>
                <p className="mt-4 font-semibold text-[#E9C4B6]">— Natália Melcop</p>
              </div>
              <div className="p-6 bg-[#FDF5F2] rounded-2xl">
                <p className="text-[#62544C]/80 italic">
                  &ldquo;Amei meu porta-jaleco! Além de lindo, é super prático. Recomendo!&rdquo;
                </p>
                <p className="mt-4 font-semibold text-[#E9C4B6]">
                  — Giulianna Lima Pinheiro
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-[#FDF5F2]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-[#E9C4B6]" />
                <h3 className="text-xl font-bold text-[#62544C] mb-2">{benefit.title}</h3>
                <p className="text-[#62544C]/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#62544C] mb-4">
              Perguntas <span className="text-[#E9C4B6]">Frequentes</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {faqItems.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-[#E9C4B6]">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#62544C] mb-4">
              Participe da Nossa Lista
            </h2>
            <p className="text-lg text-[#62544C]/80 mb-8">
              Receba novidades, promoções exclusivas e cupons especiais
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-6 py-4 rounded-full text-[#62544C] placeholder:text-[#62544C]/40 focus:outline-none focus:ring-2 focus:ring-[#62544C]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-10 py-4 bg-[#62544C] text-white font-semibold rounded-full hover:bg-[#52443c] transition-colors"
              >
                PARTICIPAR
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-[#62544C] text-white">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-[#E9C4B6] mb-2">Lolita Criativa</h3>
            <p className="text-white/70">Seu toque de exclusividade</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-white/70 hover:text-[#E9C4B6] transition-colors">
              Instagram
            </a>
            <a href="#" className="text-white/70 hover:text-[#E9C4B6] transition-colors">
              TikTok
            </a>
            <a href="#" className="text-white/70 hover:text-[#E9C4B6] transition-colors">
              Facebook
            </a>
            <a href="#" className="text-white/70 hover:text-[#E9C4B6] transition-colors">
              Pinterest
            </a>
          </div>
          <div className="text-sm text-white/50">
            <p className="mt-2">
              Redesign demonstrativo por{" "}
              <Link href="/" className="text-[#3b82f6] hover:underline">
                SLAN Design
              </Link>
            </p>
            <p className="mt-2">
              <a
                href="https://lolitacriativa.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white"
              >
                Ver site original →
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
