import React from 'react';

import './styles.css';

const Navbar = () => {

  return (
    <div className="navbar">
        <a href="/">
          <p className="logo">DescomplicaSGA</p>
        </a>
        <div className="links">
          <a href="/">
            <p>Aulas</p>
          </a>
          <a href="/alunos">
            <p>Alunos</p>
          </a>
          <a href="/professores">
            <p>Professores</p>
          </a>
        </div>
    </div>
  );

}

export default Navbar;
