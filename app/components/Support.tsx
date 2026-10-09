"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LETTER_DELAY = 0.025;
const SWAP_DELAY_IN_MS = 5500;

interface TypewriteProps {
  examples: string[];
}

export const SupportSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden text-white py-10" style={{backgroundColor : "#8BBB44"}}>
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-[#5CB85C] via-[#8BBB44] to-[#B2D235] opacity-20"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      <div className="relative container mx-auto text-center px-6">
        
        <motion.h3
          className="font-bold mb-4 text-3xl md:text-4xl tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Besoin d’aide ?
        </motion.h3>

        <motion.p
          className="mb-8 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Notre équipe est disponible pour répondre à toutes vos questions.
          Contactez notre support si vous rencontrez un problème ou avez besoin
          d’assistance.
        </motion.p>
 
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typewrite
            examples={[
              "Comment modifier mon rendez-vous médical ?",
              "Puis-je consulter mes résultats en ligne ?",
              "Comment contacter un spécialiste ?",
              "Quels sont les horaires d’ouverture ?",
            ]}
          />
        </motion.div>
 
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="/contact"
            className="inline-block rounded-full border border-white px-8 py-3 text-base font-medium text-white transition-all hover:bg-[#1372B2] hover:text-white hover:shadow-lg"
          >
            Contacter le support
          </a>
        </motion.div>
      </div> 
      <motion.div
        className="absolute bottom-0 left-1/2 h-40 w-[120%] -translate-x-1/2 bg-[#8BBB44] opacity-10 blur-3xl"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  );
};
 
const Typewrite: React.FC<TypewriteProps> = ({ examples }) => {
  const [exampleIndex, setExampleIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((prev) => (prev + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, [examples.length]);

  return (
    <p className="text-sm uppercase font-light tracking-wider">
      <span className="inline-block size-2 bg-white" />
      <span className="ml-3">
        EXEMPLE :{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            key={`${exampleIndex}-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: i * LETTER_DELAY,
              duration: 0.01,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </span>
    </p>
  );
};
