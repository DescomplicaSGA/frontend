import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'

import './styles.css';

import axios from '../../services/api';

export default class App extends Component {

  state = {
    teacher: '',
    student: '',
    date: '',
    init_hour: '',
    final_hour: ''
  }

  teachers = [];
  students = [];

  async componentDidMount(){

    let response_teachers = await axios.get('/teacher');

    response_teachers.data.map(teacher => {
      this.teachers.push({key: teacher._id, value: teacher.name });
    });

    let response_students = await axios.get('/student');

    response_students.data.map(student => {
      this.students.push({key: student._id, value: student.name });
    });

  }

  render() {
    return (
      <div className="background">
        <div className="box">
          <p>Cadastrar nova aula</p>
          <div className="fields">
            <p className="label_search">Professor</p>
            <ReactSearchBox
              id="teacher"
              placeholder="Procure pelo professor"
              data={this.teachers}
              onSelect={(data,record) => console.log(data,record)}
            />
            <br/>
            <p className="label_search">Aluno</p>
            <ReactSearchBox
              id="student"
              placeholder="Procure pelo aluno"
              data={this.students}
              onSelect={result => console.log(result)}
            />
            <div className="schedules">
              <div className="column">
                <label className="label_column">Dia da semana</label>
                <input 
                  type="date"
                  value={this.state.day_week}
                  onChange={event => this.setState({...this.state, day_week: String(event.target.value)})}
                />
              </div>
              <div className="column">
                <label className="label_column">Horario início</label>
                <input 
                  type="time" 
                  min="00:00" 
                  max="24:00"
                  value={this.state.init_hour}
                  onChange={event => this.setState({...this.state, init_hour: String(event.target.value)})}
                />
              </div>
              <div className="column">
                <label className="label_column">Horario final</label>
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
            <div className="footer_button">
              <button>Cadastrar</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}