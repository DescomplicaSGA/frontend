import React, { Component } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import './styles.css';
import axios from '../../services/api';

export default class SignUpStudent extends Component {

  state = {
    id: '',
    name: ''
  }

  createNotification = (type, message) => {
  
    if (type === 'success'){
      NotificationManager.success( message, 'Sucesso');
    }
    else if (type === 'error'){
      NotificationManager.error(message, 'Erro');
    }

  };

  handleForm = async event => { 
    event.preventDefault();

    let response =  await axios.post('/student', {
      id: this.state.id,
      name: this.state.name
    });


    setTimeout(this.createNotification(response.data.type, response.data.msg), 500);

    this.props.history.push('/alunos');  

  }

  render() {
    return (
      <div className="background">
        <div className="body-signUp">
          <p>Cadastrar novo aluno</p>
          <div className="inputs">
            <label htmlFor="id">Identificador</label>
            <input 
              type="text" 
              name="id" 
              value={this.state.id}
              onChange={event => this.setState({...this.state, id: event.target.value})} 
              required
            />
            <label htmlFor="name">Nome</label>
            <input 
              type="text" 
              name="name"
              value={this.state.name}
              onChange={event => this.setState({...this.state, name: event.target.value})}
              required
            />
          </div>
          <div className="footer">
            <button type="button" onClick={this.handleForm}>Cadastrar</button>
          </div>
        </div> 
        <NotificationContainer/>    
      </div>
    );
  }
}
