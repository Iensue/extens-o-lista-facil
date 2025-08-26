// Arquivo: src/components/Section.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Section = ({ title, subtitle, id, imageUrl, children }) => {
  return (
    <motion.div
      className="content"
      variants={contentVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }} // Ajustado para disparar mais cedo
    >
      {imageUrl && (
        <img src={imageUrl} alt={`Imagem do projeto ${title}`} className="section-image" />
      )}
      
      <h2 className="subtitle">{subtitle}</h2>
      <h1 className="title">{title}</h1>
      
      {/* O conteúdo filho agora faz parte da animação */}
      {children}
    </motion.div>
  );
};

export default Section;
