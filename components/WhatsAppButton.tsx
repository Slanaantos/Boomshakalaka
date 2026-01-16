"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "5511999999999";
  const defaultMessage = "Olá! Gostaria de saber mais sobre os serviços da SLAN Design.";

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Floating Button */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative group"
              aria-label="WhatsApp"
            >
              {/* Pulse animation */}
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />

              {/* Main button */}
              <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110">
                {isOpen ? (
                  <X className="w-8 h-8 text-white" />
                ) : (
                  <MessageCircle className="w-8 h-8 text-white" />
                )}
              </div>
            </button>
          </motion.div>

          {/* Chat Popup */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                className="fixed bottom-28 right-6 z-50 w-80"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  {/* Header */}
                  <div className="bg-green-500 p-4 text-white">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold">SLAN Design</h4>
                        <p className="text-sm text-white/90">Online - responde rápido</p>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="bg-card p-4 space-y-3">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <p className="text-white/80 text-sm">
                        Olá! 👋
                      </p>
                      <p className="text-white/80 text-sm mt-2">
                        Como podemos ajudar você a transformar sua operação digital?
                      </p>
                    </div>

                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-4 py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold text-center transition-colors duration-200"
                    >
                      Iniciar Conversa
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
