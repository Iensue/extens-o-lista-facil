// Arquivo: src/components/TeamSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import TeamMember from './TeamMember';

// Importe as fotos dos integrantes aqui dentro
import member1Photo from '../assets/gustavo.jpg'; 
import member2Photo from '../assets/carlos.jpg';
import member3Photo from '../assets/geovane.png';
import member4Photo from '../assets/vitor.png';
import member5Photo from '../assets/host.png';

// Importe o CSS específico para esta seção
import './TeamSection.css';

const TeamSection = () => {
  return (
    <div className="section-container bg-green-darker">
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="subtitle">Conheça a Equipe</h2>
        <h1 className="title">Quem Somos</h1>
        
        <div className="members-list">
          <TeamMember
            name="Gustavo Iensue"
            course="Engenharia de Software / Ads / Eq"
            photoUrl={member1Photo}
            githubUrl="https://github.com/Iensue/extens-o-lista-facil.git"
          />
          <TeamMember
            name="Carlos"
            course="Engenharia de Software"
            photoUrl={member2Photo}
            githubUrl="https://github.com/carlosviniciusflandgraf-crypto"
          />
          <TeamMember
            name="Geovane"
            course="Engenharia de Software"
            photoUrl={member3Photo}
            githubUrl="https://github.com/gegeboladao"
          />
          <TeamMember
            name="Vitor"
            course="Engenharia de Software"
            photoUrl={member4Photo}
            githubUrl="https://github.com/perfil-4"
          />
          <TeamMember
            name="Jean Guilherme"
            course="Engenharia de Software"
            photoUrl={member5Photo}
            githubUrl="https://github.com/jeanguilherme25"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default TeamSection;