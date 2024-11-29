import React from 'react';
import '../index.css'
// import avatar from '../assets/avatar.jpg';  // Imagem da foto ou avatar

function Home() {
  return (
    <div className="home">
      <h1>Olá, sou Sadrak</h1>
      { <img src={"sadrak.jpg"} alt="sadrak" /> }
      <p>Sou um desenvolvedor web focado em React e outras tecnologias modernas. Minhas principais habilidades incluem: html, css e JavaScript.</p>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>Git & GitHub</li>
      </ul>
    </div>
  );
}

export default Home;
