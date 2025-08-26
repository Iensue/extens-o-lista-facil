// Arquivo: src/components/TeamMember.jsx

import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, course, photoUrl, githubUrl }) => {
  return (
    <div className="team-member">
      <img src={photoUrl} alt={`Foto de ${name}`} className="member-photo" />
      <h3>{name}</h3>
      <p className="member-course">{course}</p>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
        GitHub
      </a>
    </div>
  );
};

export default TeamMember;
