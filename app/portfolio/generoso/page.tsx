"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown, Heart, Camera, Gift, Film, Map, Calendar } from "lucide-react";
import Link from "next/link";
import DemoBadge from "@/components/Demobadge";
import { useState } from "react";

const scenarios = [
  { icon: Calendar, title: "Aniversários", description: "Celebre de forma inesquecível" },
  { icon: Heart, title: "Pedidos de Casamento", description: "O cenário perfeito para o sim" },
  { icon: Camera, title: "Ensaios Fotográficos", description: "Fotos únicas e memoráveis" },
  { icon: Map, title: "Passeios", description: "Explore novos caminhos" },
  { icon: Gift, title: "Presente", description: "Surpreenda quem você ama" },
  { icon: Film, title: "Gravações", description: "Produções audiovisuais" },
];

const faqItems = [
  {
    question: "Preciso de habilitação especial?",
    answer: "Não! Basta CNH categoria B (carro). O Can-Am Spyder possui direção assistida e câmbio automático, tornando a pilotagem muito simples e segura.",
  },
  {
    question: "Crianças podem andar?",
    answer: "Sim! No modelo RT, que possui banco traseiro, crianças acima de 7 anos podem ir como passageiras com acompanhante adulto.",
  },
  {
    question: "Como funciona o câmbio?",
    answer: "Totalmente automático! Você só precisa acelerar e frear, como em um carro. Sem embreagem, sem marchas manuais.",
  },
  {
    question: "É seguro?",
    answer: "Muito seguro! O Spyder possui três rodas, controle de estabilidade, ABS, e toda estrutura de um veículo de alta performance. É mais estável que uma moto convencional.",
  },
  {
    question: "Qual a quilometragem incluída?",
    answer: "Nossos pacotes incluem quilometragem livre para você aproveitar sem preocupações. Consulte as condições específicas de cada plano.",
  },
];

const models = [
  {
    name: "Can-Am Spyder RS-S",
    description: "Esportivo, ágil e cheio de personalidade",
    price: "A partir de R$ 650",
    features: ["Motor Rotax 1330 ACE", "Painel digital touchscreen", "2 lugares"],
    image: "https://generosolocacoes.com.br/wp-content/uploads/2024/05/spyder-laranja.jpg",
  },
  {
    name: "Can-Am Spyder RT",
    description: "Conforto premium para longas jornadas",
    price: "A partir de R$ 850",
    features: ["Motor Rotax 1330 ACE", "3 lugares", "Porta-malas integrado"],
    image: "https://generosolocacoes.com.br/wp-content/uploads/2024/05/spyder-preto.jpg",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-white group-hover:text-[#CC9955] transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-6 h-6 text-[#CC9955] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
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

export default function GenerosoShowcase() {
  return (
    <div className="min-h-screen bg-white">
      <DemoBadge />

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-black hover:text-[#FF6B00] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Voltar ao Portfolio</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6 leading-tight">
                Viaje com o conforto e segurança de um carro,{" "}
                <span className="text-[#CC9955]">mas a adrenalina de uma moto</span>
              </h1>
              <p className="text-xl text-black/70 mb-8 leading-relaxed">
                Can-Am Spyder: o único triciclo do Brasil. Uma experiência única
                que combina tecnologia, segurança e emoção em cada quilômetro.
              </p>
              <motion.a
                href="https://wa.me/5511999999999?text=Olá! Gostaria de alugar um Can-Am Spyder"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-4 bg-[#FF6B00] text-white font-bold text-lg rounded-lg hover:bg-[#E65F00] transition-colors shadow-lg"
              >
                Quero Alugar
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="col-span-2">
                <img
                  src="https://generosolocacoes.com.br/wp-content/uploads/2024/05/spyder-laranja.jpg"
                  alt="Can-Am Spyder Laranja"
                  className="w-full h-64 object-cover rounded-lg shadow-xl"
                />
              </div>
              <img
                src="https://generosolocacoes.com.br/wp-content/uploads/2024/05/spyder-estrada.jpg"
                alt="Spyder na estrada"
                className="w-full h-48 object-cover rounded-lg shadow-xl"
              />
              <img
                src="https://generosolocacoes.com.br/wp-content/uploads/2024/05/spyder-preto.jpg"
                alt="Can-Am Spyder Preto"
                className="w-full h-48 object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Não é só um passeio.{" "}
                <span className="text-[#CC9955]">É uma memória pra vida toda.</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Cada curva, cada paisagem, cada momento ao volante do Can-Am Spyder
                se transforma em uma história inesquecível. Não alugamos apenas
                veículos — criamos experiências que ficam para sempre na memória.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-video rounded-lg overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                alt="Spyder vermelho na estrada"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cenários de Uso */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
              Perfeito para <span className="text-[#CC9955]">toda ocasião</span>
            </h2>
            <p className="text-xl text-black/70">
              Do pedido de casamento ao ensaio fotográfico, o Spyder é o cenário ideal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-xl bg-white border-2 border-black/10 hover:border-[#FF6B00] hover:shadow-xl transition-all duration-300"
              >
                <scenario.icon className="w-12 h-12 text-[#CC9955] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-black mb-2">{scenario.title}</h3>
                <p className="text-black/70">{scenario.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelos e Valores */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
              Escolha seu <span className="text-[#CC9955]">Spyder</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {models.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-extrabold text-black mb-2">{model.name}</h3>
                  <p className="text-black/70 mb-4">{model.description}</p>
                  <ul className="space-y-2 mb-6">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-black/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-3xl font-extrabold text-[#CC9955] mb-6">{model.price}</div>
                  <a
                    href="https://wa.me/5511999999999?text=Olá! Gostaria de alugar o Can-Am Spyder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-[#FF6B00] text-white font-bold text-center rounded-lg hover:bg-[#E65F00] transition-colors"
                  >
                    Reserve Sua Experiência
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#2B2B2B]">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Dúvidas <span className="text-[#CC9955]">Frequentes</span>
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

      {/* CTA Final */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=1600')",
          }}
        />

        <div className="relative z-10 container mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Entre em contato e tire suas dúvidas
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Nossa equipe está pronta para criar a experiência perfeita para você
            </p>
            <motion.a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de mais informações"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 bg-[#FF6B00] text-white font-bold text-xl rounded-lg hover:bg-[#E65F00] transition-colors shadow-2xl"
            >
              Falar com Especialista
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black text-white">
        <div className="container mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-extrabold text-[#CC9955] mb-2">
              Generoso Locações
            </h3>
            <p className="text-white/70">Experiências inesquecíveis sobre três rodas</p>
          </div>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-white/70 hover:text-[#FF6B00] transition-colors">
              Instagram
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
                href="https://generosolocacoes.com.br"
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
