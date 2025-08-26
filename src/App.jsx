// Arquivo: src/App.jsx

import React, { useState } from 'react';
import Section from './components/Section';
import TeamSection from './components/TeamSection';

import logoCompleta from './assets/unifil.png';
import logoPrincipal from './assets/lista-facil.png';
import screenshotLista from './assets/screenshot-lista.jpg';
import screenshotMapa from './assets/screenshot-mapa.png';
import screenshotFacil from './assets/screenshot-facil.jpeg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="app-container">
      <header className="site-header">
        <div className="header-logo">
          <img src={logoCompleta} alt="Logo da UniFil" />
        </div>
        <button 
          className={`menu-button ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          <span className="hamburger-line"></span>
        </button>
      </header>

      <div className="section-container bg-green-light">
        <Section id="home" subtitle="Bem-vindo ao" title="Lista Fácil" imageUrl={logoPrincipal} />
      </div>

      <div className="section-container bg-green-darker">
        <Section id="problema" subtitle="O Desafio" title="O problema que buscamos resolver">
          <p className="prose-text">
            O projeto "Lista Fácil" busca resolver a desorganização e a perda de tempo que as pessoas enfrentam ao fazer compras de supermercado. O problema não é apenas a falta de uma lista, mas sim a ineficiência do processo: listas de papel se perdem, esquecemos de comprar itens essenciais e não sabemos onde encontrar os melhores preços. Nosso aplicativo foi pensado para trazer ordem e praticidade a essa rotina, otimizando o processo de compra do início ao fim.
          </p>
        </Section>
      </div>

      <div className="section-container bg-green-light">
        <Section id="feature-lista" subtitle="Organização Inteligente" title="Sua lista na palma da mão" imageUrl={screenshotLista} />
      </div>

      <div className="section-container bg-green-darker">
        <Section id="feature-mapa" subtitle="Economia de Tempo e Dinheiro" title="Mercados perto de você" imageUrl={screenshotMapa} />
      </div>

      <div className="section-container bg-green-light">
        <Section id="feature-facil" subtitle="Intuitivo e Rápido" title="Fácil de usar" imageUrl={screenshotFacil} />
      </div>
      
      <div className="section-container bg-green-darker">
        <Section id="solucao" subtitle="Nossa Proposta" title="Solução Sugerida">
          <div className="features-container">
            <h3>O aplicativo possibilita que o usuário:</h3>
            <ul className="features-list">
              <li className="feature-item">Elabore listas de compras de maneira rápida e intuitiva;</li>
              <li className="feature-item">Identifique ofertas dos itens da lista em variados locais comerciais;</li>
              <li className="feature-item">Receba alertas sobre promoções próximas;</li>
              <li className="feature-item">Armazene listas anteriores para usar em futuras compras;</li>
              <li className="feature-item">Divida listas com amigos ou parentes.</li>
            </ul>
          </div>
        </Section>
      </div>

      <div className="section-container bg-green-light">
        <Section id="diferenciais" subtitle="Nossos Pontos Fortes" title="Diferenciais">
          <div className="features-container">
            <ul className="features-list">
              <li className="feature-item">Prioridade para a usabilidade simples;</li>
              <li className="feature-item">Integração com promoções em tempo real;</li>
              <li className="feature-item">Função de histórico e reaproveitamento de listas;</li>
              <li className="feature-item">Possibilidade de economia inteligente, sugerindo alternativas mais baratas.</li>
            </ul>
          </div>
        </Section>
      </div>

      <TeamSection />
      
      <div className="section-container bg-green-darker">
        <Section id="extensao" subtitle="Formação Acadêmica" title="Reflexão sobre a extensão curricular">
          <p className="prose-text">
            A extensão curricular é uma oportunidade de colocar em prática o que aprendemos na sala de aula, transformando o conhecimento em algo útil para a sociedade. Para mim, ela representa justamente isso: usar a tecnologia como ferramenta para facilitar a vida das pessoas.
O projeto List Easy nasceu com esse objetivo. Assim como outras ferramentas que usamos no dia a dia, ele busca simplificar tarefas que podem parecer pequenas, mas que consomem tempo e dinheiro. Desenvolver o aplicativo me permitiu aplicar conteúdos da minha formação, como lógica, análise e organização de dados, mas também me fez enxergar a importância de criar soluções acessíveis e práticas.
Na minha visão, o valor da extensão está exatamente nesse ponto: aproximar teoria e prática de uma forma que tenha impacto real. Com o List Easy, percebi que não se trata apenas de programar ou criar funcionalidades, mas de pensar em como a tecnologia pode melhorar a rotina das pessoas, trazendo mais praticidade e economia.

          </p>
        </Section>
      </div>
      
      <div className="section-container bg-green-light">
        <Section id="comunidade" subtitle="Impacto Social" title="A Comunidade e o Público-Alvo">
          <p className="prose-text">
            O público-alvo do Lista Fácil são famílias, estudantes e qualquer pessoa que busque otimizar suas compras de mercado. Nosso projeto contribui para a comunidade ao oferecer uma ferramenta gratuita que reduz o desperdício, economiza tempo e dinheiro, e simplifica uma tarefa diária, tornando a vida das pessoas mais organizada e eficiente.
          </p>
        </Section>
      </div>

    </main>
  );
}

export default App;