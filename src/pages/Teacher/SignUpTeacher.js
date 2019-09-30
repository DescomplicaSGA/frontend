import React, { Component } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import './styles.css';
import axios from '../../services/api';

export default class SignUpTeacher extends Component {

  current_date = new Date();
  year = this.current_date.getFullYear();
  month = (this.current_date.getMonth() + 1)
  .toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  date = this.current_date.getDate();

  state = {
    id: '',
    name: '',
    day_week: 'segunda',
    init_hour: '00:00',
    final_hour: '00:00'
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

    let avaiability = [];

    avaiability.push({
      day_week: this.state.day_week,
      init_hour: this.state.init_hour,
      final_hour: this.state.final_hour,
    });

    console.log(this.state);

    let response =  await axios.post('/teacher', {
      id: this.state.id,
      name: this.state.name,
      avaiability
    });


    setTimeout(this.createNotification(response.data.type, response.data.msg), 500);

    this.props.history.push('/professores');  

  }

  render() {
    return (
      <div className="background">
        <div className="body-signUp">
          <p>Cadastrar novo professor</p>
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
            <div className="schedules">
              <div className="column">
                <label htmlFor="">Dia da semana</label>
                <select 
                  value={this.state.day_week} 
                  onChange={result => {
                      this.setState({...this.state, day_week: result.target.value})
                  }} 
                  id="select_day_week">
                  <option value='segunda'>Segunda-feira</option>
                  <option value='terça'>Terça-feira</option>
                  <option value='quarta'>Quarta-feira</option>
                  <option value='quinta'>Quinta-feira</option>
                  <option value='sexta'>Sexta-feira</option>
                  <option value='sabado'>Sabado</option>
                  <option value='domingo'>Domingo</option>
                </select>
              </div>
              <div className="column">
                <label htmlFor="">Horario início</label>
                <input 
                  type="time" 
                  min="00:00" 
                  max="24:00"
                  value={this.state.init_hour}
                  onChange={event => this.setState({...this.state, init_hour: String(event.target.value)})}
                />
              </div>
              <div className="column">
                <label htmlFor="">Horario final</label>
                <input 
                  type="time"
                  name="final_hour"
                  min="00:00"
                  max="24:00"
                  value={this.state.final_hour}
                  onChange={event => this.setState({...this.state, final_hour: String(event.target.value)})}
                />
              </div>
            </div>
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
