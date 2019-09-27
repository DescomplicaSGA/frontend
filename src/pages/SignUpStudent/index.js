import React, { Component } from 'react';

import './styles.css';

export default class SignUpStudent extends Component {
  render() {
    return (
      <div className="background">
        <div className="body-signUp">
          <p>Cadastrar novo aluno</p>
          <div className="inputs">
            <label htmlFor="id">Identificador</label>
            <input type="text" name="id" />
            <label htmlFor="name">Nome</label>
            <input type="text" name="name"/>
          </div>
          <div className="footer">
            <button>Cadastrar</button>
          </div>
        </div>     
      </div>
    );
  }
}
